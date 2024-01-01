import React, { useState } from "react";
import Button from "../Button";
import Divider from "../Divider";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}
interface ValidForm {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactForm = {
  name: "",
  email: "",
  message: "",
};
const notValidState: ValidForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contactForm, setContactForm] = useState<ContactForm>(initialState);
  const [isError, setIsError] = useState<ValidForm>(notValidState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setContactForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const isValid: ValidForm = notValidState;
    if (!contactForm.name.trim()) {
      isValid.name = "name is required!";
    }

    if (!contactForm.email.trim()) {
      isValid.email = "email is required";
    } else if (!regex.test(contactForm.email)) {
      isValid.email = "Sorry, invalid format here!";
    }

    if (!contactForm.message.trim()) {
      isValid.message = "message is required!";
    }
    setIsError(isValid);
    setContactForm(initialState);
  }

  return (
    <section className="contact bg-med-black flex flex-col gap-y-12 px-6">
      <div className="flex flex-col py-16 md:px-28 lg:grid lg:grid-cols-2 lg:gap-20 lg:px-16 xl:gap-40 xl:px-36">
        <div className="flex flex-col gap-5">
          <h3 className="text-pure-white md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold lg:text-start">
            Contact
          </h3>
          <p className="text-med-white md:text-fs-18 md:leading-lh-28 text-fs-16 leading-lh-26 text-center font-medium lg:text-start">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col">
            <input
              className="placeholder:text-fs-16 text-pure-white placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={contactForm.name}
              onChange={handleChange}
            />
            {isError && (
              <p className="text-fs-14 text-red text-end font-medium">
                {isError.name}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="placeholder:text-fs-16 text-pure-white placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={contactForm.email}
              onChange={handleChange}
            />
            {isError && (
              <p className="text-fs-14 text-red text-end font-medium">
                {isError.email}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="placeholder:text-fs-16 text-pure-white placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mb-6 mt-2 border-b-[1px] px-6 pb-16 pt-6 placeholder:font-medium placeholder:uppercase"
              type="text"
              name="message"
              id="message"
              placeholder="message"
              value={contactForm.message}
              onChange={handleChange}
            />
            {isError && (
              <p className="text-fs-14 text-red text-end font-medium">
                {isError.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button text="send message" />
          </div>
        </form>
      </div>
      <div className="lg:px-10 xl:px-24">
        <Divider />
      </div>
    </section>
  );
}
