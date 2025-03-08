"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiPostCreateTestimonialBoilerplate } from "@/firebase/queries";

export const CreateTestimonial = () => {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    const id = uuidv4();
    try {
      await apiPostCreateTestimonialBoilerplate(id);
      setLink(`${window.location.origin}/share-testimonials/${id}`);
      setCopied(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-[50vh]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-center">
            Testimonial Document
          </CardTitle>
          <CardDescription className="text-center">
            Click the button below to generate a shareable link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Generate Link
          </Button>

          {link && (
            <div className="flex mt-4 items-center">
              <Input
                value={link}
                readOnly
                className="flex-1 pr-10 bg-gray-50"
              />
              <Button
                onClick={handleCopy}
                variant="ghost"
                size="icon"
                className="ml-2"
              >
                <Copy size={18} />
              </Button>
              {copied && (
                <span className="ml-2 text-sm text-green-600">Copied!</span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
