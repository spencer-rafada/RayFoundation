import { Metadata } from 'next'
import React from 'react'
import { promises as fs } from 'fs'

type MetadataProps = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: MetadataProps): // parent: ResolvingMetadata
Promise<Metadata> {
  const id = params.id

  const file = await fs.readFile(
    process.cwd() + '/src/app/team/team.json',
    'utf-8'
  )
  const data = JSON.parse(file)

  const teamMember = data.find(
    (teamMember: { id: string; name: string }) => teamMember.id === id
  )

  return {
    title: `${teamMember.name} | ${teamMember.position}`,
    description: `Meet ${teamMember.name} is the ${teamMember.position} of Ray Foundation`,
  }
}

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }

export default function TeamMember({ params }: { params: { id: string } }) {
  return <div>TeamMember {params.id}</div>
}
