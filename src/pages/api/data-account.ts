import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = new Headers()
        headers.append('X-API-Key', process.env.X_API_Key || '')
    const options = {
        method: 'GET',
        headers: headers
    }
    const response = await fetch('https://my.api.mockaroo.com/tb_account.json', options)
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}