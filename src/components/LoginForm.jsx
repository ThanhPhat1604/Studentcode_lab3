import { useForm } from "react-hook-form";
import { CustomButton } from "@/components/ui/CustomButton";
import { CustomInput } from "@/components/ui/CustomInput";


export default function LoginForm({ onSwitch }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Đăng nhập với:", data);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <CustomInput
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <CustomInput
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <Button type="submit" className="mt-6 bg-green-600 hover:bg-green-700 w-full text-white py-3 rounded-md">
                    Login
                </Button>

                <p className="text-center text-sm mt-3">
                    Don't have an account?
                    <button type="button" className="text-blue-500 ml-1" onClick={onSwitch}>
                        Register
                    </button>
                </p>
            </form>
        </div>
    );
}
