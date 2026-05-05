"use client";

import RevealSection from "../components/RevealSection";

const projects = [
  {
    tag: "Independent Research",
    title: "Cross-Disorder Psychiatric GWAS Clustering",
    date: "April 2026 \u2013 Present",
    description:
      "Extended the Grotzinger et al. (Nature, 2026) cross-disorder Genomic SEM framework to investigate locus-level subtypes of pleiotropy across five psychiatric genomic factors, using PGC summary statistics spanning 14 disorders. Applied k-means clustering (corroborated by hierarchical clustering, GMM, and DBSCAN) to identify three distinct subtypes at k=3 (n=611 loci), including a 74-locus antagonistic pleiotropy cluster showing opposing effects between internalizing and psychotic-spectrum disorders, enriched for cell adhesion and cadherin signaling pathways. Clusters validated using Q_P heterogeneity statistics with monotonic gradients across all five factors (Kruskal\u2013Wallis p < 0.001).",
    tools: "Python (pandas, scikit-learn, scipy), g:Profiler",
    github: "https://github.com/dlee922/psychiatric-gwas-pleiotropy",
    paper: "/gwas_pleiotropy_clustering.pdf",
    paperLabel: "Preliminary Report",
  },
  {
    tag: "Course Project",
    title: "LUAD Metastatic Site Classification",
    date: "January 2026 \u2013 April 2026",
    description:
      "Multi-label classification pipeline predicting metastatic organotropism across 7 anatomical sites using clinical and genomic features from the MSK-MET cohort (Memorial Sloan Kettering, Cancer Cell 2023, n=455, via cBioPortal). Built a ClassifierChain pipeline comparing linear and nonlinear models, including a PyTorch MLP with per-label positive weighting. Found that linear models with L2 regularization generalized best, while the MLP showed significant overfitting at this sample size. Conducted a demographic fairness audit across sex and race subgroups.",
    tools: "Python (scikit-learn, PyTorch, pandas), cBioPortal API",
    github: "https://github.com/dlee922/cs6140-final-project-jc-dl",
    paper: "/LUAD_Metastatic_Site_Classification.pdf",
    paperLabel: "Project Report",
  },
  {
    tag: "Independent Project",
    title: "LUAD Mutation Landscape & Survival Analysis (TCGA)",
    date: "October 2025 \u2013 January 2026",
    description:
      "End-to-end Python pipeline analyzing 157,000+ somatic mutations across 566 lung adenocarcinoma samples from The Cancer Genome Atlas via cBioPortal. Computed clinical biomarkers including Tumor Mutation Burden and top-mutated genes, recapitulating the canonical LUAD driver landscape (TP53 52.6%, KRAS 29.9%). Conducted Kaplan\u2013Meier survival analysis stratified by TMB, finding no significant survival difference between high- and low-TMB groups (log-rank p=0.26, n=500).",
    tools: "Python (pandas, lifelines, matplotlib), cBioPortal API",
    github: "https://github.com/dlee922/cancer_genomics_analysis",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <section className="section">
        <RevealSection>
          <p className="section-label">Projects</p>
          <h1>Research & Work</h1>
          <p style={{ marginTop: "16px" }}>
            Computational genomics projects spanning psychiatric genetics and
            cancer biology.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="card-grid">
            {projects.map((project) => (
              <div className="card" key={project.title}>
                <p className="card-tag">
                  {project.tag} &middot; {project.date}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="card-tools">Tools: {project.tools}</p>
                <div className="card-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository &rarr;
                  </a>
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.paperLabel} &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>
    </div>
  );
}