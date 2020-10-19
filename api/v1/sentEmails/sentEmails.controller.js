const Emails = require('./sentEmails.model');
const nodemailer = require("nodemailer");


const { validationError, handleError, handle404 } = require('../../../components/errors');

exports.create = newEmail => {
  Emails.create(newEmail, (error, data) => {
    if (error)
      console.log("Some Error Occured");
  });
}

exports.sendEmail = (emails, text, type, Subject, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'muhammadmueen9692@gmail.com',
      pass: 'ASDF/1234',
    },
  });
  const mailOptions = {
    from: 'info@zo-organized.com',
    to: emails,
    subject: Subject,
    text: type == 'Text' ? text : null,
    html: type == 'HTML' ? text : null,
  };
  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      emails.map(item => {
        var email = {
          senderEmail: item,
          emailMessage: text,
          token: token,
        };
        Emails.create(email, (error, data) => {
          if (error)
            console.log("Some Error Occured");
        });
      });
    }
  });
}


exports.GetEmail = (request, response) => {
  const token = request.params.token;
  Emails.findOne({
    token: token,
  }).then((email) => {
    if (email == null) {
      response.status(403).send('email does not found');
    } else {
      response.status(200).send({
        email: email.senderEmail,
      });
    }
  });
}

