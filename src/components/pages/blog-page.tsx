'use client'

import { useState } from 'react'
import { useRotatingContent } from '@/hooks/use-rotating-content'
import { heroVariations } from '@/lib/hero-variations'
import { PageHeader } from '@/components/shared/page-header'
import { Section } from '@/components/shared/section'
import { SectionHeading } from '@/components/shared/section-heading'
import { CTABlock } from '@/components/shared/cta-block'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  FileText,
  Tag,
  Search,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  PenLine,
} from 'lucide-react'

/* ── Blog Post Type ── */
interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string[]
  author: string
  authorRole: string
}

/* ── Full Blog Posts ── */
const blogPosts: BlogPost[] = [
  {
    id: 'why-verification-layered',
    title: 'Why Verification Must Be Layered, Not Binary',
    category: 'Verification',
    date: 'October 15, 2026',
    readTime: '6 min read',
    excerpt:
      'A single "verified" badge tells donors nothing about what was actually checked. At Fundraise.ph, verification is progressive — from basic identity review to compliance-sensitive review — because trust is earned in layers, not granted in one step.',
    author: 'Fundraise.ph Trust Team',
    authorRole: 'Verification & Compliance',
    content: [
      'When a donor sees a "verified" badge on a campaign, what does that actually mean? On most platforms, it means very little. Maybe the organizer submitted an email address. Maybe they linked a social media account. Maybe someone at the platform clicked approve. But the donor has no idea what was checked, how thoroughly, or by whom.',
      'This is the problem with binary verification: it treats all checks as equal. A campaign that confirmed the organizer\'s email gets the same badge as one that underwent identity verification, documentation review, and fund flow monitoring. The donor can\'t tell the difference — and that erodes trust in the entire system.',
      'At Fundraise.ph, we believe verification must be layered and transparent. Our verification framework operates on multiple levels:',
      '**Level 1 — Identity Verification:** We confirm who is running the campaign. This includes government-issued ID review, contact verification, and basic background checks. Every campaign must pass this level before going live.',
      '**Level 2 — Documentation Review:** We examine the documents supporting the campaign\'s claims — medical records, project proposals, organization registration papers, beneficiary information. This level confirms that the cause is legitimate and documented.',
      '**Level 3 — Fund Flow Tracking:** We set up monitoring for how funds will be disbursed and used. Campaign organizers commit to transparent fund routing, and donors can see how money moves from contribution to beneficiary.',
      '**Level 4 — Compliance-Sensitive Review:** For campaigns that involve public solicitation, exceed regulatory thresholds, or involve vulnerable populations, we conduct enhanced review. This includes compliance with SEC, BIR, DSWD, and data privacy requirements.',
      '**Level 5 — Ongoing Monitoring:** Verification doesn\'t stop at launch. We monitor campaigns throughout their lifecycle — checking for updates, reviewing fund usage reports, and ensuring that commitments made at launch are honored at close.',
      'Each level earns a distinct badge, so donors know exactly what has been verified. This layered approach doesn\'t just protect donors — it protects legitimate campaigners too, because their thorough verification is visible and differentiated from superficial checks.',
      'Trust is not binary. It is earned progressively, verified transparently, and maintained continuously. That is the Fundraise.ph standard.',
    ],
  },
  {
    id: 'filipino-fundraising-trust-layer',
    title: 'The Case for a Filipino Fundraising Trust Layer',
    category: 'Trust & Transparency',
    date: 'July 1, 2026',
    readTime: '7 min read',
    excerpt:
      "Without standardized verification, transparent fund tracking, and compliance guidance, Filipino fundraising remains vulnerable. Here's why a dedicated trust organization is essential — and why it must be independent from any single platform.",
    author: 'Fundraise.ph Trust Team',
    authorRole: 'Trust & Governance',
    content: [
      'The Philippines is one of the most generous nations on earth. The World Giving Index consistently ranks Filipinos among the most likely to help strangers, donate money, and volunteer time. This generosity is rooted in bayanihan — the Filipino spirit of communal unity and mutual aid.',
      'But generosity without trust is vulnerable. And in the digital age, the trust gap in Filipino fundraising is widening.',
      'Consider the landscape: crowdfunding platforms operate with minimal oversight. Campaign organizers often don\'t know their compliance obligations. Donors have no way to verify whether a campaign is legitimate, whether funds reach their intended beneficiaries, or whether their personal data is protected. There is no standardized verification framework, no transparent fund tracking, and no compliance guidance available specifically for Filipino fundraisers.',
      'International platforms don\'t fill this gap. They aren\'t designed for Philippine regulations, Filipino cultural practices, or the specific compliance requirements of LGUs, DSWD, SEC, and BIR. They treat the Philippines as one more market — not as a community with unique needs.',
      'This is why Fundraise.ph exists as a dedicated trust organization — not as a fundraising platform, but as the trust layer that ensures fundraising is done right.',
      'Our role is specific and essential: we set verification standards, we provide compliance guidance, we advocate for donor protection, we publish transparency reports, and we maintain the technology that powers Fundraising.ph\'s trust infrastructure.',
      'And crucially, we are independent. We are not the platform that profits from campaigns. We are the organization that verifies them. This separation of trust from commerce is fundamental — because the entity that checks the system should not be the entity that benefits from it.',
      'Filipino generosity deserves infrastructure as strong as its spirit. That is the case for a dedicated trust layer. That is Fundraise.ph.',
    ],
  },
  {
    id: 'sergs-chocolates-marketplace-model',
    title: "How Serg's Chocolates Gave Birth to Fundraising.ph",
    category: 'Product Partnerships',
    date: 'July 15, 2026',
    readTime: '8 min read',
    excerpt:
      "Serg's Chocolates didn't just inspire Fundraising.ph — it conceptualized it. When a heritage chocolate brand's revival plan needed a platform that didn't exist, the gap became an opportunity to build something for every Filipino.",
    author: 'Fundraise.ph Team',
    authorRole: 'Founding Story',
    content: [
      'Serg\'s Chocolates is part of Filipino pasalubong culture — a heritage brand that evokes childhood, homecoming, and the simple joy of giving. When the team behind Serg\'s began planning its revival, they made a deliberate decision: this comeback would not just be about selling chocolate. It would be about giving back to the community.',
      'The revival plan embedded CSR — Corporate Social Responsibility — into the business model itself. A portion of every sale would support verified campaigns. A bundle could fund a classroom. A gift box could help rebuild after a typhoon. The chocolate would not just be a product — it would be bayanihan you can hold in your hands.',
      'But then the team hit a wall. They searched for a fundraising platform that could support product-based community giving — one with verification, transparency, and compliance built in. International platforms didn\'t understand Filipino bayanihan culture. Local platforms lacked trust infrastructure. There was no platform that could verify campaigns, track funds transparently, acknowledge donors properly, and support marketplace fundraising.',
      'The question became: if the platform doesn\'t exist, do we wait — or do we build it?',
      'Serg\'s chose to build. Fundraising.ph was conceptualized as the platform that could serve not just Serg\'s needs, but the needs of every Filipino campaign — from medical fundraisers to community projects, from product-based campaigns to diaspora giving.',
      'And to ensure that Fundraising.ph would always operate with integrity, Fundraise.ph was established as a separate nonprofit trust organization — the guardian of verification standards, compliance guidance, and donor protection.',
      'Serg\'s Chocolates is now the Founding Member of Fundraise.ph — a living reminder that being Filipino means showing up for one another, and that bayanihan can live online. Every verification completed, every standard published, and every donor protected traces back to the same origin: a chocolate brand that believed revival should serve community, not just commerce.',
    ],
  },
  {
    id: 'ethical-storytelling',
    title: 'Ethical Storytelling: Protecting Beneficiary Dignity in Campaigns',
    category: 'Ethical Storytelling',
    date: 'August 1, 2026',
    readTime: '6 min read',
    excerpt:
      'The stories behind campaigns are powerful — but they must be told with consent, care, and respect. At Fundraise.ph, we require every campaign to follow ethical storytelling guidelines that protect the dignity of every beneficiary.',
    author: 'Fundraise.ph Trust Team',
    authorRole: 'Beneficiary Protection',
    content: [
      'Behind every fundraising campaign is a person — someone experiencing hardship, seeking help, trusting that their story will be treated with care. How that story is told matters. It matters to the beneficiary, whose dignity is on the line. It matters to the donor, whose trust depends on authenticity. And it matters to the entire fundraising ecosystem, because exploitation erodes the culture of giving.',
      'At Fundraise.ph, ethical storytelling is not optional. It is a requirement embedded in our campaign standards.',
      'Our ethical storytelling guidelines are built on five principles:',
      '**1. Informed Consent:** No beneficiary\'s story, image, or personal information may be used in a campaign without their informed consent. They must understand how their information will be used, who will see it, and what rights they have to modify or remove it.',
      '**2. Dignity First:** Campaigns may not exploit, sensationalize, or demean beneficiaries. Hardship may be described honestly, but never in a way that strips the person of agency or reduces them to their circumstances. The beneficiary is a person, not a prop.',
      '**3. Accuracy and Context:** Stories must be truthful and provide appropriate context. Exaggeration, misleading framing, or omission of relevant facts violates our standards and undermines donor trust.',
      '**4. Beneficiary Rights:** Beneficiaries have the right to review how their story is presented, request modifications, and withdraw consent. They can request campaign changes or removal through our reporting channels.',
      '**5. Cultural Sensitivity:** Filipino fundraising often involves vulnerable populations — disaster survivors, medical patients, indigenous communities. Campaigns must be sensitive to cultural practices, community norms, and the power dynamics inherent in seeking help.',
      'These guidelines are enforced through our verification process. Campaigns that violate ethical storytelling standards are flagged, suspended, or removed. We train campaigners on these principles during onboarding, and our compliance team reviews storytelling content as part of ongoing monitoring.',
      'Because when we protect the dignity of beneficiaries, we protect the integrity of Filipino giving itself.',
    ],
  },
  {
    id: 'what-is-fundraise-ph',
    title: 'What Is Fundraise.ph? The Trust Layer for Filipino Fundraising',
    category: 'Trust & Transparency',
    date: 'June 1, 2026',
    readTime: '5 min read',
    excerpt:
      'Fundraise.ph is not a fundraising platform. It is the nonprofit trust organization that builds the verification, transparency, and compliance infrastructure behind Fundraising.ph — ensuring that Filipino fundraising is done right.',
    author: 'Fundraise.ph Editorial',
    authorRole: 'Core Authority',
    content: [
      'There is a common misunderstanding that Fundraise.ph and Fundraising.ph are the same thing. They are not — and the distinction is critical to understanding how trust works in the Filipino fundraising ecosystem.',
      '**Fundraise.ph** is a nonprofit trust organization. Its mission is to build and maintain the trust infrastructure for Filipino digital fundraising. This includes setting verification standards, providing compliance guidance, publishing transparency reports, advocating for donor protection, and overseeing the technology that powers trustworthy fundraising.',
      '**Fundraising.ph** is the fundraising platform where campaigns are created, donations are made, and impact is delivered. It is the operational platform that the public interacts with directly.',
      'Think of it this way: Fundraise.ph is the referee. Fundraising.ph is the game. The referee doesn\'t play — but without the referee, the game has no rules, no fairness, and no credibility.',
      'This separation is intentional and essential. If the same entity that profits from campaigns also verifies them, there is an inherent conflict of interest. By separating the trust organization from the platform, we ensure that verification decisions are made independently, compliance standards are enforced impartially, and donor protection is prioritized above platform revenue.',
      'Fundraise.ph was conceptualized by Serg\'s Chocolates as part of its revival plan — when the brand needed a trustworthy platform and found that none existed. What started as a solution for one heritage brand became a mission to serve all Filipino communities.',
      'As a nonprofit, Fundraise.ph\'s assets are permanently dedicated to its charitable mission. It cannot be converted to a for-profit entity. Its governance principles — mission lock, transparency by default, compliance-aware operations, conflict-of-interest management, human oversight over automation, and beneficiary dignity — are embedded in its organizational DNA.',
      'Fundraise.ph exists because Filipino generosity deserves infrastructure as strong as its spirit.',
    ],
  },
  {
    id: 'verification-badges-explained',
    title: 'Verification Badges Explained: What Each Badge Means for Donors',
    category: 'Verification',
    date: 'November 10, 2026',
    readTime: '5 min read',
    excerpt:
      'Not all verified badges are created equal. At Fundraise.ph, each badge represents a specific level of verification — so donors know exactly what has been checked before they give.',
    author: 'Fundraise.ph Trust Team',
    authorRole: 'Verification Standards',
    content: [
      'When you see a verification badge on Fundraising.ph, you should know exactly what it means. That\'s why our badge system is transparent and specific — each badge corresponds to a defined level of verification, and donors can see which checks have been completed.',
      '**Identity Verified (Blue Shield):** The campaign organizer\'s identity has been confirmed through government-issued ID review, contact verification, and basic background checks. This badge means: "We know who is running this campaign."',
      '**Documentation Reviewed (Gold Document):** The supporting documents for the campaign\'s claims have been examined — medical records, project proposals, organization registration, beneficiary information. This badge means: "The cause is documented and legitimate."',
      '**Fund Flow Tracked (Green Arrow):** The campaign has committed to transparent fund routing. Disbursement paths are defined, and donors can see how money moves from contribution to beneficiary. This badge means: "You can follow the money."',
      '**Compliance Reviewed (Red Scale):** The campaign has undergone enhanced compliance review, including regulatory requirements (SEC, BIR, DSWD, data privacy), public solicitation rules, and threshold-based obligations. This badge means: "This campaign meets regulatory standards."',
      '**Fully Verified (Gold Shield with Check):** The campaign has passed all four verification levels and is under ongoing monitoring. This is our highest trust designation. This badge means: "This campaign has been verified at every level we offer."',
      'A campaign may display multiple badges simultaneously — showing donors exactly which verifications have been completed. This layered approach means that a campaign with Identity Verified and Documentation Reviewed badges is more trustworthy than one with only Identity Verified — and donors can make informed decisions accordingly.',
      'Badges are not permanent. They are subject to ongoing review and can be revoked if a campaign fails to maintain its verification standards. Trust is earned continuously — not once, but always.',
    ],
  },
  {
    id: 'compliance-library-guide',
    title: 'Compliance Library: A Free Resource for Responsible Fundraising',
    category: 'Compliance',
    date: 'November 25, 2026',
    readTime: '6 min read',
    excerpt:
      'Most Filipino campaign organizers don\'t know their legal obligations. Fundraise.ph\'s Compliance Library provides free, accessible guidance on the regulations that affect every fundraiser in the Philippines.',
    author: 'Fundraise.ph Compliance Team',
    authorRole: 'Compliance Education',
    content: [
      'One of the biggest barriers to responsible fundraising in the Philippines is not bad intentions — it\'s lack of information. Most people who start a fundraiser have no idea whether they need a DSWD permit, when SEC registration applies, what BIR obligations they have, or how the Data Privacy Act affects their campaign.',
      'This knowledge gap creates real problems. Well-meaning organizers accidentally violate regulations. Donors hesitate because they can\'t tell if a campaign is legitimate. And the entire ecosystem suffers from a lack of trust that compliance awareness could solve.',
      'That\'s why Fundraise.ph built the Compliance Library — a free, publicly accessible resource that provides clear, practical guidance on the regulatory landscape for Filipino fundraising.',
      'The Compliance Library covers:',
      '**Permit Requirements:** When you need a DSWD permit, LGU clearance, or SEC registration — and when you don\'t. Clear flowcharts and decision trees help organizers understand their obligations based on campaign type, amount, and scope.',
      '**Tax Obligations:** What the BIR requires for different types of fundraising — from donation receipts to income tax considerations for campaign organizers and beneficiaries.',
      '**Data Privacy Compliance:** How the Data Privacy Act of 2012 applies to campaign organizers, including consent requirements, data handling obligations, and breach notification procedures.',
      '**Fund Disbursement Standards:** Best practices for transparent fund routing, including documentation requirements, timing expectations, and proof-of-delivery commitments.',
      '**Ethical Storytelling Guidelines:** Standards for representing beneficiaries, obtaining consent, and maintaining dignity in campaign narratives.',
      '**Post-Campaign Reporting:** What donors deserve to know after a campaign closes — including fund usage reports, impact documentation, and beneficiary updates.',
      'The Compliance Library is free for everyone — not just campaigns on Fundraising.ph. Because raising compliance awareness across the entire Filipino fundraising ecosystem benefits every donor, every beneficiary, and every legitimate campaign.',
    ],
  },
  {
    id: 'filipino-diaspora-giving',
    title: 'Diaspora Giving: Connecting Overseas Filipinos to Trusted Campaigns at Home',
    category: 'Diaspora Giving',
    date: 'January 15, 2027',
    readTime: '6 min read',
    excerpt:
      'Over 10 million Filipinos live abroad, and they send billions home each year. But when it comes to digital fundraising, diaspora Filipinos face a unique trust gap — they want to help, but they can\'t verify from afar.',
    author: 'Fundraise.ph Team',
    authorRole: 'Diaspora & Community',
    content: [
      'The Filipino diaspora is one of the largest in the world — over 10 million Filipinos live and work across the Middle East, North America, Europe, Asia, and Oceania. They send billions of dollars home each year through remittances. They are, by nature, some of the most generous people on earth.',
      'But when it comes to digital fundraising, overseas Filipinos face a unique challenge: the trust gap of distance.',
      'When you\'re thousands of miles away, you can\'t visit the beneficiary. You can\'t check the hospital. You can\'t verify the school. You see a campaign online, and you want to help — but you have no way to confirm that the story is real, the need is genuine, and the funds will reach their destination.',
      'This gap is especially painful because diaspora Filipinos often have deep connections to their hometowns and communities. They want to give back. They want to support specific causes — a neighbor\'s medical bills, their old school\'s renovation, disaster relief for their province. But the current fundraising landscape doesn\'t give them the tools to give with confidence.',
      'Fundraise.ph is building the infrastructure to close this gap. Our verification framework provides the transparency that distance demands — identity checks, documentation review, fund flow tracking, and compliance review all give diaspora donors the assurance they need.',
      'Our roadmap includes specific features for diaspora giving:',
      '**Hometown Campaign Discovery:** Find verified campaigns connected to your province, municipality, or community.',
      '**Multi-Currency Planning:** Support for international donations with transparent exchange rates and compliance review for cross-border fund flows.',
      '**Diaspora Chapter Partnerships:** Partner with Filipino community organizations worldwide to identify and verify local campaigns.',
      '**Transparent Impact Reporting:** Post-campaign reports with receipts, photos, and beneficiary updates — so you can see exactly how your contribution helped.',
      'Bayanihan doesn\'t stop at the border. Fundraise.ph is building the infrastructure to ensure it doesn\'t have to.',
    ],
  },
  {
    id: 'governance-principles',
    title: 'Six Governance Principles That Protect Filipino Fundraising',
    category: 'Governance',
    date: 'June 15, 2026',
    readTime: '7 min read',
    excerpt:
      'Governance at Fundraise.ph is not a checkbox — it is a living practice. Our six non-negotiable principles ensure that the organization remains accountable, transparent, and always aligned with its mission.',
    author: 'Fundraise.ph Board',
    authorRole: 'Governance',
    content: [
      'Trust is the product Fundraise.ph offers. Governance is how we protect it.',
      'Our six governance principles are embedded in our organizational DNA — not as aspirations, but as operational commitments that guide every decision we make.',
      '**1. Mission Lock:** The mission of Fundraise.ph cannot be changed, diluted, or redirected for commercial or personal gain. It is embedded in our Constitution and By-Laws. Any amendment requires unanimous board approval and public consultation. The organization cannot be converted to a for-profit entity. All assets are permanently dedicated to the charitable mission.',
      '**2. Transparency by Default:** All financial records, policies, decisions, and impact data are publicly accessible unless privacy law requires otherwise. Annual financial statements are published within 90 days of fiscal year end. Board meeting summaries are made publicly available. This is not generosity — it is obligation.',
      '**3. Compliance-Aware Operations:** Every operational decision and feature is evaluated against Philippine regulatory requirements before implementation. Compliance checks are integrated into every product development sprint. Regular audits align with SEC, BIR, and DSWD requirements.',
      '**4. Conflict-of-Interest Management:** All trustees, officers, and staff must disclose conflicts of interest and recuse themselves from related decisions. Mandatory annual disclosure. No trustee may benefit financially from platform campaigns or partnerships. Public disclosure of any conflicts during board proceedings.',
      '**5. Human Oversight Over Automation:** AI and automated systems support but never replace human judgment in verification, compliance, and beneficiary protection. All verification decisions require human review. AI recommendations are advisory only. Automated fund disbursement requires human sign-off above threshold amounts.',
      '**6. Beneficiary Dignity:** All interactions, content, and data concerning beneficiaries must preserve their dignity, privacy, and agency. Beneficiaries must consent to how their stories are used. Campaigns cannot exploit or sensationalize hardship. Beneficiary data is protected with the highest privacy standards.',
      'These principles are not negotiable. They are the foundation of public trust — and without trust, there is no Fundraise.ph.',
    ],
  },
  {
    id: 'fundraising-standards',
    title: 'Campaign Standards: The Minimum Requirements for Every Filipino Campaign',
    category: 'Fundraising Standards',
    date: 'August 20, 2026',
    readTime: '6 min read',
    excerpt:
      'Every campaign on Fundraising.ph must meet minimum standards before going live. These standards protect donors, beneficiaries, and the integrity of Filipino digital fundraising.',
    author: 'Fundraise.ph Trust Team',
    authorRole: 'Campaign Standards',
    content: [
      'A fundraising campaign is more than a webpage with a donation button. It is a commitment — from the organizer to the donor, from the donor to the beneficiary, and from the platform to the public. That commitment must be backed by standards.',
      'At Fundraise.ph, we set the minimum requirements that every campaign on Fundraising.ph must meet before it goes live. These standards are not aspirational — they are mandatory.',
      '**Organizer Identity:** Every campaign organizer must verify their identity. This includes providing a valid government-issued ID, confirming contact information, and undergoing a basic background check. Anonymous campaigns are not permitted.',
      '**Campaign Documentation:** Every campaign must provide documentation supporting its claims. Medical campaigns require medical records or hospital bills. Education campaigns require enrollment documents or tuition statements. Community projects require proposals or project plans.',
      '**Beneficiary Information:** Campaigns must clearly identify who benefits. Direct beneficiary campaigns must include the beneficiary\'s name and relationship to the organizer. Organizational campaigns must include registration details and authorized representatives.',
      '**Fund Usage Plan:** Every campaign must specify how funds will be used. Vague descriptions like "for medical expenses" are not sufficient. Campaigns must itemize expected costs, define disbursement timelines, and commit to post-campaign reporting.',
      '**Ethical Storytelling:** Campaigns must follow our ethical storytelling guidelines — informed consent, dignity-first framing, accuracy, beneficiary rights, and cultural sensitivity.',
      '**Compliance Awareness:** Campaign organizers must acknowledge their regulatory obligations. For campaigns that may require permits, registrations, or compliance documentation, our Compliance Library provides guidance and our verification team provides support.',
      '**Post-Campaign Reporting:** Every campaign must commit to post-campaign reporting — documenting how funds were used, providing proof of delivery, and updating donors on outcomes. This is not optional. It is the completion of the trust cycle.',
      'These standards protect everyone. They protect donors from fraud. They protect beneficiaries from exploitation. They protect legitimate organizers by distinguishing their campaigns from low-effort or fraudulent ones. And they protect the entire Filipino fundraising ecosystem by raising the baseline of trust.',
    ],
  },
  {
    id: 'technology-bayanihan',
    title: 'Technology for Bayanihan: Building Digital Infrastructure for Filipino Giving',
    category: 'Technology',
    date: 'September 10, 2026',
    readTime: '7 min read',
    excerpt:
      'Bayanihan has sustained Filipino communities for centuries. Our mission is to build the digital infrastructure that allows it to thrive in the age of online fundraising — without losing the trust that makes it meaningful.',
    author: 'Fundraise.ph Technology Team',
    authorRole: 'Technology & Engineering',
    content: [
      'Bayanihan — the Filipino tradition of communal unity and cooperation — has existed for centuries. Long before the internet, long before digital payments, long before crowdfunding platforms, Filipinos were helping each other. Moving houses together. Sharing harvests. Pooling resources for a neighbor in need.',
      'Technology didn\'t create bayanihan. But technology can either support it or undermine it.',
      'When technology reduces a campaign to a donation button without verification, it undermines bayanihan. When it allows anonymous organizers to collect funds without accountability, it undermines bayanihan. When it treats Filipino generosity as data to be monetized rather than a culture to be honored, it undermines bayanihan.',
      'Fundraise.ph builds technology that supports bayanihan. Our technology roadmap is designed around one principle: every feature must strengthen trust, transparency, and accountability in Filipino fundraising.',
      'Here is what we are building:',
      '**Verification Engine:** Automated and human-reviewed verification workflows that progress from identity checks to compliance-sensitive review — layered, transparent, and visible to donors.',
      '**Fund Flow Tracking:** Systems that make money traceable from donation to delivery. Donors can see where their contribution is in the disbursement pipeline, and beneficiaries can confirm receipt.',
      '**Compliance Guidance System:** Integrated compliance checklists, permit requirement guides, and regulatory education — embedded into the campaign creation workflow so organizers know their obligations before they launch.',
      '**Marketplace Fundraising Module:** Product-based fundraising tools that allow Filipino brands and businesses to support campaigns through verified marketplace transactions — from direct product sales to sponsor-matched campaigns.',
      '**Diaspora Giving Gateway:** Infrastructure for overseas Filipinos to discover, verify, and support campaigns connected to their hometowns — with cross-border compliance review and transparent impact reporting.',
      '**AI-Assisted Campaign Guidance:** AI tools that help organizers create compliant, effective campaigns — from setup assistance and compliance checklists to donor update drafting and post-campaign report generation. Always with human oversight and accountability.',
      'Technology should serve bayanihan — not replace it, not exploit it, not reduce it. That is the standard we build to.',
    ],
  },
  {
    id: 'community-impact',
    title: 'Measuring What Matters: Beyond Money Raised to Trust Created',
    category: 'Community Impact',
    date: 'March 15, 2027',
    readTime: '5 min read',
    excerpt:
      'The success of Filipino fundraising should not be measured only by pesos raised. It should be measured by trust created, beneficiaries served, donors acknowledged, and communities strengthened.',
    author: 'Fundraise.ph Impact Team',
    authorRole: 'Impact & Reporting',
    content: [
      'Most fundraising platforms measure success by one metric: total funds raised. But this metric tells only part of the story — and often the least important part.',
      'A campaign that raises one million pesos but delivers only half to the beneficiary is not a success. A platform that processes millions in donations but can\'t verify where the money went is not trustworthy. An ecosystem that measures volume without accountability is not sustainable.',
      'At Fundraise.ph, we measure what matters. Our impact framework tracks five categories:',
      '**Campaign Impact:** Not just total raised, but campaign success rates, average duration, verification levels achieved, and post-campaign reporting completion. These metrics tell us whether campaigns are succeeding — not just collecting.',
      '**Donor Impact:** Not just total donors, but repeat donors, donor retention rates, acknowledgment rates, and donor satisfaction. These metrics tell us whether donors trust the system enough to come back.',
      '**Beneficiary Impact:** Not just funds delivered, but individuals helped, communities supported, beneficiary satisfaction, and proof-of-delivery rates. These metrics tell us whether the help actually reaches the people who need it.',
      '**Marketplace Impact:** Products sold through fundraising, small businesses supported, revenue generated for campaigns, and marketplace repeat purchase rates. These metrics tell us whether product-based giving is creating sustainable value.',
      '**Trust Impact:** Campaigns verified, post-campaign reports published, compliance resources accessed, community reports resolved, and platform-wide trust scores. These metrics tell us whether the trust layer is working.',
      'Currently, most of these metrics show dashes — because we are still building. Our Public Impact Dashboard will display real-time, transparent metrics for the entire platform. When it launches, every data point will be public, verifiable, and updated in real time.',
      'Because impact without transparency is just marketing. And Filipino generosity deserves better than that.',
    ],
  },
  {
    id: 'dswd-permit-guide',
    title: 'Do You Need a DSWD Permit to Fundraise in the Philippines?',
    category: 'Compliance',
    date: 'December 12, 2026',
    readTime: '5 min read',
    excerpt:
      'One of the most common questions from Filipino campaign organizers: do I need a DSWD permit? The answer depends on several factors. Here is a practical guide.',
    author: 'Fundraise.ph Compliance Team',
    authorRole: 'Compliance Education',
    content: [
      'The Department of Social Welfare and Development (DSWD) requires a permit for certain types of public solicitation in the Philippines. But not all fundraising activities require one — and understanding the distinction is critical for campaign organizers.',
      '**When a DSWD Permit IS Required:**',
      'Public solicitation campaigns that appeal to the general public for donations — including door-to-door campaigns, street collections, public events, and media appeals — typically require a DSWD solicitation permit. This applies to both individuals and organizations.',
      'Organizations that operate as social welfare agencies must register with DSWD. This includes NGOs, foundations, and civic organizations that provide social services and solicit public support.',
      'Campaigns involving vulnerable populations — children, elderly, persons with disabilities, disaster survivors — may trigger enhanced DSWD oversight and additional permit requirements.',
      '**When a DSWD Permit May NOT Be Required:**',
      'Private fundraising — where you seek contributions from a defined group (family, friends, co-workers, community members) rather than the general public — may not require a DSWD permit. However, the distinction between private and public solicitation can be nuanced.',
      'Online peer-to-peer campaigns — where individuals raise funds for their own needs or for a specific known beneficiary — exist in a regulatory gray area. Current DSWD regulations predate widespread digital fundraising, and the department has not issued definitive guidance for all online scenarios.',
      '**What Fundraise.ph Recommends:**',
      'Always err on the side of compliance. If you are unsure whether your campaign requires a permit, consult the Compliance Library on Fundraise.ph for detailed guidance, or contact our compliance team for case-specific support.',
      'Document everything. Even if a permit is not required, maintaining clear records of fund sources, fund usage, and beneficiary communication demonstrates good faith and protects both organizers and donors.',
      'Stay informed. Regulatory requirements evolve. Our Compliance Library is updated regularly to reflect the latest DSWD, SEC, BIR, and LGU requirements.',
      'This article is for informational purposes only and does not constitute legal advice. For specific regulatory questions, consult a qualified legal professional or the relevant government agency.',
    ],
  },
  {
    id: 'platform-updates-q3-2026',
    title: 'Platform Update: What We Built in Q3 2026 and What\'s Coming Next',
    category: 'Platform Updates',
    date: 'September 30, 2026',
    readTime: '4 min read',
    excerpt:
      'A progress update on Fundraise.ph and Fundraising.ph — what we launched, what we\'re building, and what comes next in our roadmap to trusted Filipino fundraising.',
    author: 'Fundraise.ph Team',
    authorRole: 'Platform Updates',
    content: [
      'Fundraise.ph and Fundraising.ph are in active development. Here is a summary of where we are and where we are headed.',
      '**What We Launched:**',
      'The Fundraise.ph website — you\'re looking at it. This site communicates our mission, trust framework, governance principles, verification standards, and founding story. It serves as the public face of the trust organization and the home for our Compliance Library, trustee notes, and community resources.',
      'Our founding narrative — the story of how Serg\'s Chocolates conceptualized Fundraising.ph as part of its revival plan, and how Fundraise.ph was established as the independent trust layer behind the platform.',
      'Our governance framework — six non-negotiable principles that guide every decision: mission lock, transparency by default, compliance-aware operations, conflict-of-interest management, human oversight over automation, and beneficiary dignity.',
      '**What We\'re Building (Phase 2 — Fundraising.ph Platform Launch):**',
      'The Fundraising.ph platform — the operational fundraising platform where verified campaigns will launch, donations will be collected, and impact will be delivered. Core features include campaign onboarding, donor acknowledgment, basic verification, and campaign updates.',
      'The verification engine — multi-layered verification workflows progressing from identity checks through documentation review, fund flow tracking, and compliance-sensitive review.',
      'The compliance guidance system — integrated checklists, permit guides, and regulatory education embedded into the campaign creation process.',
      '**What\'s Coming Next (Phases 3-8):**',
      'Marketplace fundraising tools, diaspora giving infrastructure, AI-assisted campaign guidance, public impact dashboard, and institutional partnership programs. Each phase builds on the last, and each is designed with trust and transparency at its core.',
      'We are building for the long term. Filipino fundraising deserves infrastructure that lasts — not just for the next campaign, but for the next generation of bayanihan.',
    ],
  },
  {
    id: 'ofw-billion-peso-bayanihan',
    title: 'The Billion-Peso Bayanihan: How OFWs Power the Philippine Economy and Why Their Generosity Deserves Better',
    category: 'OFW & Diaspora',
    date: 'February 10, 2027',
    readTime: '10 min read',
    excerpt:
      'Over 10 million Overseas Filipino Workers send home more than $33 billion annually — nearly 10% of the Philippines\' GDP. They are not just economic contributors. They are the living embodiment of bayanihan, extending help to family, friends, and fellow Filipinos in need. Yet when they give, they are asked to trust systems that offer zero visibility. That ends now.',
    author: 'Fundraise.ph Editorial',
    authorRole: 'OFW & Diaspora Advocacy',
    content: [
      'The numbers tell a story that every Filipino should know by heart. In 2024, Overseas Filipino Workers remitted over $33.5 billion to the Philippines — a figure that represents roughly 9.3% of the country\'s gross domestic product. To put this in perspective: if OFW remittances were a standalone economy, they would be larger than the GDP of over 80 sovereign nations. OFWs are not just contributors to the Philippine economy. They are one of its most critical pillars.',
      'But the number alone does not capture the full picture. Behind every dollar remitted is a person who chose to leave everything familiar — family, language, community, the smell of home — to work in a foreign land under conditions most people would find unbearable. They clean hospitals in the Middle East where temperatures exceed 50 degrees Celsius. They navigate care homes in Europe and North America during pandemic surges, exposed and undersupplied. They build the skylines of Dubai, Singapore, and Riyadh, working long hours in hazardous conditions for wages that would be unacceptable to the citizens of those same countries.',
      'They do this not for themselves, but for the people they left behind.',
      '**The Anti-Poverty Engine That No Government Program Can Match**',
      'The Asian Development Bank has documented what every barangay captain in the Philippines already knows: OFW households have significantly lower poverty incidence than non-OFW households. Remittances lift entire families out of poverty — funding education that breaks generational cycles, building homes that replace makeshift shelters, financing small businesses that create local employment, and providing healthcare that saves lives.',
      'The Philippine Statistics Authority reports that one in every two Filipino families has at least one member working abroad. In the poorest regions — the Visayas, Mindanao, and the Bicol Peninsula — OFW remittances often represent the single largest source of household income, exceeding what local employment or government assistance can provide. The World Bank has called OFW remittances the "most effective anti-poverty program in the developing world" — and it is one that Filipinos fund themselves, through sacrifice, not through policy.',
      'No government cash transfer program, no legislative initiative, no foreign aid package has matched the scale and consistency of what OFWs deliver year after year. They are the largest, most reliable social safety net the Philippines has ever known — and it is entirely powered by individual sacrifice.',
      '**The Kapwa Culture: Helping Beyond Family**',
      'What makes the OFW story extraordinary is not just the scale of their economic contribution — it is the culture that drives it. Filipino culture is built on the concept of kapwa: the recognition that "the other person is not separate from me." This is not charity in the Western sense. This is a deeply held belief that when a fellow Filipino is in need, you help — because their well-being is connected to yours.',
      'When a typhoon destroys a town in Leyte, OFWs in Saudi Arabia organize relief drives. When a neighbor\'s child needs surgery, the OFW nurse in London sends what she can. When a fellow domestic worker in Hong Kong loses her job and faces deportation, the community pools resources to keep her safe. This is not organized by institutions. This is organized by people who understand that bayanihan does not stop at borders.',
      'Social media has amplified this impulse dramatically. Filipino Facebook groups, Viber communities, and WhatsApp chains connecting OFWs across the globe have become informal fundraising networks — rapid-response systems for friends, friends of friends, and complete strangers who happen to be kapwa Pilipino in need. A single viral post about a countryman\'s medical emergency can generate thousands of dollars in small donations within hours.',
      'But here is the problem: these informal networks, as powerful and beautiful as they are, operate entirely on trust. And that trust is often blind.',
      '**The Trust Gap: When Generosity Meets Opacity**',
      'When an OFW donates to a campaign they saw on Facebook, what assurance do they have that the money reaches the beneficiary? When they contribute to a community fundraiser organized through a Viber group, how do they verify that the funds were used for the stated purpose? When they send money through a friend of a friend to help a typhoon victim, what recourse do they have if the funds are misused?',
      'The answer, in almost every case, is none.',
      'Current fundraising channels available to OFWs — social media campaigns, peer-to-peer transfers, informal community drives — offer zero transparency. There is no verification. There is no fund tracking. There is no accountability mechanism. The OFW donates and hopes. They trust and pray. And when that trust is violated — as it sometimes is — the generosity that defines the Filipino diaspora is eroded, one broken promise at a time.',
      'This is not a minor inconvenience. This is a systemic failure that undermines the very culture of giving that makes Filipino bayanihan so powerful. OFWs deserve better than blind trust. They deserve proof.',
      '**Fundraising.ph: The Central Hub Where Every Peso Is Accounted For**',
      'Fundraise.ph exists to close this trust gap — not by asking OFWs to trust harder, but by building systems that make trust verifiable. Through Fundraising.ph, the platform we verify and oversee, every donation, every shared campaign, and every extended helping hand from an OFW is fully trackable from the moment it is given to the moment it reaches the beneficiary.',
      'Here is how it works: Every campaign on Fundraising.ph undergoes multi-layered verification — identity verification, documentation review, fund flow tracking, and compliance-sensitive review. Donors can see exactly which verification levels a campaign has passed. Once a donation is made, the fund flow is tracked: where the money is, how it is being disbursed, and when it reaches the beneficiary. Post-campaign reports with receipts, photos, and beneficiary updates are not optional — they are mandatory.',
      'This means that when an OFW in Dubai donates to a medical campaign for a stranger in Davao, they can see the hospital bills. When a nurse in London contributes to a typhoon relief effort, they can track how their donation was used. When a construction worker in Riyadh shares a campaign with his community, he can point to verification badges and fund flow records as proof that the cause is legitimate.',
      'Every donation becomes traceable. Every share becomes accountable. Every helping hand extends further because the trust behind it is no longer blind — it is verified.',
      '**This Is the Movement OFWs Deserve**',
      'Over 10 million OFWs around the world are already the most generous community on earth. They give from their hard-earned wages, they give from countries far from home, they give to people they may never meet — because that is what kapwa means. That is what bayanihan demands.',
      'Fundraise.ph is not trying to create generosity. Generosity already exists in abundance. What we are building is the infrastructure to ensure that this generosity is never wasted, never misdirected, and never taken advantage of. We are building the trust layer that lets OFWs give with the same confidence they bring to everything else they do: fully, fearlessly, and with absolute certainty that their sacrifice is making a difference.',
      'The billion-peso bayanihan deserves billion-peso accountability. That is what Fundraise.ph delivers.',
      'To every OFW reading this: your sacrifices built this economy. Your generosity sustains communities. Your bayanihan deserves a platform where every peso is tracked, every campaign is verified, and every donation reaches its destination. That platform is Fundraising.ph — and the trust layer behind it is Fundraise.ph.',
      'This is your movement. This is your hub. And from this day forward, your generosity will never again be asked to operate in the dark.',
    ],
  },
  {
    id: 'ghost-projects-vs-bayanihan',
    title: 'Ghost Projects and Real Bayanihan: Why OFWs Must Lead the Fight Against Corruption Through Radical Transparency',
    category: 'OFW & Diaspora',
    date: 'February 28, 2027',
    readTime: '9 min read',
    excerpt:
      'While Philippine government audit reports expose billions in ghost projects and missing funds, OFWs send home $33 billion annually with no transparency at all. True Bayanihan demands accountability. This is how trackable giving bypasses bureaucratic corruption and ensures every peso reaches the people who need it.',
    author: 'Fundraise.ph Editorial',
    authorRole: 'Transparency & Anti-Corruption',
    content: [
      'The headlines have become sickeningly familiar. The Commission on Audit\'s annual reports consistently reveal billions of pesos in unliquidated advances, irregular transactions, and outright ghost projects — government-funded initiatives that exist only on paper, their budgets siphoned into private pockets while the communities they were meant to serve continue to suffer.',
      'In the most recent audit cycle, COA flagged tens of billions in disallowed, suspended, and in-transit expenditures across national government agencies and local government units. Infrastructure projects that were paid for but never built. Medical supply procurements where the supplies never arrived. Education programs that enrolled ghost beneficiaries. Disaster relief funds that never reached the typhoon victims they were allocated for.',
      'These are not accounting errors. These are systemic failures of accountability. And they represent a fundamental betrayal of every Filipino who pays taxes, every community that submits to governance, and every person who believes that public funds should serve the public.',
      '**The Paradox: Public Funds Disappear, Private Sacrifices Arrive**',
      'Here is the bitter irony that every OFW understands intuitively: while government ghost projects consume billions with zero accountability, Overseas Filipino Workers send home over $33 billion every year — and this money actually arrives. It actually feeds families. It actually builds homes. It actually pays for hospital bills, school tuition, and small businesses that employ neighbors.',
      'OFW remittances work because they are personal. When a nurse in Toronto sends money home, she knows exactly who receives it, what it is for, and whether it achieved its purpose. When a construction worker in Qatar wires funds for his daughter\'s tuition, the receipt is a diploma — tangible, verifiable, undeniable.',
      'But when the same OFW wants to help beyond their own family — when the kapwa impulse drives them to donate to a stranger\'s medical campaign, a community relief drive, or a barangay initiative — they enter a system as opaque as the government ghost projects they rightly condemn. Social media campaigns with no verification. Peer-to-peer fundraisers with no tracking. Community drives with no accountability. The OFW donates and trusts — the same blind trust that enables ghost projects to thrive in government.',
      'The conclusion is inescapable: opacity enables corruption, whether in government or in community giving. The mechanism that allows a ghost project to absorb public funds without delivering results is the same mechanism that allows a fraudulent campaign to collect donations without helping anyone. In both cases, the absence of tracking, verification, and accountability creates the conditions for abuse.',
      '**What Real Bayanihan Looks Like**',
      'Bayanihan is not just about giving. Bayanihan is about community accountability. The original bayanihan — neighbors physically carrying a house to a new location — was not a blind act of faith. Everyone could see the house moving. Everyone could verify that the collective effort was achieving its purpose. The community gave their labor, and the community witnessed the result. Transparency was not an add-on to bayanihan. It was the very mechanism that made bayanihan work.',
      'This is the standard we must hold ourselves to. True bayanihan thrives on transparency. It requires that every participant — whether carrying a house or contributing to a campaign — can see the impact of their effort. When transparency disappears, bayanihan degrades into something else: a one-directional transfer of resources with no accountability for outcomes.',
      'The Philippine government\'s ghost projects represent the ultimate corruption of communal trust: public resources, collected under the promise of communal benefit, disappearing into private pockets with no accountability. This is the opposite of bayanihan. This is what bayanihan looks like when transparency is removed.',
      '**The Trackable Alternative: Bypassing Bureaucratic Corruption**',
      'Fundraise.ph and Fundraising.ph offer a fundamentally different model — one that is built on the principle that every peso must be trackable, every campaign must be verifiable, and every donor must be able to see where their contribution goes.',
      'When an OFW donates through Fundraising.ph, they are not asked to trust blindly. They are given the tools to verify: multi-layered verification badges that show exactly what has been checked, fund flow tracking that reveals where the money is at every stage, mandatory post-campaign reporting with receipts and documentation, and beneficiary updates that confirm the help arrived.',
      'This system does not just protect donors from fraud. It structurally prevents the conditions that allow ghost projects to exist. A ghost project requires opacity — the absence of tracking, the inability of stakeholders to verify outcomes, the assumption that funds will be used correctly without proof. Fundraise.ph eliminates every one of these conditions.',
      'On Fundraising.ph, there are no ghost campaigns because every campaign must document its purpose, identify its beneficiaries, and commit to transparent fund usage before it can go live. There are no phantom disbursements because every fund movement is tracked and visible. There are no unverified outcomes because post-campaign reporting is mandatory, not optional.',
      'This is what radical transparency looks like in practice: a system designed so that the conditions for corruption simply cannot exist.',
      '**OFWs as the Vanguard of Accountable Giving**',
      'OFWs are uniquely positioned to lead this transformation. They understand the cost of every peso better than anyone — because they earn those pesos in conditions that most Filipinos will never experience. They know what it means to sacrifice, and they know what it means to be let down by systems that should protect them but instead exploit their trust.',
      'When an OFW chooses to donate through a trackable system rather than an opaque one, they are not just protecting their own contribution. They are setting a standard. They are saying: "I work too hard for my money to let it disappear into a black hole. I demand proof. I demand accountability. I demand the same transparency that true bayanihan has always required."',
      'This is how OFWs bypass bureaucratic corruption — not by withdrawing from community giving, but by insisting on systems that make corruption impossible. Every tracked donation is a vote for accountability. Every verified campaign is a rejection of ghost projects. Every OFW who demands transparency in their giving is building the infrastructure of trust that the Philippines has always deserved but never had.',
      '**The Choice: Blind Trust or Verified Impact**',
      'The Philippines stands at a crossroads. One path continues the current model: government ghost projects that consume public funds with no accountability, and informal fundraising that asks donors to trust without verification. The other path demands more — more transparency, more tracking, more accountability, and more proof that every peso reaches its destination.',
      'Fundraise.ph exists to build that second path. We are not a government agency, and we do not seek to replace government responsibility. We are a nonprofit trust organization that provides the infrastructure for verified, trackable, accountable giving — so that the generosity of OFWs and the bayanihan spirit of every Filipino is never again exploited by opacity.',
      'Ghost projects thrive in darkness. Real bayanihan thrives in light. The choice between them is not abstract — it is made every time an OFW decides how and where to give. Choose the light. Choose verification. Choose Fundraising.ph.',
      'Because your bayanihan deserves better than ghost projects. It deserves ghost-proof accountability — and that is exactly what we built.',
    ],
  },
]

