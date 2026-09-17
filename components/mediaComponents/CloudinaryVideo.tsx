"use client";

import { CldVideoPlayer as CldVideoPlayerDefault, CldVideoPlayerProps } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
 


export default function CloudinaryVideo(props:CldVideoPlayerProps) {
  return (
    <>
    <CldVideoPlayerDefault {...props}/>
    </>
  )
}