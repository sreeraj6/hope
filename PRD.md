# Product Requirements Document (PRD)

## Hope Networking --- Premium Security, Networking & Home Automation Website

**Document status:** Draft for discovery and implementation\
**Version:** 1.2\
**Revision note:** Reviewed 20 October 2026. Added an actionable hero storyboard, non-blocking intro animation, Services hub, brand-section specification, richer footer, and static deployment checks; corrected conflicting acceptance criteria and flagged GitHub Pages hosting eligibility.\
**Business location:** Vallikkavu, Kerala, India\
**Primary conversion:** Qualified enquiries initiated through WhatsApp\
**Working brand name:** Hope Networking

------------------------------------------------------------------------


## SEO-First Product Strategy — Critical Requirement

**SEO is the primary business objective, and the homepage 3D animation is a high-priority brand requirement.** The 3D experience must be engineered to coexist with crawlability, indexable content, local relevance, site speed, accessibility, and conversion—not to replace or delay them.

### SEO and experience priorities (all launch-critical)

1. **Indexable service pages and useful original content**
2. **Local SEO and accurate business identity**
3. **Technical SEO, internal linking, and crawlability**
4. **Page speed, mobile usability, accessibility, and reliable conversion**
5. **Trust signals and genuine project/brand evidence**
6. **High-quality homepage 3D storytelling**, delivered through progressive enhancement so it does not compromise items 1–5

The 3D hero is a committed design deliverable, not a reason to defer content or ship an inaccessible/slow site. Meet both goals through static generation, optimized assets, code splitting, a useful poster, responsive scene complexity, and device testing. If a performance constraint remains, optimize the rendering and loading strategy; preserve the security/networking narrative and the HTML content/CTA.

Search visibility cannot be guaranteed by a website build alone. Rankings depend on competition, site history, business prominence, content quality, reviews, links, and ongoing work.

### Required SEO site architecture

This site must be a real, multi-page, SEO-first website from launch. Every important service and approved proof point must have its own independently indexable URL—not just a section within a single scrolling homepage. The homepage must combine a premium, high-priority 3D experience with real, immediately available HTML content and crawlable links to dedicated routes. The animation is a core brand requirement, but it must never block or replace the indexable page content, navigation, or conversion action.

Launch route policy:
- **Must launch:** `/`, `/services/`, `/cctv-installation-vallikkavu/`, `/home-security/`, `/commercial-cctv-security/`, `/networking-wifi-solutions/`, `/home-automation/` (only if this service is confirmed), `/projects/` (only with approved genuine evidence), `/about-hope-networking/`, `/contact/`, and `/privacy-policy/`.
- **Conditional:** individual project-category pages publish only when each has distinct, approved evidence and useful original content. Do not publish an empty, thin, or placeholder project page; use a useful projects overview or defer the route if there is no publishable evidence.
- The service URLs are distinct static HTML pages, not just client-side route states. Combine overlapping themes where needed rather than publishing near-duplicate or thin pages. If a listed service is not actually offered, remove it from navigation and the launch route set.

Proposed routes:

- `/` — Hope Networking overview and primary conversion page
- `/services/` — service-selection hub explaining which solutions suit homes, shops, and offices, with links to each offered service
- `/cctv-installation-vallikkavu/` — CCTV installation and surveillance
- `/home-security/` — residential security systems
- `/commercial-cctv-security/` — commercial security solutions
- `/networking-wifi-solutions/` — networking, Wi-Fi, structured cabling
- `/home-automation/` — home automation and smart controls, only if confirmed as an active service
- `/projects/` — verified project experience; publish only with approved genuine evidence, otherwise defer and do not expose an empty route
- `/projects/residential-security/` — residential work, only if enough unique evidence exists
- `/projects/retail-and-jewellery/` — relevant retail project experience, only where claims are approved
- `/about-hope-networking/` — company, approach, service area, and trust information
- `/contact/` — contact details, location/service area, WhatsApp lead form, Instagram link, and phone number
- `/privacy-policy/` — privacy practices for enquiry information

Do not create dozens of thin location pages or near-duplicate pages just to target place names. Add additional area pages only where the company genuinely serves those locations and can provide unique, useful local information.

### SEO page requirements

Every indexable page must have:
- A unique, descriptive title and meta description.
- One clear H1 that accurately describes the page.
- Original, helpful visible text in the initial HTML response. On GitHub Pages, this means the built static HTML for each route contains its primary content; do not rely on client-side rendering to insert the page's only meaningful copy.
- A clear description of the service, who it helps, the process, relevant FAQs, and a next step.
- Descriptive internal links to related services and relevant projects.
- Descriptive image filenames and useful alt text for meaningful images.
- A canonical URL and correct indexability settings.
- Appropriate Open Graph metadata for sharing.
- A mobile-friendly layout and visible contact/WhatsApp action.
- No essential information hidden exclusively in 3D scenes, canvas elements, hover states, or animation.

Avoid keyword stuffing, copied competitor content, fabricated reviews, fake project stories, and unsupported claims.

### Local SEO requirements

- Confirm the exact public business name, address/service-area wording, phone number, and opening hours before publishing.
- Create or improve the company's Google Business Profile if eligible; keep the profile and website details consistent.
- Add accurate LocalBusiness/Organization structured data using only verified fields. Structured data helps describe the business but does not guarantee enhanced search results.
- Embed a map only if it adds value and the business location can be shown accurately.
- Make the Vallikkavu location clear in natural page copy and metadata.
- Mention nearby towns/areas only when the company genuinely serves them; confirm the service radius with the owner.
- Request honest customer reviews through an appropriate business process; never buy or fabricate reviews.
- Build local citations and relevant partnerships only where legitimate and useful.

### Technical SEO requirements

- Use static generation/export for every public content page (required by GitHub Pages). Search engines can render JavaScript, but the site must not require client-side animation or runtime route rendering to reveal primary content. Build output must include substantive initial HTML per route.
- Use standard crawlable links with real `href` destinations for navigation and internal linking.
- Generate and maintain `sitemap.xml` and a valid `robots.txt`.
- Ensure important URLs return correct HTTP status codes, are not accidentally `noindex`, and are not blocked from crawling.
- Configure canonical URLs, redirects, 404 handling, and trailing-slash conventions consistently.
- Use semantic HTML, accessible headings, and descriptive link text.
- Add breadcrumb navigation where useful and corresponding structured data only when appropriate.
- Verify the site with Google Search Console and submit the sitemap after launch.
- Test rendered pages with URL Inspection and structured-data testing tools.
- Keep staging sites blocked from indexing and remove staging restrictions only at launch.
- Add analytics and conversion events without sending names, phone numbers, or free-text requirements to analytics platforms.

