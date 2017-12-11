var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lupalo.kv@gmail.com',
    pass: '****'
  }
});

var mailOptions = {
  from: 'lupalo.kv@gmail.com',
  to: 'lupalo.kv@gmail.com',
  subject: 'Sending testing message',
  text: 'Hello!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 