const blogCategories = [
  'All',
  'OFW & Diaspora',
  'Trust & Transparency',
  'Compliance',
  'Verification',
  'Technology',
  'Bayanihan',
  'Diaspora Giving',
  'Governance',
  'Fundraising Standards',
  'Ethical Storytelling',
  'Product Partnerships',
  'Policy & Research',
  'Community Impact',
  'Platform Updates',
]

const coreAuthorityArticles = [
  'What Is Fundraise.ph? The Trust Layer for Filipino Fundraising',
  'What Is Fundraising.ph? The Verified Campaign Platform',
  'How Fundraise.ph Verifies Campaigns: A Complete Guide',
  'Campaign Standards: The Minimum Requirements for Every Filipino Campaign',
  'Verification Badges Explained: What Each Badge Means for Donors',
  'Compliance Library: A Free Resource for Responsible Fundraising',
  'The Verification Framework: From Basic Identity to Compliance-Sensitive Review',
  'Why Filipino Fundraising Needs a Nonprofit Trust Organization',
  'Fundraise.ph vs. Fundraising.ph: Understanding the Ecosystem',
  'How to Start a Verified Campaign on Fundraising.ph',
]

const complianceEducationArticles = [
  'Do You Need a DSWD Permit to Fundraise in the Philippines?',
  'Understanding LGU Requirements for Community Fundraising',
  'Data Privacy Act Compliance for Filipino Campaigns',
  'When Does Fundraising Require SEC Registration?',
  'Ethical Storytelling: How to Share Beneficiary Stories Responsibly',
  'Payment and Fund Flow: A Guide for Filipino Campaigners',
  'Post-Campaign Reporting: What Donors Deserve to Know',
  'Beneficiary Consent Protocols: Why No Campaign Goes Live Without It',
  'Solicitation vs. Donation: Understanding the Legal Distinction',
  'The Role of Independent Governance in Fundraising Trust',
]

