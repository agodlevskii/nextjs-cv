import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../sanity';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles'

type Props = {
  name: string
  profileImg: Image
  role: string
}

export default function Hero({ name, profileImg, role }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${name}`,
      "A Lead Javascript Developer",
      "Angular, React, NextJS, you-name-it",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <article className="flex flex-col items-center justify-center space-y-0 h-screen text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(profileImg).width(512).height(512).url()}
        alt={`My photo`}
        width={128}
        height={128}
        className="rounded-full mx-auto object-cover"
      />

      <div className="z-20 pt-5">
        <h2 className="pb-2 text-sm uppercase text-gray-300 opacity-80 tracking-[1rem]">{role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <section className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
        </section>
      </div>
    </article>
  )
}