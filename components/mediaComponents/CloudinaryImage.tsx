"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  imgSrc: string;
  width: number;
  height: number;
  alt: string;
  classNames:string
}

export default function CloudinaryImage({
  imgSrc,
  width,
  height,
  alt,
  classNames
}: CloudinaryImageProps) {
  return (
    <>
      <CldImage src={imgSrc} width={width} height={height} alt={alt}  className={classNames}/>
    </>
  );
}