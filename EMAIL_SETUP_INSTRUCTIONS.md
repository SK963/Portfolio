# EmailJS Setup Instructions

To complete the setup of the contact form with EmailJS, follow these steps:

## 1. Create an EmailJS Account

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Verify your account through the confirmation email

## 2. Create an Email Service

1. Go to the "Email Services" tab in your EmailJS dashboard
2. Click "Add New Service"
3. Choose an email service provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Give your service a name and save it
6. Note down the **Service ID**

## 3. Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Sender's message
4. Save the template
5. Note down the **Template ID**

## 4. Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## 5. Update the Contact Component

Open `src/components/sections/Contact.tsx` and replace the placeholder values with your actual EmailJS credentials:

```tsx
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY' // Replace with your public key
);
```

## 6. Test the Form

After completing the setup, test the contact form to ensure emails are being sent correctly.

**Note**: The free tier of EmailJS allows 200 emails per month, which should be sufficient for a portfolio website.
