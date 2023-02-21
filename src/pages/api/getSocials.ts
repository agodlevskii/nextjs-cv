import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

const query = groq`*[_type == "social"] {
  id,
  title,
  url
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Social>
) {
  const socials = await sanityClient.fetch(query)
  res.status(200).json(socials)
}