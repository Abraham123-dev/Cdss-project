import { useState } from "react";
import {Eye, EyeOff} from "lucide-react"
import { Link } from "react-router-dom";
import logo from "./assets/logo project.png";
import SignUp from "./SignUp";
export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="min-h-screen flex, flex-col items-center justify-center, px-6"
        style={{backgroundColor: "#ffff" }}>
           <div className="flex flex-col items-center mb-10">
             <img src={logo} alt="CDSS Logo" className="w-30 h-30 mb-4" />
            <h1 className="text-7xl font-semibold" style={{ color: "#050912CC"}}>
                Sign In
            </h1>

             <div className="w-full max-w-xl mx-auto mt-15">
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


          <button
            className="w-full py-4 text-xl text-white rounded-xl font-semibold"
            style={{ backgroundColor: "#39A9F0" }}
          >
         Sign In
      </button>

      <p className="text-center text-base mt-6" style={{ color: "#3A495B" }}>
  Don’t have an account?{" "}
  <a
    href="/signup"
    className="font-semibold"
    style={{ color: "#39A9F0" }}
  >
    <a href={SignUp}>Sign Up</a>
  </a>
</p>
        </div>

            </div> 
        </div>
      </div>
    )
}