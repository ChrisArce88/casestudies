"use client";

import { useEffect, useState } from "react";
import globalStyles from "@/styles/global.css";
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
    // Lista exacta de las secciones declaradas en tu TOC y tu artículo
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
      root: null, // Escanea el viewport del navegador entero
      rootMargin: "-20% 0px -60% 0px", // Ventana central-superior de lectura activa
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Solo cambiamos el estado cuando la sección entra activamente en la franja de lectura
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Buscamos los elementos dentro del efecto para asegurar que ya existen en el DOM
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Limpieza al desmontar el componente para evitar memory leaks
    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez al cargar la página

  return (
    <>
      {/* Tu JSX continúa aquí abajo sin cambios */}
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
              <li><a href="#results" className={activeId === "results" ? "active" : ""}>Early Launch Results</a></li>
              <li><a href="#lessons" className={activeId === "lessons" ? "active" : ""}>Lessons Learned</a></li>
              
            </ul>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <article className="content">
          <section className="hero">
            <span className="badge"><a href="https://cashloansexperts.com" target="_blank" rel="noreferrer">Live Project</a></span>
            <h1>Unified Acquisition & Attribution Platform</h1>
            <p className="hero-subtitle">Building a scalable acquisition and attribution platform for a multi-partner lending network.</p>
          </section>
          
<section id="snapshot">   
          <section className="snapshot-grid">
 
  <div className="snapshot-bubble">
    <span>90+</span>
    <p>Landing Pages</p>
  </div>

  <div className="snapshot-bubble">
    <span>12.5%</span>
    <p>Conversion Rate</p>
  </div>

  <div className="snapshot-bubble">
    <span>5</span>
    <p>Attribution Paths</p>
  </div>

  <div className="snapshot-bubble">
    <span>128%</span>
    <p>Engagement Boost</p>
  </div>
</section>
</section>

   <section className="clex-project-meta">
      <div className="clex-meta-container">
        <div className="clex-meta-row">
          <span className="clex-meta-label">Role</span>
          <p className="clex-meta-value">Marketing Operations Specialist</p>
        </div>

        <div className="clex-meta-row">
          <span className="clex-meta-label">Timeline</span>
          <p className="clex-meta-value">June 2026 – Present</p>
        </div>

        <div className="clex-meta-row">
          <span className="clex-meta-label">Status</span>
          <p className="clex-meta-value">Live</p>
        </div>

        <div className="clex-meta-row">
          <span className="clex-meta-label">Stack</span>
          <p className="clex-meta-value">Next.js · TypeScript · Zoho Forms · Zoho CRM</p>
        </div>

        <div className="clex-meta-row">
          <span className="clex-meta-label">Responsibilities</span>
          <p className="clex-meta-value">
            Research · UX Design · Development · Attribution Architecture · CRM Integration
          </p>
        </div>
      </div>
    </section>


<h2 id="overview">Overview</h2>
<p>Cashloan Experts was developed in response to <b>several operational challenges within a 
  growing lending network.</b> 
  The organization relied on Google Business Profiles, partner locations, 
  and online applications to generate 
  leads, but the existing infrastructure struggled to support <b>accurate attribution, 
  scalable partner growth, and efficient lead management.</b></p>

<MiniCarousel 
  images={[
    { 
      src: "/images/clexlegacy.png", 
      alt: "Old CLEX portal - Full legacy structure",
      fullWidth: 1900,  
      fullHeight: 6000  
    },
    { 
      src: "/images/clex_2026.png", 
      alt: "New CLEX Portal - Optimized acquisition layout",
      fullWidth: 1900,
      fullHeight: 5200 
    },
  ]} 
  onImageClick={openModal}
/>

          <p>As the network expanded, the gap between local partner presence and the company's 
            digital experience became increasingly visible. Attribution data was incomplete, 
            partner-specific experiences were difficult to maintain, and <b>applicants frequently 
            generated duplicate CRM records</b> throughout the application process.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/images/duplicateleads1163.png", "Zoho CRM audit view showing 1,163 duplicate lead records generated in a single month", 800, 450)}>
             <Image 
    src="/images/duplicateleads1163.png" 
    alt="Zoho CRM audit view showing 1,163 duplicate lead records generated in a single month"
    width={800}
    height={450}
    priority
    className="clickable-screenshot"
  />
  <figcaption>
    <strong>Fig 2. Data Saturation.</strong> Internal audit from May showing 1,163 duplicate CRM records caused by the isolated multi-step form architecture before the unifed relaunch. <span className="zoom-hint">(Click to expand)</span>
  </figcaption>
          </figure>

          <p>To address these challenges, I designed and developed a Next.js-based acquisition 
            platform that <b>unified attribution, streamlined the application experience, and 
            introduced scalable partner-specific landing pages</b> while remaining compatible with 
            the organization's existing Zoho infrastructure.</p>

          <h2 id="problem">The Problem</h2>
          <h3>Growth Exposed Infrastructure Limitations</h3>
          <p>The existing system had been designed for a <b>smaller operation. </b>
            As the number of internal brands, volume of leads, partners and locations 
            increased, several limitations became apparent across attribution, lead management, 
            and scalability.</p>

          
          <figure className="screenshot-frame" onClick={() => openModal("/images/suspendedgbps.png", "Google Business Profile suspension dashboard", 800, 450)}>
  <Image 
    src="/images/suspendedgbps.png" 
    alt="Google Business Profile suspension dashboard showing restricted local profiles"
    width={800}
    height={450}
    priority
    className="clickable-screenshot"
  />
  <figcaption>
    <strong>Fig 3. Compliance Crisis.</strong> The direct impact of lacking localized digital experiences: 23 Google Business Profiles suspended due to URL and entity mismatch. <span className="zoom-hint">(Click to expand)</span>
  </figcaption>
</figure>


          <h3>Incomplete Attribution</h3>
          <p>Leads generated through Google Business Profiles could only be reliably identified under 
            specific circumstances. <b>Online applications often lost location-level attribution,</b> 
            making it difficult to measure partner performance and understand where applicants 
            originated.</p>

          <figure className="screenshot-frame" onClick={() => openModal("/images/gbp_channels.png", "Google Business Profile tracking limited strictly to unique phone-based attribution", 800, 450)}>
  <Image 
    src="/images/gbp_channels.png" 
    alt="Google Business Profile tracking limited strictly to unique phone-based attribution"
    width={800}
    height={450}
    priority
    className="clickable-screenshot"
  />
  <figcaption>
    <strong>Fig 4. Attribution Blindspot.</strong> The reliance on unique phone numbers as the sole source 
    of local conversion mapping. While inbound calls were accurately identified, web traffic originating 
    from Google Business Profiles entered the CRM unbranded, blending completely into the direct traffic 
    channel. <span className="zoom-hint">(Click to expand)</span>
  </figcaption>
</figure>

          <h3>Duplicate CRM Records</h3>

          <p>To reduce abandonment during qualification, the application process had intentionally been divided into 
            three smaller steps rather than a single long form. While this approach lowered the initial commitment 
            required from applicants, it introduced an <b>operational challenge</b> behind the scenes.</p>

          <div className="flow-diagram">
            <div className="node">Form 1 (Contact + Vehicle info)</div>
            <div className="arrow">↓</div>
            <div className="node">Form 2 (Income + Employment info)</div>
            <div className="arrow">↓</div>
            <div className="node">Form 3 (Upload Documents)</div>
          </div>

             <p>Because each submission was processed independently, applicants could generate multiple CRM 
              records throughout 
              a single qualification journey. Agents were often required to <b>manually identify and 
              reconcile duplicate entries</b> 
              before continuing the application process.</p>

              <p>To address this, I implemented a <b>lead continuity system</b> using UUID generation and Zoho's 
                upsert functionality. 
                Rather than creating a new CRM record at each stage, subsequent submissions could <b>identify 
                and update the existing 
                lead record</b> associated with the applicant.</p>

                 <p>This preserved the benefits of a multi-step application experience while <b>reducing 
                  administrative 
                  overhead</b> and maintaining a more coherent customer record.</p>

          <h3>Limited Scalability</h3>
          <p>Supporting partner-specific experiences required <b>significant manual effort.</b> 
            Expanding the network risked creating additional operational overhead as more 
            locations were added.</p>

<MiniCarousel 
  images={[
    { 
      src: "/images/zohoforms1.png", 
      alt: "Fig 5. Asset Proliferation. Zoho Forms dashboard showing part of the 468 independent, location-specific forms historically created and maintained manually to support unique partner nomenclatures.",
      fullWidth: 1440,  
      fullHeight: 2800  
    },
    { 
      src: "/images/formcahsloans.png", 
      alt: "Fig 6. Form-as-a-Landing Workaround. A legacy standalone form configured with hardcoded styles to simulate a partner-specific landing page, illustrating the operational constraints prior to the dynamic relaunch.",
      fullWidth: 1200,
      fullHeight: 1800 
    },
  ]} 
  onImageClick={openModal}
/>

          <h3>Disconnect Between Google Presence and Website Experience</h3>
          <p>Partner-specific Google Business Profiles represented unique locations, reviews, and local presence. However, the website lacked a scalable mechanism to reflect that structure, creating a disconnect between what users saw in Google and what they experienced after visiting the website.</p>

          <h2 id="research">Research & Discovery</h2>
          <p>Before proposing solutions, I mapped the existing acquisition journey from first touchpoint 
            through CRM record creation to <b>understand where operational friction occurred.</b></p>
          <p>Rather than evaluating the website in isolation, I examined the broader system connecting 
            <b>local discovery, 
            qualification workflows, and internal lead management.</b></p>

          <div className="research-grid">

  <div className="research-card">
    <h4>Lead Lifecycle Mapping</h4>
    <p>Traced the applicant journey from acquisition through CRM entry.</p>
  </div>

  <div className="research-card">
    <h4>Workflow Review</h4>
    <p>Reviewed partner and internal qualification processes.</p>
  </div>

  <div className="research-card">
    <h4>Attribution Audit</h4>
    <p>Identified where source information was being lost.</p>
  </div>

  <div className="research-card">
    <h4>Pattern Analysis</h4>
    <p>Investigated duplicate record creation and continuity gaps.</p>
  </div>

  <div className="research-card">
    <h4>Experience Comparison</h4>
    <p>Compared Google presence against the website experience.</p>
  </div>

</div>

          <p>Rather than solving each issue individually, I focused on designing a platform capable 
            of addressing them as part of a <b>unified acquisition system.</b></p>

          <ul className="findings-list">
  <li><b>Attribution information was lost</b> across multiple entry points.</li>

  <li>Applicants <b>generated duplicate CRM records</b> during qualification.</li>

  <li>The application experience felt <b>fragmented</b> between stages.</li>

  <li>Partner-specific experiences required <b>significant manual effort.</b></li>

  <li>Google Business Profiles and website experiences <b>operated independently.</b></li>
</ul>

  
  <section id="solution">
  <h2>The Solution</h2>

          <h3>Dynamic Partner Landing Pages</h3>

          <figure className="screenshot-frame" onClick={() => openModal("/images/partnerpage.png", "Dynamic partner landing page interface design", 800, 450)}>
  <Image 
    src="/images/partnerpage.png" 
    alt="Dynamic partner landing page demonstrating automated localized layout"
    width={800}
    height={450}
    priority
    className="clickable-screenshot"
  />
  <figcaption>
    <strong>Fig 7. Dynamic Partner Infrastructure.</strong> The newly deployed Next.js landing page system. By leveraging slug-based dynamic routing, a single template automatically renders customized brand assets, local reviews, and specific partner location data on the fly. <span className="zoom-hint">(Click to expand)</span>
  </figcaption>
</figure>

          <div className="flow-diagram">

  <div className="node">Dynamic Route</div>

  <div className="arrow">↓</div>

  <div className="node">Landing Page</div>

  <div className="arrow">↓</div>

  <div className="node">partnerData.ts</div>

  <div className="arrow">↓</div>

  <div className="flow-branches">

    <div className="node">
      Reviews
    </div>

 <div className="node">
      +
    </div>

    <div className="node">
      Location Info
    </div>

  </div>

</div>

          <p>The first challenge was creating a <b>scalable way</b> to support a growing network of 
            partner locations without building and maintaining individual landing pages for each one.</p>


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
 <div className="clex-results-blockquote">
  <strong>Code Schema 1. Centralized Partner Schema.</strong> Snippet from <code>partnerData.ts</code>. Instead of deploying 468 separate assets, new partner onboarding is reduced to appending a key-value object that controls the entire layout and tracking architecture programmatically.
</div>

          <p>Each landing page was designed to surface location-specific information, 
            including partner details and customer reviews associated with that location. 
            <b>This created a stronger connection between local Google Business Profiles and 
            the website experience,</b> allowing users to see content that reflected the specific 
            location they had discovered online.</p>

<figure className="screenshot-frame" onClick={() => openModal("/images/clexsitemap.png", "Dynamic XML sitemap structure for search engine indexation", 800, 450)}>
  <Image 
    src="/images/clexsitemap.png" 
    alt="Dynamic XML sitemap showing programmatic partner location routing"
    width={800}
    height={450}
    className="clickable-screenshot"
  />
  <figcaption>
    <strong>Fig 8. Dynamic Indexation Architecture.</strong> A snapshot of the programmatically generated XML sitemap. Rather than maintaining static links, the application queries the data repository to dynamically compile location URLs, shown here during the initial database migration phase. <span className="zoom-hint">(Click to expand)</span>
  </figcaption>
</figure>

<p>At launch, the system supported more than 90 partner locations and <b>provided a foundation for 
  future expansion</b> without requiring significant development effort for each new partner.</p>

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
              {/* 1. Rama Socio: SÍ */}
              <li className="branch-yes">
                <span className="label-path">Yes</span>
                <div className="node success-node">Partner Attribution</div>
              </li>
              
              {/* Rama Socio: NO */}
              <li className="branch-no">
                <span className="label-path">No</span>
                <div className="node decision-node">Google Ads (GCLID)?</div>
                
                <ul>
                  {/* 2. Sub-rama Google Ads: SÍ */}
                  <li className="branch-yes">
                    <span className="label-path">Yes</span>
                    <div className="node success-node">Google Ads Channel</div>
                  </li>
                  
                  {/* Sub-rama Google Ads: NO */}
                  <li className="branch-no">
                    <span className="label-path">No</span>
                    <div className="node decision-node">UTM Present?</div>
                    
                    <ul>
                      {/* 3. Sub-rama UTM: SÍ */}
                      <li className="branch-yes">
                        <span className="label-path">Yes</span>
                        <div className="node success-node">Campaign Source</div>
                      </li>
                      
                      {/* Sub-rama UTM: NO */}
                      <li className="branch-no">
                        <span className="label-path">No</span>
                        <div className="node decision-node">GBP?</div>
                        
                        <ul>
                          {/* 4. Sub-rama GBP: SÍ */}
                          <li className="branch-yes">
                            <span className="label-path">Yes</span>
                            <div className="node success-node">GBP (Local)</div>
                          </li>
                          
                          {/* 5. Sub-rama GBP: NO → DIRECTO */}
                          <li className="branch-no">
                            <span className="label-path">No</span>
                            <div className="node direct-node">Direct Traffic</div>
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

      </li>
    </ul>
  </div>
</div>

          <p>The attribution logic was <b>designed to persist</b> throughout the user journey, ensuring that 
            source information could be preserved as applicants progressed through the application process and 
            entered the CRM.</p>
            
          <h3>Unified Application Experience</h3>
          <p>The existing application process relied on multiple forms that operated independently from 
            one another. While each form served a specific purpose, <b>the overall experience felt fragmented</b> 
            and introduced unnecessary friction for applicants.</p>

          <p>One of the most significant issues was that users were required to re-enter identification 
            and contact information they had already provided during earlier stages of the application 
            process. Beyond creating a poor user experience, <b>repeated data entry risked increasing abandonment</b> 
            and reducing trust in the application flow.</p>

          <p>To demonstrate the mechanics of this unified journey, the sequence below captures an end-to-end 
            user evaluation tracing <b>browser-state persistence</b> and telemetry alignment across the ecosystem:</p>

<MiniCarousel 
  images={[
    { 
      src: "/images/app1.png", 
      alt: "Fig 9. Stage 1 Ingestion. The initial Next.js interface capturing user telemetry and contact payloads under a controlled QA environment (Test User: Chris TEST UUID Initialization).",
      fullWidth: 1440,  
      fullHeight: 2200  
    },
    { 
      src: "/images/app2.png", 
      alt: "Fig 10. Funnel Confirmation. The conversion success 'Thank You' viewport, triggering background webhook dispatches to Zoho CRM while preserving the active session payload.",
      fullWidth: 1440,
      fullHeight: 1800 
    },
    { 
      src: "/images/app3.png", 
      alt: "Fig 11. State Continuity & Reconciliation. Stage 2 form initialization automatically surfacing the cached 'Chris' configuration and matching TESTUUID, ensuring an unbroken data chain.",
      fullWidth: 1440,
      fullHeight: 2500 
    },
  ]} 
  onImageClick={openModal}
/>

          
          <p>Custom frontend logic was also used to connect the application stages into a more cohesive 
            experience while <b>maintaining compatibility with the organization's existing Zoho Forms 
            infrastructure.</b> The result was a more seamless qualification journey that reduced redundant 
            data entry, improved continuity between application stages, and created a smoother experience 
            for both applicants and internal teams.</p>
          

          <h3>CRM Data Continuity</h3>
          <p>One of the most significant operational issues identified during research was the creation of duplicate CRM records throughout the application process.</p>
          <p>Because applicants completed multiple forms at different stages, each submission generated a new record that <b>agents were required to manually reconcile.</b></p>
          <p>To reduce duplication, I implemented client-side data persistence that maintained user information between application stages. 
            This allowed data to flow more consistently through the qualification process while <b>reducing manual 
            administrative work</b> for the sales team.</p>

 <MiniCarousel 
        images={[
          { 
            src: "/images/leadUUID.png", 
            alt: "Fig 12. Telemetry Alignment. A look inside the Zoho CRM Lead Lifecycle module. The custom integration accurately maps the unique client-side UUID, ensuring that all subsequent user events anchor to a single source of truth.",
            fullWidth: 1440,  
            fullHeight: 1800  
          },
          { 
            src: "/images/leadUUID2.png", 
            alt: "Fig 13. Programmable Deduplication. The Zoho Forms backend integration interface executing the Upsert Record function. By checking against the unique record UUID, the system dynamically updates existing entries instead of spawning redundant profiles.",
            fullWidth: 1440,
            fullHeight: 1800 
          },
        ]} 
        onImageClick={openModal}
      />

          <p>Beyond improving operational efficiency, this approach also created a more seamless experience for applicants by minimizing redundant data entry.</p>
</section>


<section id="architecture">
          <h2>Technical Architecture</h2>
          <p>The platform was built using a lightweight architecture that leveraged existing company systems while introducing a more scalable frontend layer.</p>

         <div className="architecture-system">

  <div className="architecture-parent">
    Partner Network
  </div>

  <div className="architecture-core">
    <h4>Acquisition Platform</h4>
  </div>

  <div className="architecture-branches">

    <div className="architecture-feature">
      <span>Attribution</span>
    </div>

    <div className="architecture-feature">
      <span>UX</span>
    </div>

    <div className="architecture-feature">
      <span>CRM Continuity</span>
    </div>

  </div>

</div>

           <div className="clex-results-table-wrapper" style={{ marginTop: "2rem" }}>
    <table className="clex-results-table">
      <thead>
        <tr>
          <th>System Layer</th>
          <th>Technology Stack</th>
          <th>Operational Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frontend Core</td>
          <td>Next.js + TypeScript</td>
          <td>Delivers fast, dynamic, and type-safe localized rendering of landing pages.</td>
        </tr>
        <tr>
          <td>Form Processing</td>
          <td>Zoho Forms</td>
          <td>Ingests multi-stage applicant data through secured embed frameworks.</td>
        </tr>
        <tr>
          <td>Central CRM Database</td>
          <td>Zoho CRM</td>
          <td>Stores unified customer lifecycles and tracks historical pipeline conversions.</td>
        </tr>
        <tr>
          <td>Session Persistence</td>
          <td>Browser LocalStorage</td>
          <td>Caches applicant metadata client-side to prevent redundant manual typing.</td>
        </tr>
        <tr>
          <td>Partner Registry</td>
          <td>partnerData.ts Schema</td>
          <td>Acts as a single centralized JSON repository to scale localization assets dynamically.</td>
        </tr>
        <tr>
          <td>Dynamic Routing</td>
          <td>Slug-based URL Paths</td>
          <td>Generates SEO-ready partner endpoints on-the-fly and maps dynamic XML sitemaps.</td>
        </tr>
        <tr>
          <td>Attribution Engine</td>
          <td>Client-side Telemetry</td>
          <td>Resolves acquisition sources (GCLID, UTMs, GMB, Organic) under strict priority rules.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="results" className="clex-results-section">
      <h2>Early Launch Results</h2>
      <p>
        To evaluate the direct performance impact of the newly deployed dynamic platform, 
        we tracked baseline vs. live metrics during the first 10 days following the relaunch.
      </p>
      
      <div className="clex-results-table-wrapper">
        <table className="clex-results-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Before</th>
              <th>After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversion Rate</td>
              <td>7.9%</td>
              <td>12.5%</td>
            </tr>
            <tr>
              <td>Engagement Rate</td>
              <td>Baseline</td>
              <td>+128%</td>
            </tr>
            <tr>
              <td>Inbound Quality Leads</td>
              <td>38%</td>
              <td>51%</td>
            </tr>
            <tr>
              <td>Avg. Engagement Time</td>
              <td>21s</td>
              <td>48s</td>
            </tr>
            <tr>
              <td>Step 2 Completion</td>
              <td>N/A</td>
              <td>71%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="clex-results-blockquote">
        While the sample size was still limited a bit after the first week after launch, the results 
        showed <b>a clear improvement in engagement and conversion trends.</b> These early indicators 
        were strong enough to support a recommendation to <b>begin allocating paid media budget</b> to 
        the new experience.
      </div>
    </section>

<section id="lessons">      
          <h2>Lessons Learned</h2>
          <p>One of the biggest lessons from this project was that <b>attribution, user experience, 
            and operational efficiency are often deeply connected.</b></p>
          <p>What initially appeared to be a website redesign <b>evolved into a broader acquisition 
            infrastructure project</b> that touched CRM workflows, partner management, attribution systems, 
            and customer experience.</p>
          <p>The project reinforced the importance of designing scalable systems early, particularly 
            when <b>supporting a growing network of partners and locations.</b></p>
            </section>  

<section className="case-navigation">
 <a
      href="https://cashloansexperts.com"
      target="_blank"
      rel="noreferrer"
      className="nav-button secondary"
    >
      View Live ↗
    </a>
  </section>

  <div className="w-full flex justify-center py-12 border-t border-gray-100 bg-gray-50">
  <Link
    href="/#work"
    className="nav-button ghost"
  >
    ← Back to Index
  </Link>
</div>

</article>
</main>



<ImageModal
  isOpen={modalState.isOpen}
  image={modalState.image}
  onClose={closeModal}
/>
</>
);
}