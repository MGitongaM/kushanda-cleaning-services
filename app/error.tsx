'use client'

import { ServerCrash } from "lucide-react";


export default function ErrorPage() {
  return (
    <>
    <section className="c">
        <div className="container mx-auto h-[90dvh] grid place-content-center">
            <ServerCrash size={180} className="text-red-400 mx-auto"/>
            <p className="text-base font-semibold text-center px-8 py-4 mt-10 bg-red-50 rounded-sm">Looks like we have an issue</p>
        </div>
    </section>
    </>
  )
}
