import Button from "../Button";
import Divider from "../Divider";

export default function Contact() {
  return (
    <section className="from-med-black contact flex flex-col gap-y-12 bg-gradient-to-b to-black px-6">
      <div className="flex flex-col py-16 md:px-40 lg:grid lg:grid-cols-2 xl:px-40">
        <div className="flex flex-col gap-5">
          <h3 className="text-pure-white md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 text-fs-40 leading-lh-40 -tracking-ls-1.136 text-center font-bold lg:text-start">
            Contact
          </h3>
          <p className="text-med-white md:text-fs-18 md:leading-lh-28 text-fs-16 leading-lh-26 text-center font-medium lg:text-start">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form className="grid grid-cols-1 md:mt-6">
          <input
            className="placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
          <input
            className="placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mt-2 border-b-[1px] p-6 placeholder:font-medium placeholder:uppercase"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="placeholder:text-fs-16 placeholder:leading-lh-26 placeholder:-tracking-ls-0.222 border-b-med-white mb-6 mt-2 border-b-[1px] px-6 pb-16 pt-6 placeholder:font-medium placeholder:uppercase"
            type="text"
            name="message"
            id="message"
            placeholder="message"
          />
          <div className="flex justify-end">
            <Button text="send message" />
          </div>
        </form>
      </div>
      <Divider />
    </section>
  );
}
