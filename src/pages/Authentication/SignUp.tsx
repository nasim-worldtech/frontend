import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineError } from 'react-icons/md';
import { ISignUpInputs } from '../../types/types.adminPanel';

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputs>();

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => console.log(data);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rounded-sm border border-stroke bg-white shadow-default xl:w-1/2 max-w-[500px] xl:border-l-2">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark">
            <div className="w-full p-4 sm:p-12.5 xl:p-10.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-6 text-2xl font-bold text-black sm:text-title-xl2">
                Sign Up to WorldTech
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register('name', { required: true })}
                      className={`w-full rounded-lg border  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none ${
                        errors.name ? 'border-red-500' : 'border-stroke'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-1 mt-1">
                      <MdOutlineError className="text-red-500" />
                      <p className="text-red-500">Name is required</p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      // pattern: /^\S+@\S+$/i regular expression to check email type
                      {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                      className={`w-full rounded-lg border  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-stroke dark:border-form-strokedark'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1">
                      <MdOutlineError className="text-red-500" />
                      <p className="text-red-500">Email is required</p>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...register('password', { required: true })}
                      className={`w-full rounded-lg border  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none ${
                        errors.password ? 'border-red-500' : 'border-stroke '
                      }`}
                    />
                  </div>
                  {errors.password && (
                    <div className="flex items-center gap-1 mt-1">
                      <MdOutlineError className="text-red-500" />
                      <p className="text-red-500">Password is required</p>
                    </div>
                  )}
                </div>
                {/* 
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Re-enter your password"
                      {...register('confirmPassword', {
                        required: true,
                        validate: (value) =>
                          value === watch('password') ||
                          'Passwords do not match',
                      })}
                      className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none  dark:bg-form-input dark:focus:border-primary ${
                        !errors.password && errors.password
                          ? 'border-red-500'
                          : 'border-stroke dark:border-form-strokedark'
                      }`}
                    />
                  </div>
                  {!errors.password && errors.confirmPassword?.message && (
                    <div className="flex items-center gap-1 mt-1">
                      <MdOutlineError className="text-red-500" />
                      <p className="text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    </div>
                  )}
                </div> */}
                <div className="mb-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-primary">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
