import Link from 'next/link'
import React, { Suspense } from 'react'

import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

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
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
