import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          <div className="col-span-1 lg:col-span-5 px-0 sm:px-4 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
              Let&apos;s Talk About Your Cleaning Needs
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-balance">
                Tell us about your property, the cleaning you need and how often
                you would like the service.
              </p>
              <p className="text-balance">
                We&apos;ll discuss your requirements and agree on the most
                suitable service before any work begins.
              </p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
            <div className="px-0 sm:px-4 py-6 sm:py-8 lg:py-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
