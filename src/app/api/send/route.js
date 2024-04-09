import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const formData = await req.formData();

    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const response = await resend.emails.send({
      to: ["fabolax@gmail.com", email],
      from: fromEmail,
      subject: subject,
      React: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>I will get back to you as soon as possible.</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
