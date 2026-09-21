"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";

const formSchema = z.object({
  email: z.string().min(2, "Email Address must be at least 2 characters."),
  firstName: z
    .string()
    .min(2, "Your firstName  must be at least 2 characters."),
  lastName: z.string().min(2, "LastName must be at least 2 characters."),
  message: z.string().min(2, "The message must be at least 2 characters."),
  subject:z.string(),
});

export default function ContactUSPageContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject:"Kushanda.co/contact-us Contact Us Form"
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`/api/sendContactEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.ok) {
      }
      form.reset();
      toast.success("Form has been submitted");
    } catch (error: unknown) {
      toast.error("Error submitting form, please try again later");
      console.log(error instanceof Error);
    }
  }
  return (
    <>
      <Card className="w-full bg-transparent ">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold"></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form id="contact-form-1" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Controller
                  name="firstName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <FieldLabel
                        htmlFor="form-rhf-name"
                        className="text-base sm:text-lg"
                      >
                        Name
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="form-rhf-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Tony Morgan"
                        autoComplete="off"
                        className="px-4 py-6 bg-slate-100"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="lastName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="flex-1">
                      <FieldLabel
                        htmlFor="form-rhf-lastName"
                        className="text-base sm:text-lg"
                      >
                        LastName
                      </FieldLabel>
                      <Input
                        {...field}
                        type="text"
                        id="form-rhf-lastName"
                        aria-invalid={fieldState.invalid}
                        placeholder="South Bank"
                        autoComplete="off"
                        className="px-4 py-6 bg-slate-100"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="flex-1">
                    <FieldLabel
                      htmlFor="form-rhf-email"
                      className="text-base sm:text-lg"
                    >
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      id="form-rhf-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="youremailaddress@.co"
                      autoComplete="off"
                      className="px-4 py-6 bg-slate-100"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="contact-form-1-message"
                      className="text-base sm:text-lg"
                    >
                      Message
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="contact-form-1-message"
                        placeholder="What did you have in mind..."
                        rows={6}
                        className="min-h-24 resize-y bg-slate-100"
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
            <Button
              type="submit"
              size="lg"
              form="contact-form-1"
              className="w-full flex-1 sm:w-auto px-8 py-6 bg-amber-600 hover:bg-amber-500 text-base sm:text-lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </>
  );
}
