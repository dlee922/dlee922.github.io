"use client";

import RevealSection from "../components/RevealSection";

export default function Contact() {
  return (
    <div className="container">
      <section className="section">
        <RevealSection>
          <p className="section-label">Contact</p>
          <h1>Get in Touch</h1>
          <p style={{ marginTop: "16px" }}>
            I&apos;m always interested in connecting with researchers and
            professionals working in psychiatric genomics, precision psychiatry,
            and computational biology.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="contact-grid">
            <a
              href="mailto:lee.daniel1@northeastern.edu"
              className="contact-item"
            >
              <p className="contact-item-label">Email</p>
              <p className="contact-item-value">
                lee.daniel1@northeastern.edu
              </p>
            </a>

            <a
              href="https://linkedin.com/in/daniellee922"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <p className="contact-item-label">LinkedIn</p>
              <p className="contact-item-value">https://linkedin.com/in/daniellee922</p>
            </a>

            <a
              href="https://github.com/dlee922"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <p className="contact-item-label">GitHub</p>
              <p className="contact-item-value">dlee922</p>
            </a>

            <div className="contact-item">
              <p className="contact-item-label">Location</p>
              <p className="contact-item-value">Boston, MA</p>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
