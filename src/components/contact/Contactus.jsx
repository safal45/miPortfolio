import React, { useState } from "react";

function Contactus() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "This feature is not set up yet. You can email me at ptksafalpathak@gmail.com."
    );
  };

  return (
    <section id="contactus" className="pt-16 bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" bg border border-gray-300 text-gray-900 text-sm shadow-lg shadow-purple-800 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 placeholder-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-black bg-gray-300 rounded-lg border border-gray-300 shadow-lg shadow-purple-800 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 placeholder-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              // required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-gray-400 rounded-lg border border-gray-300 shadow-lg shadow-purple-800 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-400 dark:border-gray-600 placeholder-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
              // required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm border-2 shadow-lg shadow-purple-800 hover:shadow-white border-white font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactus;
