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
import { useEffect, useState } from "react";
import { Button } from "@/app/components/Buttons";

export interface FormValues {
  name: string;
  phone: string;
  message: string;
}

// TODO: Remove classes after tests
const inputClasses =
  "block border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 border-gray-400 w-full";
const buttonClasses =
  "rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed";

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
      <div className="w-full">
        <input
          {...register("name")}
          placeholder="Представтьтесь, пожалуйста"
          className={inputClasses}
          autoFocus={true}
        />
        <span className="text-sm font-semibold text-red-500">
          <ErrorMessage name="name" errors={errors} />
        </span>
      </div>
      <div className="w-full">
        <input
          {...register("phone")}
          placeholder="Ваш номер телефона"
          className={inputClasses}
        />
        <span className="text-sm font-semibold text-red-500">
          <ErrorMessage name="phone" errors={errors} />
        </span>
      </div>
      <div className="w-full">
        <input
          {...register("message")}
          placeholder="Cообщение"
          className={inputClasses}
        />
        <span className="text-sm font-semibold text-red-500">
          <ErrorMessage name="message" errors={errors} />
        </span>
      </div>
      <button
        type="submit"
        disabled={pending || !isValid}
        className={buttonClasses}
      >
        Send
      </button>
      {pending && <span>Обрабатывается...</span>}
    </div>
  );
}

export function SubmissionForm({ classname }: { classname?: string }) {
  const [clientSideValidation, setClientSideValidation] = useState(true);
  const {
    register,
    formState: { isValid, errors },
    setError,
    reset,
  } = useForm<FormValues>({
    mode: "all",
    resolver: clientSideValidation ? zodResolver(formSchema) : undefined,
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
      <div className="mb-1.5 flex items-center border-b pb-1.5">
        <input
          type="checkbox"
          checked={clientSideValidation}
          onChange={() => {
            reset();
            setClientSideValidation(!clientSideValidation);
          }}
          id="client-side-validation-checkbox"
          className="mr-3"
        />
        <label htmlFor="client-side-validation-checkbox">
          Enable client-side validation
        </label>
      </div>
      <form action={formAction}>
        <FormContent register={register} isValid={isValid} errors={errors} />
      </form>
    </div>
  );
}