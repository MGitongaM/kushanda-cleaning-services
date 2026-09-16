import { MonitorX } from "lucide-react";


export default function NotFoundPage() {
  return (
    <>
    <section className="">
        <div className="container mx-auto h-[90dvh] grid place-content-center">
            <MonitorX size={180} className="text-amber-300 mx-auto"/>
            <p className="text-base font-semibold text-center px-8 py-4 mt-10 bg-amber-50 rounded-sm">Looks like we have an issue</p>
        </div>
    </section>
    </>
  )
}
