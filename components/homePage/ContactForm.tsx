'use client'

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupTextarea } from "../ui/input-group"



const formSchema = z.object({
  email: z
    .string()
    .min(2, "Email Address must be at least 2 characters."),
  name: z
    .string()
    .min(2, "Your name  must be at least 2 characters."),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters."),
  message: z
    .string()
    .min(2, "The message must be at least 2 characters.")
})

export default function ContactForm() {
     const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  })

      function onSubmit(data: z.infer<typeof formSchema>) {
    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   classNames: {
    //     content: "flex flex-col gap-2",
    //   },
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // })
    toast.success("Form has been submitted")
    form.reset()
  }
  return (
    <>
        <Card className="w-full border border-cyan-200">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold">Get In touch</CardTitle>
        <CardDescription>
          
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form id="contact-form-1" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex-1">
                  <FieldLabel htmlFor="form-rhf-name" className="text-base sm:text-lg">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    type="name"
                    id="form-rhf-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Tony Morgan"
                    autoComplete="off"
                    className="px-4 py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="flex-1">
                  <FieldLabel htmlFor="form-rhf-email" className="text-base sm:text-lg">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="form-rhf-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="youremailaddress@.co"
                    autoComplete="off"
                    className="px-4 py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

          </div>
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-subject" className="text-base sm:text-lg">
                    Subject
                  </FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    id="form-rhf-subject"
                    aria-invalid={fieldState.invalid}
                    placeholder="South Bank"
                    autoComplete="off"
                    className="px-4 py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-message" className="text-lg">
                    Service Area
                  </FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    id="form-rhf-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="West London"
                    autoComplete="off"
                    className="px-4 py-6"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            /> */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-1-message" className="text-base sm:text-lg">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="contact-form-1-message"
                      placeholder="What did you have in mind..."
                      rows={6}
                      className="min-h-24 resize-y"
                      aria-invalid={fieldState.invalid}
                    />
                  
                  </InputGroup>
                  
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            
            
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="px-4 sm:px-6">
        <Field orientation="horizontal">
          {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button> */}
          <Button type="submit" size="lg" form="contact-form-1" className="w-full sm:w-auto px-8 py-6 bg-lime-600 text-base sm:text-lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ?"Submitting...":"Submit"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
    </>
  )
}
