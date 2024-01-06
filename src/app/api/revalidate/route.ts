import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { getUpdatedPostSlug } from "@/app/lib/sanity";
import { revalidatePath } from "next/cache";

export async function POST(req: Request, res: Response) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME) as string;
  const body = await req.json();
  if (
    !isValidSignature(body, signature, process.env.SANITY_REVALIDATE_SECRET!)
  ) {
    console.log("Signature not valid");
    return new Response("Invalid signature", {
      status: 401,
    });
  }
  
  const { _id: id } = body;
  console.log("id is: ", id);
  console.log("Body is: ", body);
  if (typeof id !== "string" || !id) {
    return new Response("Invalid _id", {
      status: 400,
    });
  }
  try {
    const slug = await getUpdatedPostSlug(id);
    revalidatePath(`/blog/${slug}`);
    return new Response(`Updated ${slug}`, {
      status: 200,
    });
  } catch (e) {
    if (e instanceof Error)
      return new Response("Unknown error", { status: 500 });
    return new Response(`Error: ${JSON.stringify(e)}`, { status: 500 });
  }
}
