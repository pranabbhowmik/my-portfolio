import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ mode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ibub44c", "template_glq6jph", form.current, {
        publicKey: "ObnkQm06WHHN-hv5B",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`flex -mt-40 md:-mt-20 flex-col items-center text-center p-8 min-h-screen ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-5xl font-rubik mb-8">Contact</h1>

      <form
        className="flex flex-col gap-8 w-full max-w-sm sm:max-w-lg lg:max-w-2xl"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Name"
            required
            className={`w-full p-4 rounded-xl border font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className={`w-full p-4 rounded-xl border font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className={`w-full p-4 rounded-xl h-64 border resize-none font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <button
          type="submit"
          className={`px-9 py-3 rounded-xl ${
            mode === "light" ? "bg-blue-500 text-white" : "bg-white text-black"
          } font-semibold shadow-md transition-transform transform hover:scale-105 active:translate-y-1 mx-auto`}
        >
          Submit
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
