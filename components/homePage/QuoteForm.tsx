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
     const [open, setOpen] = React.useState(false)
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
        toast.success("Details have been submitted")
        form.reset()
        setOpen(false)
      }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          render={
            <Button
              type="button"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 bg-green-600 hover:bg-green-700 text-base sm:text-lg"
            >
              Get a Quote
            </Button>
          }
        />
          <DialogContent className="w-full max-w-lg sm:max-w-xl max-h-[90dvh] overflow-y-auto p-4 sm:p-6">
            <DialogHeader className="text-center">
                <DialogTitle className="text-xl sm:text-2xl">Request a Quote</DialogTitle>
                <DialogDescription className="text-sm">Please fill all the fields</DialogDescription>
            </DialogHeader>
       <Card className="w-full border border-cyan-200 shadow-none">
          <CardHeader className="px-0 sm:px-2 pt-2">
            <CardTitle className="text-xl font-bold hidden">Get In touch</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 sm:px-2">
            <form id="quote-form-1" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <FieldLabel htmlFor="quote-email" className="text-base sm:text-lg">
                        Email
                      </FieldLabel>
                      <Input
                        {...field}
                        type="email"
                        id="quote-email"
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
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <FieldLabel htmlFor="quote-phone" className="text-base sm:text-lg">
                        Phone
                      </FieldLabel>
                      <Input
                        {...field}
                        type="tel"
                        id="quote-phone"
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
                      <FieldLabel htmlFor="quote-location" className="text-base sm:text-lg">
                        Location
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="quote-location"
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
                      <FieldLabel htmlFor="quote-serviceArea" className="text-base sm:text-lg">
                        Service Area
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="quote-serviceArea"
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
          <div className="mt-6">
            <Button type="submit" size="lg" className="w-full sm:w-auto px-8 py-6 bg-lime-600 text-base sm:text-lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ?"Submitting...":"Submit"}
              </Button>
          </div>
            </form>
          </CardContent>
          <CardFooter className="hidden">
          </CardFooter>
        </Card>
          </DialogContent>
    </Dialog>
  )
}
