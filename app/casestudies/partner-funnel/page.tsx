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
      "initial",
      "solution",
      "architecture",
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
              <li><a href="#initial" className={activeId === "initial" ? "active" : ""}>Initial Constraints</a></li>
              <li><a href="#solution" className={activeId === "solution" ? "active" : ""}>The Solution</a></li>
              <li><a href="#architecture" className={activeId === "architecture" ? "active" : ""}>Technical Architecture</a></li>
              <li><a href="#operational" className={activeId === "operational" ? "active" : ""}>Operational Impact</a></li>
              <li><a href="#lessons" className={activeId === "lessons" ? "active" : ""}>Lessons Learned</a></li>
            </ul>
          </nav>
        </aside>

        {/* Case Study Content */}
        <article className="content">
          <section className="hero">
            
            <h1>Retail Partner Funnel</h1>
            <p className="hero-subtitle">
              Building a company's first multi-location acquisition and attribution system.
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
                <p>Shared Application</p>
              </div>
              <div className="snapshot-bubble">
                <span>0</span>
                <p>Backend Changes</p>
              </div>
              <div className="snapshot-bubble">
                <span>71/71</span>
                <p>Locations Successfully Attributed</p>
              </div>
            </section>
          </section>

          {/* PROJECT METADATA */}

          <section className="clex-project-meta">
      <div className="clex-meta-container">
        <div className="clex-meta-row">
          <span className="clex-meta-label">Role</span>
          <p className="clex-meta-value">Frontend Engineer · Growth Systems</p>
        </div>
        <div className="clex-meta-row">
          <span className="clex-meta-label">Deployed:</span>
          <p className="clex-meta-value">April 2026</p>
        </div>
              <div className="clex-meta-row">
          <span className="clex-meta-label">Cycle:</span>
          <p className="clex-meta-value">2-week rollout</p>
        </div>   
        <div className="clex-meta-row">
          <span className="clex-meta-label">Stack</span>
          <p className="clex-meta-value">HTML5 · CSS3 · Vanilla JS · URLSearchParams · Zoho Forms · GA4</p>
        </div>     </div> 

        <p>The production system itself was intentionally implemented with lightweight browser-native technologies to preserve compatibility with the existing infrastructure.</p>
          </section>

          {/* 2. OVERVIEW */}
          <section id="overview">
            <h2>Overview</h2>
            <h3>Project Origins</h3>
            <p>
              This case study documents the design and implementation of a <b>multi-location 
              acquisition and attribution system</b> built for a financial services retail network. 
              <i> Certain branding, naming, and identifying details have been anonymized for 
              confidentiality.</i>
            </p>

            <p>System validation was confirmed through <b>cross-source consistency</b> between event tracking, 
                 CRM ingestion, and routing resolution.</p>

 <div className="flow-diagram">

  {/* Las fuentes de origen distribuidas de forma horizontal en la parte superior */}
  <div className="flow-branches">
    
    <div className="node">
      Dynamic Route
    </div>

    <div className="node">
      +
    </div>

    <div className="node">
      GA4
    </div>

    <div className="node">
      +
    </div>

    <div className="node">
      CRM
    </div>

  </div>

  <div className="arrow">↓</div>

  {/* El nodo de destino final donde converge todo */}
  <div className="node">
    Location Attribution Matrix (71/71 locations successfully attributed at launch)
  </div>

</div>

              <p>The project began as an initiative to <b>modernize and centralize the credit application 
                flow across multiple retail partner locations.</b> Each storefront previously operated with 
                isolated application forms, resulting in fragmented data collection and inconsistent 
                attribution.</p>

                 <p>The resulting architecture introduced the company's first shared acquisition layer capable of supporting 
                  dozens of retail locations through a single application experience. </p>

            <h3>System Flow</h3>
            <p>
              Customers initiated the application process by scanning a QR code displayed at participating 
              retail locations. <b>Each QR encoded a unique combination of partner and location identifiers, </b> 
              allowing every visit to carry its origin from the very first interaction.</p>

              <div className="flow-diagram">

  <div className="node">Customer</div>

  <div className="arrow">↓</div>

  <div className="node">Scans QR</div>

  <div className="arrow">↓</div>

  <div className="node">Application</div>

  <div className="arrow">↓</div>
 
    <div className="node">
      Lead reaches CRM
    </div>

