import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function FounderSection() {
  return (
    <>
      <section className="min-h-[50dvh] bg-amber-600/20 ">
        <div className="container mx-auto px-4 lg:px-32 py-8  my-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="col-span-5 border-4 border-amber-600">
              <CloudinaryImage
                imgSrc="Hero_How_it_Works"
                height={400}
                width={400}
                alt=""
                classNames="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-7">
              <h3 className="text-2xl text-amber-600 font-semibold">
                Founder - Nyasha Gwatidzo
              </h3>
              <div className="space-y-12 mt-4">
                <p className="leading-7">
                  Nyasha Gwatidzo was born in a rural village in Zimbabwe and
                  came over to the UK in the 1970&apos;s. Nyasha finished her &apos;A&apos;
                  levels and gained a degree in Chemistry from Lambeth Women in
                  Mind and then enrolled to do a PhD at Imperial College,
                  London. Realising solid chemistry wasn&apos;t her passion she
                  enrolled and completed Gestalt Therapy and Contribution
                  Training at Pellin Institute and 5 years later gained an MA in
                  Therapeutic Childcare from Reading University so she could
                  work with adults and children with emotional issues. Nyasha is
                  a qualified psychotherapist, social worker, coach and mentor.
                </p>
                <p className="leading-7">
                  As a black African woman, Nyasha faced discrimination
                  throughout her journey but with sheer determination and
                  passion she developed a successful social enterprise. Nyasha
                  is a distinguished businesswoman, social entrepreneur and
                  philanthropist who has, over a 30 year career, launched and
                  built successful multi-million pound businesses and social
                  enterprises in the United Kingdom, generating a cumulative
                  $130 million turnover.
                </p>
                <p className="leading-7">
                  With a strong interest in social impact investment, solid
                  business acumen and extensive knowledge of Southern African
                  countries, Nyasha is a formidable business force specialising
                  in social impact start-ups and helping them achieve rapid,
                  profitable and sustainable growth. Her vision for the future
                  is to make global connections and to mentor social
                  entrepreneurs through a social impact investment fund, which
                  will help people, especially women, to reach economic
                  independence through enterprise.
                </p>
              </div>
            </div>
          </div>
          <div className="my-20"/>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="col-span-7">
              <h3 className="text-2xl text-amber-600 font-semibold">
                Founder - Catherine Chodokufa
              </h3>
              <div className="space-y-12 mt-4">
                <p className="leading-7">
                  Nyasha Gwatidzo was born in a rural village in Zimbabwe and
                  came over to the UK in the 1970&apos;s. Nyasha finished her &apos;A&apos;
                  levels and gained a degree in Chemistry from Lambeth Women in
                  Mind and then enrolled to do a PhD at Imperial College,
                  London. Realising solid chemistry wasn&apos;t her passion she
                  enrolled and completed Gestalt Therapy and Contribution
                  Training at Pellin Institute and 5 years later gained an MA in
                  Therapeutic Childcare from Reading University so she could
                  work with adults and children with emotional issues. Nyasha is
                  a qualified psychotherapist, social worker, coach and mentor.
                </p>
                <p className="leading-7">
                  As a black African woman, Nyasha faced discrimination
                  throughout her journey but with sheer determination and
                  passion she developed a successful social enterprise. Nyasha
                  is a distinguished businesswoman, social entrepreneur and
                  philanthropist who has, over a 30 year career, launched and
                  built successful multi-million pound businesses and social
                  enterprises in the United Kingdom, generating a cumulative
                  $130 million turnover.
                </p>
                <p className="leading-7">
                  With a strong interest in social impact investment, solid
                  business acumen and extensive knowledge of Southern African
                  countries, Nyasha is a formidable business force specialising
                  in social impact start-ups and helping them achieve rapid,
                  profitable and sustainable growth. Her vision for the future
                  is to make global connections and to mentor social
                  entrepreneurs through a social impact investment fund, which
                  will help people, especially women, to reach economic
                  independence through enterprise.
                </p>
              </div>
            </div>
            <div className="col-span-5 border-4 border-amber-600">
              <CloudinaryImage
                imgSrc="Hero_How_it_Works"
                height={400}
                width={400}
                alt=""
                classNames="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
