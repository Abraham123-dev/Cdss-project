import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "./assets/logo project.png";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="CDSS Logo" className="w-24 h-24 mb-6" />
        <h1 className="text-4xl font-semibold text-[#050912CC]">Sign Up</h1>
      </div>

      <div className="w-full max-w-md mx-auto">
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-lg rounded-xl border-2 border-[#39A9F080] text-[#050912CC] placeholder-gray-400 focus:outline-none focus:border-[#39A9F0] focus:ring-2 focus:ring-[#39A9F0]/20 transition-all duration-200"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 text-lg rounded-xl border-2 border-[#39A9F080] text-[#050912CC] placeholder-gray-400 focus:outline-none focus:border-[#39A9F0] focus:ring-2 focus:ring-[#39A9F0]/20 transition-all duration-200"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3A495B]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 text-lg rounded-xl border-2 border-[#39A9F080] text-[#050912CC] placeholder-gray-400 focus:outline-none focus:border-[#39A9F0] focus:ring-2 focus:ring-[#39A9F0]/20 transition-all duration-200"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3A495B]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="-full py-3 text-lg text-white rounded-xl font-semibold bg-[#39A9F0] hover:bg-[#2E8BC0] active:bg-[#2570A1] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-8 text-gray-600">
          Already have an account?{" "}
          <a
            href="/sign"
            className="font-semibold text-[#39A9F0] hover:text-[#2E8BC0] transition-colors duration-200"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}