import Button from "../Button";

export default function Contact() {
  return (
    <section className="bg-med-black flex flex-col gap-y-12 py-16">
      <div className=" flex flex-col gap-5">
        <h3 className="text-pure-white text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold">
          Contact
        </h3>
        <p className="text-med-white text-fs-16 leading-lh-26 text-center font-medium">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form className="grid grid-cols-1 px-6">
        <input
          className="bg-med-black placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="bg-med-black placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="bg-med-black placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mb-6 mt-2 border-b-[1px] px-6 pb-16 pt-6 placeholder:font-medium placeholder:uppercase"
          type="text"
          name="message"
          id="message"
          placeholder="message"
        />
        <div className="flex justify-end">
          <Button text="send message" />
        </div>
      </form>
    </section>
  );
}
