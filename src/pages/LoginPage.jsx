import { CustomButton } from "../components/ui/CustomButton";
import { CustomInput } from "../components/ui/CustomInput";
import { CheckBox } from "../components/ui/Checkbox";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(location.pathname === "/register");

    useEffect(() => {
        setIsRegister(location.pathname === "/register");
    }, [location.pathname]);

    useEffect(() => {
        document.title = isRegister ? "Register | Job Finder" : "Login | Job Finder";
    }, [isRegister]);

    return (
        <div className="flex h-screen">
            {/* Bên trái - Ảnh minh họa và thông tin */}
            <div className="hidden md:flex w-2/5 bg-[#ECF8EC] flex-col items-center justify-center p-10 relative">
                <div className="absolute top-8 left-8 flex items-center space-x-2">
                    <img src="/Logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-lg font-semibold text-green-700">Job Finder</span>
                </div>
                <div className="bg-white shadow-md p-3 rounded-lg absolute top-24 left-16 text-center">
                    <p className="text-xl font-bold text-gray-900">100K+</p>
                    <p className="text-gray-600 text-sm">People got hired</p>
                </div>
                <img src="/Man.png" alt="User" className="w-72 object-cover mt-12" />
                <div className="mt-6 bg-white p-6 shadow-md rounded-lg w-64 ml-64">
                    <p className="text-sm text-gray-600">
                        "Great platform for job seekers that searching for new career heights."
                    </p>
                    <p className="mt-2 font-bold text-sm">Adam Sandler</p>
                    <p className="text-xs text-gray-500">Lead Engineer at Canva</p>
                </div>
            </div>

            {/* Bên phải - Form đăng nhập/đăng ký */}
            <div className="w-full md:w-3/5 flex flex-col items-center justify-center px-8 md:px-24 bg-[#F9FDF9]">
                <div className="flex space-x-4 mb-6">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold">
                        Job Seeker
                    </button>
                    <button className="text-green-700 font-semibold">Company</button>
                </div>

                <h2 className="text-4xl font-semibold text-gray-900">
                    {isRegister ? "Create your account" : "Get more opportunities"}
                </h2>

                <CustomButton className="mt-6 w-full flex items-center justify-center border border-gray-300 bg-white py-2">
                    <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
                    <span className="text-gray-700 font-medium">
                        {isRegister ? "Sign Up" : "Sign In"} with Google
                    </span>
                </CustomButton>

                <div className="my-6 flex items-center w-full">
                    <div className="w-full border-t border-gray-300"></div>
                    <p className="px-2 text-gray-500 text-sm">
                        Or {isRegister ? "sign up" : "sign in"} with email
                    </p>
                    <div className="w-full border-t border-gray-300"></div>
                </div>

                <div className="w-full">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <CustomInput type="email" placeholder="Enter email address" className="mt-2" />

                    <label className="mt-4 text-sm font-medium text-gray-700">Password</label>
                    <CustomInput type="password" placeholder="Enter password" className="mt-2" />

                    <div className="flex items-center mt-4">
                        <CheckBox id="remember" />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                    </div>

                    {isRegister ? (
                        <CustomButton className="mt-6 bg-green-600 hover:bg-green-700 w-full text-white py-3 rounded-md">
                            Register
                        </CustomButton>
                    ) : (
                        <CustomButton className="mt-6 bg-green-600 hover:bg-green-700 w-full text-white py-3 rounded-md">
                            Login
                        </CustomButton>
                    )}

                    <button
                        className="mt-3 text-sm text-green-600 hover:underline"
                        onClick={() => navigate(isRegister ? "/login" : "/register")}
                    >
                        {isRegister ? "Already have an account? Sign in" : "Don't have an account? Register"}
                    </button>
                </div>

                <p className="mt-6 text-xs text-gray-500 text-center">
                    By clicking 'Continue', you acknowledge that you have read and accept the
                    <a href="#" className="text-green-600"> Terms of Service</a> and
                    <a href="#" className="text-green-600"> Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
}
