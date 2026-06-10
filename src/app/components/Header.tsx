import Link from "next/link";

export default function Header () {
  return (
    <header className="flex items-center justify-between py-9 px-12 fixed top-0 left-0 w-full text-sky-100 backdrop-blur-sm bg-black/30">
      <div>Stas</div>
      <nav>
        <ul className="flex gap-15">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#footer">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}