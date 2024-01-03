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
    <section className="contact bg-black-lighter flex flex-col gap-y-12 px-6">
      <div className="flex flex-col py-16 md:px-28 lg:grid lg:grid-cols-2 lg:gap-20 lg:px-16 xl:gap-40 xl:px-36">
        <div className="flex flex-col gap-5">
          <h3 className="text-white-lighter text-center text-fs-40 font-bold leading-lh-40 -tracking-ls-1.136 md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 lg:text-start">
            Contact
          </h3>
          <p className="text-white-darker text-center text-fs-16 font-medium leading-lh-26 md:text-fs-18 md:leading-lh-28 lg:text-start">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col">
            <input
              className="text-white-lighter mt-2 border-b-[1px] border-b-med-white p-6 placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={contactForm.name}
              onChange={handleChange}
            />
            {/* i update this isError with .name in if declaration */}
            {isError.name && (
              <p className="text-end text-fs-14 font-medium text-red">
                {isError.name}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="text-white-lighter mt-2 border-b-[1px] border-b-med-white p-6 placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={contactForm.email}
              onChange={handleChange}
            />
            {isError.email && (
              <p className="text-end text-fs-14 font-medium text-red">
                {isError.email}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="text-white-lighter mb-6 mt-2 border-b-[1px] border-b-med-white px-6 pb-16 pt-6 placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="text"
              name="message"
              id="message"
              placeholder="message"
              value={contactForm.message}
              onChange={handleChange}
            />
            {isError.message && (
              <p className="text-end text-fs-14 font-medium text-red">
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
