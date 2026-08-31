import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, instagram } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.NOTIFICATION_EMAIL || "nerina@tailwindigital.com";

    const { data, error } = await resend.emails.send({
      from: "Tailwind Digital Leads <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New Lead Submission: ${name} (${instagram || email})`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #b7c6d1; border-radius: 16px; background-color: #fbf7f4;">
          <div style="margin-bottom: 20px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.25em; color: #455a64;">TAILWIND DIGITAL</span>
            <h2 style="font-size: 24px; font-weight: 600; color: #1f2a33; margin-top: 6px; margin-bottom: 0;">New Inquiry Received</h2>
          </div>
          
          <p style="font-size: 15px; color: #455a64; line-height: 1.5; margin-bottom: 24px;">
            You have received a new contact form submission from your website:
          </p>

          <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e6eb;">
            <tbody>
              <tr>
                <td style="padding: 14px 18px; border-bottom: 1px solid #e0e6eb; font-weight: 600; color: #1f2a33; width: 30%;">Name</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #e0e6eb; color: #455a64;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; border-bottom: 1px solid #e0e6eb; font-weight: 600; color: #1f2a33;">Email</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #e0e6eb; color: #455a64;">
                  <a href="mailto:${email}" style="color: #455a64; text-decoration: underline;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; font-weight: 600; color: #1f2a33;">Instagram</td>
                <td style="padding: 14px 18px; color: #455a64;">${instagram || "Not provided"}</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 28px; pt: 16px; border-top: 1px solid #b7c6d1; text-align: center;">
            <p style="font-size: 12px; color: #a89c93; margin: 0;">
              Sent automatically from tailwindigital.com to ${recipientEmail}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Email Delivery Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Contact API Endpoint Error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
