import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
      setEmailSubmitted(true);
    } else {
      console.error("Failed to send email", res);
    }
  };

  return (
    <div>
      {emailSubmitted ? (
        <p className="text-[#c95bf5] text-xl center mt-2">
          Email sent successfully!
        </p>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Required hidden fields */}
          <input
            type="hidden"
            name="access_key"
            value="6dae0ba1-2784-4239-9840-14beb56f4acd"
          />
          <input type="hidden" name="from_name" value="Portfolio Contact" />
          <input type="hidden" name="subject" value="New Contact Message" />
          <input type="hidden" name="replyto" value="email" />
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            className="hidden"
          />

          {/* Add name field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#c95bf5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jacob Smith"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#c95bf5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>

          {/* Remove this subject input or rename it to something else to avoid conflicts */}
          {/* Or keep this if you want users to override subject */}

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#c95bf5] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#c95bf5] hover:bg-[#8a6498] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailSection;
