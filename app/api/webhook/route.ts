import createUser from "@/app/lib/actions/user.actions";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";
    if(!svix_id ||!svix_timestamp|| !svix_signature){
        return new Response("Bad request",{status:400});
    }
  if (!process.env.WEBHOOK_SECRET) {
    throw new Error("Webhook secret is not set");
  }

  // 1. Lấy chuỗi TEXT nguyên bản (Raw body) từ request
  const body = await req.text();
 
  const sivx = new Webhook(process.env.WEBHOOK_SECRET);
  let msg: WebhookEvent;
 
  try {
    // 2. Truyền đúng chuỗi raw body vào đây để verify
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Bad Request", { status: 400 });
  }

  // 3. Xử lý logic dữ liệu sau khi verify thành công
  const eventType = msg.type;
  if (eventType === "user.created") {
    // msg.data lúc này đã là một object chứa thông tin user từ Clerk
    const {
        id,
        username,
        email_addresses,
        image_url,
        first_name,
        last_name
    } = msg.data as any;
    const fallbackUsername = username ||  `user_${id.slice(-6)}`;
    const fullName = [first_name, last_name].filter(Boolean).join(" ") || fallbackUsername;
    const user=await createUser({
        username:fallbackUsername,
        name:fullName,
        clerkId:id,
        email:email_addresses[0].email_address,
        avatar:image_url 

    });
    console.log("User created in database successfully:", user);
    return NextResponse.json({
        message:"OK",
        user
    })
  }
  
  console.log("Full event message:", msg);
 
  return new Response("OK", { status: 200 });
}