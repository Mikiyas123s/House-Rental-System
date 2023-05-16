import React from 'react';

const Contact = () => {
  return (
    <div className="container border mt-8 mx-auto w-1/2 p-4">
      <h1 className="mt-4">Contact Form</h1>
      <form className="mt-4">
        <label className="block mb-1 bg-emerald-700 ">Name</label>
        <input type="text" name="name" className="form-input mb-4" />

        <label className="block mb-1 bg-emerald-700">Email</label>
        <input type="email" name="user_email" className="form-input mb-4" />

        <label className="block mb-1 bg-emerald-700">Message</label>
        <textarea name="message" rows="4" className="form-textarea mb-4" />

        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        />
      </form>
    </div>
  );
};

export default Contact;