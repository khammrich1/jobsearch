const { letter } = require('./lib');
const out = process.argv[2];

const opener = 'I\'ve loved stars my whole life, and the idea that a company forty minutes from my house is building one in a box and plugging it into the grid is incredible to me. I\'ve spent twenty years in tech, most of it keeping other people\'s systems running, and what I want at this point is to put that work toward something that matters. Fusion matters. I applied for your Enterprise Applications Administrator role earlier this week; this one fits just as well, and I\'d be glad to be considered for either.';

Promise.all([
letter([
  'Helion Energy — System Security Administrator, Enterprise Applications',
  opener,
  'The role asks for someone who can integrate and automate systems through APIs and middleware, administer Windows, Linux, Microsoft 365, and Entra ID, and keep the enterprise application stack running. That has been the throughline of my career. At Ziply Fiber I led the New Data Stack program, replacing legacy systems with Microsoft Dynamics: I sat with business stakeholders across 15 teams to work out what they actually needed, turned that into integration plans, and led the engineers who built the ETL and API connections to roughly 30 applications. Before that I led the migration of about 40 production applications on 200-plus VMs to Azure, then ran operations for that estate: change control, dev/test/prod discipline, on-call, and the vendor and license consolidation that cut department costs 30%. At SystImmune I was the one-person enterprise IT function for a biotech, migrating Active Directory to Azure AD hybrid, building ETL pipelines into the LIMS, and standing up a self-service application portal. Most recently at Fred Hutch I supported MOSAIQ, a regulated clinical application, under formal change control.',
  'Integration is where I\'m most useful. I\'ve wired systems together through REST, SOAP, and GraphQL for years, I\'ve managed Jira and Confluence as the backbone of delivery, and I script in PowerShell and Python. I\'ll be candid about the gaps: I haven\'t administered NetSuite or Siemens PLM/NX. I\'ve picked up every enterprise platform I\'ve been handed, from LIMS to MOSAIQ to Incident IQ, and I\'d expect to do the same here.',
  'I live in Stanwood, so Everett on-site is an easy commute. I\'d like to help keep the systems behind Orion running so the people building it don\'t have to think about them.',
  'Thanks for reading.',
], out + '/Kyle_Hammrich_Helion_EA_SSA_Cover_Letter.docx'),

letter([
  'Helion Energy — System Security Administrator',
  opener,
  'This posting reads like a description of the work I\'ve done for the last ten years: Windows Server, Active Directory on-prem and Entra ID, Group Policy, Microsoft 365, PowerShell automation, patching and endpoint management, Linux, and virtualization. At SystImmune I was the entire IT function for a biotech: I migrated Active Directory to Windows Server 2016 with Azure AD hybrid, deployed device policies and a self-service install portal, hardened and patched the servers, and provided near-24/7 support for local and international staff. At Ziply Fiber I led the migration of about 40 production applications on 200-plus VMs from on-prem to Azure in eight months, owning networking, identity, storage, and cutover, then ran operations for that estate: monitoring with Elasticsearch and Kibana, on-call, incident response, and change control. Before that, at Nordstrom, I built PowerShell tooling for push-button software deployment and imaged and provisioned hardware for corporate staff.',
  'I script in PowerShell and Python by habit, I\'m comfortable in Linux as well as Windows, and I\'ve carried a pager long enough to take hardening, backups, and patching seriously. I hold a CCNA, Network+, and A+.',
  'I live in Stanwood, so Everett on-site is an easy commute. I\'d like to help keep the systems behind Orion running so the people building it don\'t have to think about them.',
  'Thanks for reading.',
], out + '/Kyle_Hammrich_Helion_SSA_Cover_Letter.docx'),
]);

letter([
  'Tulalip Data Services — Cybersecurity Analyst (2026-27)',
  'I\'m applying for the Cybersecurity Analyst position with Tulalip Data Services. I worked the TDS help desk from November 2024 to March 2025, so I know the environment, the departments, and the people, and I\'d like to come back in a role that uses more of what I\'ve done over the last ten years.',
  'Most of my career has been keeping production systems secure and running in regulated environments. At SystImmune I was the entire IT function for a biotech: I migrated Active Directory to Entra ID hybrid, built the device policies and access controls, and handled patching and endpoint security for local and international staff. At Ziply Fiber I ran operations for 40-plus production applications on 200-plus Azure VMs, including the systems that handled customer PII, and I was primary on-call: I triaged incidents, worked the logs in Splunk and Kibana, led the response bridges, documented timelines and corrective actions, and drove the fixes through. I used Splunk for investigation at SystImmune and Tempered Networks as well. At Fred Hutch I supported MOSAIQ, a HIPAA-regulated clinical application, under formal change control with documented validation for every change.',
  'The skills in your posting map to work I do routinely: Microsoft 365, Entra ID, and Azure security controls; SIEM and log analysis; vulnerability remediation tracking; PowerShell and Python scripting; and writing the documentation afterward. I previously held CompTIA Security+ and Network+ and will recertify within whatever window management sets. I hold a bachelor\'s in computer science from Western Governors University and a data analytics certificate from Washington State University.',
  'I live in Stanwood, I have a valid Washington license and insurance, and I\'m comfortable with the background investigation and on-site requirements. I\'d welcome the chance to talk.',
  'Thank you for your consideration.',
], out + '/Kyle_Hammrich_Tulalip_Cybersecurity_Cover_Letter.docx');
