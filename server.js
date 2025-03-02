require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Contact Page Route
app.get('/contact', (req, res) => {
  res.send('Contact Page is Working!');
});

// ✅ Email Sending Endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Configure transporter (Use your email credentials)
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use 'Gmail' or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com', // Replace with recipient's email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

