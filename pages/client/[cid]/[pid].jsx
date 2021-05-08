import React from "react";
import { useRouter } from "next/router";

export default function CLientProjectID() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>{router.query.pid}</h1>
    </div>
  );
}
