var nodemailer = require('nodemailer');
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MY_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('error sending email:', error.message);
      console.log('message sending error:', error);
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
