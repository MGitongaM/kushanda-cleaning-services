export default function HeroSection() {
  return (
    <>
      <section className="min-h-[50dvh] bg-amber-600/20 mt-20">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center my-20">
          <h1 className="text-4xl lg:text-7xl text-amber-600 font-medium mb-32">About Us</h1>
          <p className="text-2xl lg:text-2xl text-amber-600 font-medium mb-20">
            What is our Big Why?
          </p>
          <p className="italic mb-4">
            {" "}
            “The best way to reduce poverty is to create significant job
            opportunities suited for the poor. The best engine for doing that is
            small and mid-size enterprises, not micro-enterprises.”{" "}
          </p>
          <p className="text-xs text-amber-600 font-medium">
            - Aneel Karnani of the Ross School of Business at Michigan
            University in the US.
          </p>
        </div>
      </section>
    </>
  );
}
