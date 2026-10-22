import { site } from "@/content/site";

export type Inquiry = {
  name: string;
  email: string;
  topic: string;
  destination: string;
  guests: string;
  startDate: string;
  endDate: string;
  message: string;
};

export function validateInquiry(inquiry: Inquiry) {
  const errors: Partial<Record<keyof Inquiry, string>> = {};
  if (inquiry.name.trim().length < 2 || inquiry.name.length > 100)
    errors.name = "Enter your name (2–100 characters).";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) ||
    inquiry.email.length > 254
  )
    errors.email = "Enter a valid email address.";
  if (inquiry.topic.trim().length < 3 || inquiry.topic.length > 120)
    errors.topic = "Add a subject (3–120 characters).";
  if (inquiry.message.trim().length < 10 || inquiry.message.length > 1200)
    errors.message = "Tell us a little more (10–1,200 characters).";
  if (
    inquiry.guests &&
    (!Number.isInteger(Number(inquiry.guests)) ||
      Number(inquiry.guests) < 1 ||
      Number(inquiry.guests) > 99)
  )
    errors.guests = "Enter a whole number from 1 to 99.";
  if (inquiry.endDate && !inquiry.startDate)
    errors.startDate = "Add a start date for your travel window.";
  if (
    inquiry.startDate &&
    inquiry.endDate &&
    inquiry.endDate <= inquiry.startDate
  )
    errors.endDate = "Choose an end date after your start date.";
  return errors;
}

export function prepareInquiryEmail(inquiry: Inquiry) {
  const body = [
    `Hello Palau Sport team,`,
    "",
    inquiry.message.trim(),
    "",
    `Name: ${inquiry.name.trim()}`,
    `Email: ${inquiry.email.trim()}`,
    `Destination: ${inquiry.destination || "Open to suggestions"}`,
    ...(inquiry.guests ? [`Guests: ${inquiry.guests}`] : []),
    ...(inquiry.startDate
      ? [
          `Preferred dates: ${inquiry.startDate}${inquiry.endDate ? ` to ${inquiry.endDate}` : ""}`,
        ]
      : []),
    "",
    "This is an inquiry. Please confirm trip details and availability.",
  ].join("\n");
  return {
    body,
    href: `mailto:${site.email}?subject=${encodeURIComponent(inquiry.topic.trim())}&body=${encodeURIComponent(body)}`,
  };
}
