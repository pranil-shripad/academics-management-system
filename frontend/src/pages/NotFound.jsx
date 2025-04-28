// src/pages/ErrorPage.jsx

import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-lg text-muted-foreground">Oops! The page you are looking for does not exist.</p>
      <Button onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
