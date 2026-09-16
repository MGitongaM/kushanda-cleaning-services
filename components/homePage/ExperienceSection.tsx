export default function ExperienceSection() {
  return (
    <section className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-balance">
          Experience You Can Trust
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 max-w-6xl mx-auto">
          <div className="flex-1 shadow-lg bg-green-100 px-5 sm:px-6 py-8 sm:py-10 lg:py-12 rounded-lg text-balance space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              Kushanda is built on more than a decade of hands on experience
              running a cleaning business in London, serving residential clients
              and commercial offices.
            </p>
            <p>
              That experience has taught us that great cleaning is about more
              than making a space look clean. It is about{" "}
              <span className="font-bold">
                reliability, communication, organisation, care and consistency.
              </span>
            </p>
          </div>

          <div className="flex-1 shadow-lg bg-green-200 px-5 sm:px-6 py-8 sm:py-10 lg:py-12 rounded-lg text-balance space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              We understand that clients need someone they can trust to arrive
              when expected, treat their property with respect and deliver a
              dependable service.
            </p>
            <p>Our goal is simple:</p>
            <p className="text-lg sm:text-xl font-bold">
              To make life easier by providing cleaning you can rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
