import { db } from '@/lib/db'

async function seed() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const existingAdmin = await db.adminUser.findUnique({ where: { email: 'admin@fundraise.ph' } })
  if (!existingAdmin) {
    await db.adminUser.create({
      data: {
        email: 'admin@fundraise.ph',
        name: 'Admin',
        password: 'admin123',
        role: 'admin',
      },
    })
    console.log('✅ Admin user created (admin@fundraise.ph / admin123)')
  } else {
    console.log('⏭️  Admin user already exists')
  }

  // Seed blog posts
  const blogPosts = [
    {
      slug: 'why-verification-layered',
      title: 'Why Verification Must Be Layered, Not Binary',
      category: 'Verification',
      excerpt: 'A single "verified" badge tells donors nothing about what was actually checked. At Fundraise.ph, verification is progressive — from basic identity review to compliance-sensitive review — because trust is earned in layers, not granted in one step.',
      content: JSON.stringify([
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
      ]),
      author: 'Fundraise.ph Trust Team',
      authorRole: 'Verification & Compliance',
      readTime: '6 min read',
      published: true,
      featured: true,
    },
    {
      slug: 'filipino-fundraising-trust-layer',
      title: 'The Case for a Filipino Fundraising Trust Layer',
      category: 'Trust & Transparency',
      excerpt: "Without standardized verification, transparent fund tracking, and compliance guidance, Filipino fundraising remains vulnerable. Here's why a dedicated trust organization is essential — and why it must be independent from any single platform.",
      content: JSON.stringify([
        'The Philippines is one of the most generous nations on earth. The World Giving Index consistently ranks Filipinos among the most likely to help strangers, donate money, and volunteer time. This generosity is rooted in bayanihan — the Filipino spirit of communal unity and mutual aid.',
        'But generosity without trust is vulnerable. And in the digital age, the trust gap in Filipino fundraising is widening.',
        'Consider the landscape: crowdfunding platforms operate with minimal oversight. Campaign organizers often don\'t know their compliance obligations. Donors have no way to verify whether a campaign is legitimate, whether funds reach their intended beneficiaries, or whether their personal data is protected.',
        'International platforms don\'t fill this gap. They aren\'t designed for Philippine regulations, Filipino cultural practices, or the specific compliance requirements of LGUs, DSWD, SEC, and BIR.',
        'This is why Fundraise.ph exists as a dedicated trust organization — not as a fundraising platform, but as the trust layer that ensures fundraising is done right.',
        'Our role is specific and essential: we set verification standards, we provide compliance guidance, we advocate for donor protection, we publish transparency reports, and we maintain the technology that powers Fundraising.ph\'s trust infrastructure.',
        'And crucially, we are independent. We are not the platform that profits from campaigns. We are the organization that verifies them. This separation of trust from commerce is fundamental.',
        'Filipino generosity deserves infrastructure as strong as its spirit. That is the case for a dedicated trust layer. That is Fundraise.ph.',
      ]),
      author: 'Fundraise.ph Trust Team',
      authorRole: 'Trust & Governance',
      readTime: '7 min read',
      published: true,
      featured: true,
    },
    {
      slug: 'sergs-chocolates-marketplace-model',
      title: "How Serg's Chocolates Gave Birth to Fundraising.ph",
      category: 'Product Partnerships',
      excerpt: "Serg's Chocolates didn't just inspire Fundraising.ph — it conceptualized it. When a heritage chocolate brand's revival plan needed a platform that didn't exist, the gap became an opportunity to build something for every Filipino.",
      content: JSON.stringify([
        'Serg\'s Chocolates is part of Filipino pasalubong culture — a heritage brand that evokes childhood, homecoming, and the simple joy of giving. When the team behind Serg\'s began planning its revival, they made a deliberate decision: this comeback would not just be about selling chocolate. It would be about giving back to the community.',
        'The revival plan embedded CSR — Corporate Social Responsibility — into the business model itself. A portion of every sale would support verified campaigns. A bundle could fund a classroom. A gift box could help rebuild after a typhoon.',
        'But then the team hit a wall. They searched for a fundraising platform that could support product-based community giving — one with verification, transparency, and compliance built in. There was no platform that could verify campaigns, track funds transparently, acknowledge donors properly, and support marketplace fundraising.',
        'The question became: if the platform doesn\'t exist, do we wait — or do we build it?',
        'Serg\'s chose to build. Fundraising.ph was conceptualized as the platform that could serve not just Serg\'s needs, but the needs of every Filipino campaign.',
        'And to ensure that Fundraising.ph would always operate with integrity, Fundraise.ph was established as a separate nonprofit trust organization.',
        'Serg\'s Chocolates is now the Founding Member of Fundraise.ph — a living reminder that being Filipino means showing up for one another.',
      ]),
      author: 'Fundraise.ph Team',
      authorRole: 'Founding Story',
      readTime: '8 min read',
      published: true,
      featured: true,
    },
    {
      slug: 'ethical-storytelling',
      title: 'Ethical Storytelling: Protecting Beneficiary Dignity in Campaigns',
      category: 'Ethical Storytelling',
      excerpt: 'The stories behind campaigns are powerful — but they must be told with consent, care, and respect. At Fundraise.ph, we require every campaign to follow ethical storytelling guidelines that protect the dignity of every beneficiary.',
      content: JSON.stringify([
        'Behind every fundraising campaign is a person — someone experiencing hardship, seeking help, trusting that their story will be treated with care. How that story is told matters.',
        'At Fundraise.ph, ethical storytelling is not optional. It is a requirement embedded in our campaign standards.',
        'Our ethical storytelling guidelines are built on five principles:',
        '**1. Informed Consent:** No beneficiary\'s story, image, or personal information may be used without their informed consent.',
        '**2. Dignity First:** Campaigns may not exploit, sensationalize, or demean beneficiaries.',
        '**3. Accuracy and Context:** Stories must be truthful and provide appropriate context.',
        '**4. Beneficiary Rights:** Beneficiaries have the right to review how their story is presented and withdraw consent.',
        '**5. Cultural Sensitivity:** Campaigns must be sensitive to cultural practices, community norms, and power dynamics.',
        'Because when we protect the dignity of beneficiaries, we protect the integrity of Filipino giving itself.',
      ]),
      author: 'Fundraise.ph Trust Team',
      authorRole: 'Beneficiary Protection',
      readTime: '6 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'what-is-fundraise-ph',
      title: 'What Is Fundraise.ph? The Trust Layer for Filipino Fundraising',
      category: 'Trust & Transparency',
      excerpt: 'Fundraise.ph is not a fundraising platform. It is the nonprofit trust organization that builds the verification, transparency, and compliance infrastructure behind Fundraising.ph.',
      content: JSON.stringify([
        'There is a common misunderstanding that Fundraise.ph and Fundraising.ph are the same thing. They are not — and the distinction is critical.',
        '**Fundraise.ph** is a nonprofit trust organization. **Fundraising.ph** is the fundraising platform.',
        'Think of it this way: Fundraise.ph is the referee. Fundraising.ph is the game. The referee doesn\'t play — but without the referee, the game has no rules, no fairness, and no credibility.',
        'This separation is intentional and essential. If the same entity that profits from campaigns also verifies them, there is an inherent conflict of interest.',
        'Fundraise.ph was conceptualized by Serg\'s Chocolates as part of its revival plan. What started as a solution for one heritage brand became a mission to serve all Filipino communities.',
        'Fundraise.ph exists because Filipino generosity deserves infrastructure as strong as its spirit.',
      ]),
      author: 'Fundraise.ph Editorial',
      authorRole: 'Core Authority',
      readTime: '5 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'verification-badges-explained',
      title: 'Verification Badges Explained: What Each Badge Means for Donors',
      category: 'Verification',
      excerpt: 'Not all verified badges are created equal. At Fundraise.ph, each badge represents a specific level of verification — so donors know exactly what has been checked before they give.',
      content: JSON.stringify([
        'When you see a verification badge on Fundraising.ph, you should know exactly what it means.',
        '**Identity Verified (Blue Shield):** The campaign organizer\'s identity has been confirmed.',
        '**Documentation Reviewed (Gold Document):** Supporting documents have been examined.',
        '**Fund Flow Tracked (Green Arrow):** The campaign has committed to transparent fund routing.',
        '**Compliance Reviewed (Red Scale):** The campaign has undergone enhanced compliance review.',
        '**Fully Verified (Gold Shield with Check):** The campaign has passed all four verification levels.',
        'Badges are not permanent. They are subject to ongoing review and can be revoked. Trust is earned continuously — not once, but always.',
      ]),
      author: 'Fundraise.ph Trust Team',
      authorRole: 'Verification Standards',
      readTime: '5 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'compliance-library-guide',
      title: 'Compliance Library: A Free Resource for Responsible Fundraising',
      category: 'Compliance',
      excerpt: "Most Filipino campaign organizers don't know their legal obligations. Fundraise.ph's Compliance Library provides free, accessible guidance on the regulations that affect every fundraiser in the Philippines.",
      content: JSON.stringify([
        'One of the biggest barriers to responsible fundraising in the Philippines is not bad intentions — it\'s lack of information.',
        'That\'s why Fundraise.ph built the Compliance Library — a free, publicly accessible resource that provides clear, practical guidance on the regulatory landscape for Filipino fundraising.',
        'The Compliance Library covers: Permit Requirements, Tax Obligations, Data Privacy Compliance, Fund Disbursement Standards, Ethical Storytelling Guidelines, and Post-Campaign Reporting.',
        'The Compliance Library is free for everyone — not just campaigns on Fundraising.ph.',
      ]),
      author: 'Fundraise.ph Compliance Team',
      authorRole: 'Compliance Education',
      readTime: '6 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'filipino-diaspora-giving',
      title: 'Diaspora Giving: Connecting Overseas Filipinos to Trusted Campaigns at Home',
      category: 'Diaspora Giving',
      excerpt: "Over 10 million Filipinos live abroad, and they send billions home each year. But when it comes to digital fundraising, diaspora Filipinos face a unique trust gap — they want to help, but they can't verify from afar.",
      content: JSON.stringify([
        'The Filipino diaspora is one of the largest in the world — over 10 million Filipinos live and work across the globe.',
        'But when it comes to digital fundraising, overseas Filipinos face a unique challenge: the trust gap of distance.',
        'Fundraise.ph is building the infrastructure to close this gap. Our verification framework provides the transparency that distance demands.',
        'Our roadmap includes specific features for diaspora giving: Hometown Campaign Discovery, Multi-Currency Planning, Diaspora Chapter Partnerships, and Transparent Impact Reporting.',
        'Bayanihan doesn\'t stop at the border. Fundraise.ph is building the infrastructure to ensure it doesn\'t have to.',
      ]),
      author: 'Fundraise.ph Team',
      authorRole: 'Diaspora & Community',
      readTime: '6 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'governance-principles',
      title: 'Six Governance Principles That Protect Filipino Fundraising',
      category: 'Governance',
      excerpt: 'Governance at Fundraise.ph is not a checkbox — it is a living practice. Our six non-negotiable principles ensure that the organization remains accountable, transparent, and always aligned with its mission.',
      content: JSON.stringify([
        'Trust is the product Fundraise.ph offers. Governance is how we protect it.',
        'Our six governance principles: **1. Mission Lock** — The mission cannot be changed for commercial gain. **2. Transparency by Default** — All records are publicly accessible. **3. Compliance-Aware Operations** — Every decision evaluated against Philippine regulations. **4. Conflict-of-Interest Management** — All conflicts must be disclosed. **5. Human Oversight Over Automation** — AI supports but never replaces human judgment. **6. Beneficiary Dignity** — All interactions must preserve dignity, privacy, and agency.',
        'These principles are not negotiable. They are the foundation of public trust.',
      ]),
      author: 'Fundraise.ph Board',
      authorRole: 'Governance',
      readTime: '7 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'fundraising-standards',
      title: 'Campaign Standards: The Minimum Requirements for Every Filipino Campaign',
      category: 'Fundraising Standards',
      excerpt: 'Every campaign on Fundraising.ph must meet minimum standards before going live. These standards protect donors, beneficiaries, and the integrity of Filipino digital fundraising.',
      content: JSON.stringify([
        'A fundraising campaign is more than a webpage with a donation button. It is a commitment.',
        'At Fundraise.ph, we set the minimum requirements: Organizer Identity, Campaign Documentation, Beneficiary Information, Fund Usage Plan, Ethical Storytelling, Compliance Awareness, and Post-Campaign Reporting.',
        'These standards protect everyone. They protect donors from fraud. They protect beneficiaries from exploitation. They protect legitimate organizers. And they protect the entire Filipino fundraising ecosystem.',
      ]),
      author: 'Fundraise.ph Trust Team',
      authorRole: 'Campaign Standards',
      readTime: '6 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'technology-bayanihan',
      title: 'Technology for Bayanihan: Building Digital Infrastructure for Filipino Giving',
      category: 'Technology',
      excerpt: 'Bayanihan has sustained Filipino communities for centuries. Our mission is to build the digital infrastructure that allows it to thrive in the age of online fundraising — without losing the trust that makes it meaningful.',
      content: JSON.stringify([
        'Bayanihan has existed for centuries. Technology didn\'t create bayanihan. But technology can either support it or undermine it.',
        'Fundraise.ph builds technology that supports bayanihan. Our technology roadmap includes: Verification Engine, Fund Flow Tracking, Compliance Guidance System, Marketplace Fundraising Module, Diaspora Giving Gateway, and AI-Assisted Campaign Guidance.',
        'Technology should serve bayanihan — not replace it, not exploit it, not reduce it.',
      ]),
      author: 'Fundraise.ph Technology Team',
      authorRole: 'Technology & Engineering',
      readTime: '7 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'community-impact',
      title: 'Measuring What Matters: Beyond Money Raised to Trust Created',
      category: 'Community Impact',
      excerpt: 'The success of Filipino fundraising should not be measured only by pesos raised. It should be measured by trust created, beneficiaries served, donors acknowledged, and communities strengthened.',
      content: JSON.stringify([
        'Most fundraising platforms measure success by one metric: total funds raised. But this metric tells only part of the story.',
        'At Fundraise.ph, we measure what matters: Campaign Impact, Donor Impact, Beneficiary Impact, Marketplace Impact, and Trust Impact.',
        'Because impact without transparency is just marketing. And Filipino generosity deserves better than that.',
      ]),
      author: 'Fundraise.ph Impact Team',
      authorRole: 'Impact & Reporting',
      readTime: '5 min read',
      published: true,
      featured: false,
    },
    {
      slug: 'dswd-permit-guide',
      title: 'Do You Need a DSWD Permit to Fundraise in the Philippines?',
      category: 'Compliance',
      excerpt: 'One of the most common questions from Filipino campaign organizers: do I need a DSWD permit? The answer depends on several factors. Here is a practical guide.',
      content: JSON.stringify([
        'The DSWD requires a permit for certain types of public solicitation. But not all fundraising activities require one.',
        'When a DSWD Permit IS Required: Public solicitation campaigns, organizations operating as social welfare agencies, and campaigns involving vulnerable populations.',
        'When a DSWD Permit May NOT Be Required: Private fundraising and online peer-to-peer campaigns (regulatory gray area).',
        'Always err on the side of compliance. This article is for informational purposes only and does not constitute legal advice.',
      ]),
      author: 'Fundraise.ph Compliance Team',
      authorRole: 'Compliance Education',
      readTime: '5 min read',
      published: true,
      featured: false,
    },
  ]

  for (const post of blogPosts) {
    const existing = await db.blogPost.findUnique({ where: { slug: post.slug } })
    if (!existing) {
      await db.blogPost.create({ data: post })
      console.log(`✅ Blog post created: ${post.title}`)
    } else {
      console.log(`⏭️  Blog post already exists: ${post.title}`)
    }
  }

  // Seed site settings
  const defaultSettings = [
    { key: 'site_name', value: 'Fundraise.ph' },
    { key: 'site_description', value: 'The Trust Layer for Filipino Giving' },
    { key: 'contact_email', value: 'hello@fundraise.ph' },
    { key: 'fundraising_platform_url', value: 'https://dev.fundraising.ph' },
  ]

  for (const setting of defaultSettings) {
    const existing = await db.siteSetting.findUnique({ where: { key: setting.key } })
    if (!existing) {
      await db.siteSetting.create({ data: setting })
      console.log(`✅ Setting created: ${setting.key}`)
    }
  }

  console.log('🎉 Seeding complete!')
}

seed()
  .catch(console.error)
  .finally(() => db.$disconnect())
