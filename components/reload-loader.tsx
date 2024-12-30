"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loader";

const CustomLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return loading ? <Loader /> : null;
};

export default CustomLoader;
