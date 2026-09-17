export default function HeroSection() {
  return (
    <>
      <section className="mt-32">
        <div className="min-h-[50dvh]  relative">
          <div className=" absolute inset-0  bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789631989/hero_homePage.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-amber-5000/40" />
        </div>
        <div className=" bg-amber-50 px-4 py-10 ">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className=" text-7xl leading-20 text-amber-600 font-medium">
              Global
              <br /> Virtual Assistants
            </h1>
            <p className="my-4 text-amber-600">
              Professionalism | Economic Empowerment | Client-focussed |
              Sustainability
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
