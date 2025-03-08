"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Send, Loader2 } from "lucide-react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter, useParams } from "next/navigation";
import { signInAnonymously } from "firebase/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GreetingsMessage } from "@/components/modules/Testimonials/GreetingsMessage";
import { auth } from "@/firebase/config";
import { apiCheckTestimonial, apiUpdateTestimonial } from "@/firebase/queries";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  company: yup.string().required("Company name is required"),
  message: yup
    .string()
    .min(25, "Message must be at least 25 characters long")
    .required("Message is required"),
});

const TestimonialForm = () => {
  const { id } = useParams();
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await signInAnonymously(auth);
      setLoading(true);
      await apiUpdateTestimonial({ id: id as string, ...values });
      setSubmitted(true);
      setLoading(false);
    },
  });

  const handleCheck = async () => {
    try {
      const response = await apiCheckTestimonial(id as string);
      if (!response?.id) {
        push("/");
        return;
      }

      if (response?.updatedAt) {
        setSubmitted(true);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCheck();
  }, [id]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 py-12">
      <Card className="bg-white shadow-md border-t-4 border-[#ef6b7b]">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
            <MessageSquare className="mr-2 h-6 w-6 text-indigo-500" />
            Share Your Experience
          </CardTitle>
          <CardDescription className="text-gray-600 pt-4 font-raleway leading-6 font-medium">
            Thank you for taking the time to share your experience with us. Your
            feedback is invaluable and helps us improve our services. We
            appreciate your support and look forward to reading your
            testimonial!
          </CardDescription>
        </CardHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full font-raleway"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                  {errors.name && touched.name && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full font-raleway"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  className="w-full font-raleway"
                  value={values.company}
                  onChange={handleChange("company")}
                />
                {errors.company && touched.company && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.company}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Your Testimonial
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share your experience with our service..."
                  className="min-h-32 w-full font-raleway"
                  value={values.message}
                  onChange={handleChange("message")}
                />
                {errors.message && touched.message && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.message}
                  </span>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Testimonial
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <GreetingsMessage />
        )}
      </Card>
    </div>
  );
};

export default TestimonialForm;
