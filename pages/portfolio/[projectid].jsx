import React from "react";
import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log("Portfolio Page path:", router.pathname);
  console.log("Portfolio Page Id:", router.query);

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
      <p>{router.query.projectid}</p>
    </div>
  );
}
