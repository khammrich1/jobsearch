const { p, role, b, h, resume, header, edu, letter } = require('./lib');
const out = process.argv[2];

resume([
  ...header('Engineering Manager — Platform Engineering, Developer Enablement, Continuous Delivery', 'Stanwood, WA'),
  p('Engineering manager with 20 years in technology and three years of technical and people leadership at Ziply Fiber during its carve-out from Frontier. Managed up to 20 engineers and contractors who owned ~40 production applications on 200+ Azure VMs (C#/.NET, Kafka, Docker/Kubernetes). Standardized the delivery pipeline across dev/test/prod — automated testing, versioning, change control, biweekly releases — and led the eight-month migration of that estate to Azure. Hired and coached engineers who advanced into senior roles; accountable for availability, on-call, cost, and the roadmap.'),

  h('Engineering Leadership Experience'),
  p('Ziply Fiber  |  Everett, WA  |  May 2020 – Aug 2023', { bold: true }),
  role('Senior Manager, NDS Integration', 'Aug 2022 – Aug 2023'),
  b('Led 20+ engineers and contractors across two teams delivering shared ETL and API integration services (REST, GraphQL) consumed by ~30 applications, including Salesforce and Microsoft Dynamics (New Data Stack program).'),
  b('Built and owned the roadmap with Product and 15 stakeholder teams; re-planned as priorities shifted; reported progress, risks, and trade-offs to senior leadership. Delivered on time and within budget.'),
  b('Ran hiring for the integration organization: defined the bar, interviewed, and planned contractor capacity.'),
  role('Manager, Business Support Systems', 'Mar 2022 – Aug 2022'),
  b('Managed 10 employees and 6 contractors owning 40+ business support applications on 200+ Azure VMs (C#/.NET, Kafka, Docker/Kubernetes). Accountable for availability, incident response, on-call, and cost.'),
  b('Standardized engineering practices across teams: automated testing gates, semantic versioning, change control, and a biweekly deployment cadence across dev/test/prod.'),
  b('Coached engineers one-on-one, addressed performance issues early, and developed several engineers into senior roles. Reduced department costs 30% through application consolidation, licensing, and hardware optimization.'),
  role('Principal Software Engineer', 'May 2021 – Mar 2022'),
  b('Led the lift-and-shift of ~40 applications on 200+ VMs from on-prem to Azure in eight months: owned networking, identity, storage, and incremental cutover with little to no customer-facing downtime; retired ~30 redundant applications rather than migrate them.'),
  b('Technical lead for production: primary on-call, led outage bridges to restoration, drove post-incident fixes, and built observability with Elasticsearch/Kibana across Windows and Linux services.'),
  role('Application Engineer II', 'May 2020 – May 2021'),
  b('Built internal tooling for the support organization: a Python/Flask dashboard monitoring transaction flow with failure alerting, and automation of operational data collection via REST and SOAP APIs.'),

  h('Additional Experience'),
  role('Owner IT, Founder / IT Consultant (small-business cloud, identity, networking)', 'Jun 2026 – Present'),
  role('Fred Hutchinson Cancer Center, Application Analyst II (MOSAIQ; HIPAA change control)', 'Mar 2025 – May 2026'),
  role('SystImmune, IT Systems Engineer (Azure AD hybrid migration, LIMS ETL pipelines)', 'May 2019 – May 2020'),
  role('Allyis, Support Engineer', 'Mar 2018 – Aug 2019'),
  role('Tempered Networks, Support Engineer', 'Oct 2017 – Mar 2018'),
  role('Nordstrom, Corporate Technology Specialist (PowerShell deployment tooling)', 'Sep 2014 – Oct 2017'),

  h('Technical Skills'),
  p('Azure, Linux, Windows, Docker, Kubernetes, Kafka, C#, .NET, Python, REST, GraphQL, SOAP, ETL, CI/CD, Git, Elasticsearch/Kibana, Splunk, Active Directory/Entra ID, networking, Agile (Scrum/Kanban), Jira, Confluence, AI-assisted development tooling (daily use)'),

  ...edu(),
], out + '/Kyle_Hammrich_Costco_Resume.docx').then(() => letter([
  'Costco Wholesale — Manager, Enterprise Platform Engineering and Developer Experience (Req. 10972)',
  'I\'m applying for the Manager, Enterprise Platform Engineering and Developer Experience role in Issaquah. The job as you describe it — leading the teams that build the shared services and tooling other engineers depend on, and making delivery faster and safer across the enterprise — is the work I did at Ziply Fiber, and I\'d like to do it at the scale Costco runs.',
  'At Ziply, during the carve-out from Frontier, I managed up to 20 engineers and contractors who owned about 40 production applications on 200-plus Azure VMs: C#/.NET services, Kafka messaging, Docker and Kubernetes. When I took the team over, releases were ad hoc. I standardized the pipeline — automated test gates, versioning, change control, a biweekly deployment cadence across dev, test, and production — so the teams could ship on a predictable rhythm without breaking production. Before that I led the eight-month migration of that estate to Azure, owning networking, identity, storage, and the cutover plan, and retired about 30 redundant systems along the way. In my last year I led the integration organization building shared ETL and API services consumed by 30 applications, owning the roadmap with 15 stakeholder teams and reporting trade-offs to senior leadership. I ran hiring, and several of my engineers advanced into senior roles.',
  'I\'ll be direct about the gap. My platform work was standardizing and operating the delivery pipeline for application teams, not building an internal developer platform as a product in its own right, and I measured it with release counts and incident rates rather than a formal DORA dashboard. I know what those metrics are and why they matter; I haven\'t yet run a team whose charter was the metrics themselves. I use AI-assisted development tooling every day and have built my own automation pipelines around it, so I have a working view of where it helps engineers and where it doesn\'t.',
  'I live in Stanwood, hold a B.S. in Computer Science, and am available for the on-site schedule and the flexibility the role calls for. I\'d welcome a conversation.',
  'Thank you for your consideration.',
], out + '/Kyle_Hammrich_Costco_Cover_Letter.docx'));
