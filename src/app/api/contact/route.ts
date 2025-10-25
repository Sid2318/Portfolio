import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a type for the contact form data
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// Configure Nodemailer transporter using environment variables
const createTransporter = () => {
  // Settings for Gmail
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Helps with some Gmail connection issues
    },
  });
};

export async function POST(request: Request) {
  try {
    // Parse the request body as JSON
    const data: ContactFormData = await request.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if email credentials are available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        {
          error:
            "Server configuration error. Please try again later or contact directly via email.",
        },
        { status: 500 }
      );
    }

    // Get recipient email (defaults to sender email if not specified)
    const toEmail = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER;

    try {
      // Create transporter
      const transporter = createTransporter();

      // Set up email data
      const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Portfolio Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="white-space: pre-wrap;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="color: #777; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            <p>This email was sent from your portfolio website contact form.</p>
          </div>
        </div>
      `,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);

      // Return success
      return NextResponse.json(
        {
          success: true,
          messageId: info.messageId,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
