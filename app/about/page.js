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
              This time last year, I was waiting to hear back from a final-round
              software engineering interview. I was hoping to finally start my
              (flawed) view of the &quot;cushy&quot; developer life, but I eventually
              received a rejection email, which really shook me. The following
              months were spent wondering if this was still the path that I
              wanted to go down, and unfortunately, my mental health took a hit
              during this quarter-life crisis that I was having. I found myself
              searching for meaning and purpose, which I had assumed would
              naturally come from the job that I didn&apos;t get.
            </p>

            <p>
              I was fortunate to have been given the opportunity to join the MS
              in Bioinformatics program at Northeastern last Fall, which
              introduced me to an intersection of computer science and biology
              that I never considered. I still wasn&apos;t sure what I wanted to be
              working on exactly, but I was just happy to be able to apply my
              skills to something that felt like it could have genuine benefits
              to people&apos;s lives. My own experience with mental health struggles
              is what eventually guided me towards psychiatric genomics, and it
              is what currently drives my focus on applying computational
              approaches to precision psychiatry.
            </p>

            <p>
              Mental illness is one of the defining challenges of our
              generation. Growing up, I never imagined it would be something
              I&apos;d face myself, but in reality, it touches nearly every family.
              Despite this, we still understand so little about why some people
              are vulnerable while others are not, and treatment remains
              limited, failing to truly help many individuals. I believe that
              part of the answer lives in our genetics, and that computational
              tools can help reveal it.
            </p>

            <p>
              This is what drives my current independent research. I have spent
              the last two months building a project extending the Grotzinger et
              al. (Nature, 2026) cross-disorder Genomic SEM framework, using
              unsupervised clustering to uncover distinct subtypes of genetic
              pleiotropy across psychiatric disorders. What has pulled me deeper
              into this field is the belief that the questions being asked today
              have the potential to lead to real improvements for people
              struggling with mental illness.
            </p>

            <p>
              I am still early in this journey and have a lot to learn, but
              I&apos;m hopeful that my computational background can be of value in
              this space. If your work touches precision psychiatry, psychiatric
              genomics, or computational approaches to mental health, I would
              love to connect.
            </p>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}