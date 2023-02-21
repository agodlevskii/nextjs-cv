import { motion } from 'framer-motion';
import IconSocial from './IconSocial';

type Props = {
  socials: Social[]
  email: string
}

export default function Header({ socials, email }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between xl:items-center mx-auto px-5 py-1 md:p-5 max-w-7xl z-20'>
      <motion.section
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex items-center'
      >
        {socials?.map(s => (
          <IconSocial key={s.id} url={s.url} />
        ))}
      </motion.section>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex items-center text-gray-300 cursor-pointer'
      >
        <IconSocial url={`mailto:${email}`} />
      </motion.div>
    </header>
  )
}