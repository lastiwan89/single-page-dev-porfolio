import Divider from "../Divider";
import { ContactZodForm, contactSchema } from "../../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactZodForm>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactZodForm) {
    console.log(data);
  }

  return (
    <section className="contact flex flex-col gap-y-12 bg-black-lighter px-6">
      <div className="flex flex-col py-16 md:px-28 lg:grid lg:grid-cols-2 lg:gap-20 lg:px-16 xl:gap-40 xl:px-36">
        <div className="flex flex-col gap-5">
          <h3 className="text-center text-fs-40 font-bold leading-lh-40 -tracking-ls-1.136 text-white-lighter md:text-fs-72 md:leading-lh-72 md:-tracking-ls-2.045 lg:text-start">
            Contact
          </h3>
          <p className="text-center text-fs-16 font-medium leading-lh-26 text-white-darker md:text-fs-18 md:leading-lh-28 lg:text-start">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <input
              {...register("name")}
              className="border-b-med-white mt-2 border-b-[1px] p-6 text-white-lighter placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="text"
              name="name"
              id="name"
              placeholder="name"
            />
            {/* i update this isError with .name in if declaration */}
            {errors.name && (
              <p className="text-end text-fs-14 font-medium text-red">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("email")}
              className="border-b-med-white mt-2 border-b-[1px] p-6 text-white-lighter placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            {errors.email && (
              <p className="text-end text-fs-14 font-medium text-red">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("message")}
              className="border-b-med-white mb-6 mt-2 border-b-[1px] px-6 pb-16 pt-6 text-white-lighter placeholder:text-fs-16 placeholder:font-medium placeholder:uppercase placeholder:leading-lh-26 placeholder:-tracking-ls-0.222"
              type="text"
              name="message"
              id="message"
              placeholder="message"
            />
            {errors.message && (
              <p className="text-end text-fs-14 font-medium text-red">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              disabled={isSubmitting}
              className="tracking-ls2.286 border-b-4 border-green pb-2 text-center font-bold uppercase text-white-lighter hover:text-green"
            >
              send message
            </button>
          </div>
        </form>
      </div>
      <div className="lg:px-10 xl:px-24">
        <Divider />
      </div>
    </section>
  );
}
