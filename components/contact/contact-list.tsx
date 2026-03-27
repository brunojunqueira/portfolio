"use client";

import { motion } from "framer-motion";
import ContactCard from "./contact-card";

const contacts = [
  {
    id: 1,
    label: "GitHub",
    handle: "@brunojunqueira",
    href: "https://github.com/brunojunqueira",
    description: "See my open source work",
  },
  {
    id: 2,
    label: "LinkedIn",
    handle: "Bruno Junqueira",
    href: "https://linkedin.com/in/brunosdsj",
    description: "Connect professionally",
  },
];

export default function ContactList() {
  return (
    <div className="max-w-lg w-full">
      <motion.header
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-3">
          Contact
        </p>
        <h1
          className="font-semibold leading-none text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          Find me online
        </h1>
      </motion.header>

      <ul className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
