import Head from 'next/head'
import React from 'react'

type TTitlePageProps = {
    title: string
}

export default function TitlePage(props: TTitlePageProps) {
    const { title } = props
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Sinata - Sistem Inforamasi Manajemenen Pelayanan dan Berita" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