### Content strategy for organic search

Prioritize content that answers real customer questions and demonstrates actual capability. Initial content opportunities:
- How to plan CCTV camera placement for a home.
- What to consider when installing CCTV in a shop or supermarket.
- CCTV recording and remote-viewing basics.
- Wi-Fi coverage and network planning for homes and businesses.
- Structured cabling and network planning for retail environments.
- What to prepare before requesting a CCTV or networking site survey.
- Genuine project case studies showing challenge, scope, solution, and verifiable outcome.

Publish an article only when Hope Networking can add practical expertise, original photographs, or real project knowledge. A regular publishing schedule is not a substitute for useful content.

### SEO measurement

Connect Google Search Console and privacy-appropriate analytics only after the owner selects an analytics tool and approves its consent/privacy configuration. Search Console is required after launch; third-party analytics selection and consent behavior must be decided before implementation. Define `whatsapp_handoff_clicked` as a click-out to WhatsApp, not a sent or delivered message: the website cannot reliably observe whether the user presses Send. Establish a baseline after indexing begins and review monthly:
- Impressions, clicks, CTR, and average position by page/query.
- Organic landing-page sessions.
- Search visibility for relevant service and local-intent terms.
- WhatsApp handoffs originating from organic landing pages.
- Qualified leads by landing page and service category, where this can be tracked without collecting personal data in analytics.
- Index coverage, sitemap status, crawl errors, and Core Web Vitals.

Use the first 30–90 days to establish realistic baselines. Do not promise a specific ranking or traffic result before researching the market and measuring performance.

### SEO acceptance criteria (additional launch blockers)

1. All important service pages have unique URLs and substantive, original content.
2. Important page content and internal links are available without requiring WebGL or user interaction.
3. Each indexable page has a unique title, meta description, canonical URL, and one clear H1.
4. Navigation uses crawlable links; every key page is reachable from another page.
5. Sitemap, robots.txt, redirects, HTTPS, and indexability settings are tested.
6. Local business information and structured data match verified real-world information.
7. Google Search Console is configured and the sitemap is submitted after launch.
8. Performance is tested on real-world mobile conditions; 3D assets do not delay the first meaningful content or CTA.
9. A reduced-motion and no-WebGL path preserves the full service content and conversion flow.
10. No fabricated local pages, testimonials, reviews, client endorsements, or project claims are published.


## 1. Product Vision

Build an extraordinary, premium-feeling digital experience for Hope
Networking that positions the company as a trusted technology partner
for residential security, commercial CCTV, networking infrastructure,
and smart-home automation.

This must not feel like a conventional local-services website. The
experience should feel cinematic, engineered, tactile, and confident:
immersive 3D scenes, scroll-linked motion, crisp typography, purposeful
transitions, and a clear path from inspiration to a WhatsApp enquiry.

**Priority rule:** indexable content, essential HTML, navigation, and lead
conversion are non-negotiable; the polished homepage hero 3D is also a
committed brand deliverable. Meet both through progressive enhancement,
static generation, code-splitting, asset optimization, and responsive
scene complexity—not by delaying content or abandoning the planned 3D
concept. If performance tests fail, optimize or selectively simplify the
scene while preserving its central security-and-networking story.

**Homepage 3D animation is a high-priority brand requirement and must not be cut from the planned desktop hero.** When a visitor lands, the hero should make Hope Networking's security and networking tangible: cameras covering relevant zones, network paths connecting devices, and smart systems responding to the space. It should communicate this through polished motion alongside real HTML headlines and service copy—not instead of them. The experience must remain progressively enhanced: the headline, useful service summary, crawlable navigation, and primary CTA render immediately, while the 3D scene initializes independently. On constrained devices, preserve the same story using a carefully art-directed lightweight version or static scene rather than a blocking loader. Performance is achieved through optimization and conditional rendering, not by removing the intended hero concept from capable devices.

The site must balance **high-impact visual storytelling** with **fast
loading, mobile usability, accessibility, trust, lead conversion, and
search engine crawlability**. Motion should reinforce the story---not
get in the way of visitors trying to contact the company, and not hide
indexable content from search engines.

### Core positioning

> **Intelligent security. Seamless connectivity. Smarter spaces.**

Hope Networking helps homes and businesses feel safer and work better
through thoughtfully designed CCTV, networking, and automation systems.

### Proof points supplied by the business

-   **200+ residential home security projects**
-   **50+ commercial security and networking projects**
-   Experience categories to showcase: **TVS**, **jewellery networks**,
    and **supermarket networks**

These figures and client references must be confirmed by the business
before launch. Do not imply an official partnership, endorsement, or
permission to use a trademark unless explicitly approved.

------------------------------------------------------------------------

## 2. Goals and Success Criteria

### Business goals

1.  Generate qualified enquiries for CCTV, networking, and home
    automation.
2.  Make WhatsApp the primary conversion channel.
3.  Build trust before the first conversation through proof, project
    categories, process clarity, and strong presentation.
4.  Communicate capability across both residential and commercial
    projects.
5.  Differentiate Hope Networking from generic local installers.

### User goals

Visitors should be able to quickly: - Understand what Hope Networking
does. - Identify the right service for their home, shop, office, or
larger commercial site. - See relevant project experience. - Request a
site visit, consultation, quotation, or callback. - Send the details
they entered directly into WhatsApp without retyping everything.

### Success metrics

Track these after launch; establish baseline values during the first 30
days.

-   Primary: WhatsApp CTA/handoff clicks. A click is not proof that a visitor sent or delivered a message.
-   Secondary: Form-start rate, form-completion rate, service-section
    engagement, click-to-call actions, and repeat visits.
-   Quality: Enquiries by service, project type, location, and lead
    source.
-   Experience: Core Web Vitals, mobile conversion rate, accessibility
    checks, and JavaScript/runtime error rate.

**Initial launch targets (to validate in QA):** 100% of tested valid
WhatsApp message constructions include every entered field correctly; no
critical layout/conversion issues at common mobile widths; primary CTA is
visible in the first viewport and reachable on mobile; core content works
with reduced motion and with WebGL unavailable. A handoff click must not be
reported as a sent message. Performance targets are specified in Section 8
and must be tested against documented mobile profiles before launch.

------------------------------------------------------------------------

## 3. Target Audiences

### A. Homeowners and families

**Needs:** CCTV, video doorbells, perimeter security, Wi-Fi coverage,
smart lighting, access control, and integrated home automation.\
**Concerns:** Reliability, ease of use, installation disruption,
after-sales support, and budget.

### B. Retail and jewellery businesses

**Needs:** Camera coverage, recording/storage, remote monitoring,
network reliability, and carefully planned security coverage.\
**Concerns:** Blind spots, business continuity, privacy, uptime, and
installation quality.

