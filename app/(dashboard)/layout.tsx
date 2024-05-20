import { Metadata } from "next";
import { cookies } from "next/headers";
import { AppProvider } from "../context";
import { redirect } from "next/navigation";
import { DashboardNavbar, Sidebar } from "../components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata: Metadata = {
  title: "NB Tickets - Dashboard",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();

  if (!data.session) {
    return redirect("/login");
  }
  return (
    <AppProvider>
      <main className="container lg:max-w-[1024px] mx-auto">
        <DashboardNavbar session={data.session} />
        <Sidebar session={data.session} />
        {children}
      </main>
    </AppProvider>
  )
}
