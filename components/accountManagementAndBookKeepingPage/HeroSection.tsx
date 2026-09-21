import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-dvh">
            <CloudinaryImage
              imgSrc="Account_Management_and_Book_Keeping"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full min-h-[40dvh] md:h-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-amber-600/20">
            <div className="max-w-2xl mx-auto grid place-content-center h-full px-4 sm:px-2 py-10 sm:py-12 md:py-36 lg:py-16 mt-10">
              <div className="c">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 leading-tight">
                  Account Management and Book Keeping
                </h1>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10">
                  Counting the pennies
                </p>
                <p className="leading-relaxed sm:leading-7 text-sm sm:text-base mt-4 mb-10 sm:mb-16 lg:mb-20">
                  Counting the pennies Kushanda Virtual Assistants enjoy doing
                  your basic bookkeeping using software systems. Expenses,
                  invoices, receipts, purchase orders, we keep track of it all
                  for you. We&apos;d be delighted to help you with:
                </p>
              </div>
              <div className="grid grid-cols-1 px-4">
                <div className="">
                  <p className="font-semibold mb-4"></p>
                  <ul className="list-disc space-y-4">
                    <li>Raise & Track Purchase Orders & Invoices</li>
                    <li>Posting in bookkeeping software systems</li>
                    <li>Credit Control: chase unpaid invoices</li>
                    <li>Liaise with Accountants</li>
                    
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
