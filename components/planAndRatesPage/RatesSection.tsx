export default function RatesSection() {
  return (
    <>
      <section className="bg-amber-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-4xl text-center text-amber-600 font-medium mb-8">
              PLANS & RATES
            </h1>
            <p className="leading-7 text-center mt-4">
              Market research shows that the services we provide average between
              £27.00 - £35.00 with some charging £40.00 per hour. The savings
              you make by not paying NI, tax, office space, agency fees,
              technology etc are picked up by us.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-64 mt-20">
            <div className="c">
                <div className="text-center">
                    <h3 className="text-3xl text-amber-600 font-medium">As You Go</h3>
                    <p className="mt-4 font-medium">Unlimited hours</p>
                </div>
                <div className="text-center mt-4">
                    <p className="">£35.00 per hour</p>
                </div>
                <div className="text-start mt-12 space-y-1">
                    <p className="">Less than 20 hours per month</p>
                    <p className="">Unlimited catch up calls</p>
                    <p className="">Invoiced at month end</p>
                    <p className="">Time & tasks are digitally tracked & a detailed report provided at month end</p>
                </div>
                <div className="text-start mt-12">
                    <p className="">​Perfect for those who prefer not to commit to a set amount of hours per month and would like to &quot;pay-as-you-go&quot;.</p>
                    
                </div>

            </div>
            <div className="c">
                <div className="text-center">
                    <h3 className="text-3xl text-amber-600 font-medium">Executive</h3>
                    <p className="mt-4 font-medium">Monthly Retainer</p>
                </div>
                <div className="text-center mt-4">
                    <p className="">£30.00 per hour</p>
                </div>
                <div className="text-start mt-12 space-y-1">
                    <p className="">Above 21 hours per month</p>
                    <p className="">Unlimited catch up calls</p>
                    <p className="">Invoiced upfront month end</p>
                    <p className="">Time & tasks are digitally tracked & a detailed report provided at month end</p>
                </div>
                <div className="text-start mt-12">
                    <p className="">Perfect for those who would like to retain a specified amount of VA hours per month.</p>
                    
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
