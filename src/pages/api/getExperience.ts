import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == "experience"] {
  id,
  company,
  companyImage {
    asset {
      _ref
    }
  },
  jobTitle,
  dateStarted,
  dateEnded,
  isCurrentlyWorkingHere,
  points,
  technologies[]-> {
    title,
    progress,
    image {
      asset {
        _ref
      }
    },
  },
} | order(dateStarted desc)`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Experience[]>
) {
  const experience = await sanityClient.fetch(query)
  res.status(200).json(experience)
}