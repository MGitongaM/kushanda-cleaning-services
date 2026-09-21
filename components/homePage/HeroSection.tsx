export default function HeroSection() {
  return (
    <>
      <section className="mt-16 sm:mt-20">
        <div className="min-h-[40dvh] sm:min-h-[45dvh] lg:min-h-[60dvh] relative">
          <div className=" absolute inset-0  bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789631989/hero_homePage.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-amber-5000/40" />
        </div>
        <div className=" bg-amber-50 px-4 py-8 sm:py-10 ">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-[1.1] text-amber-600 font-medium text-balance">
              Global
              <br /> Virtual Assistants
            </h1>
            <p className="my-3 sm:my-4 text-amber-600 text-sm sm:text-base leading-relaxed px-2 text-balance">
              Professionalism | Economic Empowerment | Client-focussed |
              Sustainability
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
