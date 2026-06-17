"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import MiniCarousel from "../../components/MiniCarousel";

interface ModalData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function RetailPartnerFunnel() {
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
      "research",
      "solution",
      "architecture",
      "results",
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
              <li><a href="#research" className={activeId === "research" ? "active" : ""}>Research & Discovery</a></li>
              <li><a href="#solution" className={activeId === "solution" ? "active" : ""}>The Solution</a></li>
              <li><a href="#architecture" className={activeId === "architecture" ? "active" : ""}>Technical Architecture</a></li>
              <li><a href="#results" className={activeId === "results" ? "active" : ""}>Results</a></li>
              <li><a href="#lessons" className={activeId === "lessons" ? "active" : ""}>Lessons Learned</a></li>
            </ul>
          </nav>
        </aside>

        {/* Case Study Content */}
        <article className="content">
          <section className="hero">
            
            <h1>Retail Partner Funnel</h1>
            <p className="hero-subtitle">
              Building acompany's first multi-location acquisition and attribution system.
            </p>
          </section>

          {/* 1. SNAPSHOT */}
          <section id="snapshot">
            <section className="snapshot-grid">
              <div className="snapshot-bubble">
                <span>71</span>
                <p>Retail Locations</p>
              </div>
              <div className="snapshot-bubble">
                <span>1</span>
                <p>Centralized Acquisition Funnel</p>
              </div>
              <div className="snapshot-bubble">
                <span>2</span>
                <p>Weeks until Production Deploymen</p>
              </div>
              <div className="snapshot-bubble">
                <span>100%</span>
                <p>Attribution Accuracy</p>
              </div>
            </section>
          </section>

          {/* PROJECT METADATA */}
          <section className="project-meta">
            <div className="meta-container">
              <div className="meta-row">
                <span>Role</span>
                <p>Frontend Engineer · Growth Systems</p>
              </div>
              <div className="meta-row">
                <span>Deployed:</span>
                <p>April 2026</p>
              </div>
              <div className="meta-row">
                <span>Cycle:</span>
                <p>2-week rollout</p>
              </div>
              <div className="meta-row">
                <span>Stack</span>
                <p>HTML5 · CSS3 · Vanilla JS · URLSearchParams · Zoho Forms · GA4</p>
              </div>
            </div>
          </section>

          {/* 2. OVERVIEW */}
          <section id="overview">
            <h2>Overview</h2>
            <h3>Project Origins</h3>
            <p>
              This case study documents the design and implementation of a multi-location 
              acquisition and attribution system built for a financial services retail network. 
              Certain branding, naming, and identifying details have been anonymized for 
              confidentiality.
            </p>

              <p>The project began as an initiative to modernize and centralize the credit application 
                flow across multiple retail partner locations. Each storefront previously operated with 
                isolated application forms, resulting in fragmented data collection and inconsistent 
                attribution.</p>

                 <p>The goal was to replace this fragmented structure with a unified digital entry point that 
                could correctly identify the originating partner and location at the moment of application. </p>

            <h3>System Flow</h3>
            <p>
              Customers initiated the application process by scanning a QR code displayed at participating 
              retail locations. Each QR encoded a unique combination of partner and location identifiers, 
              allowing every visit to carry its origin from the very first interaction.</p>

            <p>Upon arrival, a lightweight landing page extracted these parameters and dynamically injected 
              them into the embedded application before submission. This allowed every completed application 
              to be automatically associated with the correct retail partner and physical location without 
              requiring manual selection or intervention.
            </p>

            <p>Beyond simplifying the customer experience, this architecture established a reliable 
              attribution layer while preserving the existing Zoho Forms to CRM integration, minimizing 
              implementation effort and accelerating deployment.</p>

            <h3>Design Legacy</h3>
            <p>
              While initially scoped as a standalone implementation for a single sub-brand, this project 
              introduced reusable patterns in attribution modeling, routing logic, and lightweight frontend 
              architecture that continued to inform subsequent acquisition systems. These ideas were later 
              refined and expanded in projects such as CLEX <a href="/casestudies/cashloansexperts" target="_blank">(see case study).</a>
            </p> 
          </section>

