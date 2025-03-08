"use client";

import React, { useState } from "react";
import { CodeInput } from "./CodeInput";
import { CreateTestimonial } from "./GenerateTestimonial";

export const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="h-screen">
      {isAdmin ? <CreateTestimonial /> : <CodeInput setIsAdmin={setIsAdmin} />}
    </div>
  );
};
