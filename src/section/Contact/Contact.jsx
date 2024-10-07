import React, { useRef } from "react";

const Contact = ({ mode }) => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d9e5ca2-f789-40d3-a220-b03110712eeb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Reset the form fields
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error("Submission failed", res);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
        onSubmit={onSubmit}
        ref={formRef}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
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
    </section>
  );
};

export default Contact;