          {/* 3. THE PROBLEM */}
          <section id="problem">
            <h2>The Problem</h2>
            <h3>The First Scalability Challenge</h3>
            <p>
              The existing acquisition process worked well while retail partners operated one or two 
              locations. Attribution was achieved by assigning a dedicated application form to each 
              partner, making the origin of every lead easy to identify.
            </p>
            <p>
              That model stopped scaling when a new retail partner joined with more than 70 
              physical locations. A single partner was no longer enough to identify where an application 
              originated, yet creating and maintaining a separate form for every store would dramatically 
              increase operational complexity.
            </p>

            <p>The challenge was no longer simply collecting applications. The system now needed to 
              distinguish individual retail locations while remaining maintainable as the network 
              continued to grow.</p>

           <pre className="code-block">
  <code>{`const routes = {
  anh: { location: "Anaheim" },
  bak: { location: "Bakersfield" },
  riv: { location: "Riverside" },
};

const route = routes[path];

window.location.replace(
  \`/?partner=\${route.partner}&location=\${route.location}\`
);`}</code>
</pre>


<div className="code-caption" style={{ fontSize: '0.9rem', color: '#444850', marginTop: '0.25rem', marginBottom: '3rem' }}>
  <strong>Instead of inventing a new internal identifier system, route aliases mirrored the retail 
    partner's existing location codes. This reduced onboarding friction and made operational support 
    significantly easier for both technical and business teams.</strong>
</div>


            <MiniCarousel 
              images={[
                { src: "/images/legacy_static_forms.png", alt: "Analysis of fragmented static form architectures" },
                { src: "/images/maintenance_overhead.png", alt: "Console tracking showing manual editing complexity across cloned profiles" }
              ]} 
              onImageClick={openModal} 
            />
          </section>

          {/* 4. RESEARCH & DISCOVERY */}
          <section id="research">
            <h2>Design Constraints</h2>
            <p>
              Rather than replacing the existing application pipeline, the objective was to 
              extend it with minimal disruption. The solution needed to preserve the existing 
              Zoho Forms to CRM integration while introducing reliable partner and location 
              attribution across a growing retail network.
            </p>
            <div className="research-grid">
              <div className="research-card">
                <h4>Maintain Existing Infrastructure</h4>
                <p>Reuse the existing application and CRM integration without introducing backend 
                  services or custom APIs.</p>
              </div>
              <div className="research-card">
                <h4>Support Multi-Location Attribution</h4>
                <p>Distinguish dozens of retail locations while maintaining 
                  a single application experience.</p>
              </div>
              <div className="research-card">
                <h4>Keep Deployment Simple</h4>
                <p>Allow new retail locations to be onboarded by configuring routing rules 
                  rather than duplicating application forms.</p>
              </div>
            </div>
            <p>
              These constraints shifted the problem away from rebuilding the application itself. 
              Instead, the focus became designing a lightweight routing and attribution layer 
              capable of integrating seamlessly with the existing acquisition workflow.
            </p>
          </section>

          {/* 5. THE SOLUTION */}
          <section id="solution">
            <h2>The Solution</h2>
            <h3>The Custom Vanilla JS Frame Overlay</h3>
            <p>
              To validate the business channel viability immediately without investing resources into a complex custom backend overhaul, a native Zoho Forms iframe was utilized. The interface was visually transformed through an HTML5 and CSS3 Custom Cover Overlay framework.
            </p>
            <h3>Telemetry Injection Engine</h3>
            <p>
              A lightweight parameter processor script was engineered using Vanilla JS and the native <code>URLSearchParams</code> API. Upon page mounting, the logic extracted the tracking credentials (<code>p_id</code> and <code>l_id</code>) embedded within the storefront QR code query strings, dynamically injecting this metadata into hidden iframe parameters before clearing out the user-facing loader element.
            </p>
            <pre className="code-block">
              <code>{`// Dynamic tracking validation mapping
const urlParams = new URLSearchParams(window.location.search);
const partnerId = urlParams.get('p_id');
const locationId = urlParams.get('l_id');

if (partnerId && locationId) {
  const iframe = document.getElementById('zoho-form-iframe');
  iframe.src += \`?PartnerID=\${partnerId}&LocationID=\${locationId}\`;
}`}</code>
            </pre>
            <h3>Behavioral Funnel Events</h3>
            <p>
              Custom event listeners were wired into the presentation layer to broadcast critical funnel touchpoints directly to Google Analytics 4. Mapping <code>application_start</code>, <code>generate_lead</code>, and final <code>form_submit</code> data allowed the growth team to chart live in-store acquisition drop-offs for the first time.
            </p>
          </section>

