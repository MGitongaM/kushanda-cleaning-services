import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from 'react-email';

interface QuoteFormEmailProps{
    email:string,
    phone:string,
    location:string,
    serviceArea:string,
}

export default function QuoteFormEmailTemplate({email,phone,location,serviceArea}:QuoteFormEmailProps) {
  return (
    <>
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>Quote Form - Kushanda.co</Preview>
          <Container className="mx-auto my-10 max-w-116.25 rounded border border-[#eaeaea] border-solid p-5">
            <Section className="mt-8">
              <Img
                src={`https://res.cloudinary.com/hqho8qw7/image/upload/v1789568822/Kushanda_Cleaning_Services_logo_1.png`}
                width="400"
                height="400"
                alt="Kushanda Co Logo"
                className="object-cover size-80"
              />
            </Section>
            <Heading className="mx-0 my-7.5 p-0 text-center font-normal text-[24px] text-black">
            </Heading>
            <Text className="text-[14px] text-black leading-6">
              Hi Team,
            </Text>
            <Text className="text-[14px] text-black leading-6">
                Here is are Quote Inquiry Details:
             
            </Text>
            <Section>
                <Text>
                    Email: <strong>{email}</strong>
                </Text>
                <Text>
                    Phone: <strong>{phone}</strong>
                </Text>
                <Text>
                    Location: <strong>{location}</strong>
                </Text>
                <Text>
                    Service Area: <strong>{serviceArea}</strong>
                </Text>

            </Section>
         
            <Hr className="mx-0 my-6.5 w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-6">
              
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
    </>
  )
}
