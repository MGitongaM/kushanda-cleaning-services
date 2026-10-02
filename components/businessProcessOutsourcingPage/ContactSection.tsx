import BPOContactForm from "./BPOContactForm";



export default function ContactSection() {
  return (
     
      <section id="contactUs" className="py-10 sm:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
                <div className="col-span-12  px-0 sm:px-4 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance">
                    
                    Let&apos;s Build Your Remote Support Solution
                  </h2>
                  <div className="max-w-5xl mx-auto space-y-4 text-sm sm:text-base leading-relaxed">
                    <p className="text-balance">
                     Whether you need support with motor claims, virtual assistance, customer service, or a fully bespoke back office function, tell us about your goals
                    </p>
                    
                  </div>
                </div>
                <div className="col-span-12 ">
                  <div className="px-0 sm:px-4 py-6 sm:py-8 lg:py-12">
                    <BPOContactForm/>
                  </div>
                </div>
              </div>
            </div>
          
    </section>
  )
}
