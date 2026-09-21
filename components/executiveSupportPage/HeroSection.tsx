import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function HeroSection() {
  return (
    <>
        <section className="c">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-dvh">
                <CloudinaryImage
                  imgSrc="Executive_Support"
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
                    Executive Support
                  </h1>
                  <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10">
                   Successful business people need a skilled and professional support team.
                  </p>
                  <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10 sm:mb-16 lg:mb-20">
                   Our ​trustworthy, conscientious, and driven Virtual Assistants will use their skills and experience to confidently manage your office (and, if you like, home) life.
                    We&apos;d be honoured to help you with:
                  </p>
                </div>
                <div className="space-y-8 sm:space-y-10 px-4">
                    <ul className="list-disc space-y-4">
                        <li>Telephone Answering</li>
                        <li>Diary & Inbox Management</li>
                        <li>Travel & Accommodation Arrangements</li>
                        <li>Take Minutes, Set Agendas, Track & Chase Action Points & Arrange Board Packs</li>
                        <li>Secretarial & Administrative Functions</li>
                        <li>Online Filing & Documentation Management</li>
                        <li>CRM/Database Management</li>
                        <li>Copy & Audio Typing</li>
                        <li>Proofreading & Editing</li>
                        <li>Private, Household & Family Assistance</li>
                        <li>Lifestyle arrangements: gifts, tickets, private appointments, etc</li>
                        <li>Virtual Team Management</li>
                        <li>Project Management</li>
                    </ul>
                  
                </div>
              </div>
              </div>
            </div>
          </section>
    </>
  )
}
