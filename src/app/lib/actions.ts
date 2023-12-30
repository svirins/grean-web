"use server";
import { z } from "zod";
import { db } from "@/app/lib/prisma";
import isMobilePhone from "validator/es/lib/isMobilePhone";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.coerce
    .string()
    .refine(isMobilePhone, { message: "Недопустимый номер телефона" }),
  message: z.string(),
});
// TODO: double-check current type-checking
export type State =
  | {
      errors?:
        | {
            name?: string[];
            phone?: string[];
            message?: string[];
          }
        | undefined;
      message?: string | null | undefined;
    }
  | undefined;
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createSubmission(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });
  console.log("validatedFields are: ", validatedFields);

  if (!validatedFields.success) {
    console.log(
      "Error from action: ",
      validatedFields.error.flatten().fieldErrors,
    );
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const {
    name = "Аноним",
    phone,
    message = "Без сообщения",
  } = validatedFields.data;

  try {
    await db.submission.create({
      data: {
        name: name,
        phone: phone,
        message: message,
      },
    });
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
}
