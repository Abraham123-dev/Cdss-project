import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#FFFFFF" }}
    >

      <div className="flex flex-col items-center mb-10">
        <img
          src="/logo.png"
          alt="CDSS Logo"
          className="w-20 h-20 mb-4"
        />
        <h1 className="text-7xl font-semibold" style={{ color: "#050912CC" }}>
          Sign Up
        </h1>
      </div>


      <div className="w-full max-w-xl mx-auto">
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 text- rounded-xl border focus:outline-none"
            style={{
              borderColor: "#39A9F080",
              color: "#050912CC",
            }}
          />
        </div>

        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-5 py-4 text-lg rounded-xl border focus:outline-none"
            style={{
              borderColor: "#39A9F080",
              color: "#050912CC",
            }}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
            style={{ color: "#3A495B" }}
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>


        <div className="mb-10 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-5 py-4 text-lg rounded-xl border focus:outline-none"
            style={{
              borderColor: "#39A9F080",
              color: "#3A495B",
            }}
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ color: "#3A495B" }}
          >
            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

  
        <button
          className="w-full py-4 text-xl text-white rounded-xl font-semibold"
          style={{ backgroundColor: "#39A9F0" }}
        >
          Sign Up
        </button>


        <p className="text-center text-base mt-6 " style={{ color: "#000000" }}>
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-semibold"
            style={{ color: "#39A9F0" }}
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
