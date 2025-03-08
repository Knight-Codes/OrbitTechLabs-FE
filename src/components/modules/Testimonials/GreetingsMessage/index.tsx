import React from "react";
import { Check } from "lucide-react";
import { CardContent } from "@/components/ui/card";

export const GreetingsMessage = () => (
  <CardContent className="py-10">
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="h-6 w-6 text-green-600" />
      </div>
      <h3 className="text-xl font-medium text-gray-900">Thank You!</h3>
      <p className="font-raleway text-gray-600 max-w-md">
        Your testimonial has been submitted successfully. We truly appreciate
        you taking the time to share your thoughts with us.
      </p>
    </div>
  </CardContent>
);
