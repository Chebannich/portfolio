import Image from "next/image";

export default function About () {
  return (
    <section className="flex flex-col justify-between items-center px-12 py-9" id="about">
      <h2 className="font-medium text-5xl mb-12">About Me</h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-1 flex-col justify-center text-base/relaxed [&>*]:mb-4">
          <p>I am a passionate Frontend Developer with a keen interest in creating beautiful and functional user interfaces. I have a strong foundation in HTML, CSS, and JavaScript, and I am always eager to learn new technologies and improve my skills.</p>
          <p>I enjoy working on projects that challenge me and allow me to express my creativity. I believe that good design is not just about aesthetics, but also about usability and user experience. I strive to create websites that are not only visually appealing but also easy to navigate and use.</p>
          <p>In my free time, I love to explore new design trends, read articles about web development, and work on personal projects. I My main tools include React, TypeScript, Sass, and Git. I also have a good eye for design and love working closely with designers or bringing my own ideas to life.</p>
        </div>
        <div className="flex flex-1 justify-center">
          <Image src="/images/img.webp" alt="Profile Image" width={300} height={300} className="w-75 h-75 rounded-full border-4 border-sky-500 object-cover"/>
        </div>
      </div>
    </section>
  );
}