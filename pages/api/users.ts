// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from './../../sanity';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

   await sanityClient.fetch(`*[_type == "users"]`).then((users) => {
    res.status(200).json(users);
  });

}
