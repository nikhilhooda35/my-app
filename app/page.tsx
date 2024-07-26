import Image from "next/image";
import { Router } from "next/router";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h4 className="font-semibold text-black font-mono">Next js</h4>
      <h4 className="font-semibold text-black font-mono">Home Page</h4>
      <button className="font-medium text-black font-mono">About</button>
    </main>
  );
}
