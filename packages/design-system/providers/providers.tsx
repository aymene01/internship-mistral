import SessionProvider from "./session";
import AuthGuard from "./auth-guard";
import { SidebarProvider } from "../components/ui/sidebar";

import { PropsWithChildren } from "react";

import { auth } from "@repo/auth/server"

export default async function Providers({ children }: PropsWithChildren) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        <AuthGuard>
         {children}
        </AuthGuard>
      </SidebarProvider>
    </SessionProvider>
  );
}