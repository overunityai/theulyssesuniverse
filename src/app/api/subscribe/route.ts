import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // If MailerLite is configured, subscribe via API
    if (MAILERLITE_API_KEY) {
      const body: Record<string, unknown> = {
        email,
        fields: {
          source: "website",
        },
      };

      if (MAILERLITE_GROUP_ID) {
        body.groups = [MAILERLITE_GROUP_ID];
      }

      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        // MailerLite returns 422 for already subscribed - treat as success
        if (response.status === 422) {
          return NextResponse.json({
            success: true,
            message: "You're already on the list. We'll be in touch.",
          });
        }

        console.error("MailerLite error:", response.status, errorData);
        return NextResponse.json(
          { error: "Something went wrong. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Welcome aboard. Check your inbox.",
      });
    }

    // Fallback: MailerLite not configured yet
    // Log the attempt so we know the form is working
    console.log(`[subscribe] Email captured (MailerLite not configured): ${email}`);

    return NextResponse.json({
      success: true,
      message: "Welcome aboard. We'll be in touch when we launch.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
