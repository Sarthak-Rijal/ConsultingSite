import React, { useState } from "react";
import {
  Button,
  Form,
  FormField,
  Input,
  SpaceBetween,
  Textarea,
} from "@cloudscape-design/components";
import "./ContactForm.css";

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Using EmailJS or a similar service to send emails from the frontend
      // You'll need to sign up for EmailJS and configure your template
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            user_id: "YOUR_USER_ID", // Replace with your EmailJS user ID
            template_params: {
              to_email: "rijal.sarthark@gmail.com",
              from_name: formData.name,
              from_email: formData.email,
              company: formData.company,
              message: formData.message,
            },
          }),
        },
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button
              variant="primary"
              onClick={() => handleSubmit}
              loading={loading}
              disabled={loading || success}
            >
              {success ? "Message Sent!" : "Send Message"}
            </Button>
          </SpaceBetween>
        }
        header={<h2>Contact Us</h2>}
      >
        <SpaceBetween size="l">
          {error && <div className="error-message">{error}</div>}
          {success && (
            <div className="success-message">
              Thank you for your message! We will get back to you soon as we can
            </div>
          )}
          <FormField label="Name">
            <Input
              value={formData.name}
              onChange={({ detail }) => handleChange("name", detail.value)}
              disabled={loading || success}
              placeholder="Your name"
            />
          </FormField>
          <FormField label="Email">
            <Input
              value={formData.email}
              onChange={({ detail }) => handleChange("email", detail.value)}
              disabled={loading || success}
              placeholder="your.email@example.com"
              type="email"
            />
          </FormField>
          <FormField label="Company (Optional)">
            <Input
              value={formData.company}
              onChange={({ detail }) => handleChange("company", detail.value)}
              disabled={loading || success}
              placeholder="Your company name"
            />
          </FormField>
          <FormField label="Message">
            <Textarea
              value={formData.message}
              onChange={({ detail }) => handleChange("message", detail.value)}
              disabled={loading || success}
              placeholder="Tell us about your project or inquiry..."
              rows={5}
            />
          </FormField>
        </SpaceBetween>
      </Form>
    </div>
  );
}
