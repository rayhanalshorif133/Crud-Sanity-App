// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@sanity/client'

type Data = {
  name: string
}

const SANITY_SECRET_TOKEN="sk91LwqOU8kwwaLhYVhKd73txlNNOylbjQV1NMW8Eqpj2qCCB1suhdCHiTOtH4YHdBPcYjgJ2SukVrgtnYDbLfYG3X6THcBQVTTGAiCac6LyCYA6YQhPGKNG8b8YdiwgIDgYFpVua2JxfVmYsbuuZ8mn1t6Fk7Nx4jHB2l3xQ9qkLj5bxrLa";

export const sanityClient = createClient({
  projectId: 'rvjtx1je',
  dataset: 'users',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: SANITY_SECRET_TOKEN, // or leave blank for unauthenticated usage
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  if(req.method === 'GET') {
    await sanityClient.fetch(`*[_type == "users"]`).then((users) => {
     res.status(200).json(users);
   });
  }else if (req.method === 'POST'){
    const {name,age} = req.body;
    try {
      await sanityClient.create({
        _type: 'users',
        name: name,
        age: age,
      }).then((res) => {
        console.log(`User was created, document ID is ${res._id}`);
      })
    } catch (error) {
      console.log(error);
    }
  }else if(req.method == 'DELETE'){
    console.log(req.body);
  }
}
