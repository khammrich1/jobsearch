const { p, role, b, h, resume, header, edu, letter } = require('./lib');
const out = process.argv[2];

const variants = {
  premera: {
    file: 'Kyle_Hammrich_Premera_Resume.docx',
    headline: 'Systems Analyst — Business Systems Analysis, Requirements, Data Mapping, Integration, Agile Delivery',
    summary: 'Systems analyst and enterprise-applications professional with 10+ years translating business needs into working systems in telecom, healthcare, biotech, and tribal government. Led Ziply Fiber\'s New Data Stack program (Microsoft Dynamics replacing legacy systems): requirements elicitation and decomposition across 15 teams, integration and data-mapping specifications for ~30 applications, and 20+ engineers delivering in an Agile model. Daily SQL for analysis, validation, and root cause; UAT coordination; vendor and dependency management. Most recently supported MOSAIQ, a HIPAA-regulated clinical application, at Fred Hutch.',
    skills: 'Analysis: requirements elicitation and decomposition, epics/stories/acceptance criteria, process and workflow analysis, data mapping and transformation rules, UAT and test planning, root-cause analysis  |  Data: SQL (SQL Server), ETL, Tableau, data validation, reporting  |  Integration: REST, SOAP, GraphQL, middleware, Kafka, Azure  |  Delivery: Agile/Scrum, Jira, Confluence, Azure DevOps, change control, SDLC docs  |  Domains: healthcare (HIPAA), telecom BSS, biotech LIMS  |  Scripting: Python, PowerShell, C#/.NET',
  },
  commtrans: {
    file: 'Kyle_Hammrich_CommunityTransit_Resume.docx',
    headline: 'Senior IT Application Analyst — Enterprise Applications, ERP Replacement, Integration',
    summary: 'Enterprise applications professional with 10+ years administering, integrating, and supporting business-critical applications in telecom, healthcare, biotech, and tribal government. Led Ziply Fiber\'s New Data Stack program replacing legacy systems with Microsoft Dynamics: defined requirements across 15 teams and led 20+ engineers delivering ETL and API integrations to ~30 applications. Led a 40-application, 200+ VM Azure migration, then owned production operations, change control, and on-call. End-user support in every role, from Nordstrom corporate IT to MOSAIQ clinical support at Fred Hutch.',
    skills: 'Enterprise apps: Microsoft Dynamics, Salesforce, MOSAIQ, Incident IQ, LIMS, Tableau, Jira, Confluence  |  Integration: REST, SOAP, GraphQL, ETL, webhooks, middleware, Kafka  |  Platforms: Windows Server, Linux, Azure, AWS, Active Directory / Entra ID, Microsoft 365, SQL  |  Scripting: PowerShell, Python, C#/.NET  |  Practices: requirements gathering, system audits, architecture documentation, change control, dev/test/prod, ITIL-style incident management, vendor management, project leadership, mentoring  |  Certs: CCNA, Network+, A+',
  },
  tulalip_sec: {
    file: 'Kyle_Hammrich_Tulalip_Cybersecurity_Resume.docx',
    headline: 'Cybersecurity Analyst — Identity & Access, M365 / Entra ID Security, Vulnerability Remediation',
    summary: 'IT systems professional with 10+ years securing and operating production systems in regulated environments (healthcare, telecom, biotech, tribal government). Owned identity and access for a biotech (AD to Entra ID hybrid, RBAC, device policy); kept PII-handling systems secure for 40+ applications on 200+ Azure VMs at Ziply Fiber; supported a HIPAA-regulated clinical application at Fred Hutch; worked the Tulalip Data Services help desk. Incident response, patching, vulnerability remediation, Splunk and Kibana log analysis, PowerShell/Python. Previously held Security+ and Network+ (recertifying).',
    skills: 'Identity & access: Active Directory, Entra ID, Microsoft 365, SSO, RBAC, access reviews, Group Policy, device policy  |  Security ops: incident response, patch/vulnerability remediation, SIEM and log analysis (Splunk, Elasticsearch/Kibana), endpoint protection, firewall/VPN, audit documentation  |  Compliance: HIPAA, PII protection, change control  |  Platforms: Windows Server, Linux, Azure, AWS, networking  |  Scripting: PowerShell, Python, Bash, SQL  |  Certs: Security+, Network+ (lapsed, recertifying), CCNA, A+',
  },
  helion_ea: {
    file: 'Kyle_Hammrich_Helion_EA_SSA_Resume.docx',
    headline: 'Systems Administration & Enterprise Applications — Integration, Identity, Automation',
    summary: 'Systems and enterprise-applications professional with 10+ years across systems administration, API integration, business analysis, and IT operations in telecom, healthcare, biotech, and retail. Led the migration of ~40 production applications (200+ VMs) to Azure and then managed their operations at Ziply Fiber: change control, dev/test/prod discipline, on-call incident response, and vendor/licensing optimization that cut department costs 30%. Hands-on with REST/SOAP/GraphQL integrations and middleware, Windows and Linux, Active Directory/Entra ID, Microsoft 365, and PowerShell and Python automation.',
    skills: 'Enterprise apps: Jira, Confluence, Bitbucket, Salesforce, Microsoft Dynamics, MOSAIQ, Incident IQ, LIMS, Tableau  |  Integration: REST, SOAP, GraphQL, ETL, webhooks, middleware, Kafka  |  Identity & platform: Active Directory, Entra ID, Microsoft 365, SSO, RBAC, Windows Server, Linux, Azure, AWS  |  Scripting: PowerShell, Python, C#/.NET, SQL  |  Practices: change control, dev/test/prod, release management, incident response, vendor/license management',
  },
  helion_ssa: {
    file: 'Kyle_Hammrich_Helion_SSA_Resume.docx',
    headline: 'Systems Administrator — Windows Server, Active Directory / Entra ID, Microsoft 365, PowerShell, Linux',
    summary: 'Systems administrator with 10+ years across Windows Server, Active Directory and Entra ID, Microsoft 365, Linux, virtualization, and infrastructure automation in telecom, healthcare, biotech, and retail. Migrated Active Directory to Windows Server 2016 with Azure AD hybrid at SystImmune; led the migration of ~40 production applications (200+ VMs) to Azure at Ziply Fiber and then owned patching, monitoring, on-call, and incident response for that estate. PowerShell and Python automation for provisioning and deployment; monitoring with Elasticsearch/Kibana; endpoint management with Group Policy and a self-service install portal.',
    skills: 'Platforms: Windows Server 2012–2022, Active Directory, Group Policy, Entra ID, Microsoft 365, Linux (Ubuntu/RHEL), Hyper-V/VMware, Azure, AWS  |  Automation: PowerShell, Python, Bash, REST APIs  |  Monitoring & endpoint: Elasticsearch/Kibana, patching, imaging, backups/DR  |  Security: server hardening, RBAC, SSO  |  Support: Jira, Confluence, Incident IQ  |  Certs: CCNA, Network+, A+',
  },
  gravitics: {
    file: 'Kyle_Hammrich_Gravitics_Resume.docx',
    headline: 'Enterprise Applications & IT Systems — Administration, Integration, Cloud Operations',
    summary: 'Systems and enterprise-applications professional with 10+ years across application administration, API integration, cloud migration, and IT operations in telecom, healthcare, biotech, and retail. Led the migration of ~40 production applications (200+ VMs) to Azure and then managed their operations at Ziply Fiber: change control, dev/test/prod discipline, on-call incident response, and vendor/licensing optimization that cut department costs 30%. Hands-on with REST/SOAP/GraphQL integrations, Windows and Linux administration, Active Directory/Entra ID, and PowerShell and Python automation.',
    skills: 'Enterprise apps: Jira, Confluence, Salesforce, Microsoft Dynamics, MOSAIQ, Incident IQ, LIMS, Tableau  |  Integration: REST, SOAP, GraphQL, ETL, webhooks, Kafka  |  Identity & platform: Active Directory, Azure AD/Entra ID, SSO, RBAC, Windows Server, Linux, Azure, AWS, Docker/Kubernetes  |  Scripting: PowerShell, Python, C#/.NET, SQL  |  Practices: change control, dev/test/prod environments, release management, incident response, vendor and license management',
  },
  l2: {
    file: 'Kyle_Hammrich_Runpod_L2_Resume.docx',
    headline: 'Technical Support Engineer — Production Support, Linux/Docker, APIs, Customer-Facing Troubleshooting',
    summary: 'Technical support and systems engineer with 10+ years resolving escalated customer and production issues across telecom, healthcare, biotech, storage, and retail. Primary on-call for 40+ production applications on 200+ VMs at Ziply Fiber: led outage bridges to restoration, analyzed logs and code, and drove post-incident fixes with engineering. Comfortable in Linux and Windows, Docker/Kubernetes, SQL, REST/GraphQL APIs, and Python/PowerShell scripting. Daily user of LLM tooling (Claude Code, API-driven pipelines) and familiar with model inference and deployment workflows. Supports customers by email, chat, phone, and video, and writes the documentation afterward.',
    skills: 'Troubleshooting: Linux, Windows Server, Docker, Kubernetes, networking, log analysis (Elasticsearch/Kibana), SQL  |  APIs & scripting: REST, GraphQL, SOAP, Python, PowerShell, Bash, C#  |  Cloud & identity: Azure, AWS, Active Directory/Entra ID  |  AI/ML: LLM APIs, Claude Code, local model inference, GPU workstation setup  |  Support tooling: Jira, Confluence, Incident IQ, ticket/SLA workflows, documentation and runbooks',
  },
  znetworks: {
    file: 'Kyle_Hammrich_ZNetworks_Resume.docx',
    headline: 'IT Technician / Systems Engineer — Windows Server, Azure, Networking, Helpdesk',
    summary: 'Hands-on IT professional with 15+ years across helpdesk, systems administration, networking, and application support, from Nordstrom corporate IT to running production operations for 40+ applications on 200+ VMs at Ziply Fiber. Led a 200-VM, 40-application migration to Azure; migrated Active Directory to Azure AD hybrid at SystImmune; administered Windows Server and Linux; and supported Windows and Mac users on-site and remote. Currently run Owner IT, a small-business IT support practice in Snohomish County. Strong customer-service background, CCNA, Network+, A+.',
    skills: 'Platforms: Windows Server, Windows 10/11, macOS, Linux, Azure, AWS, Microsoft 365, Active Directory / Entra ID, Intune  |  Networking: TCP/IP, DNS/DHCP, VLANs, firewalls, VPN, Wi-Fi (CCNA, Network+)  |  Support: ticketing (Incident IQ, Jira), remote support, imaging and provisioning, VoIP, documentation  |  Scripting: PowerShell, Python, SQL  |  Certs: CCNA (2012), CompTIA Network+, A+, Incident IQ Certified',
  },
};

