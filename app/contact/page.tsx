import { Metadata } from "next";
import ContactList from "@/components/contact/contact-list";

export const metadata: Metadata = {
  title: "Contact — Bruno Junqueira",
  description: "Get in touch with me on GitHub and LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 ">
      <ContactList />
    </div>
  );
}
