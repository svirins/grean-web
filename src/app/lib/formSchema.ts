import { z } from "zod";
import { zfd } from "zod-form-data";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import i18next from "i18next";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ru/zod.json";

i18next.init({
  lng: "ru",
  resources: {
    ru: { zod: translation },
  },
});

z.setErrorMap(zodI18nMap);

export const formSchema = zfd.formData({
  name: zfd.text(z.string().optional()),
  phone: zfd.text(
    z
      .string()
      .refine(isMobilePhone, { message: "Недопустимый номер телефона" }),
  ),
  message: zfd.text(z.string().optional()),
});
