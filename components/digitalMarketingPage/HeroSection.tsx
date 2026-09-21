import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-dvh">
            <CloudinaryImage
              imgSrc="Digital_Marketing"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-amber-600/20">
            <div className="max-w-2xl mx-auto grid place-content-center h-full px-4 sm:px-2 py-10 sm:py-12 md:py-36 lg:py-16 mt-10">
              <div className="c">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 leading-tight">
                  Digital Marketing
                </h1>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10">
                  Marketing is a contest for people&apos;s attention.
                </p>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10 sm:mb-16 lg:mb-20">
                  Marketing is a contest for people&apos;s attention ​Marketing
                  is an essential part of your business. Kushanda&apos;s Virtual
                  Assistants delight in working with you to develop and manage a
                  constant stream of fresh marketing material across multiple
                  platforms. Like the African Honeyguide, we get a buzz out of
                  helping you find sweet honey with:
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
              <div className="">
                <p className="font-semibold mb-4">Digital Content & Marketing</p>
                <ul className="list-disc space-y-4">
                  <li>Logo Design, Graphic Design, Social Media Content Design</li>
                  <li>Research</li>
                  <li>Content Writing</li>
                  <li>Editing & Proofreading for websites, social media, brochures, etc</li>
                  <li>Data Capture & Analysis</li>
                  <li>Sourcing impactful images that complement copy</li>
                  <li>Clean existing database and build new databases</li>
                  <li>Coordinate design and print of marketing material</li>
                  <li>Collect client feedback & testimonials</li>
                </ul>
              </div>
              <div className="">
                <p className="font-semibold mb-4">Social Media</p>
                <ul className="list-disc space-y-4">
                  <li>Familiar platforms are Facebook, Twitter, LinkedIn & Pinterest </li>
                  <li>Account creation, set up and handover</li>
                  <li>Schedule & monitor posts via Buffer, Agora Pulse or Hootsuite</li>
                  <li>Set up & monitor Facebook Adverts                  </li>
                  <li>Publish written & visual content</li>
                  <li>Monitor & reply to customer queries</li>
                  
                </ul>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
