import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "name is required!"),
  email: z
    .string()
    .min(1, "email is required!")
    .email()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Sorry, invalid format here!"),
  message: z.string().min(1, "message is required!"),
});

export type ContactZodForm = z.infer<typeof contactSchema>;
