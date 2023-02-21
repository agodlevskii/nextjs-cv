import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {
  experience: Experience[]
}

export default function WorkExperience({ experience }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="section px-5 md:px-10 overflow-hidden text-left"
    >
      <h3 className="sectionHeader">Experience</h3>

      <ul className="flex flex-col md:flex-row my-10 md:my-0 space-y-5 md:space-y-0 md:space-x-5 px-2 md:px-10 w-full overflow-y-scroll md:overflow-y-hidden md:overflow-x-scroll snap-y md:snap-x md:snap-mandatory scroll">
        {experience.map(e => (
          <li key={e.id} className="my-5 md:my-0 first:my-0 last:my-0"><ExperienceCard experience={e} /></li>
        ))}
      </ul>

    </motion.article>
  )
}