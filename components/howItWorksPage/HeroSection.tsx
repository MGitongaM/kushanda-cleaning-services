import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-[70dvh]">
            <CloudinaryImage
              imgSrc="Hero_How_it_Works"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-amber-600/20">
          <div className="max-w-xl mx-auto grid place-content-center h-full px-4 sm:px-6 py-10 sm:py-12 md:py-36 lg:py-16">
            <div className="c">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 leading-tight">
                How It Works
              </h1>
              <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10 sm:mb-16 lg:mb-20">
                Kushanda makes things quick and simple. Getting the support you
                need is only a 3 step process.
              </p>
            </div>
            <div className="space-y-8 sm:space-y-10">
              <div className="c">
                <p className="text-base sm:text-lg text-amber-600 font-medium leading-relaxed">
                  1. Book a free consultation
                </p>
                <p className="leading-relaxed sm:leading-7 mt-3 sm:mt-4 text-sm sm:text-base">
                  We&apos;d be delighted to discuss your business, vision and
                  identify tasks that you&apos;d like outsourced. Based on this, we
                  will agree which package suits your requirements and how we
                  can work together.
                </p>
              </div>
              <div className="c">
                <p className="text-base sm:text-lg text-amber-600 font-medium leading-relaxed">2. Sign Up</p>
                <p className="leading-relaxed sm:leading-7 mt-3 sm:mt-4 text-sm sm:text-base">
                  Based on our initial consultation, we will email you a
                  contract, terms and conditions and any other relevant
                  information.
                </p>
              </div>
              <div className="c">
                <p className="text-base sm:text-lg text-amber-600 font-medium leading-relaxed">3. Onboarding</p>
                <p className="leading-relaxed sm:leading-7 mt-3 sm:mt-4 text-sm sm:text-base">
                  We arrange a convenient time to get set up on your systems,
                  meet the team and learn your processes.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
