import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Post - {router.query.slug}</h1>
    </div>
  );
}
