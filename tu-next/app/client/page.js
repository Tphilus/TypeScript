"use client";
import React, { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className=" text-7xl font-bold mb-4 "> {count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        {count} increase
      </button>
    </div>
  );
}
