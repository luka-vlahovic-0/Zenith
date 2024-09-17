"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastSuccess = () => {
  toast.success(
    "Your message has been sent successfully. We will contact you shortly! 🚀",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};

export default function GetStarted() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setLoading(true);
      setTimeout(() => {
        toastSuccess();
        setLoading(false);
      }, 2500);
    } else {
      e.target.reportValidity();
    }
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start ml-4 md:ml-28">
        <p className="text-[#c293ff] text-base sm:text-lg md:text-xl mb-2">
          To be a solo node operator
        </p>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-3">
          How to get involved?
        </h1>
        <p className="text-[#e0caff] text-sm sm:text-base md:text-lg mb-6 max-w-full sm:max-w-md md:max-w-xl">
          Fill out our form below and begin your journey. If accepted, you will
          be emailed onboarding instructions.
        </p>
      </div>

      <section
        id="Contact"
        className="relative flex flex-col items-center justify-center py-8"
      >
        <div className="bg-black-100 p-6 sm:p-8 rounded-2xl max-w-full w-full sm:max-w-md lg:max-w-lg">
          <form className="flex flex-col gap-6 sm:gap-8" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 sm:mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="What's your name?"
                className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 sm:mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="What's your email address?"
                className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 sm:mb-4">
                Technical Expertise
              </span>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Write about your technical expertise here..."
                className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className={`text-xl sm:text-2xl w-full h-10 sm:h-12 mt-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl transition duration-500 ease-in-out ${
                loading
                  ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-not-allowed"
                  : "hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </section>
    </>
  );
}
