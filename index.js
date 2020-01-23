const sgMail = require('@sendgrid/mail');
const validator = require("email-validator");
require('dotenv').config();

module.exports.handler = async (event) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = 'YourEmail@example.com';

  if (validator.validate(email)) {
    const msg = {
      to: email,
      from: 'test@example.com',
      subject: 'Письмо от Яндекс.Функций',
      text: 'Всё не просто, а очень просто!',
      html: 'Всё не просто, а <strong>очень</strong> просто!',
    };
    sgMail.send(msg);
  }

  return { 'statusCode': 200 };
};
