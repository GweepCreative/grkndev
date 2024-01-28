import { getRepo, Repo } from "@utils/github";
export async function GET() {
  const repos: Repo[] = await getRepo();
  return Response.json({ repos });
}
