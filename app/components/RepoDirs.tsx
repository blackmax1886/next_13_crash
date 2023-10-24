import Link from 'next/link'
import React from 'react'

import { GithubRepoContent } from '../type/github'

type RepoDirsProps = {
  name: string
}

async function fetchRepoContents(name: string): Promise<GithubRepoContent[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(
    `https://api.github.com/repos/blackmax1886/${name}/contents`
  )
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }: RepoDirsProps) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
