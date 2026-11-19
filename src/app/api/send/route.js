import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  // Create the client per request, not at import time. Creating it at import
  // made `next build` fail whenever RESEND_API_KEY wasn't set.
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email is not configured on this server.' },
      { status: 503 },
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const formData = await req.formData();
    console.log('formData:', formData);

    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const response = await resend.emails.send({
      to: [email],
      bcc: [myEmail],
      from: fromEmail,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 10px; text-align: center;">
            <h2 style="color: #000c66;">Hi!</h2>
            <p style="font-size: 16px; line-height: 1.5;">
              Thank you for contacting me!
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
              I will try to get back to you as soon as possible.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
              Best,<br>
              <span style="font-weight: bold;">Mkhanyisi</span>
            </p>
          </div>
          <div style="margin-top: 20px; padding: 15px; border-top: 1px solid #ddd;">
            <h3 style="font-style: italic; color: #555;">Your Message:</h3>
            <p style="font-size: 15px; color: #555;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
