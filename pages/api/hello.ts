import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}
// req = HTTP incoming message, res = HTTP server response
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({message: 'Hello'});
}