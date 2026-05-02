"use client";

import RevealSection from "../components/RevealSection";

export default function Resume() {
  return (
    <div className="container">
      <section className="section">
        <RevealSection>
          <p className="section-label">Resume</p>
          <h1>Experience & Education</h1>
          {/* Place your resume PDF in the /public folder as resume.pdf */}
          <a href="/resume.pdf" className="resume-download" target="_blank">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </RevealSection>

        {/* Education */}
        <RevealSection delay={100}>
          <div className="resume-section">
            <h2>Education</h2>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>Northeastern University</h3>
                <span className="resume-date">
                  September 2025 &ndash; Expected December 2027
                </span>
              </div>
              <p className="resume-subtitle">
                College of Science, MS in Bioinformatics | GPA: 4.0
              </p>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>Northeastern University</h3>
                <span className="resume-date">
                  September 2020 &ndash; December 2024
                </span>
              </div>
              <p className="resume-subtitle">
                Khoury College of Computer Sciences, BS in Computer Science
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Projects */}
        <RevealSection delay={200}>
          <div className="resume-section">
            <h2>Projects</h2>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>Cross-Disorder Psychiatric GWAS Clustering</h3>
                <span className="resume-date">April 2026 &ndash; Present</span>
              </div>
              <p className="resume-subtitle">Independent Research</p>
              <ul className="resume-bullets">
                <li>
                  Extended Grotzinger et al. (Nature, 2026) cross-disorder
                  Genomic SEM framework to investigate locus-level subtypes of
                  pleiotropy across five psychiatric genomic factors (compulsive,
                  schizophrenia&ndash;bipolar, neurodevelopmental, internalizing,
                  substance use), using PGC summary statistics spanning 14
                  disorders
                </li>
                <li>
                  Standardized factor-level effect sizes via z-scores and applied
                  hierarchical clustering as the primary analysis, benchmarked
                  against k-means, Gaussian mixture models, and DBSCAN; selected
                  k=3 (n=611 loci) based on silhouette scores and bootstrap
                  stability
                </li>
                <li>
                  Validated clusters using Q_P heterogeneity statistics,
                  demonstrating a monotonic gradient across all five factors
                  (Kruskal&ndash;Wallis p &lt; 0.001) and significant enrichment
                  of heterogeneous loci in the most factor-specific cluster
                  (chi-squared p = 7e-54)
                </li>
                <li>
                  Identified a 74-locus cluster showing antagonistic pleiotropy
                  (schizophrenia&ndash;bipolar negative, internalizing positive)
                  with significant enrichment for cell-cell adhesion and cadherin
                  signaling pathways (g:Profiler, GO:BP and KEGG)
                </li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>LUAD Metastatic Site Classification</h3>
                <span className="resume-date">
                  January 2026 &ndash; April 2026
                </span>
              </div>
              <p className="resume-subtitle">Course Project, with Jason Chen</p>
              <ul className="resume-bullets">
                <li>
                  Co-developed a multi-label ClassifierChain pipeline to predict
                  metastatic organotropism across 7 sites (MSK Cancer Cell 2023,
                  n=455, cBioPortal), comparing clinical, genomic, and combined
                  feature sets across linear and nonlinear models
                </li>
                <li>
                  Built the genomic feature pipeline and PyTorch MLP with
                  per-label positive weighting for severe class imbalance;
                  identified that linear models with L2 regularization
                  generalized best, while MLP showed severe overfitting
                  (train&ndash;test F1 gap +0.546) at this sample size
                </li>
                <li>
                  Conducted a demographic fairness audit across sex and race
                  subgroups, finding no meaningful sex disparity and surfacing
                  cohort limitations (84.8% White) that preclude racial fairness
                  evaluation without multi-institutional data
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* Experience */}
        <RevealSection delay={300}>
          <div className="resume-section">
            <h2>Experience</h2>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>MGH Oral and Maxillofacial Surgery | Medical Scribe</h3>
                <span className="resume-date">
                  July 2025 &ndash; February 2026
                </span>
              </div>
              <p className="resume-subtitle">Boston, MA</p>
              <ul className="resume-bullets">
                <li>
                  Documented surgical procedures, diagnostic imaging findings,
                  and treatment plans in real-time EHR systems across oncology,
                  reconstructive, and trauma surgery, developing fluency with
                  clinical data workflows and medical terminology
                </li>
                <li>
                  Supported multi-disciplinary care coordination by synthesizing
                  complex patient histories into structured clinical
                  documentation, gaining firsthand exposure to clinical
                  decision-making processes
                </li>
              </ul>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h3>Fidelity Investments | Software Engineer Co-op</h3>
                <span className="resume-date">
                  July 2023 &ndash; December 2023
                </span>
              </div>
              <p className="resume-subtitle">Boston, MA</p>
              <ul className="resume-bullets">
                <li>
                  Engineered automated Python-based data extraction pipeline
                  within a 20-developer Asset Management team, parsing and
                  analyzing financial reports with automated validation checks
                  that reduced manual review time by several hours daily
                </li>
                <li>
                  Optimized large-scale file synchronization across Amazon S3 and
                  production databases using multithreading, reducing processing
                  time for 100,000+ files from 40 minutes to 5 minutes (8x
                  improvement)
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* Skills */}
        <RevealSection delay={400}>
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="resume-skills">
              <p className="resume-skill-row">
                <span className="resume-skill-label">Languages: </span>
                Python, R, Bash, SQL
              </p>
              <p className="resume-skill-row">
                <span className="resume-skill-label">
                  Statistical &amp; Machine Learning Methods:{" "}
                </span>
                Clustering (hierarchical, k-means, GMM, DBSCAN), classification
                (logistic regression, SVM, random forest, MLP), survival
                analysis, multi-label learning, feature importance analysis,
                scikit-learn, PyTorch
              </p>
              <p className="resume-skill-row">
                <span className="resume-skill-label">
                  Bioinformatics &amp; Infrastructure:{" "}
                </span>
                GWAS summary statistics, pandas, BioPython, NGS analysis (DNA
                &amp; RNA-seq), sequence alignment, data visualization, Docker,
                Git, HPC (SLURM)
              </p>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
