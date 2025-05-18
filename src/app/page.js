"use client";
import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import ProjectShowcase from "@/components/ProjectShowcase";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <main>
        <Banner />
        <ProjectShowcase />
      </main>
    </>
  );
}
