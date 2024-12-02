import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const passwordValue = watch("password");

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-[493px] mx-auto shadow-light px-[34px] py-[54px]">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: "Name is required" })} placeholder="Name" type="text"
                        className="w-full max-w-[425px] px-3 lg:py-[10.5px] py-2 border rounded-xl" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                    <input {...register("email", { required: "Email is required", pattern: { value: 2, message: "Invalid email address", }, })} placeholder="Email address" type="email"
                        className="w-full px-3 lg:py-[10.5px] py-2 border rounded-xl lg:mt-4 mt-3" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <input {...register("password", {
                        required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long", },
                    })} placeholder="Password" type="password"
                        className="w-full px-3 lg:py-[10.5px] py-2 border rounded-xl lg:mt-4 mt-3" />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    <input {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) => value === passwordValue || "Passwords do not match",
                    })}
                        placeholder="Confirm Password"
                        type="password"
                        className="w-full px-3 lg:py-[10.5px] py-2 border rounded-xl lg:mt-4 mt-3" />
                    {errors.confirmPassword && (<p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>)}

                    <select
                        {...register("option", { required: "Please select an option" })}
                        className="w-full px-3 lg:py-[10.5px] py-2 border rounded-xl  lg:mt-4 mt-3 lg:mb-[19px] mb-3">
                        <option value="featured">Featured</option>
                        <option value="new">New</option>
                        <option value="rating">Rating</option>
                    </select>
                    {errors.option && <p className="text-red-500 text-sm">{errors.option.message}</p>}
                    <div><input {...register("checkbox", { required: "you must check the box", value: true, message: "you must check the box", })} className="size-6 text-base" type="checkbox" />
                        {errors.checkbox && <p className="text-red-500 text-sm"> {errors.checkbox.message}</p>}
                    </div>
                    <button type="submit" className="w-full max-w-[103px] px-3 lg:py-[10.5px] py-2 lg:mt-[34px] mt-3 bg-[#1EABF8] text-white rounded-xl">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
