import React from "react";
import Link from "next/link";
import { Command } from "lucide-react";

const Logo = ({ textSize = "text-base" }) => {
  return (
    <Link href="/" className={`flex items-center gap-1 font-bold ${textSize}`}>
      <Command />
      AlgoIllustrator
    </Link>
  );
};

export default Logo;
