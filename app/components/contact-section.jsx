export default function ContactSection() {
    return (
        <section className="relative min-h-[700px] flex items-center justify-center py-20 px-8 mx-10 my-20 rounded-xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-transparent">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"
                    style={{
                        backgroundImage: "url('/images/shape.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-white space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        <span className="text-orange-500">Give us a call</span> for<br />
                        more information
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore
                    </p>
                </div>

                {/* Right Form */}
                <div className="bg-orange-500 p-8 rounded-lg shadow-2xl">
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}