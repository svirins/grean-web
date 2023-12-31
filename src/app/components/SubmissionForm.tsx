"use client";
import {
  type FieldErrors,
  useForm,
  type UseFormRegister,
  type FieldPath,
} from "react-hook-form";

import { createSubmission, type State } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/lib/formSchema";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { Button } from "@/app/components/Buttons";

export interface FormValues {
  name: string;
  phone: string;
  message: string;
}
export function SubmissionForm({ classname }: { classname?: string }) {
  const {
    register,
    formState: { isValid, errors },
    setError,
    reset,
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(formSchema),
  });
  const [state, formAction] = useFormState<State, FormData>(
    createSubmission,
    null,
  );

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "error") {
      console.log(state.errors);
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === "success") {
      alert(state.message);
      reset();
    }
  }, [state, setError, reset]);

  return (
    <div className={classname}>
      <form action={formAction}>
        <FormContent register={register} isValid={isValid} errors={errors} />
      </form>
    </div>
  );
}

function FormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="relative grid grid-cols-1 gap-3">
      <div className="mb-8">
        <div className="mb-4 flex items-baseline justify-between gap-2">
          <label
            htmlFor="name"
            className="inline-block text-lg text-gray-500 dark:text-slate-500"
          >
            Представтьтесь, пожалуйста
          </label>
        </div>
        <input
          {...register("name")}
          autoFocus={true}
          className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
        />
      </div>
      <div className="mb-8">
        <div className="mb-4 flex items-baseline justify-between gap-2">
          <label
            htmlFor="phone"
            className="inline-block text-lg text-gray-500 dark:text-slate-500"
          >
            Ваш номер телефона
          </label>
        </div>
        <input
          {...register("phone")}
          className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
        />
        <span className="text-sm font-semibold text-red-500">
          <ErrorMessage name="phone" errors={errors} />
        </span>
      </div>
      <div className="mb-8">
        <div className="mb-4 flex items-baseline justify-between gap-2">
          <label
            htmlFor="message"
            className="inline-block text-lg text-gray-500 dark:text-slate-500"
          >
            Cообщение
          </label>
        </div>
        <input
          {...register("message")}
          className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
        />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button
          type="submit"
          title="Отправить"
          variant="primary"
          disabled={pending || !isValid}
        />
      </div>
      {pending && <span className="italic">Обрабатывается...</span>}
    </div>
  );
}
