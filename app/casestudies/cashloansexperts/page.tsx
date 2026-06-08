export default function CashloanExperts() {
  return (
    <main>
      <h1>Cashloan Experts</h1>

      <h2>Building a scalable acquisition and attribution platform for a multi-partner lending network.</h2>

    <h3>Role</h3>
<p>Marketing Operations Specialist</p>

<h2>Snapshot</h2>

<h3>Platform Capabilities</h3>

<ul>
  <li>✓ Supports 90+ partner locations</li>
  <li>✓ Generates dynamic partner landing pages</li>
  <li>✓ Connects multi-step applications</li>
</ul>

<ul>
<li>✓ Supports 5 attribution scenarios</li>
<li>✓ Includes GBP attribution</li>
<li>✓ Includes UTM attribution</li>
<li>✓ Prepared for Google Ads attribution</li>
</ul>

<ul>
<li>✓ Integrated with Zoho Forms</li>
<li>✓ Reduces duplicate CRM records</li>
<li>✓ Integrated with Zoho CRM</li>
</ul>

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

      <h2>Overview</h2>

<p>Cashloan Experts was developed in response to several operational challenges within a 
growing lending network. The organization relied on Google Business Profiles, partner locations, 
and online applications to generate leads, but the existing infrastructure struggled to support 
accurate attribution, scalable partner growth, and efficient lead management.</p>

<p>As the network expanded, the gap between local partner presence and the company's digital experience 
became increasingly visible. Attribution data was incomplete, partner-specific experiences were difficult 
to maintain, and applicants frequently generated duplicate CRM records throughout the application process.</p>

<p>To address these challenges, I designed and developed a Next.js-based acquisition platform that unified 
attribution, streamlined the application experience, and introduced scalable partner-specific landing pages 
while remaining compatible with the organization's existing Zoho infrastructure.</p>

<h2>The Problem</h2>

<h3>Growth Exposed Infrastructure Limitations</h3>

<p>The existing system had been designed for a smaller operation. As the number of partners and locations 
increased, several limitations became apparent across attribution, lead management, and scalability.</p>

<h3>Incomplete Attribution</h3>

<p>Leads generated through Google Business Profiles could only be reliably identified under specific circumstances. 
Online applications often lost location-level attribution, making it difficult to measure partner performance 
and understand where applicants originated.</p>

<h3>Duplicate CRM Records</h3>

<p>The application process was divided into multiple forms. Each stage generated a new lead record, 
forcing agents to manually compare, merge, and update applicant information.</p>

<h3>Limited Scalability</h3>

<p>Supporting partner-specific experiences required significant manual effort. Expanding the network risked 
creating additional operational overhead as more locations were added.</p>

<h3>Disconnect Between Google Presence and Website Experience</h3>

<p>Partner-specific Google Business Profiles represented unique locations, reviews, and local presence. 
However, the website lacked a scalable mechanism to reflect that structure, creating a disconnect between 
what users saw in Google and what they experienced after visiting the website.</p>

<h2>Research & Discovery</h2>

<p>I began by mapping the existing acquisition journey from first touchpoint to CRM record creation.</p>

<p>This analysis revealed several recurring issues:</p>

<ul>
  <li>Attribution information was lost across multiple entry points.</li>
  <li>Applicants generated duplicate records during the application process.</li>
  <li>Partner-specific experiences were difficult to maintain.</li>
  <li>Local business profiles and website content operated independently.</li>
</ul>

<p>Rather than solving each issue individually, I focused on designing a platform capable 
of addressing them as part of a unified acquisition system.</p>



<h2>Solution</h2>

<ol>
  <li>Dynamic Partner Landing Pages</li>
  <li>Attribution Framework</li>
  <li>Unified Application Experience</li>
  <li>CRM Data Continuity</li>
</ol>


<h3>Dynamic Partner Landing Pages</h3>

<p>The first challenge was creating a scalable way to support a growing network of partner locations without 
building and maintaining individual landing pages for each one.</p>

<p>To solve this, I designed a dynamic landing page system powered by a centralized partner data structure. 
Instead of creating separate pages manually, partner information could be stored in a single data source 
and rendered dynamically through URL-based routing.</p>

<p>Each landing page was designed to surface location-specific information, including partner details and 
customer reviews associated with that location. This created a stronger connection between local Google 
Business Profiles and the website experience, allowing users to see content that reflected the specific 
location they had discovered online.</p>

<p>At launch, the system supported more than 90 partner locations and provided a foundation for future 
expansion without requiring significant development effort for each new partner.</p>

<h3>Attribution Framework</h3>

<p>Accurate attribution was one of the primary goals of the project.</p>

<p>The previous acquisition process provided limited visibility into how applicants discovered the business, 
particularly when leads originated from partner locations or Google Business Profiles. This made performance 
analysis and partner reporting difficult.</p>

<p>To address this, I designed a flexible attribution framework capable of identifying multiple acquisition 
scenarios. The system supports direct website traffic, partner referrals, Google Business Profile traffic, 
campaign-based attribution through URL parameters, and future Google Ads attribution.</p>

<p>The attribution logic was designed to persist throughout the user journey, ensuring that source information 
could be preserved as applicants progressed through the application process and entered the CRM.</p>
    
  
<h3>Unified Application Experience</h3>

<p>The existing application process relied on multiple forms that operated independently from one another. 
While each form served a specific purpose, the overall experience felt fragmented and introduced unnecessary 
friction for applicants.</p>

<p>One of the most significant issues was that users were required to re-enter identification and contact 
information they had already provided during earlier stages of the application process. Beyond creating a 
poor user experience, repeated data entry risked increasing abandonment and reducing trust in the application 
flow.</p>

<p>To address this, I implemented a local data persistence system that stored information collected during 
the first stage of the application. When users progressed to the next step, previously submitted information 
could be surfaced and confirmed rather than entered again.</p>

<p>Custom frontend logic was also used to connect the application stages into a more cohesive experience while 
maintaining compatibility with the organization's existing Zoho Forms infrastructure.</p>

<p>The result was a more seamless qualification journey that reduced redundant data entry, improved continuity 
between application stages, and created a smoother experience for both applicants and internal teams.</p>



<h3>CRM Data Continuity</h3>

<p>One of the most significant operational issues identified during research was the creation of duplicate CRM 
records throughout the application process.</p>

<p>Because applicants completed multiple forms at different stages, each submission generated a new record that 
agents were required to manually reconcile.</p>

<p>To reduce duplication, I implemented client-side data persistence that maintained user information between 
application stages. This allowed data to flow more consistently through the qualification process while 
reducing manual administrative work for the sales team.</p>

<p>Beyond improving operational efficiency, this approach also created a more seamless experience for applicants 
by minimizing redundant data entry.</p>

<h2>Technical Architecture</h2>

<p>
The platform was built using a lightweight architecture that leveraged
existing company systems while introducing a more scalable frontend layer.
</p>

<ul>
  <li>Frontend: Next.js + TypeScript</li>
  <li>Form Processing: Zoho Forms</li>
  <li>CRM: Zoho CRM</li>
  <li>Data Persistence: Browser Local Storage</li>
  <li>Partner Management: Centralized partnerdata.ts structure</li>
  <li>Routing: Dynamic URL-based partner pages</li>
  <li>Attribution: URL parameters and location-based logic</li>
</ul>

<h2>Results & Impact</h2>

<ul>
  <li>
    Established a scalable framework capable of supporting 90+
    partner locations.
  </li>

  <li>
    Connected local Google Business Profiles with partner-specific
    landing experiences.
  </li>

  <li>
    Reduced duplicate CRM record creation through data persistence
    between application stages.
  </li>

  <li>
    Improved attribution visibility across multiple acquisition channels.
  </li>

  <li>
    Created infrastructure ready for future Google Ads attribution.
  </li>

  <li>
    Simplified future partner onboarding through dynamic page generation.
  </li>
</ul>

<h2>Lessons Learned</h2>

<p>
One of the biggest lessons from this project was that attribution,
user experience, and operational efficiency are often deeply connected.
</p>

<p>
What initially appeared to be a website redesign evolved into a broader
acquisition infrastructure project that touched CRM workflows, partner
management, attribution systems, and customer experience.
</p>

<p>
The project reinforced the importance of designing scalable systems early,
particularly when supporting a growing network of partners and locations.
</p>

    </main>
  );
}