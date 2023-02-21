import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';

type Props = {
  profileImg: Image
  keyPoints: string[]
}

export default function About({ profileImg, keyPoints }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="section xs:grid-rows-[1fr_190px_1fr] lg:grid-rows-[1fr_3fr_1fr] lg:grid-cols-2 text-center md:text-left"
    >
      <h3 className="sectionHeader lg:col-span-2">About</h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-[224px] text-center"
      >
        <Image
          src={urlFor(profileImg).url()}
          alt={`Andrei's profile image`}
          width={960}
          height={1280}
          className="flex-shrink-0 mx-auto -mb-24 md:mb-0 rounded-full lg:rounded-lg object-cover xs:w-36 xs:h-36 w-52 h-52 md:w-64 md:h-64 lg:w-[400px] lg:h-[534px]"
        />
      </motion.div>

      <section className="md:mx-10">
        <h4 className="my-1 md:my-3 md:text-center text-2xl md:text-3xl font-semibold"><span className="underline decoration-[#F7AB0A]/50">Key</span> points</h4>
        <ul className="text-sm md:text-lg text-left list-disc">
          {keyPoints.map(kp => (
            <li key={kp} className="py-0.5">{kp}</li>
          ))}
        </ul>
      </section>
    </motion.article>
  )
}