</div>

            <p>Upon arrival, a lightweight landing page extracted these parameters and dynamically injected 
              them into the embedded application before submission. This allowed every completed application 
              to be <b>automatically associated with the correct retail partner and physical location</b> without 
              requiring manual selection or intervention.
            </p>

            <p>Beyond simplifying the customer experience, <b>this architecture established a reliable 
              attribution layer</b> while preserving the existing Zoho Forms to CRM integration, minimizing 
              implementation effort and accelerating deployment.</p>

            <h3>Design Legacy</h3>

             <MiniCarousel 
  images={[
    { 
      src: "/images/formslegacy.png", 
      alt: "Fig. 1. Legacy Form Architecture. Supporting a growing retail network required maintaining separate forms for each location, making updates repetitive, error-prone, and difficult to scale.",
      fullWidth: 1440,  
      fullHeight: 2800  
    },
    { 
      src: "/images/formslegacy2.png", 
      alt: "Fig. 2. Single-Location Application Flow. A typical legacy application page tied to a single storefront. Expanding this model to dozens of locations would have required creating and maintaining dozens of nearly identical copies.",
      fullWidth: 1200,
      fullHeight: 1800 
    },
  ]} 
  onImageClick={openModal}
/>

            <p>
              While initially scoped as a standalone implementation for a single sub-brand, this project 
              introduced <b>reusable patterns in attribution modeling, routing logic, and lightweight frontend 
              architecture</b> that continued to inform subsequent acquisition systems. These ideas were later 
              refined and expanded in projects such as CLEX <a href="/casestudies/cashloansexperts" target="_blank"><b>(see case study).</b></a>
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
              That model stopped scaling when a new retail partner joined with <b>more than 70 
              physical locations.</b> A single partner was no longer enough to identify where an application 
              originated, yet creating and maintaining a separate form for every store would dramatically 
              increase operational complexity.
              The challenge was not collecting more applications. <b>It was preventing operational complexity 
              from growing alongside the retail network.</b></p>

           <pre className="code-block">
  <code>{`    "anh": {
      partner: "auto-international-insurance-agency",
      location: "Anaheim",
    },

    "apv": {
      partner: "auto-international-insurance-agency",
      location: "Apple Valley",
    },

     "bak": {
      partner: "auto-international-insurance-agency",
      location: "Bakersfield",
    },

     "bfl": {
      partner: "auto-international-insurance-agency",
      location: "Bakersfield 2",
    },
`}</code>
</pre>


<div className="clex-results-blockquote">
  Instead of inventing a new internal identifier system, route aliases mirrored the retail 
    partner's existing location codes. This reduced onboarding friction and made operational support 
    significantly easier for both technical and business teams.
</div>
          </section>

          {/* 4. RESEARCH & DISCOVERY */}
          <section id="initial">
            <h2>Initial Constraints</h2>
            <p>
              Rather than replacing the existing application pipeline, <b>the objective was to 
              extend it with minimal disruption.</b> The solution needed to preserve the existing 
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
              <div className="research-card">
                <h4>Evolving Business Requirements</h4>
                <p>Not every attribution field was available before deployment. 
                  The architecture needed to support incremental additions without requiring 
                  changes to the user experience or routing logic.</p>
              </div>

              <div className="research-card">
  <h4>QR Delivery Constraints</h4>
  <p>
    Directly embedding full attribution parameters in QR destinations was not viable,
    as long or encoded URLs degraded scan reliability and created usability issues in real retail environments.
  </p>
