import CarersAndNursesContactForm from "./CarersAndNursesContactForm";

export default function ContactSection() {
  return (
    <section id="contactUs" className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          <div className="col-span-1 lg:col-span-5 px-0 sm:px-4 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">
            <p className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
              Start a Conversation Today
            </p>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <h2 className="text-balance">
                Whether you are exploring care options for yourself or a loved
                one, or representing a care home in need of reliable staff, our
                team is here to guide you through the options.
              </h2>
              
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
            <div className="px-0 sm:px-4 py-6 sm:py-8 lg:py-12">
              <CarersAndNursesContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
