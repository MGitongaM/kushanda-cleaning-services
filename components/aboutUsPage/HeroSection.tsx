export default function HeroSection() {
  return (
    <>
      <section className="bg-amber-600/20 mt-16 sm:mt-20">
        <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12 lg:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl text-amber-600 font-medium mb-10 sm:mb-16 lg:mb-32 leading-tight">About Us</h1>
          <p className="text-xl sm:text-2xl text-amber-600 font-medium mb-10 sm:mb-16 lg:mb-20 leading-tight">
            What is our Big Why?
          </p>
          <p className="italic mb-4 text-sm sm:text-base leading-relaxed text-balance px-2">
            “The best way to reduce poverty is to create significant job
            opportunities suited for the poor. The best engine for doing that is
            small and mid-size enterprises, not micro-enterprises.”
          </p>
          <p className="text-xs text-amber-600 font-medium mt-2 px-2">
            - Aneel Karnani of the Ross School of Business at Michigan
            University in the US.
          </p>
        </div>
      </section>
    </>
  );
}
