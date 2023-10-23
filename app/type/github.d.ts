type GithubRepo = {
  id: number
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
}

type GithubRepoContent = {
  path: string
  type: string
}

export { GithubRepo, GithubRepoContent }
