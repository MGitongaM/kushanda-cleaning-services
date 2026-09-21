import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-dvh">
            <CloudinaryImage
              imgSrc="Websites"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full min-h-[40dvh] md: h-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-amber-600/20">
            <div className="max-w-2xl mx-auto grid place-content-center h-full px-4 sm:px-2 py-10 sm:py-12 md:py-36 lg:py-16 mt-10">
              <div className="c">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 leading-tight">
                  Websites
                </h1>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10">
                  Your website is the shop window to your business
                </p>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10 sm:mb-16 lg:mb-20">
                  Our Kushanda team includes web designers and backend coders
                  with international qualifications and experience. The coding
                  world is so vast that we may not have all the answers. If we
                  cannot find the answers within our Africa-wide network we will
                  tell you. We&apos;d be thrilled to help you with:
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
                <div className="">
                  <p className="font-semibold mb-4">
                    
                  </p>
                  <ul className="list-disc space-y-4">
                    <li>
                      Domain purchases, hosting, and set up
                    </li>
                    <li>Email hosting and set up</li>
                    <li>Domain, Server/DNS set up</li>
                    <li>Blog posts</li>
                    <li>SEO (Search Engine Optimization)</li>
                    <li>Website creation</li>
                    
                  </ul>
                </div>
                <div className="">
                  <p className="font-semibold mb-4"></p>
                  <ul className="list-disc space-y-4">
                    <li>Implement updates, formatting, images, branding etc </li>
                    <li>Proofreading & Editing Content</li>
                    <li>Website Review and Feedback</li>
                    <li>Website platforms used: Wix, WordPress, Squarespace, Coded</li>
                    
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
