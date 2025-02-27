import { useForm } from "react-hook-form";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomInput } from "./ui/CustomInput";

export default function RegisterForm({ onSwitch }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Đăng ký với:", data);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <Input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div>
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", { required: "Please confirm your password" })}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <Button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-700 w-full text-white py-3 rounded-md">
                    Register
                </Button>

                <p className="text-center text-sm mt-3">
                    Already have an account?
                    <button type="button" className="text-green-500 ml-1" onClick={onSwitch}>
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
}
