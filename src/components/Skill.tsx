import Image from 'next/image';
import { urlFor } from '../../sanity';

type Props = {
  skill: Skill
}

export default function Skill({ skill }: Props) {
  return (
    <article className="relative flex cursor-pointer group">
      <Image
        src={urlFor(skill.image).url()}
        alt={skill.title}
        width={512}
        height={512}
        className="rounded-full object-center border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl text-black font-bold opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </article>
  )
}