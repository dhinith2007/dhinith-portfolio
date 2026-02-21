"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_7gejmit",      // replace
        "template_gia8q3c",     // replace
        form,
        "Wt9gX5hKNAB4EGUiQ"       // replace
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Contact Me
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-green-400 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-green-400 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-green-400 outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg border border-white hover:border-green-400 hover:text-green-400 transition duration-300"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}