import { useState } from "react"
import { User, Mail, Lock, Eye, Zap, BookOpen, Users, ArrowRight } from "lucide-react"
import backgroundImage from "../assets/images/background-image.png"
const API_URL = import.meta.env.VITE_API_URL;

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")


    function handleRegister() {

        if (name === "" || email === "" || password === "" || confirmPassword === "") {

            setError("Please fill all fields")
            setSuccess("")
            return

        }

        if (!email.includes("@") || !email.includes(".")) {

            setError("Please enter a valid email")
            setSuccess("")
            return

        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            setSuccess("")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            setSuccess("")
            return
        }

        fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((data) => {

                setSuccess(data.message)
                setError("")

            })
            .catch((error) => {

                setError("Something went wrong")
                setSuccess("")

            })

    }


    return (

        <main className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat lg:h-screen lg:min-h-0" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="relative z-10 grid min-h-screen grid-cols-1 lg:h-screen lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr]">


                {/* LEFT SIDE */}

                <section className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14 lg:py-8 xl:px-20">

                    {/* LOGO */}

                    <div className="mb-8">

                        <h2 className="text-4xl font-extrabold text-slate-950">
                            JD<span className="text-indigo-600">_OX</span>
                        </h2>

                        <p className="text-[8px] font-bold text-slate-600">
                            DEVELOPER SPACE
                        </p>

                    </div>


                    {/* HERO */}

                    <div className="max-w-[620px]">

                        <p className="mb-3 text-[11px] font-semibold text-slate-500">
                            JOIN JD_0X
                        </p>

                        <h1 className="text-5xl font-extrabold text-slate-950 sm:text-6xl xl:text-[64px]">

                            Start Building

                            <span className="block bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                                Your Future.
                            </span>

                        </h1>

                        <p className="mt-5 max-w-[500px] text-[15px] leading-6 text-slate-600">
                            Create your developer account and start learning,
                            building, and growing with JD_0X.
                        </p>

                    </div>


                    {/* FEATURES */}

                    <div className="mt-7 space-y-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">

                                <Zap size={19} className="text-purple-600" />

                            </div>

                            <div>

                                <p className="text-[13px] font-semibold text-slate-700">
                                    Build real projects
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    Turn your ideas into working applications.
                                </p>

                            </div>

                        </div>


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


                    {/* REGISTER CARD */}

                    <div className="w-full max-w-[470px] rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-8">


                        {/* HEADING */}

                        <div>

                            <h2 className="text-3xl font-bold text-slate-900">
                                Create your account
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Join JD_0X and start building your future.
                            </p>

                        </div>


                        {/* NAME */}

                        <div className="mt-6">

                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                                Full name
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <User size={18} className="mr-3 text-slate-400" />

                                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="mt-4">

                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                                Email address
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <Mail size={18} className="mr-3 text-slate-400" />

                                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="mt-4">

                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                                Password
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <Lock size={18} className="mr-3 text-slate-400" />

                                <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Create a password" className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-3 text-slate-400 cursor-pointer">

                                    <Eye size={18} />

                                </button>

                            </div>

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="mt-4">

                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
                                Confirm password
                            </label>

                            <div className="flex h-11 items-center rounded-xl border border-slate-200 px-3">

                                <Lock size={18} className="mr-3 text-slate-400" />

                                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm your password" className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />

                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="ml-3 text-slate-400 cursor-pointer">

                                    <Eye size={18} />

                                </button>

                            </div>

                        </div>


                        {/* MESSAGE */}

                        {error && (
                            <p className="mt-3 text-center text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="mt-3 text-center text-sm text-green-600">
                                {success}
                            </p>
                        )}


                        {/* CREATE ACCOUNT */}

                        <button type="button" onClick={handleRegister} className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-sm font-semibold text-white cursor-pointer">

                            Create Account

                            <ArrowRight size={17} className="ml-2" />

                        </button>


                        {/* SIGN IN */}

                        <p className="mt-5 text-center text-xs text-slate-500">

                            Already have an account?

                            <a href="/login" className="ml-1 font-semibold text-purple-600">
                                Sign in
                            </a>

                        </p>

                    </div>

                </section>

            </div>

        </main>
    )
}

export default Register