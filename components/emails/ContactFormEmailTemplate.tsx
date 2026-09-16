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

interface ContactFormEmailProps{
    name:string,
    email:string,
    subject:string,
    message:string,
}
export default function ContactFormEmailTemplate({name,email,subject,message}:ContactFormEmailProps) {
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
          <Preview>Contact Form - Kushanda.co</Preview>
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
                Here is are the details from Kushanda Cleaning Services Contact Form:
             
            </Text>
            <Section>
                <Text>
                    Name: <strong>{name}</strong>
                </Text>
                <Text>
                    Email: <strong>{email}</strong>
                </Text>
                <Text>
                    Subject: <strong>{subject}</strong>
                </Text>
                <Text>
                    Message: <strong>{message}</strong>
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
