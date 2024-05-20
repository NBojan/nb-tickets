import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthNavbar } from "../components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata: Metadata = {
  title: "NB Tickets - Register",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();

  if (data.session) {
    return redirect("/");
  }
  return (
    <main className="container lg:max-w-[1024px] mx-auto">
      <AuthNavbar />
      {children}
    </main>
  )
}
