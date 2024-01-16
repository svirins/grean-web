import generateIndex from "@/scripts/createSearchIndex";

export async function GET(req: Request) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response(`Unauthorized`, { status: 401 });
  }
  try {
    await generateIndex();
    return new Response(`Algolia index re-created successfully}`, {
      status: 200,
    });
  } catch (e) {
    if (e instanceof Error)
      return new Response("Unknown error", { status: 500 });
    return new Response(`Error: ${JSON.stringify(e)}`, { status: 500 });
  }
}
