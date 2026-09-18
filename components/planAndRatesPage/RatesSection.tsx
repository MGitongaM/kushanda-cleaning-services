export default function RatesSection() {
  return (
    <>
      <section className="bg-amber-50">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl text-center text-amber-600 font-medium mb-6 sm:mb-8 leading-tight">
              PLANS & RATES
            </h1>
            <p className="leading-relaxed sm:leading-7 text-sm sm:text-base text-center mt-4 px-2">
              Market research shows that the services we provide average between
              £27.00 - £35.00 with some charging £40.00 per hour. The savings
              you make by not paying NI, tax, office space, agency fees,
              technology etc are picked up by us.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-white/50 rounded-lg p-6 sm:p-8 border border-amber-100">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 font-medium leading-tight">As You Go</h3>
                    <p className="mt-3 sm:mt-4 font-medium text-sm sm:text-base">Unlimited hours</p>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm sm:text-base font-semibold">£35.00 per hour</p>
                </div>
                <div className="text-start mt-8 sm:mt-12 space-y-1 text-sm sm:text-base leading-relaxed">
                    <p className="">Less than 20 hours per month</p>
                    <p className="">Unlimited catch up calls</p>
                    <p className="">Invoiced at month end</p>
                    <p className="">Time & tasks are digitally tracked & a detailed report provided at month end</p>
                </div>
                <div className="text-start mt-8 sm:mt-12">
                    <p className="text-sm sm:text-base leading-relaxed">​Perfect for those who prefer not to commit to a set amount of hours per month and would like to &quot;pay-as-you-go&quot;.</p>
                    
                </div>

            </div>
            <div className="bg-white/50 rounded-lg p-6 sm:p-8 border border-amber-100">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 font-medium leading-tight">Executive</h3>
                    <p className="mt-3 sm:mt-4 font-medium text-sm sm:text-base">Monthly Retainer</p>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm sm:text-base font-semibold">£30.00 per hour</p>
                </div>
                <div className="text-start mt-8 sm:mt-12 space-y-1 text-sm sm:text-base leading-relaxed">
                    <p className="">Above 21 hours per month</p>
                    <p className="">Unlimited catch up calls</p>
                    <p className="">Invoiced upfront month end</p>
                    <p className="">Time & tasks are digitally tracked & a detailed report provided at month end</p>
                </div>
                <div className="text-start mt-8 sm:mt-12">
                    <p className="text-sm sm:text-base leading-relaxed">Perfect for those who would like to retain a specified amount of VA hours per month.</p>
                    
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