### C. Supermarkets and multi-zone retail

**Needs:** Coverage across aisles, billing counters, stock/storage
zones, entrances, network infrastructure, and remote access.\
**Concerns:** Coverage gaps, cable management, maintainability, and
future expansion.

### D. Offices, workshops, and commercial operators

**Needs:** CCTV, structured cabling, Wi-Fi, switches, routers, racks,
access control, and scalable network design.\
**Concerns:** Downtime, network performance, security, and expansion.

### E. Builders, architects, and project partners

**Needs:** A reliable technology installer who can coordinate early,
document requirements, and deliver an organized installation.

------------------------------------------------------------------------

## 4. Brand and Experience Direction

### Desired personality

-   Premium, precise, confident, calm, technically capable.
-   Local and approachable without looking inexpensive or improvised.
-   Futuristic, but not sci-fi for its own sake.

### Visual language

-   **Palette:** Near-black / graphite, warm off-white, restrained
    electric cyan or signal green accent. Final colors should be
    validated against the company logo.
-   **Typography:** A contemporary display face for headlines paired
    with a highly readable sans-serif for body text.
-   **Composition:** Large editorial headlines, generous negative space,
    sharp grid alignment, layered depth, fine technical lines, and
    subtle glass/metal material cues.
-   **Imagery:** Real installations, camera hardware, networking racks,
    structured cabling, smart-home scenes, and genuine project
    photographs wherever possible.
-   **Avoid:** Generic stock-photo collage, excessive gradients, noisy
    dashboards, too many glowing outlines, and animations that feel like
    a gaming landing page.

### Motion principle

Every animation must support one of four purposes: **reveal capability,
explain a system, create depth, or guide attention**.

------------------------------------------------------------------------

## 5. Information Architecture

1.  Home
2.  **Dedicated Services section** on the homepage, linking to individual
    substantive service URLs:
    - CCTV & Video Surveillance
    - Residential Security
    - Commercial Security
    - Networking & Structured Cabling / Wi-Fi
    - Home Automation & Smart Controls (only if offered)
    - Access Control / Video Doorbells (only if offered)
3.  **Projects / Experience section** with genuine, approved project proof;
    do not invent case studies to fill a grid. Categories may include
    residential, commercial, jewellery retail, supermarkets, or TVS-related
    experience only where evidence and wording are verified.
4.  **Technology brands section** (not client endorsements): Hikvision,
    TP-Link, PRAMA, and CP Plus may be shown only after confirming Hope
    Networking actually works with/offers the relevant products and has
    approval to use each brand's name/logo. Describe this as product or
    technology familiarity, or an authorized partnership, only as
    factually verified. No implication of sponsorship, certification, or
    official partnership without written authorization. Omit unverified
    brands.
5.  Why Hope Networking
6.  How It Works
7.  FAQ
8.  Contact / Request a Site Visit

The site will launch as a multi-page, SEO-first experience with the
routes defined in the SEO architecture section. The homepage combines a
scroll-driven cinematic experience with dedicated **Services**, **Projects**,
and (if verified) **Brands We Work With** sections, and crawlable links to
dedicated service, project, and contact URLs. These homepage sections
support—but do not substitute for—substantive indexable service pages.

------------------------------------------------------------------------

## 6. Landing Page Experience and Sections

### 6.1 Header / Navigation

-   Minimal, transparent or dark header that adapts to scroll position.
-   Wordmark: Hope Networking.
-   Navigation: Services (`/services/`), Projects (`/projects/`, once
    publishable), Process (homepage section), About, Contact.
-   Use standard `<a href>` links to actual static page URLs; navigation
    must work when JavaScript and WebGL are disabled.
-   Primary CTA: **Plan My Setup** or **Get a Site Visit**.
-   Mobile: compact menu plus a persistent, thumb-friendly WhatsApp CTA.
-   Header should not obscure content or consume excessive mobile space.

### 6.2 Hero --- "The Future of Your Space"

**Purpose:** Immediately establish premium positioning and make the
primary action obvious.

Suggested headline: \> **Your Space. Intelligently Protected.**

Supporting copy: \> CCTV, high-performance networking, and smart-home
systems---designed around how you live and work.

Primary CTA: **Design My Setup**\
Secondary CTA: **Explore Our Work**

**3D concept:** A cinematic, abstract architectural space or premium
modern home rendered with layered security-camera hardware, subtle
network paths, and light-based connection lines. As the user scrolls,
the scene moves through carefully art-directed camera angles and
resolves into residential and commercial use cases. The animation must
make visitors *feel* the protection and connectivity Hope Networking
delivers—cameras orienting to relevant coverage zones, network links
illuminating between devices, and smart controls activating around the
space. The motion must clarify the offer rather than imply that a rendered
visual depicts a real installation or guarantee of coverage.

**Hero requirements:**

- The 3D animation is a high-priority production item. Allocate
  sufficient design, modeling, implementation, and device-QA time to
  make it polished, performant, and purposeful; do not replace it with
  a generic video or stock visual.
- The essential hero HTML (H1, explanatory copy, service links, and CTA)
  must be present in the statically generated initial document and usable
  before or without WebGL initialization.
- Load the scene progressively after/alongside critical content using
  lazy-loaded, split 3D code, compressed assets, and an optimized poster.
  The poster should render immediately; the 3D canvas must not block
  content, navigation, or CTA interaction.
- The hero must communicate the service and CTA even if 3D fails to
  load.
- Provide a high-quality static poster/fallback image and a
  reduced-motion version.
- Keep headline, CTA, and essential content as real HTML text, not
  embedded in a video or image.
- No autoplay audio.
- Optimize the hero so the 3D experience does not delay the first
  meaningful content or the primary WhatsApp CTA on mobile networks.

#### Required hero storyboard and quality gate

Use one cohesive architectural scene, with purposeful lighting, convincing
hardware materials, and readable composition. Avoid a generic spinning
shield or unrelated particle background as the main deliverable.

| Beat | Visual action | Meaning available in adjacent HTML |
|---|---|---|
| Establish | Reveal a home or small business with visible entry points and camera hardware. | Security designed around your space. |
| Protect | Cameras align and restrained coverage cones illuminate relevant zones. | Planned surveillance and recording. |
| Connect | Signal pulses travel from cameras and access points to a switch/router and recorder. | Connected devices and dependable networking. |
| Resolve | Pull back to the complete system; optional smart lighting activates only if offered. | One considered setup, with a clear enquiry action. |

The initial sequence should take approximately 6–8 seconds once ready,
then settle into a composed still frame. Scrolling may progress the same
story immediately; never require visitors to finish watching. Provide a
keyboard-accessible pause/replay control for motion lasting over five
seconds. Native scrolling and all CTAs remain usable throughout.

