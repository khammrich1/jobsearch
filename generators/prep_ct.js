const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, LevelFormat, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } = require('docx');
const out = process.argv[2];
const F = 'Calibri', S = 19;
const p = (text, o = {}) => new Paragraph({ children: [new TextRun({ text, font: F, size: S, ...o })], spacing: { after: 40 } });
const rich = (parts) => new Paragraph({ children: parts.map(([t, o]) => new TextRun({ text: t, font: F, size: S, ...(o || {}) })), spacing: { after: 40 } });
const b = (parts) => new Paragraph({ numbering: { reference: 'bul', level: 0 }, spacing: { after: 30 }, children: (Array.isArray(parts) ? parts : [[parts]]).map(([t, o]) => new TextRun({ text: t, font: F, size: S, ...(o || {}) })) });
const h = (text) => new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text, font: F, size: 22, bold: true })] });
const cell = (text, bold) => new TableCell({ width: { size: 50, type: WidthType.PERCENTAGE }, margins: { top: 30, bottom: 30, left: 80, right: 80 }, children: [new Paragraph({ children: [new TextRun({ text, font: F, size: 18, bold: !!bold })] })] });
const row = (a, c, bold) => new TableRow({ children: [cell(a, bold), cell(c, bold)] });

const doc = new Document({
  styles: { default: { document: { run: { font: F, size: S } } } },
  numbering: { config: [{ reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 300, hanging: 200 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 600, right: 820, bottom: 560, left: 820 } } },
    children: [
      new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: 'Community Transit — Senior IT Application Analyst (2026-1955) — Interview Prep', font: F, size: 26, bold: true })] }),
      p('Everett, hybrid. $101–127K hiring range, PERS pension. Division: Application Services (IT). CIO: Charles “Chas” Stearns (since 2023; ex-Kaiser Permanente, Booz Allen, WA Army National Guard). IT is adding a Manager IT, PM III, and IT Engineer in 2026.', { italics: true }),

      h('What they are actually doing (from the 2026–27 proposed budget)'),
      b([['Project 2501 — ERP and HCM System Replacement. ', { bold: true }], ['2026–27 goal: “launch initial implementation plan for a new enterprise financial and human capital management system.” No vendor named publicly. They are at selection/planning, not mid-build — your NDS requirements-to-cutover experience lands hardest here.']]),
      b('Still running PeopleSoft projects in parallel: 2312 HCM/Payroll upgrade, 2412 Financials upgrade, 2424 HCM process overhaul, 2603 Leave Management. Expect “keep the old system healthy while we build the new one.”'),
      b('Other IT initiatives: CAD/AVL replacement, Microsoft 365 rollout, virtual ORCA card, Zero Emissions fleet support.'),

      h('60-second pitch'),
      p('“I spent three years at Ziply Fiber doing the job you are hiring for, in a carve-out from Frontier where we had to replace an entire legacy stack. I led the New Data Stack program — Microsoft Dynamics replacing legacy systems — sitting with stakeholders across 15 teams to get requirements, turning that into integration plans and architecture docs, and leading 20 contractors and 4 FTE delivering ETL and API integrations for about 30 applications, Salesforce included. Before that I led the lift-and-shift of ~40 production applications on 200+ VMs to Azure in eight months, cutting over incrementally so customers saw little to no downtime. Since then I have supported a regulated clinical application at Fred Hutch under formal change control. I live in Stanwood, I want to stay in Snohomish County, and an ERP/HCM replacement at a public agency is exactly the kind of multi-year program I am good at.”'),

      h('Posting → your evidence'),
      new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [
        row('They ask for', 'You say', true),
        row('Replace PeopleSoft ERP/HCM: implementation → integration → transition → support', 'NDS at Ziply: Dynamics replacing legacy; integration plans, cutover, then ran production ops for it. Retired ~30 redundant apps rather than migrate them.'),
        row('Senior technical lead; mentor lower-level analysts; break work into tasks', 'Led 20 contractors + 4 FTE on NDS; managed 10 employees + 6 contractors on BSS; several engineers advanced to senior roles. Coached one-on-one, addressed performance issues early.'),
        row('Coordinate integrations/enhancements; navigate dependencies with departments, vendors, project teams', 'Cross-team dependencies across 15 teams; coordinated vendors; REST/SOAP/GraphQL/ETL integrations; vendor escalations at Fred Hutch (MOSAIQ) and SystImmune (LIMS).'),
        row('Reports, presentations, documentation; run meetings; track action items', 'Reported risks and trade-offs to senior leadership at Ziply; ran delivery in Jira/Confluence; architecture + configuration documentation is a habit.'),
        row('Reliable, secure, sustainable apps; system audits; change control', 'Standardized change control, versioning, automated testing, biweekly releases across dev/test/prod. HIPAA-regulated change control at Fred Hutch. PII systems compliant at Ziply.'),
        row('After-hours support for critical systems; 24x7 production (preferred)', 'Primary on-call for 40+ production apps; led outage bridges to restoration. Near-24/7 support at SystImmune.'),
        row('Data management; PeopleSoft experience “especially valuable”', 'ETL pipelines into LIMS/Tableau; 30-app data mapping on NDS; WSU Data Analytics certificate. PeopleSoft: have not administered it — say so, then pivot (below).'),
      ] }),

      h('Questions you will get — and the angle'),
      b([['PeopleSoft? ', { bold: true }], ['“No — Dynamics, Salesforce, LIMS, MOSAIQ, Incident IQ. I have learned every enterprise platform I have been handed, and this role is about replacing PeopleSoft, so the skill that matters is mapping the old system’s data and processes into the new one. That is what I did on NDS.”']]),
      b([['Why an analyst role after being a Sr. Manager? ', { bold: true }], ['“The part I liked most was the technical program work — requirements, integration, cutover. Management at Ziply was a carve-out emergency. I want to do this work in a stable place I can stay, close to home. The pension is part of why a public agency appeals.”']]),
      b([['Why did you leave Ziply / Fred Hutch? ', { bold: true }], ['Ziply: position eliminated in a reorg (Aug 2023). Fred Hutch: department eliminated (May 2026). Both true; say them plainly, no bitterness. Tulalip help desk: took a local role while searching; then Fred Hutch.']]),
      b([['Gap Aug 2023 – Nov 2024? ', { bold: true }], ['“Job searching after the reorg; took the Tulalip help desk role to stay working locally.” Owner IT started Jun 2026 — don’t claim it for 2023–24.']]),
      b([['Tell me about a difficult stakeholder / vendor. ', { bold: true }], ['Pick one NDS team whose requirements conflicted with another’s, or a vendor escalation at Fred Hutch. Use STAR; end with the documented outcome.']]),
      b([['An outage you owned. ', { bold: true }], ['Ziply bridge: triage, logs (Splunk/Kibana), workaround, restoration, post-incident fix, timeline documented. Mention you drove the permanent fix through engineering.']]),
      b([['Mentoring. ', { bold: true }], ['Name the pattern: pair on the first integration, review work, hand off ownership, check in. Engineers who advanced to senior.']]),
      b([['Public sector / change control / documentation. ', { bold: true }], ['Fred Hutch HIPAA change control; Tulalip tribal government; Ziply PII. You are comfortable with slow-and-documented.']]),
      b([['Education. ', { bold: true }], ['B.S. Computer Science, WGU 2012; Data Analytics Certificate, WSU 2024; A.A.S. ITT Tech 2010; A.A.S. Everett CC 2008. Certs: CCNA, Network+, A+, Incident IQ; Security+ lapsed. ITIL cert is “preferred” — say you have worked ITIL-style incident/change for years and would certify.']]),

      h('Ask them'),
      b('Where is Project 2501 right now — vendor selected, RFP out, or still requirements? Who owns it, IT or Finance, and what is the analyst’s seat on it?'),
      b('How do Application Services, the PMO, and the business own the ERP program together? Who makes the integration decisions?'),
      b('What breaks most often today in the PeopleSoft estate, and what does after-hours support actually look like?'),
      b('What does success look like at 6 and 18 months for this seat?'),

      h('Logistics'),
      b('Process: interview + possible knowledge/skills tests, background check, reference checks. References ready: Jason Minkenin, Thomas Knopf, Vaseem MV (Ziply). Valid WA license required (you have it). Hybrid telework “may be available” — ask, don’t assume.'),
      b('Everett office. Bring: corrected resume (WSU certificate line), a one-page NDS architecture sketch if they allow show-and-tell.'),
    ],
  }],
});
Packer.toBuffer(doc).then(buf => fs.writeFileSync(out, buf));