</div>
            </div>
            <p>
              Taken together, these constraints reframed the challenge. 
              The goal was no longer to build a new application, but to introduce 
              the smallest possible architectural layer <b>capable of making the existing 
              system scalable.</b>
            </p>
          </section>

          {/* 5. THE SOLUTION */}
          <section id="solution">
            <h2>The Solution</h2>
            <h3>A Lightweight Architecture</h3>

             <MiniCarousel 
  images={[
    { 
      src: "/images/scan.png", 
      alt: "Fig. 3. QR Entry Point. Customers begin the application by scanning a QR code displayed at a partner retail location, allowing each session to inherit its originating location automatically.",
      fullWidth: 1440,  
      fullHeight: 2800  
    },
    { 
      src: "/images/application.png", 
      alt: "Fig. 4. Mobile Application Experience. The landing page presents a lightweight, mobile-first interface that progressively loads the application after the user chooses to begin.",
      fullWidth: 1200,
      fullHeight: 1800 
    },
    { 
      src: "/images/CRM.png", 
      alt: "Fig. 5. CRM Attribution. Completed applications are synchronized directly into Zoho CRM with partner and location metadata already attached, eliminating manual source assignment.",
      fullWidth: 1200,
      fullHeight: 1800 
    },
  ]} 
  onImageClick={openModal}
/>

            <p>
              Rather than replacing the existing application infrastructure, <b>the solution introduced a 
              lightweight layer around it.</b> This approach preserved the native Zoho Forms to CRM integration 
              while adding routing, attribution, and analytics without requiring backend development.
            </p>
            <h3>Dynamic Attribution</h3>
            <p>
              Partner and location information was carried through URL parameters generated by the routing 
              layer. Upon loading the application, these values were automatically injected into the embedded 
              form, <b>allowing every submission to retain its originating retail context.</b>
            </p>
           <pre className="code-block">
  <code>{`
  const routes = {
    "wgt": {
      partner: "auto-international-insurance-agency",
      location: "Wilmington",
    },
  }; 

  const path = window.location.pathname.replace("/r/", "").toLowerCase();

  const route = routes[path];

  if (route) {
    const url = \`/?partner=\${route.partner}&location=\${encodeURIComponent(route.location)}\`;
    window.location.replace(url);
  } else {
    window.location.replace("/");
  }
  `}</code>
</pre>

<div className="clex-results-blockquote">
Example of the routing layer. A lightweight mapping object resolved each location code 
into the corresponding partner metadata, <b>allowing a single application experience 
to support every retail location.</b></div>

            <h3>Progressive Application Experience</h3>
            <p>
              Instead of loading the application immediately, the interface presented a lightweight 
              introductory layer. Selecting "Start Application" recorded the beginning of the funnel 
              before dynamically loading the embedded form, <b>improving perceived performance while enabling
              more accurate behavioral measurement.</b>
            </p>

            <figure className="screenshot-frame" onClick={() => openModal("/images/startapp.png", "Google Business Profile tracking limited strictly to unique phone-based attribution", 800, 450)}>
              <Image 
                src="/images/startapp.png" 
                alt="Progressive Form Loading"
                width={800}
                height={450}
                priority
                className="clickable-screenshot"
              />
              <figcaption>
  <strong>Fig. 6. Progressive Form Loading.</strong> Rather than displaying the application immediately, the landing experience introduced a lightweight entry state. The application was loaded only after the customer explicitly chose to begin, creating a clearer call to action while enabling the first measurable funnel event (<code>application_start</code>) before the form was rendered. <span className="zoom-hint">(Click to expand)</span>
</figcaption>
            </figure>

            <h3>Analytics Integration</h3>
            <p>
              Key interactions were instrumented with custom GA4 events, providing visibility into 
              application intent, progression, and completion. This transformed a previously opaque 
              acquisition flow into <b>a measurable funnel </b>without modifying the underlying CRM integration.
            </p>

            <figure className="screenshot-frame" onClick={() => openModal("/images/analyticspartnerfunnel.png", "Google Business Profile tracking limited strictly to unique phone-based attribution", 800, 450)}>
              <Image 
                src="/images/analyticspartnerfunnel.png" 
                alt="Screen showing Custom GA4 events"
                width={800}
                height={450}
                priority
                className="clickable-screenshot"
              />
              <figcaption>
  <strong>Fig. 7. Custom Funnel Instrumentation.</strong> Custom GA4 events were introduced to measure the most important stages of the acquisition flow. <code>application_start</code> captured user intent, <code>generate_lead</code> confirmed successful submissions, and <code>phone_click</code> tracked an alternative conversion path, providing end-to-end visibility into customer behavior. <span className="zoom-hint">(Click to expand)</span>
