const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
  auth: {
    user: 'tundegabriel999@gmail.com', // Your email address
    pass: 'IamFineboyyGabriel54321', // Your email password or app-specific password
  },
  tls: {
    rejectUnauthorized: false,
  }
});

// Define email data
const mailOptions = {
  from: 'tundegabril999@gmail.com',
  to: 'tundegabriel999@gmail.com',
  subject: 'Hello, Node.js Email',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
