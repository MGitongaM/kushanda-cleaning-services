import CareServicesSection from '@/components/carersAndNursesPage/CareServicesSection'
import ComplianceSection from '@/components/carersAndNursesPage/ComplianceSection'
import ContactSection from '@/components/carersAndNursesPage/ContactSection'
import HeroSection from '@/components/carersAndNursesPage/HeroSection'
import LeadershipSection from '@/components/carersAndNursesPage/LeadershipSection'
import StaffingSection from '@/components/carersAndNursesPage/StaffingSection'
import { Metadata } from 'next'
import { getCldOgImageUrl } from 'next-cloudinary'
import React from 'react'



const url= getCldOgImageUrl({src:"carers-and-nurses_OG"})
export const metadata: Metadata = {
  title: "Care & Nursing Recruitment Agency Guernsey | Kushanda",
  description: "Kushanda connects individuals, families, and care homes in Guernsey with reliable carers and nurses for agency cover and direct employment.",
  openGraph:{
    images:[
      {
        width:1200,
        height:627,
        url
      }
    ]
  }
};

export default function CarersAndNursesPage() {
  return (
    <>
        <HeroSection/>
        <LeadershipSection/>
        <CareServicesSection/>
        <StaffingSection/>
        <ComplianceSection/>
        <ContactSection/>
    </>
  )
}
