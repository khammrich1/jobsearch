const { p, role, b, h, resume, header, edu, letter } = require('./lib');
const out = process.argv[2];

resume([
  ...header('Engineering Manager — Cloud Platforms, Distributed Systems, Developer-Facing Products'),
  p('Engineering manager with 10+ years in software engineering and three years of technical and people leadership at Ziply Fiber during its carve-out from Frontier. Led the migration of ~40 production applications on 200+ VMs to Azure, then managed up to 20 engineers and contractors across the teams that owned them (C#/.NET, Kafka, Docker/Kubernetes). Accountable for availability, on-call, and incident response; hired and coached engineers who advanced into senior roles; ran delivery on release cadence, change control, and cost.'),

  h('Engineering Leadership Experience'),
  p('Ziply Fiber  |  Everett, WA  |  May 2020 – Aug 2023', { bold: true }),
  role('Senior Manager, NDS Integration', 'Aug 2022 – Aug 2023'),
  b('Led 20+ engineers and contractors across two teams delivering ETL and API integrations (REST, GraphQL) for roughly 30 applications, including Salesforce and Microsoft Dynamics' + ' (New Data Stack program).'),
  b('Set priorities with Product and business stakeholders, re-planned as priorities shifted, and coordinated dependencies across 15 teams. Reported progress, risks, and trade-offs to senior leadership.'),
  b('Ran hiring for the integration organization: defined the bar, conducted interviews, and planned contractor capacity.'),
  role('Manager, Business Support Systems', 'Mar 2022 – Aug 2022'),
  b('Owned production operations for 40+ business support applications on 200+ Azure VMs, built on C#/.NET with Kafka messaging and containerized services on Docker/Kubernetes. Completed the Azure migration and stabilized the estate: availability, capacity, cost, incident response, and the on-call rotation.'),
  b('Managed 10 employees and 6 contractors. Coached and mentored engineers one-on-one, addressed performance issues early, and developed several engineers who advanced into senior roles.'),
  b('Standardized release practices (automated testing, versioning, change control, biweekly deployments) to balance feature delivery with reliability and technical investment. Reduced department costs 30% through application consolidation, licensing, and hardware optimization.'),
  role('Principal Software Engineer', 'May 2021 – Mar 2022'),
  b('Led the migration of ~40 business support applications running on 200+ VMs from on-prem to Azure over eight months: owned networking, identity, storage, and cutover planning end to end. Moved and cut over applications incrementally with little to no customer-facing downtime, and retired ~30 redundant applications rather than migrate them.'),
  b('Technical lead for production support: primary on-call, led outage bridges through restoration, drove post-incident fixes, and implemented observability with Elasticsearch/Kibana across Windows and Linux services.'),
  role('Application Engineer II', 'May 2020 – May 2021'),
  b('Built a Python/Flask dashboard that monitored transaction flow and alerted the support team to failures; automated operational data collection and routine tasks with REST and SOAP APIs.'),

  h('Additional Experience'),
  role('Owner IT, Founder / IT Consultant (small-business cloud, identity, networking)', 'Jun 2026 – Present'),
  role('Fred Hutchinson Cancer Center, Application Analyst II', 'Mar 2025 – May 2026'),
  b('Supported MOSAIQ in Radiation Oncology; partnered with clinicians to define requirements and validate application changes in a regulated clinical environment.'),
  role('SystImmune, IT Solutions Engineer (Azure AD hybrid migration, LIMS ETL pipelines)', 'May 2019 – May 2020'),
  role('Tempered Networks / Allyis, Network Engineer / Support Engineer', '2018 – 2019'),

  h('Technical Skills'),
  p('Azure, AWS, Linux, Docker, Kubernetes, Kafka, C#, .NET, ASP.NET Web API, Python, REST, GraphQL, SOAP, ETL, Elasticsearch/Kibana, CI/CD, Active Directory/Entra ID, networking, Jira, Confluence'),


  ...edu(),
], out + '/Kyle_Hammrich_Runpod_EM_Resume.docx').then(() => letter([
  'Runpod — Engineering Manager, Product & Platform Delivery',
  'I\'m applying for the Engineering Manager role on product and platform delivery. The short version of why: I\'ve spent three years leading engineers who owned a large production platform end to end, I\'ve personally carried the pager for it, and I\'ve run a cloud migration at the scale where networking, identity, and cutover sequencing are the whole job. I\'d like to do that for a platform that more than a million developers build on.',
  'At Ziply Fiber I led the migration of about 40 business support applications, running on 200-plus VMs, from on-prem to Azure over eight months. I owned the networking, identity, storage, and cutover plan myself, moved applications incrementally so customers saw little to no downtime, and retired about 30 redundant systems along the way. I then managed the teams that ran that estate: C#/.NET services, Kafka messaging, Docker and Kubernetes, on-call, incident response, and biweekly releases with change control. In my last year there I led 20+ engineers and contractors delivering ETL and API integrations across 30 applications while coordinating dependencies across 15 teams and reporting trade-offs to senior leadership.',
  'The parts of your posting that I can speak to directly: owning roadmap delivery for a product area, running execution with real metrics, building and coaching a team (several of my engineers advanced into senior roles), and keeping on-call healthy for customer-facing systems. I\'ll be honest about the gap too: I\'ve built and operated systems on cloud platforms rather than built the platform itself, and my stack has been .NET and Python more than Go or TypeScript. I\'m comfortable reviewing and contributing in a new language, and the migration gave me a working understanding of the orchestration, networking, and storage layers your teams build.',
  'I work with AI tooling daily and have built my own LLM-driven automation pipelines, so I understand what your customers are trying to do and where the friction is. I\'d welcome a conversation about where an experienced platform-operations leader could help Runpod ship faster without breaking things.',
  'Thanks for reading.',
], out + '/Kyle_Hammrich_Runpod_EM_Cover_Letter.docx'));
