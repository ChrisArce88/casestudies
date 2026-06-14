"use client";

import { useEffect, useState } from "react";
import globalStyles from "@/styles/global.css";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import MiniCarousel from "../../components/MiniCarousel";

interface ModalData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function CashloanExperts() {
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
    
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", 
      }
    );

    elements.forEach((el) => observer.observe(el!));

    return () => {
      elements.forEach((el) => observer.unobserve(el!));
    };
  }, []);

  return (
    <>
      <main className="case-study">
        {/* TOC (Table of Contents) */}
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
              <li><a href="#lessons" className={activeId === "lessons" ? "active" : ""}>Lessons Learned</a></li>
            </ul>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <article className="content">
          <section className="hero">
            <span className="badge"><a href="https://cashloanexperts.com" target="_blank" rel="noreferrer">Live Project</a></span>
            <h1>Cashloan Experts</h1>
            <p className="hero-subtitle">Building a scalable acquisition and attribution platform for a multi-partner lending network.</p>
          </section>

          <div id="snapshot" className="snapshot-card">
            <div>
              <span>90+</span>
              <p>Partner Locations Supported</p>
            </div>
            <div>
              <span>90+</span>
              <p>Dynamic Landing Pages Generated</p>
            </div>
            <div>
              <span>5</span>
              <p>Attribution Scenarios Tracked</p>
            </div>
            <div>
              <span>2</span>
              <p>Connected Application Stages</p>
            </div>
          </div>

          <h3>Role</h3>
          <p>Marketing Operations Specialist</p>

          <h3>Timeline</h3>
          <p>2025 - Present</p>

          <h3>Status</h3>
          <p>Live</p>

          <h3>Responsibilities</h3>
          <ul>
            <li>Research</li>
            <li>UX Design</li>
            <li>Development</li>
            <li>Attribution Architecture</li>
            <li>CRM Integration</li>
          </ul>

          <h3>Stack</h3>
          <ul>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Zoho Forms</li>
            <li>Zoho CRM</li>
          </ul>

          <h3>Scale</h3>
          <ul>
            <li>90+ Partner Locations</li>
            <li>90+ Dynamic Landing Pages</li>
            <li>5 Attribution Scenarios</li>
          </ul>

          <h2 id="overview">Overview</h2>
<p>Cashloan Experts was developed in response...</p>

<MiniCarousel 
  images={[
    { 
      src: "/images/clex_homebefore.png", 
      alt: "Old CLEX portal - Full legacy structure",
      fullWidth: 1900,  // El modal usará este ancho real
      fullHeight: 6000  // El modal usará este alto real para el scroll interno
    },
    { 
      src: "/images/clex_homeafter.png", 
      alt: "New CLEX Portal - Optimized acquisition layout",
      fullWidth: 1900,
      fullHeight: 5200 
    },
  ]} 
  onImageClick={openModal}
/>

          <p>As the network expanded, the gap between local partner presence and the company's digital experience became increasingly visible. Attribution data was incomplete, partner-specific experiences were difficult to maintain, and applicants frequently generated duplicate CRM records throughout the application process.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "New application platform hero section layout", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="New application platform hero section layout"
              width={800}
              height={450}
              priority
              className="clickable-screenshot"
            />
            <figcaption>
              <strong>Fig 2. Platform Upgrade.</strong> Next-gen frontend architecture optimized for multi-device responsiveness and speed. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <p>To address these challenges, I designed and developed a Next.js-based acquisition platform that unified attribution, streamlined the application experience, and introduced scalable partner-specific landing pages while remaining compatible with the organization's existing Zoho infrastructure.</p>

          <h2 id="problem">The Problem</h2>
          <h3>Growth Exposed Infrastructure Limitations</h3>
          <p>The existing system had been designed for a smaller operation. As the number of partners and locations increased, several limitations became apparent across attribution, lead management, and scalability.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "Previous infrastructure form limitations diagram", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="Previous infrastructure form limitations diagram"
              width={800}
              height={450}
              className="clickable-screenshot"
            />
            <figcaption>
              <strong>Fig 3. Legacy Bottleneck.</strong> Former process mapping where isolated individual forms caused workflow breaking points. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <h3>Incomplete Attribution</h3>
          <p>Leads generated through Google Business Profiles could only be reliably identified under specific circumstances. Online applications often lost location-level attribution, making it difficult to measure partner performance and understand where applicants originated.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "Google Business Profile phone-only attribution illustration", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="Google Business Profile phone-only attribution illustration"
              width={800}
              height={450}
              className="clickable-screenshot"
            />
            <figcaption>
              <strong>Fig 4. Tracking Gaps.</strong> Reliance on phone numbers as the single source of local conversion data. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <h3>Duplicate CRM Records</h3>

          <p>To reduce abandonment during qualification, the application process had intentionally been divided into 
            three smaller steps rather than a single long form. While this approach lowered the initial commitment 
            required from applicants, it introduced an operational challenge behind the scenes.</p>

          <div className="flow-diagram">
            <div className="node">Form 1 (Contact + Vehicle info)</div>
            <div className="arrow">↓</div>
            <div className="node">Form 2 (Income + Employment info)</div>
            <div className="arrow">↓</div>
            <div className="node">Form 3 (Upload Documents)</div>
          </div>

             <p>Because each submission was processed independently, applicants could generate multiple CRM records throughout 
              a single qualification journey. Agents were often required to manually identify and reconcile duplicate entries 
              before continuing the application process.</p>

              <p>To address this, I implemented a lead continuity system using UUID generation and Zoho's upsert functionality. 
                Rather than creating a new CRM record at each stage, subsequent submissions could identify and update the existing 
                lead record associated with the applicant.</p>

                 <p>This preserved the benefits of a multi-step application experience while reducing administrative 
                  overhead and maintaining a more coherent customer record.</p>

          <h3>Limited Scalability</h3>
          <p>Supporting partner-specific experiences required significant manual effort. Expanding the network risked creating additional operational overhead as more locations were added.</p>

          <h3>Disconnect Between Google Presence and Website Experience</h3>
          <p>Partner-specific Google Business Profiles represented unique locations, reviews, and local presence. However, the website lacked a scalable mechanism to reflect that structure, creating a disconnect between what users saw in Google and what they experienced after visiting the website.</p>

          <h2 id="research">Research & Discovery</h2>
          <p>I began by mapping the existing acquisition journey from first touchpoint to CRM record creation.</p>
          <p>This analysis revealed several recurring issues:</p>
          <ul>
            <li>Attribution information was lost across multiple entry points.</li>
            <li>Applicants generated duplicate records during the application process.</li>
            <li>Partner-specific experiences were difficult to maintain.</li>
            <li>Local business profiles and website content operated independently.</li>
          </ul>
          <p>Rather than solving each issue individually, I focused on designing a platform capable of addressing them as part of a unified acquisition system.</p>

          <h2 id="solution">Solution</h2>
          <ol>
            <li>Dynamic Partner Landing Pages</li>
            <li>Attribution Framework</li>
            <li>Unified Application Experience</li>
            <li>CRM Data Continuity</li>
          </ol>

          <h3>Dynamic Partner Landing Pages</h3>
          <div className="flow-diagram">
            <div className="node">partnerdata.ts</div>
            <div className="arrow">↓</div>
            <div className="node">Dynamic Route</div>
            <div className="arrow">↓</div>
            <div className="node">Landing Page</div>
            <div className="arrow">↓</div>
            <div className="node">Reviews</div>
            <div className="arrow">↓</div>
            <div className="node">Location Info</div>
          </div>

          <p>The first challenge was creating a scalable way to support a growing network of partner locations without building and maintaining individual landing pages for each one.</p>

          {/* Mini-Carrusel con fotos de las Landings Dinámicas */}
          <MiniCarousel 
            images={[
              { src: "/placeholder.png", alt: "Dynamic Page Variant - Phoenix Dashboard Location", fullWidth: 1900, fullHeight: 4500 },
              { src: "/placeholder.png", alt: "Dynamic Page Variant - Tucson Responsive Mobile View", fullWidth: 1900, fullHeight: 4500 },
              { src: "/placeholder.png", alt: "Dynamic Page Variant - Integrated Local GMB Reviews Section", fullWidth: 1900, fullHeight: 4500 }
            ]} 
            onImageClick={openModal}
          />

          <pre className="code-block">
            <code>{`const partners = {
  halfpriceauto: {
    partnerName: "Half Price Auto Repair",
    locationName: "Phoenix",
    state: "AZ",
    heroImage: "/images/partner_card.png",
    attribution: {
      partner: "Half Price Auto Repair",
      brand: "Cash Loans Experts",
      trafficSource: "GMB",
      location: "Phoenix",
      mainSource: "Partner",
      utmCampaign: "gmbrecovery",
      utmSource: "gmb",
      utmMedium: "google"
    }
  }
};`}</code>
          </pre>

          <p>Each landing page was designed to surface location-specific information, including partner details and customer reviews associated with that location. This created a stronger connection between local Google Business Profiles and the website experience, allowing users to see content that reflected the specific location they had discovered online.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "Dynamic location landing page grid components", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="Dynamic location landing page grid components"
              width={800}
              height={450}
            />
            <figcaption>
              <strong>Fig 5. Grid Components.</strong> UI system assembling customized assets automatically based on the partner URL slug. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <p>At launch, the system supported more than 90 partner locations and provided a foundation for future expansion without requiring significant development effort for each new partner.</p>

          <h3>Attribution Framework</h3>
          <p>Accurate attribution was one of the primary goals of the project.</p>
          <p>The previous acquisition process provided limited visibility into how applicants discovered the business, particularly when leads originated from partner locations or Google Business Profiles. This made performance analysis and partner reporting difficult.</p>
          <p>To address this, I designed a flexible attribution framework capable of identifying multiple acquisition scenarios. The system supports direct website traffic, partner referrals, Google Business Profile traffic, campaign-based attribution through URL parameters, and future Google Ads attribution.</p>

          <div className="tree-container">
  <div className="tree">
    <ul>
      <li>
        {/* Nivel 1: Raíz */}
        <div className="node main-node">User Visit</div>
        
        <ul>
          {/* Nivel 2: Primera Pregunta */}
          <li>
            <div className="node decision-node">Is this a Partner URL?</div>
            
            <ul>
              {/* Rama Izquierda: Sí (Fin del flujo) */}
              <li className="branch-yes">
                <span className="label-path">Yes</span>
                <div className="node success-node">Partner Attribution</div>
              </li>
              
              {/* Rama Derecha: No (Continúa a UTM) */}
              <li className="branch-no">
                <span className="label-path">No</span>
                <div className="node decision-node">UTM Present?</div>
                
                <ul>
                  {/* Sub-rama UTM: Sí */}
                  <li className="branch-yes">
                    <span className="label-path">Yes</span>
                    <div className="node success-node">Campaign Source</div>
                  </li>
                  
                  {/* Sub-rama UTM: No */}
                  <li className="branch-no">
                    <span className="label-path">No</span>
                    <div className="node decision-node">GBP?</div>
                    
                    <ul>
                      {/* Sub-rama GBP: Sí */}
                      <li className="branch-yes">
                        <span className="label-path">Yes</span>
                        <div className="node success-node">GBP</div>
                      </li>
                      {/* Sub-rama GBP: No */}
                      <li className="branch-no">
                        <span className="label-path">No</span>
                        <div className="node direct-node">Direct</div>
                      </li>
                    </ul>

                  </li>
                </ul>

              </li>
            </ul>

          </li>
        </ul>

      </li>
    </ul>
  </div>
</div>

          <p>The attribution logic was designed to persist throughout the user journey, ensuring that source information could be preserved as applicants progressed through the application process and entered the CRM.</p>
            
          <h3>Unified Application Experience</h3>
          <p>The existing application process relied on multiple forms that operated independently from one another. While each form served a specific purpose, the overall experience felt fragmented and introduced unnecessary friction for applicants.</p>

          <p>One of the most significant issues was that users were required to re-enter identification and contact information they had already provided during earlier stages of the application process. Beyond creating a poor user experience, repeated data entry risked increasing abandonment and reducing trust in the application flow.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "Form data local storage persistence sync UI", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="Form data local storage persistence sync UI"
              width={800}
              height={450}
              className="clickable-screenshot"
            />
            <figcaption>
              <strong>Fig 6. Experience Continuity.</strong> Client-side browser sync mapping that prevents manual data duplication for applicants. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <p>To address this, I implemented a local data persistence system that stored information collected during the first stage of the application. When users progressed to the next step, previously submitted information could be surfaced and confirmed rather than entered again.</p>
          <p>Custom frontend logic was also used to connect the application stages into a more cohesive experience while maintaining compatibility with the organization's existing Zoho Forms infrastructure.</p>
          <p>The result was a more seamless qualification journey that reduced redundant data entry, improved continuity between application stages, and created a smoother experience for both applicants and internal teams.</p>

          <h3>CRM Data Continuity</h3>
          <p>One of the most significant operational issues identified during research was the creation of duplicate CRM records throughout the application process.</p>
          <p>Because applicants completed multiple forms at different stages, each submission generated a new record that agents were required to manually reconcile.</p>
          <p>To reduce duplication, I implemented client-side data persistence that maintained user information between application stages. This allowed data to flow more consistently through the qualification process while reducing manual administrative work for the sales team.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/placeholder.png", "Lead UUID session validation placeholder", 800, 450)}>
            <Image 
              src="/placeholder.png" 
              alt="Lead UUID session validation placeholder"
              width={800}
              height={450}
              className="clickable-screenshot"
            />
            <figcaption>
              <strong>Fig 7. Database Integrity.</strong> Implementation of session validation tokens to securely anchor multi-stage user records. <span className="zoom-hint">(Click para expandir)</span>
            </figcaption>
          </figure>

          <p>Beyond improving operational efficiency, this approach also created a more seamless experience for applicants by minimizing redundant data entry.</p>

          <h2 id="architecture">Technical Architecture</h2>
          <p>The platform was built using a lightweight architecture that leveraged existing company systems while introducing a more scalable frontend layer.</p>

          <div className="flow-diagram">
            <div className="node">Partner URL</div>
            <div className="arrow">↓</div>
            <div className="node">Attribution Layer</div>
            <div className="arrow">↓</div>
            <div className="node">Next.js Frontend</div>
            <div className="arrow">↓</div>
            <div className="node">Local Storage</div>
            <div className="arrow">↓</div>
            <div className="node">Zoho Forms</div>
            <div className="arrow">↓</div>
            <div className="node">Zoho CRM</div>
          </div>

          <ul>
            <li>Frontend: Next.js + TypeScript</li>
            <li>Form Processing: Zoho Forms</li>
            <li>CRM: Zoho CRM</li>
            <li>Data Persistence: Browser Local Storage</li>
            <li>Partner Management: Centralized partnerdata.ts structure</li>
            <li>Routing: Dynamic URL-based partner pages</li>
            <li>Attribution: URL parameters and location-based logic</li>
          </ul>

        
          <h2 id="lessons">Lessons Learned</h2>
          <p>One of the biggest lessons from this project was that attribution, user experience, and operational efficiency are often deeply connected.</p>
          <p>What initially appeared to be a website redesign evolved into a broader acquisition infrastructure project that touched CRM workflows, partner management, attribution systems, and customer experience.</p>
          <p>The project reinforced the importance of designing scalable systems early, particularly when supporting a growing network of partners and locations.</p>

          <p>View the live implementation →</p>
        </article>
      </main>

      {/* Modal / Lightbox */}
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