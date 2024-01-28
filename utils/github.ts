import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GIT_TOKEN });
export type Repo = {
  id: number;
  name: string;
  stargazers_count: number | null;
  description: string | null;
  language: string | null;
  created_at: string | null;
  html_url: string;
};
async function getRepo() {
  try {
    const res = await octokit.request("GET /user/repos", {
      sort: "created",
      type: "public",
      page: 1,
      per_page: 9,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const repos: Repo[] = res.data;
    return repos;
  } catch (err) {
    throw err;
  }
}
export { getRepo };
