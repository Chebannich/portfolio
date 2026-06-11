import Link from "next/link";

export default function Hero () {
  return (
    <section className="flex flex-col items-center justify-center gap-y-9 text-sky-100 h-svh ">
      <h1 className="font-bold text-8xl mb-4.5">Hi, I'm Stas!</h1>
      <h2 className="text-sky-500 font-medium text-5xl">Frontend Developer & UI Enthusiast</h2>
      <p className="text-2xl">I build modern, responsive websites with clean and minimal design.</p>
      <Link href="#projects" className="text-base mt-15.5 py-3 px-9 bg-sky-500 font-bold text-sky-50 rounded-lg cursor-pointer hover:bg-sky-600">View Projects</Link>
    </section>
  );
}