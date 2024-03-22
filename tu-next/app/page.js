import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className=" text-5xl mb-8 font-bold "> Next.js Tutorial </h1>
      <Link href="/client" className="btn btn-accent uppercase ">
        get started
      </Link>
    </div>
  );
}
