import leftBgImage from "../assets/images/Frame 1165.png";
import wallai from "../assets/images/filbbe 1.png";
import line from "../assets/images/Frame 1145.png";

type Props = {};

function Login({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Image Section */}
      <div className="lg:w-[67%] w-full h-1/3 lg:h-full">
        <img
          src={leftBgImage}
          className="w-full h-full object-cover"
          alt="Background Image"
        />
      </div>

      {/* Right Form Section */}
      <div className="lg:w-3/5 w-full h-2/3 lg:h-full px-5 bg-white py-16 flex items-center justify-center">
        <form
          className="p-5 rounded-3xl w-[90%]"
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
            <label className="block mb-2 text-[#333030] text-2xl font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border-[#B9B8B8] h-12 w-full text-lg border rounded-lg p-2 pl-4"
            />
            <label className="block mb-2 mt-5 text-[#333030] text-2xl font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-[#B9B8B8] h-12 w-full text-lg border rounded-lg p-2 pl-4"
            />
          </div>
          <div className="flex justify-center items-center mt-12">
            <button
              type="submit"
              className="mt-4 px-14 py-1.5 text-lg font-semibold rounded-[33px] bg-[#C6FFAC] text-[#1D5A00]"
            >
              Login
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
