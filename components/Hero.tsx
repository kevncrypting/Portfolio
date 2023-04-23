import React from "react";
import Image from 'next/image';
import Button from "./Button";

export default function Hero() {
  return (
    <section className="md:flex">
      <div>

      <span>Hi, my name is</span>
      <h1 className="font-bold">Thanuseng Kevin Prachith</h1>
      <h2 className="font-semibold">Full Stack Web Developer</h2>
      <p>I am a software engineer with a passion for creating aesthetic and accessible products. Currently, I&apos;m learning more about the inner workings of Next.js and building out my personal blog.</p>
      <Button>Contact Me</Button>
      </div>
      <Image 
      src="/images/profile_pic.jpg"
      height={144}
      width={144}
      alt="Picture of Kevin Prachith"
      />
    </section>
  );
};
