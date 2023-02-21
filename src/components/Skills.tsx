import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {
  skills: Skill[]
}
export default function Skills({ skills }: Props) {
  return (
    <motion.article
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="section grid-rows-[1fr_3fr_1fr] text-center md:text-left"
    >
      <section className="sectionHeader">
        <h3 className="sectionHeader">Skills</h3>
        <h4 className="mt-3 md:w-full tracking-[3px] text-gray-300 text-sm text-center uppercase">Hover over a skill for current proficiency</h4>
      </section>

      <section className="grid grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-items-center mx-auto w-full md:w-8/12 xl:w-6/12">
        {skills.map(s => (
          <Skill key={s.title} skill={s} />
        ))}
      </section>
    </motion.article>
  )
}