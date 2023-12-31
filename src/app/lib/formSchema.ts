import { z } from "zod";
import { zfd } from "zod-form-data";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export const formSchema = zfd.formData({
  name: zfd.text(z.string().optional()),
  phone: zfd.text(
    z
      .string()
      .refine(isMobilePhone, { message: "Недопустимый номер телефона" }),
  ),
  message: zfd.text(z.string().optional()),
});
