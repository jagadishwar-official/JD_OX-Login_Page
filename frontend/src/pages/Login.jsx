import { Link } from "react-router-dom"
import { useState } from "react"
import { Mail, Lock, Eye, Zap, BookOpen, Users, ArrowRight, Pointer } from "lucide-react"

import backgroundImage from "../assets/images/background-image.png"
import googleIcon from "../assets/images/google.png"
import githubIcon from "../assets/images/github.png"


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    function handleLogin() {

        if (email === "" || password === "") {

            setMessage("Please enter email and password")
            setMessageType("error")
            return

        }

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((data) => {

                setMessage(data.message)

                if (data.message === "Login successful") {

                    setMessageType("success")
                    window.location.href = "https://www.udemy.com/"

                } else {

                    setMessageType("error")

                }

            })
            .catch((error) => {

                setMessage("Something went wrong")
                setMessageType("error")

            })

    }

    return (

        <main className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat lg:h-screen lg:min-h-0" style={{ backgroundImage: `url(${backgroundImage})` }}>

            {/* FULL SCREEN LAYOUT */}

            <div className="relative z-10 grid min-h-screen grid-cols-1 lg:h-screen lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr]">


                {/* LEFT SIDE */}

                <section className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14 lg:py-8 xl:px-20">

                    {/* Logo */}

                    <div className="mb-8">

                        <h2 className="text-4xl font-extrabold text-slate-950">
                            JD
                            <span className="text-indigo-600">_OX</span>
                        </h2>

                        <p className="text-[8px] font-bold text-slate-600">
                            DEVELOPER SPACE
                        </p>

                    </div>


                    {/* Hero Content */}

                    <div className="max-w-[620px]">

                        <p className="mb-3 text-[11px] font-semibold text-slate-500">
                            WELCOME TO JD_0X
                        </p>

                        <h1 className="text-5xl font-extrabold text-slate-950 sm:text-6xl xl:text-[64px]">

                            Your Ideas

                            <span className="block bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                                Belong Here.
                            </span>

                        </h1>

                        <p className="mt-5 max-w-[500px] text-[15px] leading-6 text-slate-600">
                            A modern developer space to learn, build,
                            experiment, and grow without limits.
                        </p>

                    </div>


                    {/* FEATURES */}

                    <div className="mt-7 space-y-4">


                        {/* Feature 1 */}

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">

                                <Zap size={19} className="text-purple-600" />

                            </div>

                            <div>

                                <p className="text-[13px] font-semibold text-slate-700">
                                    Build real projects
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    Turn ideas into working applications.
                                </p>

                            </div>

                        </div>


                        {/* Feature 2 */}

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">

                                <BookOpen size={19} className="text-indigo-600" />

                            </div>

                            <div>

                                <p className="text-[13px] font-semibold text-slate-700">
                                    Learn in public
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    Share your knowledge and progress.
                                </p>

                            </div>

                        </div>


                        {/* Feature 3 */}

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">

                                <Users size={19} className="text-sky-600" />

                            </div>

                            <div>

                                <p className="text-[13px] font-semibold text-slate-700">
                                    Join a growing community
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    Connect with developers around you.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* COMMUNITY */}

                    <div className="mt-6 flex items-center gap-3">

                        <div className="flex -space-x-3">

                            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-300"></div>
                            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-400"></div>
                            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-500"></div>
                            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-600"></div>
                            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-700"></div>

                        </div>

                        <div>

                            <p className="text-[12px] font-bold text-slate-700">
                                10k+ developers
                            </p>

                            <p className="text-[10px] text-slate-500">
                                are building with JD_0X
                            </p>

                        </div>

                    </div>

                </section>


                {/* RIGHT SIDE */}

                <section className="flex items-center justify-center px-6 py-8 sm:px-10 lg:px-10 lg:py-6 xl:px-16">


                    {/* LOGIN CARD */}

                    <div className="w-full max-w-[470px] rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-8">


                        {/* LOGIN HEADING */}

                        <div>

                            <h2 className="text-3xl font-bold text-slate-900">
                                Welcome back!
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Sign in to continue to your workspace.
                            </p>

                        </div>


                        {/* EMAIL */}

                        <div className="mt-6">

                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                                Email address
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <Mail size={18} className="mr-3 text-slate-400" />

                                <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="mt-4">

                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                                Password
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <Lock size={18} className="mr-3 text-slate-400" />

                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-3 text-slate-400 cursor-pointer">

                                    <Eye size={18} />

                                </button>

                            </div>

                        </div>


                        {/* REMEMBER ME */}

                        <div className="mt-3 flex items-center justify-between">

                            <label htmlFor="remember" className="flex cursor-pointer items-center gap-2 text-xs text-slate-500">

                                <input type="checkbox" id="remember" className="h-4 w-4" />

                                Remember me

                            </label>

                            <a href="#" className="text-xs font-medium text-purple-600">
                                Forgot password?
                            </a>

                        </div>


                        {/* SIGN IN */}

                        {message && (
                            <p className={`mt-3 text-center text-sm ${messageType === "success" ? "text-green-600" : "text-red-500"}`}>
                                {message}
                            </p>
                        )}

                        <button type="button" onClick={handleLogin} className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-sm font-semibold text-white cursor-pointer">

                            Sign In

                            <ArrowRight size={17} className="ml-2" />

                        </button>


                        {/* DIVIDER */}

                        <div className="my-5 flex items-center gap-3">

                            <div className="h-px flex-1 bg-slate-200"></div>

                            <span className="text-[11px] text-slate-400">
                                or continue with
                            </span>

                            <div className="h-px flex-1 bg-slate-200"></div>

                        </div>


                        {/* SOCIAL LOGIN */}

                        <div className="grid grid-cols-2 gap-3">


                            {/* GOOGLE */}

                            <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 cursor-pointer">

                                <img src={googleIcon} alt="Google" className="h-5 w-5 cursor-pointer" />

                                Google

                            </button>


                            {/* GITHUB */}

                            <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 cursor-pointer">

                                <img src={githubIcon} alt="GitHub" className="h-5 w-5 cursor-pointer" />

                                GitHub

                            </button>

                        </div>


                        {/* CREATE ACCOUNT */}

                        <p className="mt-5 text-center text-xs text-slate-500">

                            Don't have an account?

                            <a href="/register" className="ml-1 font-semibold text-purple-600">
                                Create account
                            </a>

                        </p>

                    </div>

                </section>

            </div>

        </main>
    )
}


export default Login