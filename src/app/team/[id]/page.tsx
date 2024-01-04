import { Metadata } from 'next'
import React from 'react'

type MetadataProps = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: MetadataProps): // parent: ResolvingMetadata
Promise<Metadata> {
  const id = params.id

  // Fetch Team Member Information Here

  return {
    title: `Team Member ${id}`,
    description: `Team Member ${id}`,
  }
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function TeamMember({ params }: { params: { id: string } }) {
  return <div>TeamMember {params.id}</div>
}
