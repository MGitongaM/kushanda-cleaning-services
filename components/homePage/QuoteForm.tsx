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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"



const formSchema = z.object({
  email: z
    .string()
    .min(2, "Email Address must be at least 2 characters."),
  phone: z
    .string()
    .min(2, "Your phone number must be at least 2 characters."),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters."),
  serviceArea: z
    .string()
    .min(2, "The service area must be at least 2 characters.")
})


export default function QuoteForm() {
     const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          phone: "",
          location: "",
          serviceArea: "",
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
        toast.success("Details have been submitted")
        form.reset()
      }
  return (
    <>
    <Dialog>
        <form id="quote-form-1" onSubmit={form.handleSubmit(onSubmit)}>
        <DialogTrigger render={   <Button type="submit" size="lg" form="quote-form-1" className="px-8 py-6 bg-green-600 hover:bg-green-700 text-xl" >
            Get a Quote
          </Button>}/>
          <DialogContent className="min-w-3xl mx-auto py-20">
            <DialogHeader className="text-center">
                <DialogTitle></DialogTitle>
                <DialogDescription>please fill all the fields</DialogDescription>
            </DialogHeader>
       <Card className="w-full border border-cyan-200">
          <CardHeader>
            <CardTitle className="text-5xl font-bold hidden ">Get In touch</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent>
              <FieldGroup>
              <div className="flex gap-12 ">
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-email" className="text-lg">
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
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-phone" className="text-lg">
                        Phone
                      </FieldLabel>
                      <Input
                        {...field}
                        type="phone"
                        id="form-rhf-phone"
                        aria-invalid={fieldState.invalid}
                        placeholder="0700 000 000"
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
                  name="location"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-location" className="text-lg">
                        Location
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="form-rhf-location"
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
                <Controller
                  name="serviceArea"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-serviceArea" className="text-lg">
                        Service Area
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="form-rhf-serviceArea"
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
                />
                
              </FieldGroup>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
                </Button> */}
              <Button type="submit" size="lg" form="quote-form-1" className="px-8 py-6 bg-lime-600 text-xl" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ?"Submitting...":"Submit"}
              </Button>
            </Field>
          </CardFooter>
        </Card>
          </DialogContent>
                </form>
    </Dialog>
    </>
  )
}