Prototype this scene before building the remaining decorative motion.
Review actual desktop and mid-range mobile recordings for composition,
recognizable security/networking hardware, smooth transitions, and CTA
legibility. Desktop must deliver real 3D on supported hardware; capable
mobile devices should receive a lighter version of the same scene.
Fallbacks are for reduced motion, limited capability, or failure, not a
substitute for producing the approved animation.

#### Small intro / loading animation

Include a lightweight CSS/SVG signal pulse connecting three nodes into a
house/shield motif within the hero media area. It runs once for about
0.8–1.2 seconds over the poster while the 3D scene initializes. It must
not cover the page, hide HTML content, lock scrolling, steal focus, or
delay navigation. Do not add an artificial minimum wait or a fake percentage.

Crossfade to 3D only after the first frame is ready, using the same reserved
dimensions to avoid layout shift. If loading is slow, stop the intro and
keep the polished poster visible; if initialization fails, keep the
fallback with the full page usable. Reduced-motion users receive the still
poster without the intro, camera travel, or pulsing effects. With JavaScript
disabled, no loading indicator should remain visible.

### 6.3 Trust Metrics

Show three concise metrics: - **200+** Residential home security
projects - **50+** Commercial security and networking projects -
**Vallikkavu, Kerala** Local base / service area

Use count-up animation only if it does not delay reading and respects
reduced-motion settings. Confirm all claims before publishing.

### 6.4 Services --- "One Connected System"

Present service cards as premium, tactile modules with distinct imagery
and short outcome-focused copy.

**CCTV & Surveillance** - Coverage planning, camera placement,
recording, and remote viewing where supported. - Outcome: Know what is
happening when you are away.

**Residential Security** - Security planning for entrances, parking,
outdoor areas, and other relevant zones. - Outcome: More confidence at
home.

**Commercial Security** - Security systems tailored to retail and
business environments. - Outcome: Better visibility across critical
areas.

**Networking & Wi-Fi** - Structured cabling, routers, switches, access
points, and network layout as offered. - Outcome: A more dependable
connected environment.

**Home Automation** - Smart controls and integrated automation based on
compatible products and customer requirements. - Outcome: Everyday
spaces that respond more intelligently.

Do not promise specific integrations, warranties, brands, or
capabilities until verified by the business.

### 6.5 Scroll-Driven System Story

A signature section that demonstrates how a well-planned system comes
together: 1. **Observe:** Identify spaces, entry points, user needs, and
coverage requirements. 2. **Connect:** Show network paths linking
cameras, switches, recording equipment, and approved smart devices. 3.
**Control:** Transition to a clear view of monitoring and smart
controls. 4. **Protect:** Resolve into a complete residential or
commercial environment.

The visual can use 3D camera movement, a pinned scroll sequence, depth
layers, and animated line drawing. It must remain understandable without
animation.

### 6.6 Project Experience / Client Categories

Headline: **Built for Real-World Environments**

Showcase a curated project grid or horizontal case-study sequence: -
Residential security - TVS-related project experience - Jewellery retail
networks - Supermarket network and surveillance

Each project card should include, where available: - Project category
and location - Business challenge - Scope of work - Relevant real
photographs - Outcome or deliverable, using verifiable claims only

**Brand-use safeguards:** Confirm whether "TVS" means a specific
company/entity, whether the work can be named publicly, and whether
logos/photos are authorized. If permission is unclear, use neutral
descriptions such as "Automotive / enterprise project experience" only
if accurate. Do not use client logos as implied endorsements.

#### Technology brands — "Brands We Work With"

Place a dedicated, restrained logo/name grid after Services or Projects.
Candidate brands are **Hikvision, TP-Link, PRAMA, and CP Plus**, subject to
verified product use and approved assets. Suggested copy: "We select
equipment to suit your site, requirements, and budget." Publish this only
if it reflects actual practice.

Use "Authorized Partners" only for documented authorized relationships.
Otherwise keep the neutral heading above. Give logos readable text
alternatives, preserve their proportions, and avoid an endlessly moving
marquee. Do not imply every brand supplies every listed service. No
separate brand pages are needed at launch unless there is substantive,
original information to justify them.

For project photos, remove customer-identifying details and redact camera
credentials, device addresses, and sensitive security layouts before
publication. If project evidence is unavailable, omit the section and its
links pending genuine content; this is an explicit exception to the
Projects launch requirement, not permission to fabricate examples.

### 6.7 Why Hope Networking

Focus on specific working principles, not unsupported superlatives: -
Requirement-first planning - Neat, documented installation - Coverage
and connectivity considered together - Practical guidance for selecting
equipment - Clear handover and basic user guidance, if offered - Support
expectations explained before the project begins

Replace any item that the company cannot consistently deliver.

### 6.8 Process --- "From Site Visit to Smart Setup"

1.  **Tell us what you need** --- share service type, property type, and
    location.
2.  **Discuss the site** --- understand priorities and arrange a visit
    if required.
3.  **Plan the system** --- propose coverage, network layout, and
    suitable options.
4.  **Install and hand over** --- complete installation, testing, and
    customer walkthrough as agreed.

Only describe a site visit, survey, or handover as included if the
business confirms it.

### 6.9 FAQ

Suggested questions: - Do you install CCTV for homes and businesses? -
Can I view my cameras remotely? - Do you handle networking and Wi-Fi
setup? - Can you automate an existing home? - Do you visit sites around
Vallikkavu? - What information do you need to provide an estimate? - How
do I arrange a site visit? - What support is available after
installation?

Answers should be approved by the company. Avoid fixed price or timeline
promises without reliable policies.

### 6.10 Final Conversion Section

Headline: \> **Let's Design a Setup That Fits Your Space.**

Copy: \> Tell us a little about your property and what you need. We'll
prepare your enquiry in WhatsApp so the conversation can start with the
right details.

CTA: **Build My Enquiry**

Include a secondary call action only when a verified business phone
number is provided.

### 6.11 Footer

-   Company name and Vallikkavu, Kerala location.
-   Service links.
-   Verified phone number (click-to-call).
-   WhatsApp CTA using the verified company number.
-   Instagram profile link (only if active and verified).
-   Privacy notice link.
-   Social links only if active and verified.
-   About, Projects (when published), and Contact links.
-   Verified opening/contact hours and actual service-area wording.
-   Business email and Google Business Profile/directions link, if available.
-   Short after-sales/maintenance contact guidance, only if offered.
-   Copyright year generated at build time.

Display the phone number as readable text as well as a `tel:` link, and
give Instagram a descriptive accessible label. Prefer a normal Instagram
profile link over an embedded feed to avoid unnecessary third-party loading.
Do not publish placeholder phone numbers, dead social icons, or empty links.

