"use client";
import { createSubmission } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "@/app/components/Button";

export function SubmissionForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubmission, initialState);
  return (
    <form action={dispatch}>
      <div className="bg-gray-50 rounded-md p-4 md:p-6">
        {/* User Name */}
        <div className="mb-8">
          <div className="mb-4 flex items-baseline justify-between gap-2">
            <label
              htmlFor=""
              className="inline-block text-lg text-gray-500 dark:text-slate-500"
            >
              Представтьтесь, пожалуйста
            </label>
          </div>
          <input
            required
            id="name"
            name="userName"
            value=""
            className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-8 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state?.errors.name?.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="reset">Сбросить</Button>
        <Button type="submit">Отправить</Button>
      </div>
    </form>
  );
}
