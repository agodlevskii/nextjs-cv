import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == "pageInfo"] {
  name,
  role,
  email,
  heroImage {
    asset {
      _ref
    }
  },
  profilePic {
    asset {
      _ref
    }
  },
  keyInfo,
  socials[]-> {
    title,
    url,
  },
}[0]`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PageInfo>
) {
  const info = await sanityClient.fetch(query)
  res.status(200).json(info)
}