------------------------------------------------------------------------

## 7. Lead Capture and WhatsApp Handoff

### Primary requirement

All form inputs should be assembled into a readable, URL-encoded
WhatsApp message and passed to WhatsApp using the official click-to-chat
URL pattern:

`https://wa.me/<INTERNATIONAL_NUMBER>?text=<URL_ENCODED_MESSAGE>`

The phone number must be supplied by the company in international
format, digits only, without `+`, spaces, or punctuation. Do not invent
a number.

### Form fields

**Required** - Full name - Phone number - Service required - Property
type - Location / area - Brief description of the requirement

**Optional** - Number of cameras / approximate coverage areas - Project
stage: exploring, ready to install, existing system upgrade - Preferred
contact time - Budget range (optional and skippable) - Preferred
site-visit date (optional; do not imply confirmed availability) -
Additional notes

### Suggested input options

**Service required** - CCTV / surveillance - Home security - Commercial
security - Networking / Wi-Fi - Home automation - Multiple services -
Not sure yet

**Property type** - Home / apartment - Shop / showroom - Jewellery
store - Supermarket / retail - Office / commercial building - Other

### Message format

The generated message should be concise and structured, for example:

> Hello Hope Networking, I'd like to discuss a project.
>
> Name: \[name\]\
> Phone: \[phone\]\
> Service: \[service\]\
> Property: \[property type\]\
> Location: \[location\]\
> Project stage: \[stage\]\
> Approx. camera / coverage needs: \[details\]\
> Preferred contact time: \[time\]\
> Budget range: \[budget or "Not specified"\]\
> Requirements: \[description\]
>
> Please let me know the next steps.

Only include fields that the visitor filled in, except where a clear
"Not specified" label improves readability.

### Interaction and validation

-   Validate required fields inline with plain-language errors.
-   Validate phone input leniently for international/local formats; do
    not reject valid local numbers solely because formatting differs.
-   Show a review/confirmation state before opening WhatsApp, especially
    on mobile.
-   On submit, create the message and open WhatsApp or WhatsApp Web. Do
    not claim the message was delivered; the visitor must press Send in
    WhatsApp.
-   If WhatsApp cannot be opened, show a fallback: display the prepared
    message and offer a **Copy message** action.
-   Preserve form values if validation fails.
-   Do not persist enquiry details in analytics, browser storage, URLs
    other than the required WhatsApp click-to-chat query, or server logs.
    Generate the WhatsApp URL only on submit, avoid logging it, and do not
    retain the generated message after the handoff/fallback is closed.
-   Before handoff, tell the user that their entered details will be
    included in a WhatsApp message and only sent if they press Send in
    WhatsApp. Explain this flow and any applicable third-party processing
    in the privacy notice. Never include form values in analytics,
    page-view URLs, or application error reports.
-   Set a reasonable maximum length for free-text fields and the total
    WhatsApp message. If the message is too long, explain the limit and
    help the user shorten it; never silently truncate entered details.
-   Add spam mitigation that does not create unnecessary friction (e.g.,
    honeypot field and rate limiting if a backend is introduced).

### Privacy and consent

-   Add a concise notice near the submit action: "Your details will be
    used to prepare this enquiry and help Hope Networking respond."
-   Link to a privacy notice explaining what is collected, why,
    retention, and contact details.
-   Do not collect sensitive personal information.
-   No backend storage is required for the initial WhatsApp-first MVP.
    If analytics or a CRM is later added, document consent, access
    controls, retention, and deletion practices.

### Conversion tracking

Track events without recording personal form values:

-   `lead_form_started`
-   `lead_form_step_completed` (if multi-step)
-   `lead_form_validation_error`
-   `whatsapp_handoff_clicked`
-   `phone_call_clicked`
-   `instagram_clicked`
-   `service_card_clicked`

Use consent-aware analytics where required. Never send names, phone
numbers, generated WhatsApp URLs, or free-text requirements to analytics
platforms. Measure a WhatsApp CTA/handoff click only; do not label it as a
completed or delivered enquiry.

------------------------------------------------------------------------

## 8. Interaction Design and 3D Scroll Specification

### Desired feel

A smooth, cinematic experience with clear scene transitions, controlled
parallax, and a deliberate sense of depth. It should feel engineered
rather than decorated.

### Recommended implementation direction

-   **Framework:** Next.js with React and TypeScript, or another
    equivalent production-ready framework.
-   **3D:** Three.js via React Three Fiber where appropriate.
-   **Scroll orchestration:** GSAP ScrollTrigger or an equivalent
    well-supported scroll animation system.
-   **Styling:** CSS modules, Tailwind, or a consistent design-token
    system.
-   **Forms:** Client-side validation with a small, maintainable schema.
-   **Hosting:** GitHub Pages is the required initial hosting target. Build
    as a static export with complete HTML for every public route; do not
    depend on a server runtime, API route, database, or request-time SSR.
    Choose the production URL strategy before implementation: a custom
    domain is preferred for clean URLs; otherwise configure and test the
    repository base path. Use a consistent trailing-slash or `.html` route
    convention supported by the export and verify direct navigation and
    browser refresh on every route. Include correct absolute canonical and
    Open Graph URLs, `sitemap.xml`, `robots.txt`, and a branded 404 page.
    Deploy with GitHub Actions from the approved branch, enable HTTPS, and
    keep preview/staging deployments out of search indexes. Document the
    chosen URL and deployment behavior.

Framework and library choices are recommendations. Static HTML output,
GitHub Pages as the requested deployment target, and the animation/SEO
acceptance criteria are requirements, subject to the hosting eligibility
constraint below.

### GitHub Pages delivery and eligibility

**Hosting policy issue to resolve before production:** GitHub's published
Pages limits restrict using Pages to run an online business or a site
primarily facilitating commercial transactions. Since qualified business
enquiries are this site's primary goal, eligibility requires clarification;
having no checkout does not by itself establish compliance. Keep GitHub
Pages as the requested technical target, but do not claim production
hosting is cleared. Resolve the intended use with GitHub before launch;
if it is not permitted, revisit hosting with the owner. This does not
require changing the approved 3D experience.

Technical delivery checklist:

- Export one HTML document per route. With Next.js, use `output: 'export'`
  and preferably `trailingSlash: true`; generate dynamic project routes
  at build time. No request-time server features or default server image
  optimizer. Pre-generate responsive image files and serve them statically.
- Choose account-root, repository-subpath, or custom-domain hosting before
  generating links. Apply the chosen base path to navigation, images,
  fonts, model files, texture/decoder files, and metadata.
- Do not use hash routes or a 404-to-SPA workaround. Missing pages must
  return an actual 404. Do not assume configurable server redirects are
  available on Pages; finalize stable URLs before launch.
