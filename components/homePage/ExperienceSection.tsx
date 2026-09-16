export default function ExperienceSection() {
  return (
    <>
      <section className="c">
        <div className="container mx-auto min-h-[80vh] grid place-content-center px-4 py-10">
          <h2 className="text-4xl text-center font-bold">Experience You Can Trust</h2>
          <div className="flex flex-col md:flex-row gap-20 mt-10">
            <div className=" shadow-lg bg-green-100 px-4 py-12 rounded-lg text-balance space-y-12">
            <p className="">
              Kushanda is built on more than a decade of hands on experience
              running a cleaning business in London, serving residential clients
              and commercial offices.
            </p>
            <p className="">
              That experience has taught us that great cleaning is about more
              than making a space look clean. It is about <span className="font-bold">reliability,
              communication, organisation, care and consistency.</span>
            </p>
              
              </div>
            
            <div className=" shadow-lg bg-green-200 px-4 py-12 rounded-lg text-balance space-y-12">
              <p className="">
                We understand that clients need someone they can trust to arrive
                when expected, treat their property with respect and deliver a
                dependable service.
              </p>
              <p className="">Our goal is simple:</p>
              <p className="text-xl font-bold">
                To make life easier by providing cleaning you can rely on.
              </p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