</figcaption>
            </figure>

            <p>
              The objective was not to replace the existing platform, but to extend it through a lightweight 
              frontend layer capable of solving attribution and routing while <b>preserving the existing backend 
              workflow.</b>
            </p>
          </section>

          {/* 6. TECHNICAL ARCHITECTURE */}
          <section id="architecture">
            <h2>Technical Architecture</h2>

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
                    <td>Resolve the originating retail location</td>
                  </tr>
                  <tr>
                    <td>Redirect Layer</td>
                    <td>Translate route identifiers into partner and location metadata</td>
                  </tr>
                  <tr>
                    <td>Landing Experience</td>
                    <td>Present the acquisition flow and initialize the application</td>
                  </tr>
                  <tr>
                    <td>Dynamic Form Loader</td>
                    <td>Inject attribution parameters into the embedded form</td>
                  </tr>
                  <tr>
                    <td>Zoho Forms</td>
                    <td>Collect applicant information</td>
                  </tr>
                  <tr>
                    <td>Zoho CRM</td>
                    <td>Synchronize lead records through native integration</td>
                  </tr>
                  <tr>
                    <td>GA4</td>
                    <td>Track funnel progression and behavioral events</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              This layered approach kept each component focused on a single responsibility, 
              making the system <b>easier to maintain, extend, and scale</b> as additional retail 
              partners were introduced.
            </p>


          </section>

          {/* 7. RESULTS */}
          <section id="operational">
            <h2>Operational Impact</h2>
      

           <div className="clex-results-table-wrapper" style={{ marginTop: "2rem" }}>
    <table className="clex-results-table">
      <thead>
        <tr>
                    <th>Capability</th>
                    <th>Previous Process</th>
                    <th>New System</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Attribution</td>
                    <td>Manual / inconsistent</td>
                    <td>Automated partner & location attribution</td>
                  </tr>
                  <tr>
                    <td>Form Management</td>
                    <td>71 independent forms</td>
                    <td>1 centralized dynamic form</td>
                  </tr>
                  <tr>
                    <td>Analytics</td>
                    <td>Limited visibility</td>
                    <td>Funnel-level event tracking</td>
                  </tr>
                  <tr>
                    <td>Deployment</td>
                    <td>Manual updates across multiple forms</td>
                    <td>Single-point maintenance</td>
                  </tr>
                </tbody>
              </table>
</div>
              <h3>Production Validation</h3>

              <p>
              Production deployment confirmed that a single application experience could reliably support 
              a distributed retail network <b>without sacrificing attribution accuracy or operational simplicity.</b>
              </p>
     
          </section>

          {/* 8. LESSONS LEARNED */}
          <section id="lessons">
            <h2>Lessons Learned</h2>
            <p>
              What initially appeared to be a one-off implementation became an exercise in designing 
              for future growth. Introducing routing, dynamic attribution, and a centralized application 
              flow.
          
             This project changed the way I think about scalability. The challenge was never building a 
             more sophisticated application, but introducing the smallest architectural layer <b>capable of 
             removing an operational bottleneck.</b> That principle later became the foundation for larger 
             acquisition systems like <a href="/casestudies/cashloansexperts">CLEX</a>.
            </p>
            

            <a href="https://cashloansexperts.com" target="_blank" rel="noreferrer" className="nav-button secondary">
              See Framework Evolution ↗
            </a>
          </section>

          {/* Final Navigation */}
          <section className="case-navigation">


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