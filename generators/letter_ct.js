const { letter } = require('./lib');
const out = process.argv[2];
letter([
  'Community Transit — Senior IT Application Analyst (Job ID 2026-1955)',
  'I\'m applying for the Senior IT Application Analyst role. The core of the job, replacing a legacy ERP and HCM platform while keeping the rest of the application portfolio reliable, is work I\'ve already done once at scale, and I\'d like to do it again for an agency I ride past every week.',
  'At Ziply Fiber I led the New Data Stack program, which replaced legacy business systems with Microsoft Dynamics. I sat with stakeholders across 15 departments to work out what they actually needed, turned that into integration plans and architecture documentation, and led 20 engineers and contractors delivering the ETL and API connections to roughly 30 applications. Before that I led the migration of about 40 production applications on 200-plus VMs to Azure, then ran operations for that estate: change control, dev/test/prod discipline, system audits, vendor and license management, and the on-call rotation. At SystImmune I was the sole IT function for a biotech, which meant daily end-user support alongside Active Directory migration and ETL into the LIMS. Most recently at Fred Hutch I supported MOSAIQ, a regulated clinical application, translating clinician needs into validated configuration changes.',
  'Across all of it, the parts I\'m best at are the ones your posting leads with: being the technical lead others come to when a system misbehaves, mentoring analysts, running the vendor conversation, and leaving documentation behind that the next person can use. I\'ve supported 24/7 production systems for years and I\'m comfortable with after-hours work when transit systems need it.',
  'I live in Stanwood, hold a Washington driver\'s license, and the Everett office is an easy commute. I\'d welcome the chance to talk.',
  'Thank you for your consideration.',
], out + '/Kyle_Hammrich_CommunityTransit_Cover_Letter.docx');
