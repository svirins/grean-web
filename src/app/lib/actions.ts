"use server";
import { z } from "zod";
import { db } from "@/app/lib/prisma";
import isMobilePhone from "validator/es/lib/isMobilePhone";

const FormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(32, { message: "Максимум 32 символа" }),
  email: z.string().email({ message: "Недопустимый email " }),
  phone: z
    .string()
    .refine(isMobilePhone, { message: "Недопустимый номер телефона" }),
  message: z.string().max(1024, { message: "Максимум 1024 символа" }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string | null;
};
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createSubmission(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await db.submission.create({
      data: {
        status: status,
        amount: amountInCents,
        date: date,
      },
    });
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
}
