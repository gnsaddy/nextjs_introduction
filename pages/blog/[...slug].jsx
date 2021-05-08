import { useRouter } from "next/router";
import React from "react";

export default function BlogSlug() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>BlogSlug</h1>
      <p>{router.query.slug[2]}</p>
    </div>
  );
}
