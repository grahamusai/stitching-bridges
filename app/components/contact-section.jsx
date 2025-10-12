import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";

export default function ContactSection() {

    const [submit, submitting] = useFormspark({
        formId: "UAECATSmM",
    });
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className="relative min-h-[700px] flex items-center justify-center py-20 px-8 mx-3 md:mx-10 md:my-20 overflow-hidden">
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
                        Ready to start your construction project? Our experienced team is here to help bring your vision to life.
                        Contact us today for a free consultation and quote.
                    </p>
                </div>

                {/* Right Form */}
                <div className="bg-orange-500 p-8 rounded-lg shadow-2xl">
                    <form className="space-y-4" onSubmit={async (e) => {
                        e.preventDefault();

                        await submit({ name, phone, email, message });
                        alert(
                            "Your email has been submitted successfully"
                        );

                        // Clear form fields
                        setName("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                    }}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                name="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 rounded bg-orange-100 border-0 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? "Submitting..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}