import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button/auth-button-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card/post-card";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: posts } = await supabase
    .from("posts")
    .select("*, users(name,avatar_url,user_name)");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
      Hola! 🇦🇷
      <AuthButtonServer />
      <section className="flex flex-col items-center justify-between gap-10 p-24">
        {posts?.map((post) => {
          const {
            avatar_url: avatarUrl,
            content,
            id,
            name: userFullName,
            user_name: userName,
          } = post;

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
            />
          );
        })}
      </section>
    </main>
  );
}
