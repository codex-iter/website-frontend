import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}