export function BlogPage() {
  const { current: heroVar } = useRotatingContent(heroVariations['blog'])
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  const parseDate = (dateStr: string) => new Date(dateStr).getTime()

  const sortedPosts = [...blogPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date))

  const filteredPosts =
    activeCategory === 'All'
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory)

  const togglePost = (id: string) => {
    setExpandedPost(expandedPost === id ? null : id)
  }

  return (
    <div>
      <PageHeader
        title="Trustee Notes & Bayanihan Insights"
        headline={heroVar.headline}
        description={heroVar.subheadline}
        variation={heroVar}
      />

      {/* Blog Category Filters + Posts */}
      <Section>
        <SectionHeading
          title="All Posts"
          subtitle="Explore our latest thinking on trust, verification, compliance, and the future of Filipino fundraising."
          centered
        />

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {blogCategories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              className={`cursor-pointer px-3 py-1.5 text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-[#0A1F44] text-white hover:bg-[#0A1F44]/90 border-[#0A1F44]'
                  : 'hover:bg-[#C8A951]/10 border-[#0A1F44]/20'
              }`}
              onClick={() => { setActiveCategory(cat); setExpandedPost(null) }}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Blog Post Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              const isExpanded = expandedPost === post.id
              return (
                <Card
                  key={post.id}
                  className={`border transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#C8A951]/40 shadow-lg'
                      : 'border-[#0A1F44]/10 hover:shadow-md hover:border-[#C8A951]/30'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="outline" className="text-xs bg-[#0A1F44]/5 text-[#0A1F44] border-[#0A1F44]/20">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <span className="text-xs text-[#4A5568] flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-xs text-[#4A5568]/60">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-snug text-[#0A1F44]">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-[#4A5568] mb-4">
                      {post.excerpt}
                    </p>

                    {/* Expandable Full Content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[#0A1F44]/10">
                        {/* Author */}
                        <div className="flex items-center gap-3 mb-6 p-3 bg-light-gray rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                            <PenLine className="h-5 w-5 text-gold" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy">{post.author}</p>
                            <p className="text-xs text-[#4A5568]">{post.authorRole}</p>
                          </div>
                        </div>

                        {/* Article Body */}
                        <div className="space-y-4">
                          {post.content.map((paragraph, idx) => {
                            // Handle bold markers **text**
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              const text = paragraph.replace(/^\*\*(.+)\*\*$/, '$1')
                              return (
                                <h3 key={idx} className="text-base font-bold text-navy mt-6">
                                  {text}
                                </h3>
                              )
                            }
                            // Handle paragraphs with inline bold
                            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
                            return (
                              <p key={idx} className="text-[#4A5568] leading-relaxed text-sm">
                                {parts.map((part, partIdx) => {
                                  const boldMatch = part.match(/^\*\*(.+)\*\*$/)
                                  if (boldMatch) {
                                    return <strong key={partIdx} className="text-navy font-semibold">{boldMatch[1]}</strong>
                                  }
                                  return <span key={partIdx}>{part}</span>
                                })}
                              </p>
                            )
                          })}
                        </div>

                        {/* Post Footer */}
                        <div className="mt-8 pt-4 border-t border-[#0A1F44]/10 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-[#4A5568]/60">
                            <Tag className="h-3 w-3" />
                            {post.category}
                          </div>
                          <span className="text-xs text-[#4A5568]/60">{post.date}</span>
                        </div>
                      </div>
                    )}

                    {/* Read More / Collapse Button */}
                    <button
                      onClick={() => togglePost(post.id)}
                      className="flex items-center text-sm font-medium text-[#C8A951] hover:text-[#B8943F] transition-colors mt-2"
                    >
                      {isExpanded ? (
                        <>
                          Collapse article
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read full article
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <div className="text-center py-12">
              <Search className="h-10 w-10 mx-auto text-[#4A5568]/40 mb-3" />
              <p className="text-[#4A5568]">
                No posts found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* SEO Article Library */}
      <Section dark>
        <SectionHeading
          title="Authority & Education Resources"
          subtitle="In-depth articles designed to rank for key search queries and serve as definitive resources on Filipino fundraising trust and compliance."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Core Authority Articles */}
          <Card className="border-[#0A1F44]/10">
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#0A1F44]/10 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-[#0A1F44]" />
                </div>
                <CardTitle className="text-lg text-[#0A1F44]">Core Authority Articles</CardTitle>
              </div>
              <p className="text-sm text-[#4A5568]">
                Foundational content defining the Fundraise.ph ecosystem and its trust framework.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {coreAuthorityArticles.map((title, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#C8A951] mt-1.5 shrink-0" />
                      <span className="text-sm leading-snug text-[#4A5568]">
                        {title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Compliance Education Articles */}
          <Card className="border-[#0A1F44]/10">
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#C8A951]/15 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-[#C8A951]" />
                </div>
                <CardTitle className="text-lg text-[#0A1F44]">Compliance Education</CardTitle>
              </div>
              <p className="text-sm text-[#4A5568]">
                Practical guides on legal requirements, ethical practices, and compliance for Filipino campaigners.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {complianceEducationArticles.map((title, index) => (
                  <li key={index}>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-[#C8A951] mt-1.5 shrink-0" />
                      <span className="text-sm leading-snug text-[#4A5568]">
                        {title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <CTABlock
        headline="Explore the ecosystem"
        subheadline="Read our standards, explore our mission, or learn how we're building trust infrastructure for Filipino fundraising."
      />
    </div>
  )
}
