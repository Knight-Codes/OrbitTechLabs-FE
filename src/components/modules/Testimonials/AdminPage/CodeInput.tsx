"use client";

import React, { useState, useRef, useEffect } from "react";
import { signInAnonymously } from "firebase/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckSquare } from "lucide-react";
import { apiMatchAdminPassword } from "@/firebase/queries";
import { auth } from "@/firebase/config";

export const CodeInput = ({
setIsAdmin,
}: {
  setIsAdmin: (value: boolean) => void;
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitClick = (digit: string) => {
    if (activeIndex < otp.length) {
      const newOtp = [...otp];
      newOtp[activeIndex] = digit;
      setOtp(newOtp);
      if (activeIndex < otp.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handleBackspace = () => {
    if (activeIndex > 0 || otp[activeIndex] !== "") {
      const newOtp = [...otp];

      if (newOtp[activeIndex] !== "") {
        newOtp[activeIndex] = "";
      } else if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
        newOtp[activeIndex - 1] = "";
      }

      setOtp(newOtp);
    }
  };

  const handleInputClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleSubmit = async () => {
    const otpValue = otp.join("");
    if (otpValue.length === otp.length) {
      await signInAnonymously(auth);
      const isMatch = await apiMatchAdminPassword(otpValue);
      setIsAdmin(isMatch);
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, otp.length);
  }, [otp.length]);

  const renderKeypad = () => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
      <div className="grid grid-cols-3 gap-2 mt-4">
        {digits.map((digit, index) => (
          <Button
            key={digit}
            onClick={() => handleDigitClick(digit.toString())}
            className={`text-2xl py-6 ${index === 9 ? "col-start-2" : ""}`}
            variant="outline"
          >
            {digit}
          </Button>
        ))}
        <Button
          onClick={handleBackspace}
          variant="outline"
          className="text-2xl py-6"
        >
          <ArrowLeft size={24} />
        </Button>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-12">
      <CardHeader>
        <CardTitle className="text-center">Enter Verification Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-2 mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              value={digit}
              readOnly
              onClick={() => handleInputClick(index)}
              className={`w-14 h-14 text-center text-2xl ${
                index === activeIndex ? "ring-2 ring-primary" : ""
              }`}
            />
          ))}
        </div>
        {renderKeypad()}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={otp.some((digit) => digit === "")}
        >
          <CheckSquare size={18} className="mr-2" /> Submit
        </Button>
      </CardFooter>
    </Card>
  );
};
