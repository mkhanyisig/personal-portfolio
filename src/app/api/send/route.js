import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    console.log('formData:', formData);

    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    console.log('message:', message);

    const response = await resend.emails.send({
      to: [email, myEmail], // remove my email address before deploying, testing purposes only
      from: fromEmail,
      subject: subject,
      html: '<div><h1>"hello"</h1><p>Thank you for contacting me!</p> <p>I will get back to you as soon as possible.</p> <p>"testing"</p> </div>',
    });

    console.log('response:', JSON.stringify(response, null, 2));

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
