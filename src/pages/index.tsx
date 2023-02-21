import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperience } from '@/utils/fetchExperience';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo
  experience: Experience[]
  skills: Skill[]
  socials: Social[]
}

export default function Home({ pageInfo, experience, skills, socials }: Props) {
  return (
    <article className="z-0 h-screen bg-[#252538] text-white snap-y snap-mandatory overflow-scroll scroll">
      <Head>
        <title>{`Andrei"s CV`}</title>
        <meta name="description" content={`Andrei Godlevskii"s CV`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header socials={socials} email={pageInfo.email} />

      <section id="hero" className="snap-start">
        <Hero name={pageInfo.name} profileImg={pageInfo.heroImage} role={pageInfo.role} />
      </section>

      <section id="about" className="snap-center">
        <About profileImg={pageInfo.profilePic} keyPoints={pageInfo.keyInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>

      <section id="skills" className="snap-end">
        <Skills skills={skills} />
      </section>
    </article>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const pageInfo = await fetchPageInfo();
  const experience = await fetchExperience();
  const skills = await fetchSkills();
  const socials = await fetchSocials();

  return {
    props: { pageInfo, experience, skills, socials },
  };
}
