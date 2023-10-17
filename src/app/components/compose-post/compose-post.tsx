
'use client'

// import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { revalidatePath } from "next/cache";
import { ComposePostButton } from "./compose-post-button";
import { addPost } from "@/app/actions/add-post-action";
import { useRef } from "react";

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null);



  return (
    <form ref={formRef} action={async (formData: FormData) => {
      await addPost(formData)
      formRef.current?.reset()
    }} className='flex flex-row p-3 border-b border-white/20 gap-10'>
      <img
        src={userAvatarUrl}
        className="rounded-full w-16 h-16 object-contain"
      />

      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-3"
          placeholder="¡¿Qué está pasando!?"
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  );
}
