"use client";

import RevealSection from "../components/RevealSection";

export default function About() {
  return (
    <div className="container">
      <section className="section">
        <RevealSection>
          <p className="section-label">About</p>
          <h1>Who I Am</h1>

          <div className="about-content">
            <p>
              Hello! My name is Daniel, and I am an MS Bioinformatics student
              at Northeastern University with an undergraduate degree in
              Computer Science. My own experience with mental health struggles
              is what pulled me from software engineering into psychiatric
              genomics, and it continues to drive my focus on applying
              computational approaches to precision psychiatry.
            </p>

            <p>
              Mental illness is one of the defining challenges of our
              generation. Growing up, I never imagined it would be something
              I&apos;d face myself, but in reality it touches nearly every family.
              Despite this, we still understand so little about why some people
              are vulnerable while others are not, and treatment remains
              limited, failing to truly help many individuals. I believe that
              part of the answer lives in our genetics, and that computational
              tools can help reveal it.
            </p>

            <p>
              This conviction is what drives my current research. I am
              conducting an independent project extending the Grotzinger et al.
              (Nature, 2026) cross-disorder Genomic SEM framework, using
              unsupervised clustering to uncover distinct subtypes of genetic
              pleiotropy across psychiatric disorders. What has pulled me deeper
              into this field is the sense that this work is at the frontier of
              something significant, and that the questions I am asking do not
              yet have answers.
            </p>

            <p>
              I&apos;m seeking research opportunities where I can apply my
              computational background to help advance how we understand and
              ultimately treat mental illness.
            </p>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
