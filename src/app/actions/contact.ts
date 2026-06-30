'use server';

import { Resend } from 'resend';

// Define the response state shape
export type FormState = {
  success: boolean;
  error?: string;
};

// Input validation helper
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function submitContactForm(data: {
  name: string;
  email: string;
  scope: string;
  message: string;
}): Promise<FormState> {
  const { name, email, scope, message } = data;

  // 2.2 Validate incoming fields server-side
  if (!name || name.trim().length === 0) {
    return { success: false, error: 'Identity (Name) is required.' };
  }
  if (!email || !validateEmail(email)) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!message || message.trim().length === 0) {
    return { success: false, error: 'Scope Details (Message) is required.' };
  }

  // Retrieve environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const fromEmail = process.env.CONTACT_SENDER_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Server Configuration Error: Missing Resend environment variables.', {
      hasApiKey: !!apiKey,
      hasToEmail: !!toEmail,
      hasFromEmail: !!fromEmail,
    });
    return {
      success: false,
      error: 'The server is not properly configured to send emails. Please contact the administrator.',
    };
  }

  try {
    const resend = new Resend(apiKey);

    const emailSubject = `Mandelbrot Inbound: Inquiry from ${name}`;
    const scopeLabel = {
      llm: 'Custom LLM',
      agents: 'AI Agents',
      web: 'Web Apps',
      other: 'Other',
    }[scope] || scope;

    // 2.3 HTML email design matching the dark cybernetic aesthetic
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              color: #c0c0c0;
              background-color: #000000;
              margin: 0;
              padding: 24px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #050505;
              border: 1px solid #1c1c1c;
              border-radius: 16px;
              padding: 32px;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
            }
            .header {
              border-bottom: 1px solid #1c1c1c;
              padding-bottom: 20px;
              margin-bottom: 24px;
            }
            .header h1 {
              font-size: 18px;
              font-weight: 500;
              color: #ffffff;
              margin: 0;
              text-transform: uppercase;
              letter-spacing: 0.15em;
            }
            .label {
              font-size: 10px;
              text-transform: uppercase;
              color: #666666;
              letter-spacing: 0.08em;
              margin-bottom: 6px;
              font-family: monospace;
            }
            .value {
              font-size: 14px;
              color: #ffffff;
              margin-bottom: 24px;
              background-color: #0b0b0b;
              padding: 14px 18px;
              border-radius: 10px;
              border: 1px solid #1c1c1c;
            }
            .value-message {
              white-space: pre-wrap;
              font-size: 14px;
              line-height: 1.6;
              color: #e5e5e5;
            }
            .footer {
              margin-top: 32px;
              border-top: 1px solid #1c1c1c;
              padding-top: 20px;
              font-size: 10px;
              color: #444444;
              text-align: center;
              font-family: monospace;
              letter-spacing: 0.05em;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>[Inbound Transmission]</h1>
            </div>
            
            <div class="label">Identity</div>
            <div class="value">${name}</div>
            
            <div class="label">Email Address</div>
            <div class="value">${email}</div>
            
            <div class="label">Module Interest</div>
            <div class="value">${scopeLabel}</div>
            
            <div class="label">Scope Details</div>
            <div class="value value-message">${message}</div>
            
            <div class="footer">
              Mandelbrot AI Transmission Node • Secure Internal Routing
            </div>
          </div>
        </body>
      </html>
    `;

    // 2.3 Plain text fallback
    const emailText = `
Mandelbrot Inbound Transmission
==============================
Identity: ${name}
Email: ${email}
Module Interest: ${scopeLabel}

Scope Details:
${message}
------------------------------
Secure Internal Routing.
    `.trim();

    // Send email using Resend SDK
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    if (response.error) {
      console.error('Resend API Error details:', response.error);
      return {
        success: false,
        error: `Email transmission failed: ${response.error.message}`,
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Unhandled email submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred during transmission.',
    };
  }
}
