import backgroundImage from "../assets/images/background-image.png"

function Dashboard() {
    const handleUdemy = () => {
        window.location.href = "https://www.udemy.com/"
    }

    const handleLogout = () => {
        window.location.href = "/login"
    }

    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <header className="bg-white/70 backdrop-blur-xl border-b border-white/60">

                <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

                    <div className="flex items-center gap-4">

                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight">
                                <span className="text-[#080d24]">JD_</span>
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">OX</span>
                            </h1>
                            <p className="text-xs text-[#5c7191] tracking-widest">DEVELOPER SPACE</p>
                        </div>

                        <div className="hidden md:block h-10 w-px bg-gray-300"></div>

                        <div className="hidden md:block">
                            <p className="text-xs text-[#7c3aed] font-semibold tracking-wider">DASHBOARD</p>
                            <p className="text-xs text-[#5c7191] mt-1">Your workspace</p>
                        </div>

                    </div>

                    <button onClick={handleLogout}
                        className="px-5 py-2.5 rounded-lg border border-purple-200 bg-white/80 text-[#080d24] font-medium hover:border-purple-400 hover:text-purple-600 transition">
                        Logout
                    </button>

                </div>

                <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>

            </header>

            <main className="min-h-[calc(100vh-89px)] flex items-center justify-center px-6 py-10">

                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#5c7191]">WELCOME TO JD_OX</p>

                        <h2 className="text-5xl font-extrabold text-[#080d24] mt-4 leading-tight">
                            Your Ideas
                            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Belong Here.
                            </span>
                        </h2>

                        <p className="text-lg text-[#45617f] mt-6 max-w-lg">
                            A modern developer space to learn, build, experiment, and grow without limits.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <span className="text-xl text-purple-600">⚡</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#080d24]">Build real projects</h3>
                                    <p className="text-sm text-[#5c7191]">Turn your ideas into working applications.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <span className="text-xl text-blue-500">▣</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#080d24]">Learn new technologies</h3>
                                    <p className="text-sm text-[#5c7191]">Improve your skills through practical learning.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <span className="text-xl text-purple-600">◉</span>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#080d24]">Grow as a developer</h3>
                                    <p className="text-sm text-[#5c7191]">Keep learning and building consistently.</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white/95 backdrop-blur rounded-2xl border border-gray-200 shadow-xl p-8">
                        <p className="text-sm font-semibold tracking-widest text-purple-600">DASHBOARD</p>

                        <h3 className="text-3xl font-bold text-[#080d24] mt-3">
                            Welcome back!
                        </h3>

                        <p className="text-[#5c7191] mt-3">
                            You are successfully logged in. Continue your learning journey and explore new development resources.
                        </p>

                        <div className="mt-8 bg-[#f7f8ff] border border-gray-200 rounded-xl p-6">
                            <h4 className="font-semibold text-[#080d24]">
                                Continue Your Learning
                            </h4>

                            <p className="text-sm text-[#5c7191] mt-2">
                                Explore programming courses, tutorials, and practical development resources on Udemy.
                            </p>

                            <button onClick={handleUdemy} className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90">
                                Go to Udemy →
                            </button>
                        </div>

                        <p className="text-sm text-center text-[#5c7191] mt-6">
                            Keep learning. Keep building. Keep growing.
                        </p>

                    </div>
                </div>

            </main>
            
        </div>
    )
}

export default Dashboard