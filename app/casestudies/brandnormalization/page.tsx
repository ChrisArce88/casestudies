"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import MiniCarousel from "../../components/MiniCarousel";
import Link from 'next/link';

interface ModalData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function MultiBrandNormalization() {
  const [activeId, setActiveId] = useState("");
  const [modalState, setModalState] = useState<{ isOpen: boolean; image: ModalData | null }>({
    isOpen: false,
    image: null,
  });

  const openModal = (src: string, alt: string, width?: number, height?: number) => {
    setModalState({ isOpen: true, image: { src, alt, width, height } });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const ids = [
      "snapshot",
      "overview",
      "problem",
      "initial",
      "solution",
      "operational",
      "lessons"
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <main className="case-study">
        {/* Navigation Sidebar (TOC) */}
        <aside className="toc">
          <h4>Table of Contents</h4>
          <nav>
            <ul>
              <li><a href="#snapshot" className={activeId === "snapshot" ? "active" : ""}>Snapshot</a></li>
              <li><a href="#overview" className={activeId === "overview" ? "active" : ""}>Overview</a></li>
              <li><a href="#problem" className={activeId === "problem" ? "active" : ""}>The Problem</a></li>
              <li><a href="#initial" className={activeId === "initial" ? "active" : ""}>System Constraints</a></li>
              <li><a href="#solution" className={activeId === "solution" ? "active" : ""}>The Solution</a></li>
              <li><a href="#operational" className={activeId === "operational" ? "active" : ""}>Operational Impact</a></li>
              <li><a href="#lessons" className={activeId === "lessons" ? "active" : ""}>Lessons Learned</a></li>
            </ul>
          </nav>
        </aside>

        {/* Case Study Content */}
        <article className="content">
          <section className="hero">
            <h1>Multi-Brand Lead Identity System</h1>
            <p className="hero-subtitle">
              A CRM-based identity resolution layer for multi-brand lead ingestion and lifecycle control.
            </p>
          </section>

          {/* 1. SNAPSHOT */}
          <section id="snapshot">
            <div className="snapshot-grid">
              <div className="snapshot-bubble">
                <span>4</span>
                <p>Active Brand Entities</p>
              </div>
              <div className="snapshot-bubble">
                <span className="bubblestring">Fragmented</span>
                <p>Inbound Source Mapping</p>
              </div>
              <div className="snapshot-bubble">
                <span className="bubblestring">Pre-Layer</span>
                <p>CRM Identity Resolution</p>
              </div>
              <div className="snapshot-bubble">
                <span className="bubblestring">High Risk</span>
                <p>Cross-Brand Message Contamination</p>
              </div>
            </div>
          </section>

          {/* PROJECT METADATA */}
          <section className="clex-project-meta">
            <div className="clex-meta-container">
              <div className="clex-meta-row">
                <span className="clex-meta-label">Role</span>
                <p className="clex-meta-value">Marketing Operations Specialist · Automation Engineer</p>
              </div>
              <div className="clex-meta-row">
                <span className="clex-meta-label">Environment</span>
                <p className="clex-meta-value">Zoho CRM · Multi-brand financial services stack</p>
              </div>
              <div className="clex-meta-row">
                <span className="clex-meta-label">System Layer</span>
                <p className="clex-meta-value">Lead ingestion · Identity normalization · Lifecycle orchestration</p>
              </div>
              <div className="clex-meta-row">
                <span className="clex-meta-label">Stack</span>
                <p className="clex-meta-value">Zoho CRM · Automation Workflows · Lead Lifecycle Module · Multi-Brand Webhooks</p>
              </div>     
            </div> 
          </section>

          {/* 2. OVERVIEW */}
          <section id="overview">
            <h2>Overview</h2>

            <div className="flow-diagram">
              {/* LAYER 1: INGESTION LAYER */}
              <div className="flow-branches">
                <div className="node">
                  <strong>INGESTION LAYER</strong>
                  <span style={{ display: "block", fontSize: "0.85rem", color: "#6b7280", marginTop: "0.25rem" }}>
                    Webhooks · APIs · Forms
                  </span>
                </div>
              </div>

              <div className="arrow">↓</div>

              {/* LAYER 2: NORMALIZATION LAYER */}
              <div className="node" style={{ maxWidth: "420px", width: "100%" }}>
                <strong style={{ display: "block", textAlign: "center", marginBottom: "0.5rem" }}>NORMALIZATION LAYER</strong>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#6b7280", fontStyle: "italic", marginBottom: "0.5rem" }}>
                  (Identity Resolution)
                </span>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>
                  Main Source Mapping
                </span>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>
                  Brand Canonicalization
                </span>
              </div>

              <div className="arrow">↓</div>

              {/* LAYER 3: SYSTEM OF RECORD */}
              <div className="node" style={{ maxWidth: "420px", textAlign: "center", width: "100%", borderColor: "#10b981" }}>
                <strong>SYSTEM OF RECORD</strong>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#10b981", fontWeight: 500, marginTop: "0.25rem" }}>
                  Lead (Brand = Truth)
                </span>
              </div>

              <div className="arrow">↓</div>

              {/* LAYER 4: EXECUTION LAYER */}
              <div className="node" style={{ maxWidth: "420px", width: "100%" }}>
                <strong style={{ display: "block", textAlign: "center", marginBottom: "0.5rem" }}>EXECUTION LAYER</strong>
                <span style={{ display: "block", fontSize: "0.85rem", textAlign: "center", color: "#6b7280", marginBottom: "0.5rem" }}>
                  Lifecycle Automation
                </span>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>
                  Email Response Segregation
                </span>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>
                  Stage &amp; Engagement Updates
                </span>
                <span style={{ display: "block", textAlign: "center", fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>
                  Outbound Contact Tracking
                </span>
              </div>
            </div>

            <h3>Project Origins</h3>
            <p>
              CFS operated four active lending brands that shared portions of the same CRM infrastructure. 
              As the business expanded, independent APIs, legacy webhooks, and third-party automations 
              accumulated without a unified identity model. Although customers entered through different 
              branded experiences, <b>that context was frequently lost before downstream automations executed.</b>
            </p>

            {/* LAYER 1: MULTI-BRAND INGESTION LAYER */}
            <div className="flow-branches" style={{ marginBottom: "0.5rem" }}>
              {/* BRAND 1 */}
              <div className="node" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "160px", padding: "1rem" }}>
                <Image 
                  src="/images/champimg.png" 
                  alt="Champion Cash Loans Logo Entity" 
                  width={110} 
                  height={40} 
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <strong style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}>Champion</strong>
              </div>

              {/* BRAND 2 */}
              <div className="node" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "160px", padding: "1rem" }}>
                <Image 
                  src="/images/turboimg.png" 
                  alt="Turbo Loan Acquisition Interface" 
                  width={100} 
                  height={40} 
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <strong style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}>Turbo Loan</strong>
              </div>

              {/* BRAND 3 */}
              <div className="node" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "160px", padding: "1rem" }}>
                <Image 
                  src="/images/cleximg.png" 
                  alt="Cash Loans Experts Brand Interface" 
                  width={120} 
                  height={40} 
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <strong style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}>CLEX</strong>
              </div>

              {/* BRAND 4 */}
              <div className="node" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "160px", padding: "1rem" }}>
                <Image 
                  src="/images/coin.png" 
                  alt="Sister Brand Sub-acquisition Node" 
                  width={70} 
                  height={70} 
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                />
                <strong style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}>Sister Brand</strong>
              </div>
            </div>

            <p>
              The objective was to introduce a <b>brand-aware normalization layer</b> inside Zoho CRM that preserved 
              acquisition intent from ingestion through lifecycle automation, without requiring upstream 
              system refactoring.
            </p>
           
          </section>

          {/* 3. THE PROBLEM */}
          <section id="problem">
            <h2>The Cross-Contamination Challenge</h2>
            <h3>The Identity Breakdown in a Multi-Brand System</h3>
            <p>
              Historically, Champion Cash Loans functioned as the central operational hub for all acquisition 
              flows. As additional brands were introduced (Turbo Loan, Cash Loans Experts, and others), 
              new funnels were layered on top of existing infrastructure <b>without enforcing strict data 
              isolation.</b>
              On the data side, the system accumulated multiple inconsistent “Main Source” labels across identical acquisition channels. <b>This made it impossible to reliably segment leads by brand,</b> breaking attribution, lifecycle analytics, and cohort-based reporting.
            </p>

            <MiniCarousel 
              images={[
                { 
                  src: "/images/TLapply.png", 
                  alt: "Fig. 1. Turbo Loan application experience. One of several independent acquisition funnels feeding the same CRM, each intended to preserve its own brand identity.",
                  fullWidth: 1900,  
                  fullHeight: 6000  
                },
                { 
                  src: "/images/ChampionConfirm.png", 
                  alt: "Fig. 2. Cross-brand confirmation email. Although the application originated from Turbo Loan, the customer received a Champion Cash Loans confirmation, breaking brand continuity at the most trust-sensitive moment of the journey.",
                  fullWidth: 1900,
                  fullHeight: 5200 
                },
              ]} 
              onImageClick={openModal}
            />

            <div className="clex-results-blockquote">
              In practice, this meant a user applying through a non-Champion brand would immediately 
              receive a confirmation email branded as Champion Cash Loans. In a financial context, 
              <b>this behavior introduced perceived risk signals</b> commonly associated with phishing or spam.
            </div>
            
          </section>

          {/* 4. INITIAL CONSTRAINTS */}
          <section id="initial">
            <h2>System Constraints</h2>
            <div className="research-grid">
              <div className="research-card">
                <h4>Immutable Upstream Systems</h4>
                <p>External APIs and third-party webhooks could not be modified in the short term 
                    without coordination across multiple vendor teams.</p>
              </div>
              <div className="research-card">
                <h4>Zero Downtime Requirement</h4>
                <p>All changes needed to be deployed without interrupting live lead ingestion or 
                    delaying application processing.</p>
              </div>
              <div className="research-card">
                <h4>Immediate Brand Resolution</h4>
                <p>The system needed to correctly classify, route, and act on leads within the first 7 
                    days, where conversion probability is highest.</p>
              </div>
              <div className="research-card">
                <h4>Strict Execution Ordering</h4>
                <p>Downstream automations depended on deterministic brand identification before 
                    triggering any communication or stage updates.</p>
              </div>
            </div>
          </section>

          {/* 5. THE SOLUTION */}
          <section id="solution">
            <h2>The Solution</h2>
            <h3>A Two-Layer Normalization Architecture Inside Zoho CRM</h3>
            <p>
             Rather than modifying upstream integrations, I introduced a <b>normalization layer</b> inside Zoho CRM. 
             A dedicated Lead Lifecycle field group became the system of record for Brand, Lead Stage, 
             Engagement State, and communication history, <b>allowing downstream workflows to operate on 
             normalized data</b> instead of raw inbound payloads.
            </p>

            <h3>Two-Stage Automation Design</h3>
            <ul>
              <li>
                <b>Stage 1: Source Normalization Layer</b> | Incoming “Main Source” values are mapped 
                into a canonical Brand field through a controlled classification layer.
              </li>

              <figure className="screenshot-frame" onClick={() => openModal("/images/LLChampNorm.png", "Zoho CRM Workflow: Stage 1 Inbound Parameter Mapping Blueprint", 800, 450)}>
                <Image 
                  src="/images/LLChampNorm.png"
                  alt="Stage 1 - Source Normalization workflow implementation snippet"
                  width={800}
                  height={450}
                  priority
                  className="clickable-screenshot"
                />
                <figcaption>
                 Fig. 3. Brand normalization workflow. Every inbound source is translated into a 
                 single canonical Brand value before any downstream automation is allowed 
                 to execute. <span className="zoom-hint">(Click to expand)</span>
                </figcaption>
              </figure>

              <li>
                <b>Stage 2: Brand-Driven Lifecycle Execution</b> | All downstream automations 
                depend exclusively on the normalized Brand field, ensuring isolated workflows 
                and correct transactional messaging.
              </li>
            </ul>

             <p>
              This separation ensured that no communication logic could execute before brand 
              identity was explicitly resolved.
            </p>

            <figure className="screenshot-frame" onClick={() => openModal("/images/LLturboNL.png", "Zoho CRM Workflow: Stage 2 Isolated Multi-Brand Execution Flowchart", 800, 450)}>
              <Image 
                src="/images/LLturboNL.png" 
                alt="Stage 2 - Lifecycle downstream trigger workflow automation snippet"
                width={800}
                height={450}
                priority
                className="clickable-screenshot"
              />
              <figcaption>
                Fig. 4. Lifecycle execution workflow. Once the lead has a verified Brand, 
                every subsequent action, from stage updates to transactional emails, is driven 
                from that single source of truth. <span className="zoom-hint">(Click to expand)</span>
              </figcaption>
            </figure>
          </section>

          {/* 7. OPERATIONAL IMPACT */}
          <section id="operational">
            <h2>Operational Impact</h2>

            <figure className="screenshot-frame" onClick={() => openModal("/images/clexconfirm.png", "Production Output: Accurate, Isolated Multi-Brand Email Notification Asset", 800, 450)}>
              <Image 
                src="/images/clexconfirm.png" 
                alt="Brand isolated transactional email delivery output example"
                width={800}
                height={450}
                priority
                className="clickable-screenshot"
              />
              <figcaption>
                Fig. 5. Correctly segmented confirmation email. After identity normalization, 
                customers receive communications that match the brand they actually engaged with, 
                restoring consistency across the application journey. <span className="zoom-hint">
                    (Click to expand)</span>
              </figcaption>
            </figure>

            <p>
              Introducing a normalized identity layer shifted the CRM from passive record storage to 
              <b>deterministic workflow execution.</b>
            </p>

            <div className="clex-results-table-wrapper" style={{ marginTop: "2rem" }}>
              <table className="clex-results-table">
                <thead>
                  <tr>
                    <th>Operational Domain</th>
                    <th>Legacy Behavior</th>
                    <th>Post-Normalization Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Customer Communication</b></td>
                    <td>Brand identity was inherited from Champion by default, regardless of acquisition source.</td>
                    <td>Communications are dynamically resolved based on normalized Brand field, ensuring contextual accuracy per acquisition channel.</td>
                  </tr>
                  <tr>
                    <td><b>Data Integrity</b></td>
                    <td>Multiple conflicting “Main Source” values created ambiguous attribution across brands.</td>
                    <td>All sources are mapped into a canonical classification layer, enabling consistent segmentation logic.</td>
                  </tr>
                  <tr>
                    <td><b>Lifecycle Automation</b></td>
                    <td>Downstream workflows could execute before brand context was reliably established.</td>
                    <td>Execution order is enforced through a two-stage dependency model, eliminating race conditions in automation triggers.</td>
                  </tr>
                  <tr>
                    <td><b>System Observability</b></td>
                    <td>Lead journeys were opaque and difficult to trace across multiple automations.</td>
                    <td>Lifecycle stages are explicitly structured, improving traceability across ingestion, nurturing, and conversion phases.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The most significant shift was architectural rather than cosmetic: the CRM stopped behaving like a passive database and began functioning as a controlled orchestration layer for identity resolution.
            </p>
          </section>

          {/* 8. LESSONS LEARNED */}
          <section id="lessons">
            <h2>Lessons Learned</h2>
            <p>
              The project reinforced that most automation failures originate long before an email is 
              sent or a workflow executes. <b>Without a reliable identity model, downstream systems can 
              only guess which logic should run.</b></p>

