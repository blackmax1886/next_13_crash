import React from 'react'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'

type RepoPageProps = {
  params: {
    name: string
  }
}

const RepoPage = ({ params: { name } }: RepoPageProps) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Repo name={name} />
      <RepoDirs name={name} />
    </div>
  )
}

export default RepoPage
