import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';
import { getFullMonthDate } from '@/utils/date';

type Props = {
  experience: Experience
}

const DateRange = (dateFrom: Date, dateTo?: Date) => {
  const formatDateFrom = getFullMonthDate(dateFrom);
  const formatDateTo = dateTo
    ? getFullMonthDate(dateTo)
    : '...';

  return (
    <p className="py-4 text-gray-300 uppercase">{`${formatDateFrom} - ${formatDateTo}`}</p>
  );
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg p-5 w-full md:w-[600px] xl:w-[800px] h-100 md:min-h-[600px] md:snap-center bg-[#2d2d35] cursor-pointer transition-opacity duration-200 md:overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={urlFor(experience.companyImage).url()}
          alt={"Company logo"}
          width={800}
          height={800}
          className="rounded-full object-cover object-center mb-5 w-28 h-28 xl:w-32 xl:h-32"
        />
      </motion.div>

      <section className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.company}</h4>
        <p className="mt-2 text-xl font-bold">{experience.jobTitle}</p>
        <ul className="flex my-3 space-x-2 overflow-x-scroll">
          {experience.technologies.map(t => (
            <li key={`${experience.id}_${t.id}`}>
              <Image
                src={urlFor(t.image).url()}
                alt={t.title}
                width={256}
                height={256}
                className="rounded-full object-center object-cover w-10 h-10"
              />
            </li>
          ))}
        </ul>
        {DateRange(experience.dateStarted, experience.dateEnded)}

        <ul className="pl-5 lg:pl-0 space-y-2 list-disc">
          {experience.points.map(p => (
            <li key={`${experience.id}_${p}`}>{p}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}