<p>By resolving brand identity <b>immediately after ingestion,</b> every subsequent automation inherited 
consistent context. The CRM evolved from a passive data store into an orchestration layer capable 
of supporting future multi-brand integrations with minimal additional complexity.</p>
            

            <figure className="screenshot-frame" onClick={() => openModal("/images/LLfieldmodule.png", "Custom CRM Integration: Lead Lifecycle Central Data Matrix Fields Structure", 800, 450)}>
              <Image 
                src="/images/LLfieldmodule.png"
                alt="Lead lifecycle metadata field group custom module layout"
                width={800}
                height={450}
                priority
                className="clickable-screenshot"
              />
              <figcaption>
                Fig. 6. Lead Lifecycle model inside Zoho CRM. Centralizing brand identity, 
                lifecycle stage, engagement status, and communication history created a reusable 
                foundation for future multi-brand automations. 
                <span className="zoom-hint">(Click to expand)</span>
              </figcaption>
            </figure>

            <div className="clex-results-blockquote">
              The key architectural insight was that CRM systems in multi-brand environments 
              must function less as storage layers and more as identity resolution engines.
            </div>

            <div className="w-full flex justify-center py-12 border-t border-gray-100 bg-gray-50">
  <Link
    href="/#work"
    className="nav-button ghost"
  >
    ← Back to Index
  </Link>
</div>


          </section>
        </article>
      </main>

      {/* Lightbox Modal */}
            {modalState.image && (
              <ImageModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                src={modalState.image.src}
                alt={modalState.image.alt}
                width={modalState.image.width}
                height={modalState.image.height}
              />
      )}
    </>
  );
}