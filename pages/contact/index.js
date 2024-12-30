import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

// emailjs
import emailjs from "emailjs-com";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import Head from "next/head";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Used to show status (success/error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Data being sent:", formData); // Check the form data before sending

    emailjs
      .send(
        "service_na8z27b", // Your EmailJS service ID
        "template_5yta38w", // Your email template ID
        {
          name: formData.name, // Sending the name value
          email: formData.email, // Sending the email value
          message: formData.message, // Sending the message value
        },
        "GNUaNYxoab7GnEl93" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text); // Log success
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email", error); // Log the entire error object for better debugging
          setStatus(`Something went wrong: ${error.text}`); // Show specific error message
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Know about us" />
      </Head>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full h-full mt-7 max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Schedule <span className="text-accent">Meet</span>
          </motion.h2>

          {/* Status Message */}
          {status && (
            <div
              className={`text-center mb-4 ${
                status.includes("error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {status}
            </div>
          )}

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={sendEmail}
          >
            {/* Name input */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="input"
                required
              />
            </div>

            {/* Email input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
              required
            />

            {/* Message textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="textarea"
              required
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Message Us
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
