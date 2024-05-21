export async function GET() {
  return Response.json({ message: "Hello World" });
}
type dataType = { key: string };

export async function POST(request: Request) {
  const data: dataType = await request.json();
  if (!data) return Response.json({ status: false, message: "Invalid Body" });
  if (data && !data.key)
    return Response.json({ status: false, message: "License key missing" });

  return Response.json({ status: "success", message: "License is valid" });
}
