import Link from "next/Link";

function IndexPage() {
  return (
    <div>
      <h1>Links</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/portfolio">Portfolio</Link>
      <br />
      <Link href="/client">Client</Link>
      <br />
    </div>
  );
}

export default IndexPage;
