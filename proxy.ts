import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // The visitor website is public. Only the retained starter demo needs auth.
  matcher: ["/protected/:path*"],
};
