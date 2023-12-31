// function FormContent({
//   register,
//   isValid,
//   errors,
// }: {
//   register: UseFormRegister<FormValues>;
//   isValid: boolean;
//   errors: FieldErrors<FormValues>;
// }) {
//   const { pending } = useFormStatus();

//   return (
//     <div className="relative grid grid-cols-1 gap-3">
//       <div className="w-full">
//         <input
//           {...register("firstName")}
//           placeholder="First name"
//           className={inputClasses}
//           autoFocus={true}
//         />
//         <span className="text-sm font-semibold text-red-500">
//           <ErrorMessage name="firstName" errors={errors} />
//         </span>
//       </div>
//       <div className="w-full">
//         <input
//           {...register("lastName")}
//           placeholder="Last name"
//           className={inputClasses}
//         />
//         <span className="text-sm font-semibold text-red-500">
//           <ErrorMessage name="lastName" errors={errors} />
//         </span>
//       </div>
//       <button
//         type="submit"
//         disabled={pending || !isValid}
//         className={buttonClasses}
//       >
//         Send
//       </button>
//       {pending && <span>Loading...</span>}
//     </div>
//   );
// }

export function S() {
  return <p>Test</p>;
}
// <form action={createSubmission}>
//   {/* User Name */}
//   <div className="mb-8">
//     <div className="mb-4 flex items-baseline justify-between gap-2">
//       <label
//         htmlFor="name"
//         className="inline-block text-lg text-gray-500 dark:text-slate-500"
//       >
//         Представтьтесь, пожалуйста
//       </label>
//     </div>
//     <input
//       id="name"
//       name="name"
//       className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
//     />
//   </div>
//   {/* Phone */}
//   <div className="mb-8">
//     <div className="mb-4 flex items-baseline justify-between gap-2">
//       <label
//         htmlFor="phone"
//         className="inline-block text-lg text-gray-500 dark:text-slate-500"
//       >
//         Ваш номер телефона
//       </label>
//     </div>
//     <input
//       required
//       id="phone"
//       name="phone"
//       placeholder="+375"
//       aria-describedby="phone-error"
//       className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
//     />
//   </div>
//   {/* Message */}
//   <div className="mb-8">
//     <div className="mb-4 flex items-baseline justify-between gap-2">
//       <label
//         htmlFor="message"
//         className="inline-block text-lg text-gray-500 dark:text-slate-500"
//       >
//         Cообщение
//       </label>
//     </div>
//     <input
//       id="message"
//       name="message"
//       className="focus-ring w-full rounded-lg bg-gray-100 px-11 py-4 text-lg font-medium text-black placeholder-gray-500 disabled:text-gray-400 dark:bg-gray-800 dark:text-white dark:disabled:text-slate-500"
//     />
//   </div>
//   <div className="mt-6 flex justify-end gap-4">
//     <Button type="reset" title="Сбросить" variant="secondary" />
//     <Button type="submit" title="Отправить" variant="primary" />
//   </div>
// </form>;