- `robots.txt` is read at the hostname root. A project deployment's
  `/repository/robots.txt` does not control crawling for that hostname.
  Manage the root file where possible and submit the project sitemap
  directly in Search Console; verify actual production behavior.
- Deploy the built artifact through GitHub Actions and verify HTTPS,
  deep links, refresh, missing URLs, asset paths, and sitemap URLs on
  the deployed site. Keep an identified last-good deployment for rollback.
- Ship no credentials or private customer information in the public
  assets or repository. Contact flows remain client-side WhatsApp handoffs.

Reference documentation:
[GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits),
[Next.js static export](https://nextjs.org/docs/app/guides/static-exports),
and [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

### Motion requirements

-   Use scroll progress to drive camera position, object rotation,
    depth, and scene transitions.
-   Prefer a small number of polished scenes over continuous motion
    everywhere.
-   The homepage hero scene must visually explain security and
    networking: cameras covering key zones, data paths linking devices,
    and smart controls activating around a home or business.
-   Optional micro-animation/loading treatment may be used for a scene
    transition or while a user-initiated navigation is occurring. It must
    never be a full-screen gate on initial page load, delay the H1,
    service copy, crawlable links, or CTA, hide content from crawlers, or
    trap keyboard/screen-reader users. Prefer animating the scene/poster
    in place; if assets are not ready, retain the usable static scene and
    continue without waiting. Respect reduced-motion and provide an
    immediate skip/continue path where any transition could delay access.
-   Use easing and timing consistently.
-   Keep navigation and form interactions responsive while animations
    run.
-   Avoid scroll hijacking; native scrolling must remain in control.
-   On touch devices, simplify scene quality or render a lightweight
    authored version while preserving the recognizable security/network
    story; use a static fallback only when device capability, motion
    preference, or initialization failure requires it.
-   Respect `prefers-reduced-motion`; replace pinned sequences with
    static or short-fade content.
-   Provide a fallback if WebGL is unavailable or initialization fails.
-   Do not block the primary CTA on a 3D asset download.

### Performance budgets (initial targets)

-   Field Core Web Vitals targets at the 75th percentile where measurable:
    LCP ≤ 2.5 seconds, INP ≤ 200 ms, CLS ≤ 0.1. Before enough field data
    exists, run Lighthouse/PageSpeed checks on documented mid-range Android
    and mobile-network profiles; investigate and resolve regressions before
    launch. Treat field targets as ongoing monitoring rather than a promise
    based on a single lab run.
-   Load the hero poster and essential text first.
-   Lazy-load below-the-fold 3D scenes and large project imagery.
-   Compress and resize images; use modern formats where supported.
-   Keep 3D geometry, textures, and draw calls modest.
-   Use code splitting for animation and 3D libraries.
-   Keep 3D assets appropriately sized; the hero scene is required, but
    load only the device-appropriate variant and defer nonessential scenes.
-   Test on mid-range Android devices and average mobile networks, not
    just a high-end desktop.
-   Initial engineering budgets: hero poster ≤ 200 KB, initial route
    JavaScript excluding deferred 3D ≤ 200 KB compressed, and first-scene
    assets/code ≤ 3 MB transferred on desktop or ≤ 1.5 MB on mobile.
    These are project targets to validate in the prototype, not search
    engine thresholds. Measure total transfer including decoders/textures.
-   Aim for smooth 60 fps desktop motion and at least 30 fps on the agreed
    mobile test device. Adapt pixel ratio, lighting, and geometry before
    dropping the narrative. Pause rendering when offscreen or the tab is
    hidden and release resources when leaving the page.
-   Record the device, browser, network/CPU profile, cold-cache runs,
    transfer sizes, and first usable 3D-frame time. Agree the scene-ready
    target after prototyping; a fast poster alone does not prove the
    required 3D experience loads acceptably.

------------------------------------------------------------------------

## 9. Responsive Design

### Desktop

-   Full cinematic 3D hero and scroll sequence.
-   Wide project imagery and asymmetric editorial layouts.
-   Hover effects are supplemental, never the only way to access
    content.

### Tablet

-   Reduced scene complexity and shorter pinned sequences.
-   Ensure section transitions do not consume excessive scroll distance.

### Mobile

-   Prioritize immediate understanding and WhatsApp conversion.
-   Use optimized hero media or lightweight 3D.
-   Avoid long scroll-lock experiences and interactions requiring
    precision.
-   Keep touch targets comfortably sized.
-   Sticky WhatsApp CTA must not cover form fields, consent text, or
    footer controls.
-   Form should use suitable mobile keyboard types and preserve input
    through validation and in-page steps while mounted. Reloads or leaving
    the page may clear input; do not persist personal details to browser
    storage to support navigation.

------------------------------------------------------------------------

## 10. Accessibility and Usability

-   Target WCAG 2.2 AA as a quality goal.
-   Semantic headings and landmarks; one clear H1.
-   Keyboard-accessible navigation, menus, forms, and dialogs.
-   Visible focus states and sufficient contrast.
-   Descriptive alt text for meaningful imagery; decorative images
    should be ignored by screen readers.
-   Form labels must remain visible; placeholders are not labels.
-   Validation errors should be associated with their fields and
    announced accessibly.
-   Reduced-motion support is mandatory.
-   Essential information must not depend on color, hover, sound, WebGL,
    or animation.
-   Test at 200% zoom and with screen-reader/keyboard navigation.

------------------------------------------------------------------------

## 11. SEO and Local Discovery

### Core local signals

-   Business name: Hope Networking.
-   Primary location: Vallikkavu, Kerala, India.
-   Service area: confirm actual service radius before publishing.
-   Technology brands: verify product availability/relationship and obtain
    approval for name/logo use for Hikvision, TP-Link, PRAMA, and CP Plus;
    never imply certification, sponsorship, or official partnership
    without evidence.
-   Unique title and meta description.
-   LocalBusiness / relevant structured data only with accurate,
    verified information.
-   Consistent business name, address, phone number, WhatsApp number,
    and Instagram handle across site and external profiles.
-   Google Business Profile link only if the company has a verified
    profile.
-   Instagram profile link in footer and contact page only if the
    account is active and approved for publication.

### Suggested homepage metadata

**Title:** Hope Networking \| CCTV, Networking & Home Automation in
Vallikkavu\
**Description:** Explore CCTV security, commercial surveillance,
networking, Wi-Fi, and home automation solutions from Hope Networking in
Vallikkavu, Kerala.

### Content guidance

Use clear, natural service language rather than keyword stuffing. Launch
with the service URLs committed in the architecture only after the business
confirms each service is offered and content is original and useful. Merge
overlapping topics to avoid thin/duplicate pages; defer unsupported
services rather than publishing placeholders. Do not publish fake
testimonials, fabricated project outcomes, unverified location/service
claims, or brand partnership claims.

------------------------------------------------------------------------

## 12. Content and Assets Required from the Business

Before design approval or launch, collect: - Official logo and any brand
guidelines. - Confirmed WhatsApp number in international format. -
Primary phone number for click-to-call and business email, if available.
- Active Instagram profile handle and approval to link it publicly. -
Exact address or service-area description approved for publication. -
Verified residential and commercial project counts. - Permission and
approved wording for TVS and other named client references. - Authorized
client logos and project photographs. - Real photos/videos of
installations, equipment, racks, cable management, and completed sites.
- Exact services offered and supported product brands, including
verified relationship/permission for Hikvision, TP-Link, PRAMA, and CP
Plus name/logo use. - Warranty,
maintenance, support, and site-visit policies. - Typical enquiry response
hours. - Social profiles and business listing links. - Privacy contact
and data-retention preferences. - Preferred language(s): English,
Malayalam, or both.

**Launch blockers:**

- The WhatsApp CTA cannot be production-ready until a verified company
  WhatsApp number is supplied.
- The click-to-call phone number and Instagram link cannot be published
  until they are verified and approved by the business.

------------------------------------------------------------------------

## 13. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Visitor understands the verified core services and Vallikkavu location from the first screen. | Must |
| FR-02 | Primary CTA is visible above the fold and remains reachable on mobile. | Must |
| FR-03 | Dedicated service pages and homepage Services section accurately cover offered CCTV, networking, and other verified services. | Must |
| FR-04 | Homepage Projects section shows approved genuine experience; no fabricated proof. | Must |
| FR-05 | Enquiry form validates required fields and preserves values on error. | Must |
| FR-06 | Form creates a readable, URL-encoded WhatsApp click-to-chat message and copy fallback. | Must |
| FR-07 | WhatsApp handoff uses the business-verified international number. | Must |
| FR-08 | Handoff clearly tells the user they still need to press Send in WhatsApp. | Must |
| FR-09 | 3D hero/story has reduced-motion, constrained-device, initialization-failure, and no-WebGL paths. | Must |
| FR-10 | Responsive layouts support mobile, tablet, and desktop. | Must |
| FR-11 | Public pages have static HTML, unique SEO metadata, canonicals, sitemap, robots.txt, semantic structure, and crawlable internal links. | Must |
| FR-12 | If analytics is selected, it excludes personal data and free text and follows approved consent/privacy behavior. | Should |
| FR-13 | Privacy notice is available near lead submission and in the footer. | Must |
| FR-14 | Contact details, claims, project assets, and any brand-use statements are verified before publication. | Must |
| FR-15 | Every page footer has verified phone/click-to-call, WhatsApp, approved Instagram, service links, and privacy notice. | Must |
| FR-16 | Every offered launch service has its own substantive, crawlable static HTML URL; deep links and refresh work on GitHub Pages. | Must |
| FR-17 | Homepage has dedicated Services and Projects sections with crawlable links to the relevant detail pages. | Must |
| FR-18 | GitHub Pages static export, production URL/base-path strategy, and direct-route behavior are tested. | Must |
| FR-19 | Technology-brand names/logos appear only with verified product relationship and usage approval; no unsupported endorsement claims. | Should |
| FR-20 | Advanced project filters and additional content pages. | Should |
| FR-21 | CRM integration or lead storage. | Could, later phase |
| FR-22 | Approved security/networking 3D storyboard is delivered on capable desktop and mobile devices, with measured loading and rendering performance. | Must |
| FR-23 | Small hero intro animation follows the timing, non-blocking, and reduced-motion requirements in Section 6.2. | Should |
| FR-24 | Services hub and footer provide clear routes to offerings, genuine proof, and verified contact channels. | Must |

## 14. Acceptance Criteria

The release is ready when:

1.  A new visitor can identify the business, service categories, and
    Vallikkavu location without scrolling through the 3D scene.
2.  The first screen includes a clear CTA with a functional destination.
3.  The 200+ residential and 50+ commercial claims appear only after
    company verification.
4.  Client names and logos appear only with approved wording and
    permissions.
5.  A visitor can complete the enquiry form on mobile and desktop with
    clear validation.
6.  Every entered form value appears correctly in the generated WhatsApp
    message, with special characters safely URL-encoded.
7.  The WhatsApp handoff targets the verified number; the site clearly
    indicates that the visitor still needs to send the message.
8.  If the handoff fails, the visitor can copy the prepared message
    without re-entering the form.
9.  Reduced-motion users receive a coherent, complete experience.
10. The site remains usable when WebGL fails or 3D assets are delayed.
11. No personal form data is emitted to analytics; analytics is only enabled if its tool and consent/privacy behavior are approved.
12. Each public page has a unique title, meta description, canonical URL,
    one clear H1, and is reachable via crawlable internal links.
13. The sitemap and robots.txt are generated and valid;
    the owner verifies Google Search Console and submits the sitemap after launch.
14. The footer displays the verified phone number, WhatsApp CTA, and
    approved Instagram link on every page.
15. Core pages pass keyboard navigation, basic screen-reader checks,
    responsive QA, and performance checks.
16. No fabricated testimonials, client endorsements, prices, warranties,
    or service guarantees are published.
17. The homepage contains dedicated Services and Projects sections with
    crawlable links to their respective detail URLs; the technology-brand
    section displays only verified brand names/logos and makes no
    unsupported partnership or endorsement claim.
18. Static export output contains substantive HTML, unique metadata, and
    canonical URLs for every published route. Each route works via direct
    navigation and refresh on GitHub Pages using the selected URL strategy.
19. The 3D hero does not block first-render HTML, H1, CTA, navigation, or
    service content; its desktop experience explains security and
    networking, and fallback/reduced-motion paths preserve the same
    message.
20. No full-screen loading gate delays initial page content. Any optional
    transition is non-blocking, keyboard-accessible, and disabled or
    shortened for reduced-motion users.
21. The footer on every public page contains verified phone/click-to-call,
    WhatsApp, approved Instagram, service links, and privacy notice.
22. Hero storyboard and desktop/mobile recordings are reviewed; a poster
    alone does not satisfy the capable-device 3D deliverable.
23. Intro-animation tests cover cached assets, slow loads, failure,
    JavaScript disabled, and reduced motion without hiding content.
24. Hosting eligibility is resolved and the deployed static-site checks
    in Section 8 pass. Where project evidence is unavailable, the explicit
    Section 6.6 exception applies to project-related criteria.

------------------------------------------------------------------------

## 15. Testing Plan

### Functional

-   Required-field validation and error recovery.
-   Optional fields omitted correctly when blank.
-   Special characters, emojis, and long descriptions encoded safely.
-   Correct international WhatsApp number and message URL.
-   WhatsApp app / WhatsApp Web handoff across supported devices.
-   Copy-message fallback.
-   Menu, anchors, sticky CTA, and all contact links.

### Visual and responsive

-   Small Android, large Android, iPhone-sized viewport, tablet, laptop,
    and wide desktop.
-   Portrait and landscape where applicable.
-   Long text, slow network, and image-loading failures.
-   No overlapping sticky CTA, footer, form, or validation messages.

### Motion and performance

-   WebGL unavailable.
-   Reduced-motion enabled.
-   Low-power / throttled mobile CPU and network.
-   Scroll reversal, quick scroll, browser back/forward, and orientation
    change.
-   Core Web Vitals measurement and bundle inspection.
-   Test that initial static HTML contains the H1, service summary, navigation, links, and primary CTA with JavaScript/WebGL disabled.
-   Verify title, description, canonical, robots directives, structured data, and sitemap entries on all published routes.
-   Verify GitHub Pages direct URLs, trailing-slash or `.html` route convention, repository base path/custom domain, asset URLs, and branded 404.
-   Compare the intended desktop 3D hero, lightweight mobile rendering, and static/reduced-motion fallback; confirm no modal/full-screen loader gates page use.

### Trust and privacy

-   Verify all counts and client references.
-   Confirm consent and privacy copy.
-   Confirm analytics contains no personal form values.
-   Verify HTTPS and external-link behavior.

------------------------------------------------------------------------

## 16. Risks and Mitigations

  -----------------------------------------------------------------------
  Risk                    Impact                  Mitigation
  ----------------------- ----------------------- -----------------------
  3D effects make the     High bounce rate and    Load essential content
  page slow               lower conversions       first; use static
                                                  poster and mobile
                                                  fallback

  Animation overwhelms    Users miss services or  Tie each sequence to a
  the message             CTA                     specific story beat;
                                                  keep copy and CTA
                                                  persistent where
                                                  appropriate

  GitHub Pages route      Deep links/refreshes    Export a static HTML
  behavior differs by     return 404 or wrong     file per public route;
  URL strategy            asset paths             test base path, direct
                                                  navigation, canonical
                                                  URLs, and 404 behavior

  Brand logo implies      Legal/reputational      Verify availability and
  unauthorized partner    risk                    written permission;
                                                  use factual neutral
                                                  wording or omit brand

  WhatsApp details leak   Privacy and trust      Keep PII out of analytics
  into analytics/logs                             and logs; create handoff
                                                  URL only on submit

  WhatsApp number is      Leads are lost          Treat verified number
  incorrect or missing                            as a launch blocker;
                                                  test on real devices

  Client names/logos used Legal and reputational  Obtain written
  without approval        risk                    permission or use
                                                  generic project
                                                  categories

  Claims are unverified   Trust and compliance    Approve metrics,
                          risk                    services, and outcomes
                                                  with the business

  Too many form fields    Form abandonment        Keep required fields
  reduce conversion                               lean; make budget and
                                                  detailed scope optional

  No lead database means  Lost attribution if     Explain the WhatsApp
  no site-side enquiry    user does not send      send step; consider
  record                                          optional CRM/backend
                                                  phase later

  Mobile 3D harms         Poor mobile conversion  Reduce scene complexity
  usability                                       and prioritize native
                                                  scrolling and form
                                                  access
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 17. Delivery Plan

### Phase 1 --- Discovery and content

-   Confirm services, target locations, claims, WhatsApp number, client
    permissions, and available media.
-   Approve positioning, headline direction, and visual references.

### Phase 2 --- Experience design

-   Create responsive wireframes and high-fidelity hero concept.
-   Storyboard scroll-driven 3D sequence.
-   Design service cards, project showcase, lead form, and mobile CTA.

### Phase 3 --- Build

-   Implement layout, content, service sections, project showcase, and
    WhatsApp lead flow.
-   Add progressive 3D/scroll effects and all fallbacks.
-   Add SEO and privacy notice. Implement Google Search Console readiness; add third-party analytics only after the owner approves the tool and consent/privacy behavior.

### Phase 4 --- QA and launch

-   Test content and claims with the business.
-   Run functional, responsive, accessibility, performance, and WhatsApp
    handoff checks.
-   Deploy with HTTPS and monitoring.
-   Review conversion data after launch and refine the experience.

------------------------------------------------------------------------

## 18. Out of Scope for the Initial Release

Unless separately approved: - Online payments or checkout. - Customer
login or project portal. - Live CCTV feeds or device control. -
Automated quotation engine. - Guaranteed pricing, installation dates, or
response-time promises. - CRM database and lead dashboard. -
Multilingual CMS, unless English/Malayalam content is confirmed as a
launch requirement. - Full product catalogue or e-commerce.

------------------------------------------------------------------------

## 19. Open Questions

1.  What is the verified WhatsApp number in international format?
2.  What is the primary phone number for click-to-call (if different
    from WhatsApp)?
3.  What is the active Instagram handle, and is it approved for public
    linking?
4.  What is the exact official company name and logo treatment?
5.  Does Hope Networking serve only Vallikkavu or a wider area of
    Kerala?
6.  Which services are actively offered today: CCTV, structured cabling,
    Wi-Fi, smart-home automation, access control, intercoms,
    maintenance?
7.  Are the 200+ and 50+ project figures approved for public use?
8.  What is the precise relationship to TVS, and is public naming/logo
    usage permitted?
9.  Are the jewellery and supermarket examples specific client projects
    or general experience categories?
10. Are there real project photographs or short videos available?
11. What installation, warranty, maintenance, and after-sales support
    policies can be stated?
12. Should the site launch in English only, Malayalam only, or both?
13. Is a website-side lead log or CRM needed, or is WhatsApp-only
    sufficient for phase one?
14. What is the desired launch date and approximate budget for 3D
    production?
15. Which production URL will be used: account-root, repository-subpath,
    or a custom domain? Who owns the GitHub repository and domain?
16. Has GitHub clarified whether this commercial enquiry site's intended
    use is permitted under the Pages usage policy?
17. Which candidate technology brands are actually supplied/installed,
    and are any relationships formally authorized?
18. Which desktop and mobile devices will be used to approve the hero
    prototype and measure first usable 3D-frame time?

------------------------------------------------------------------------

## 20. Final Product Principle

**The website should feel extraordinary, but the enquiry should feel
effortless.** The visual experience earns attention; credible project
proof earns trust; a short, well-designed form and a reliable WhatsApp
handoff turn that trust into a conversation.
