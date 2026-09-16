

import QuoteFormEmailTemplate from '@/components/emails/QuoteFormEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
  try {
    const{email,phone,location,serviceArea}=await request.json()
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gitoshmbae@gmail.com','delivered@resend.dev'],
      subject: 'New Contact Form Email',
      react: QuoteFormEmailTemplate({email,phone,location,serviceArea}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}