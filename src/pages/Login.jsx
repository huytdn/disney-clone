import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgDisney from "../assets/images/disneybg.jpeg";
import icons from "../assets/icons/icon";

const { IoChevronBackCircleOutline } = icons;
const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password, rememberMe });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDisney})` }}
    >
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative">
          <div className="relative z-10">
            <div
              type="button"
              onClick={() => navigate("/")}
              className="absolute top-1 hover:text-cyan-400"
            >
              <IoChevronBackCircleOutline className="w-[35px] h-[35px]" />
            </div>
            <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-wide">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-500 bg-slate-700 text-cyan-500 focus:ring-cyan-400 focus:ring-2"
                  />
                  <label
                    htmlFor="remember"
                    className="text-slate-300 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Login
              </button>
            </form>

            <div className="text-center mt-6">
              <span className="text-slate-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 cursor-pointer"
                >
                  Register
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
