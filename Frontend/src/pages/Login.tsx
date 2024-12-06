import { useState } from "react";
import leftBgImage from "../assets/images/image.jpg";
import wallai from "../assets/images/filbbe 1.png";
import line from "../assets/images/Frame 1145.png";
import EyeOpenIcon from "../assets/icons/EyeOpenIcon";
import EyeCloseIcon from "../assets/icons/EyeCloseIcon";
import { useNavigate } from "react-router-dom";
import { endponits } from "../services/apiEndpoints";
import useApi from "../hooks/useApi";
import toast from "react-hot-toast";
import axios from "axios";
import CryptoJS from "crypto-js";
type Props = {}

function Login({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { request: CheckLogin } = useApi("post");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    try {
      // Encrypt only the password
      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        "your-secret-key"
      ).toString();
  
      // Create the payload with plain text username and encrypted password
      const payload = {
        username,
        password: encryptedPassword,
      };
  
      const response = await CheckLogin(endponits.LOGIN, payload);
      if (response.response?.status === 200) {
        toast.success("Logged in successfully!");
        localStorage.setItem("loggedIn", "true");
        navigate("/");
      } else {
        const errorMessage =
          response.response?.data.message || "Invalid username or password";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "Login failed. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setError("Login failed. Please try again.");
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const navigate = useNavigate()

  return (
    <div className="flex h-[100vh]">
      <div
        className="w-[53%] py-9 bg-cover bg-center flex flex-col justify-between"
        style={{
          backgroundImage: `url(${leftBgImage})`,
        }}
      >
        <div
          className="ms-6 p-3 w-32 rounded-xl"
          style={{
            backdropFilter: "blur(2px)",
            background: "linear-gradient(85.92deg, rgba(5, 5, 5, 0) 0.75%, rgba(0, 0, 0, 0.1) 99.25%)",
          }}
        >
          <p className="text-white text-xl text-center">Walliea.ai</p>
        </div>
        <div className="flex justify-end text-end px-11 py-16">
          <p className="text-white text-5xl font-extralight w-[85%] text-right">
            Build a greener future with our sustainable plywood products.
          </p>
        </div>
      </div>

      <div className="w-[50%] h-[100vh] bg-white flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="px-5 py-8 rounded-3xl w-[90%]"
          style={{
            boxShadow: `
              0px 2px 5px 0px #69D33C1A,
              0px 9px 9px 0px #69D33C17,
              0px 20px 12px 0px #69D33C0D,
              0px 35px 14px 0px #69D33C03,
              0px 55px 15px 0px #69D33C00
            `,
          }}
        >
          <div className="flex justify-between items-center px-3">
            <div>
              <p className="text-[#3A3838] mb-3 text-4xl font-bold">
                Admin Login
              </p>
              <span className=" text-[#A8A4A4] text-base font-normal">
                Please enter login details
              </span>
            </div>
            <img src={wallai} alt="Logo" className="w-28 -mt-6" />
          </div>
          <img src={line} className="w-full object-cover" alt="Line Decoration" />

          <div className="mt-12 px-3">
            <label className="block mb-2 text-[#333030] text-xl font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-[#B9B8B8] h-12 w-full text-lg border rounded-lg p-2 pl-4"
            />

            <div className="relative">
              <label className="block mb-2 mt-5 text-[#333030] text-xl font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[#B9B8B8] h-12 w-full text-lg border rounded-lg p-2 pl-4 pr-10"
              />
              <div className="absolute top-12 right-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOpenIcon color="#4B5C79" />
                  ) : (
                    <EyeCloseIcon color="#4B5C79" />
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 absolute mt-4">{error}</p>}
          </div>

          <div className="flex justify-center items-center mt-12">
            <button
              type="submit"
              className="mt-4 px-14 py-1.5 text-lg font-semibold rounded-[33px] bg-[#C6FFAC] text-[#1D5A00]"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="text-sm text-center text-[#A8A4A4] mt-9">
            Please review our Terms of Service and{" "}
            <span className="underline cursor-pointer text-[#555454]">
              Privacy Policy
            </span>{" "}
            before submitting.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
