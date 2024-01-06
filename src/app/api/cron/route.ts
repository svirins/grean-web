import generateIndex from "@/scripts/createSearchIndex";

export async function POST(req: Request, res: Response) {
  try {
    const result = await generateIndex();
    return new Response(`Algolia index re-created successfully}`, {
      status: 200,
    });
  } catch (e) {
    if (e instanceof Error)
      return new Response("Unknown error", { status: 500 });
    return new Response(`Error: ${JSON.stringify(e)}`, { status: 500 });
  }
}