          {/* 6. TECHNICAL ARCHITECTURE */}
          <section id="architecture">
            <h2>Technical Architecture</h2>
            <p>
              A lean frontend system designed for instantaneous page loads over retail cellular networks, ensuring data mapping synchronization downstream.
            </p>

            <div className="clex-results-table-wrapper" style={{ marginTop: "2rem" }}>
    <table className="clex-results-table">
      <thead>
        <tr>
                    <th>Layer</th>
                    <th>Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>QR Routing</td>
                    <td>Identify originating retail location</td>
                  </tr>
                  <tr>
                    <td>Redirect Layer</td>
                    <td>Resolve partner/location context</td>
                  </tr>
                  <tr>
                    <td>Landing Experience</td>
                    <td>Present branded acquisition flow</td>
                  </tr>
                  <tr>
                    <td>Dynamic Form Loader</td>
                    <td>Inject attribution parameters</td>
                  </tr>
                  <tr>
                    <td>Zoho Forms</td>
                    <td>Capture customer application</td>
                  </tr>
                  <tr>
                    <td>Zoho CRM</td>
                    <td>Persist synchronized lead records</td>
                  </tr>
                  <tr>
                    <td>GA4</td>
                    <td>Measure funnel progression</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. RESULTS */}
          <section id="results">
            <h2>Results & Impact</h2>
            <p>
              Data validation recorded across active retail partner pilots demonstrated definitive improvements against historical acquisition baselines:
            </p>

           <div className="clex-results-table-wrapper" style={{ marginTop: "2rem" }}>
    <table className="clex-results-table">
      <thead>
        <tr>
                    <th>Performance Metric</th>
                    <th>Legacy Framework</th>
                    <th>Optimized Dynamic System</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Attribution Tracking</td>
                    <td>Unmeasurable / Manual Entries</td>
                    <td>100% Automated CRM Accuracy</td>
                  </tr>
                  <tr>
                    <td>Form Architecture</td>
                    <td>71 Individual Static Clones</td>
                    <td>1 Centralized Modular Base Form</td>
                  </tr>
                  <tr>
                    <td>Engagement Metrics</td>
                    <td>Fragmented Tracking Contexts</td>
                    <td>160 Active Users / 138 Starts Captured</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="results-blockquote">
              This functional validation prototype proved that dynamic query parameter injection is a highly reliable method for solving multi-location attribution tracking. It simplified operational overhead while establishing the programmatic foundation needed to design large-scale platform deployments.
            </div>
          </section>

          {/* 8. LESSONS LEARNED */}
          <section id="lessons">
            <h2>Lessons Learned</h2>
            <p>
              <b>Low-Cost Operational Validation:</b> This project demonstrated how targeted DOM manipulation and clean layout structures can resolve massive, distributed operational bottlenecks without requiring early-stage backend code deployment or infrastructure scaling.
            </p>
            <p>
              <b>Modular Core Efficiency:</b> Centralizing data ingestion into a single dynamic component rather than managing duplicate form instances significantly reduces development friction and guarantees codebase maintainability.
            </p>

            <a href="https://cashloansexperts.com" target="_blank" rel="noreferrer" className="nav-button secondary">
              View Active Framework ↗
            </a>
          </section>

          {/* Final Navigation */}
          <section className="case-navigation">
            <div className="next-case-card">
              <span>Next Case Study</span>
              <h3>Cash Loans Experts</h3>
              <p>Building a scalable acquisition and attribution platform for multi-partner networks.</p>
              <a href="/case-studies/clex">Explore Project →</a>
            </div>

            <a href="/case-studies" className="nav-button ghost">
              ← Back to Portfolio Index
            </a>
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