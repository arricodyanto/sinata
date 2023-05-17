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
    const response1 = await fetch('https://my.api.mockaroo.com/tb_kegiatan.json', options)
    const response2 = await fetch('https://my.api.mockaroo.com/tb_account.json', options)
    const response3 = await fetch('https://my.api.mockaroo.com/tb_laypeliputan.json', options)
    const data1 = await response1.json()
    const data2 = await response2.json()
    const data3 = await response3.json()

    const combinedData = data1.map((obj1:any) => {
        const match2 = data2.find((obj2:any) => obj1.id_account === obj2.id)
        const match3 = data3.find((obj3:any) => obj1.id === obj3.id_kegiatan)
        return { ...obj1, ...match2, ...match3 }
    })

    const filteredData = combinedData.filter((row:any) => {
      return row.judul_berita != null
    })
    
    res.status(200).json(filteredData)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}