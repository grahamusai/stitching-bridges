import { Button } from "../../components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-20 px-8 mx-10 my-20 overflow-hidden rounded-xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/steel.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 rounded-lg" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Ready to build your dream?</h2>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-8">
          <span className="text-orange-500 font-semibold">Schedule your consultation</span>{" "}
          <span className="text-white">today</span>
        </p>

        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors duration-200"
        >
          GET A QUOTE
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </section>
  )
}
