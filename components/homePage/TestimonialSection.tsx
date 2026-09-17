import { TestimonialsOne } from "@/constData/homePageData";
import CloudinaryVideo from "../mediaComponents/CloudinaryVideo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function TestimonialSection() {
  return (
    <>
      <section className="c" id="testimonials">
        <div className="min-h-[30dvh] bg-amber-50 ">
          <div className="max-w-4xl mx-auto text-center px-4 py-16">
            <p className="text-amber-600 text-2xl font-medium mb-4">
              There is no you or us, there is only “we”
            </p>
            <p className="text-sm leading-7">
              We are ready to work and help you achieve your business goals
              while doing social good. Take your life back and focus on
              what&apos;s important to you. Let us handle the daily tasks and
              build your business together.
            </p>
          </div>
        </div>
        <div className="min-h-[30dvh]  ">
          <div className="max-w-4xl mx-auto text-center px-4 py-16">
            <p className="text-amber-600 text-2xl font-medium mb-4">
              Testimonials from our happy clients
            </p>
          </div>
          {/* testimonial videos  */}
          <div className="flex justify-center items-center gap-20">
            <div className="border rounded-md h-4 w-4/12">
              <CloudinaryVideo
                src="testimonial_1"
                autoPlay={false}
                controls={true}
                height={400}
                width={400}
                className="aspect-video rounded-md"
              />
            </div>
            <div className="border rounded-md h-4 w-4/12">
              <CloudinaryVideo
                src="testimonial_2"
                autoPlay={false}
                controls={true}
                height={400}
                width={400}
                className="aspect-video rounded-md"
              />
            </div>
          </div>
        </div>
        {/* testimonial carousel  */}
        <div className="min-h-[30dvh] mt-[54dvh] grid place-content-center">
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {TestimonialsOne.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="">
                    <div className="my-4">
                      <p className="text-sm text-center leading-6 italic">
                        &quot;{testimonial.qoute}&quot;
                      </p>
                    </div>
                    <div className="grid place-content-center my-4 text-center">
                      {testimonial.imgSrc == "" ? (
                        <div className="size-36 mx-auto rounded-full border bg-zinc-400 border-amber-600" />
                      ) : (
                        <CloudinaryImage
                          imgSrc=""
                          height={400}
                          width={400}
                          alt={`${testimonial.name} image`}
                          classNames="rounded-full border  border-amber-600"
                        />
                      )}
                      <div className="mt-8">
                        <p className="text-xs text-amber-600">{testimonial.title}</p>
                        <p className="text-lg my-2">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-amber-600 bg-amber-300" />
            <CarouselNext className="text-amber-600 bg-amber-300" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
