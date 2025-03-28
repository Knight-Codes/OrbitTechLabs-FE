"use client";

import React from "react";
import { signInAnonymously } from "firebase/auth";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { Toaster, toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { auth } from "@/firebase/config";
import { apiPostMessageDoc } from "@/firebase/queries";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .max(250, "Message should be less than 250 characters")
    .required("Message is required"),
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { handleSubmit, handleChange, handleReset, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        await signInAnonymously(auth);
        setIsLoading(true);
        await apiPostMessageDoc(values);
        setIsLoading(false);
        handleReset(null);
        toast("Thank you for your message.", {
          description: "We will get back to you soon.",
          closeButton: true,
          position: "bottom-center",
        });
      },
    });

  return (
    <div className="w-full h-full flex flex-col gap-8 justify-center items-center p-6 md:p-8">
      <form
        className="w-full max-w-md lg:max-w-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <p className="text-md font-medium hidden md:block">
          👋 Have a question about our services, or interested in collaborating?
          Please use the form below to contact us
        </p>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary font-raleway"
          />
          {errors.email && touched.email && (
            <span className="text-red-500 text-xs ml-1">{errors.email}</span>
          )}
        </div>

        <div className="w-full space-y-2">
          <Input
            type="text"
            placeholder="Subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary font-raleway"
          />
          {errors.subject && touched.subject && (
            <span className="text-red-500 text-xs ml-1">{errors.subject}</span>
          )}
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            className="resize-none transition-all duration-200 focus:ring-2 focus:ring-primary font-raleway"
          />

          {errors.message && touched.message && (
            <span className="text-red-500 text-xs ml-1">{errors.message}</span>
          )}
          <span className="text-gray-500 text-sm float-right">
            {values.message.length} / 250
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-slate-800 text-white rounded-xl h-12 transition-all duration-200 hover:scale-[1.02] text-md"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>

      <Toaster />
    </div>
  );
};
