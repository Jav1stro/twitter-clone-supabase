import PostCard from "../post-card/post-card";
import { type Post } from "../../types/posts";

export function PostsList({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const { content, id, users } = post;        
        const {
          avatar_url: avatarUrl,
          name: userFullName,
          user_name: userName,
        } = users;

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
    </>
  );
}
