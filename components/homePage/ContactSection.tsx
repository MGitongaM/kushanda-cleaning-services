import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <section className="c" id="contact-us">
        <div className="container mx-auto h-[80vh] px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 lg:col-span-5 px-4 py-12 rounded-sm space-y-20">
              <h2 className="text-4xl font-bold">
                Let&apos;s Talk About Your Cleaning Needs
              </h2>
              <p className=" text-balance">
                Tell us about your property, the cleaning you need and how often
                you would like the service.
              </p>
              <p className=" text-balance">
                We&apos;ll discuss your requirements and agree on the most
                suitable service before any work begins.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 px-4 py-12 rounded-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
