'use strict'
//console.log('Heelo jintae');

const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eef91266391a9d",
    pass: "7110dabfaa1dcb"
  }   
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "vuenos@gmail.com",
  to: "vuenos@gmail.com",
  subject: "Test nodemailer",
  text: "와 이게 되네"
}

send(email_data);