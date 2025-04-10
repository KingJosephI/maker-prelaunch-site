"use client";

import { SubmitHandler, useForm } from 'react-hook-form'
 
type FormFields = {
  email: string;
};
  
export const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()
  
  const onSubmit: SubmitHandler<FormFields> = ({ email }) => {
    alert(`Your email ${email} is saved in our database`);
  }

  return (
    <footer className="px-6 md:px-24 lg:px-[10.3125rem] flex flex-col items-center pt-36 pb-40">
      <h2 className="text-2xl lg:text-[2rem] pb-7.5">
        Get notified when we launch
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:flex-row"
      >
        <input
          type="email"
          placeholder="Email address"
          className="bg-feature-blue w-80 rounded-4xl p-4.5 px-6.5"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Oops! That doesn’t look like an email address",
            }
          })}
        />
        {errors.email && <p className="error text-red-500">{errors.email.message}</p>}
        <button className="notification-button">Get notified</button>
      </form>
    </footer>
  );
}

