"use server";
import { ZodError } from "zod";
import { db } from "@/app/lib/prisma";
import { formSchema } from "@/app/lib/formSchema";

export type State =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export async function createSubmission(
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const {
      name = "Аноним",
      phone,
      message = "Без сообщения",
    } = formSchema.parse(formData);
    await db.submission.create({
      data: {
        name: name,
        phone: phone,
        message: message,
      },
    });
    return {
      status: "success",
      message: `Спасибо, ${name}. Ваша заявка отправлена!`,
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Некорректные данные",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Ошибка валидации: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Ошибка обращения к серверу. Повторите попытку позже",
    };
  }
}