const v = variants[process.argv[3]];
const SP = process.argv[3] === 'tulalip_sec';
const PR = process.argv[3] === 'premera';
const sp = (plain, withSplunk) => SP ? withSplunk : plain;
const loc = 'Stanwood, WA';

const children = [
  ...header(v.headline, loc),
  p(v.summary),
  h('Experience'),
  role('Owner IT, Founder / IT Consultant', 'Jun 2026 – Present  |  Stanwood, WA'),
  b('Managed IT for small businesses: Microsoft 365, identity, networking, backups, device setup, and helpdesk.'),
  role('Fred Hutchinson Cancer Center, Application Analyst II', 'Mar 2025 – May 2026  |  Seattle, WA'),
  b('Administered MOSAIQ, the Radiation Oncology clinical application, under formal change control; partnered with clinicians to translate workflow needs into validated configuration changes.'),
  role('Tulalip Tribes, Help Desk Technician', 'Nov 2024 – Mar 2025  |  Tulalip, WA'),
  b('Administered Incident IQ ticketing workflows, coordinated escalations, and provisioned devices.'),
  p('Ziply Fiber (Everett, WA)  |  May 2020 – Aug 2023', { bold: true }),
  role('Sr. Manager, NDS Integration', 'Aug 2022 – Aug 2023'),
  b(PR ? 'Led the New Data Stack program replacing legacy systems with Microsoft Dynamics: elicited and decomposed requirements with business stakeholders across 15 teams; produced integration plans, data-mapping and transformation specifications, and architecture documentation; led 20+ engineers delivering ETL and API integrations (REST, GraphQL) to ~30 applications, including Salesforce, in an Agile model; mentored analysts.'
       : 'Led the New Data Stack program replacing legacy systems with Microsoft Dynamics: defined requirements with stakeholders across 15 teams and led 20+ engineers and contractors delivering ETL and API integrations (REST, GraphQL) to ~30 applications, including Salesforce.'),
  role('Manager, Business Support Systems', 'Mar 2022 – Aug 2022'),
  b(PR ? 'Owned production operations for 40+ business support applications on 200+ Azure VMs. Standardized change control, versioning, automated testing, and biweekly releases across dev/test/prod; used SQL daily for data validation, troubleshooting, and operational reporting. Cut department costs 30% by consolidating applications, licenses, and hardware.'
       : 'Owned production operations for 40+ business support applications on 200+ Azure VMs: availability, on-call, and incident response. Standardized change control, versioning, automated testing, and biweekly releases across dev/test/prod. Cut department costs 30% by consolidating applications, licenses, and hardware.'),
  role('Principal Software Engineer / Application Engineer II', 'May 2020 – Mar 2022'),
  b('Led the migration of ~40 business support applications on 200+ VMs from on-prem to Azure over eight months (lift-and-shift): owned networking, identity, storage, and cutover planning; moved applications incrementally with little to no downtime and retired ~30 redundant applications.'),
  b(PR ? 'Primary on-call for production; led outage bridges, root-cause analysis, and post-incident fixes; built a Python/Flask monitoring dashboard.' : sp('Primary on-call for production; led outage bridges to restoration and drove post-incident fixes. Administered Windows and Linux servers, implemented monitoring with Elasticsearch/Kibana, and built a Python/Flask monitoring dashboard.',
       'Primary on-call for production; led outage bridges, documented incident timelines and corrective actions, and drove fixes. Used Splunk and Elasticsearch/Kibana for log analysis, alerting, and investigation across Windows and Linux.')),
  role('SystImmune, IT Solutions Engineer', 'May 2019 – May 2020  |  Redmond, WA'),
  b(PR ? 'Sole IT function for a biotech: built ETL pipelines into the LIMS and Tableau; migrated Active Directory to Azure AD hybrid; deployed device policies and a self-service install portal.' : sp('Sole enterprise IT function for a biotech: migrated Active Directory to Windows Server 2016 with Azure AD hybrid; deployed device policies and a self-service install portal; built ETL pipelines into the LIMS and Tableau; near-24/7 support for local and international staff.',
       'Sole IT function for a biotech: migrated Active Directory to Azure AD hybrid; owned access control, device policy, patching, and endpoint security; monitored and investigated events in Splunk.')),
  role('Allyis, Support Engineer', 'Mar 2018 – Aug 2019  |  Kirkland, WA'),
  b(sp('Resolved customer issues on Avere storage systems; integrated UNIX CLI tasks into the web portal; trained hires.',
       'Investigated and resolved customer issues on Avere storage systems using Splunk log analysis; integrated UNIX CLI tasks into the web portal; trained new hires; documented product defects.')),
  role('Tempered Networks, Support Engineer (support docs, network monitoring)', 'Oct 2017 – Mar 2018  |  Seattle, WA'),
  role('Nordstrom, Corporate Technology Specialist (PowerShell tooling, imaging, VoIP)', 'Sep 2014 – Oct 2017'),
  h('Technical Skills'),
  p(v.skills),
  ...edu(),
];

resume(children, out + '/' + v.file);
