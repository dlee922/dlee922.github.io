import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <p className="hero-label">
          MS Bioinformatics · Northeastern University
        </p>
        <h1>Daniel H. Lee</h1>
        <p className="hero-description">
          Applying computational approaches to psychiatric genomics, with a
          focus on understanding the shared genetic architecture of mental
          illness and advancing precision psychiatry.
        </p>
        <div className="hero-links">
          <Link href="/projects" className="hero-link primary">
            View Projects
          </Link>
          <Link href="/about" className="hero-link secondary">
            About Me
          </Link>
        </div>
      </section>
    </div>
  );
}
