import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == "skill"] {
  id,
  title,
  progress,
  image {
    asset {
      _ref
    }
  },
} | order(progress desc)`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill[]>
) {
  const skills = await sanityClient.fetch(query)
  res.status(200).json(skills)
}