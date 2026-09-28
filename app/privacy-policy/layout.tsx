import React from "react";


export default function MdxLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 mt-20">
      <div className="prose">
      {children}
      </div>
    </div>
    </>
  )
}