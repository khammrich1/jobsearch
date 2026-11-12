const { letter } = require('./lib');
const out = process.argv[2];

Promise.all([
letter([
  'Gravitics — Open Application (Enterprise Applications / IT Systems)',
  'I\'ll start with the honest version: I\'ve loved stars my whole life, and the fact that a company twenty minutes from my house is building the modules people will live and work in off-planet is the kind of thing I\'d have found hard to believe as a kid. I\'ve spent twenty years in tech, most of it keeping other people\'s systems running, and what I want at this point is to put that work toward something that matters. Building space infrastructure qualifies. You said to tell you why you should hear from someone who doesn\'t fit a posted role, so here it is.',
  'What I\'d do for you: own the enterprise systems a fast-growing hardware company runs on so the engineers building modules don\'t have to think about them. That has been the throughline of my career. At Ziply Fiber I led the migration of about 40 production business applications, 200-plus VMs, from on-prem to Azure in eight months with little to no downtime, then ran operations for that estate: change control, dev/test/prod discipline, on-call incident response, and the vendor and license consolidation that cut department costs 30%. I then led the New Data Stack program, sitting with stakeholders across 15 teams to replace legacy systems with Microsoft Dynamics and leading 20+ engineers delivering the ETL and API integrations to roughly 30 applications. Earlier, at SystImmune, I was the one-person IT function for a biotech, migrating Active Directory to Azure AD hybrid and building ETL pipelines into the LIMS. Most recently at Fred Hutch I supported MOSAIQ, a regulated clinical application, under formal change control.',
  'I\'m comfortable in Windows and Linux, I script in PowerShell and Python, I\'ve wired systems together through REST, SOAP, and GraphQL for years, and I\'ve carried a pager long enough to take incident response seriously. I\'ve also managed people and can step into a lead role if that\'s where the need is, but I\'m just as happy being the hands-on person who makes the back office, identity, and integration layer work.',
  'I live in Stanwood, so a hybrid on-site schedule in Marysville is easy. If there\'s a place for someone like me at Gravitics, I\'d like to talk about it.',
  'Thanks for reading.',
], out + '/Kyle_Hammrich_Gravitics_Cover_Letter.docx'),

letter([
  'Runpod — Technical Support Engineer (L2)',
  'I\'m applying for the L2 Technical Support Engineer role. I want to address the obvious question first: my resume shows I\'ve managed engineering teams, and I\'m applying for a hands-on support role. That\'s deliberate. The part of my career I\'ve liked most is being the person on the bridge who figures out why production is broken and gets the customer back up, and I want to do that for an AI platform rather than manage people who do.',
  'At Ziply Fiber I was primary on-call for 40+ production applications on 200+ VMs: I led outage bridges to restoration, read the logs and the code, found workarounds, and drove the real fix through engineering afterward. I\'ve supported customers directly at Tempered Networks (storage systems, escalated tickets, defect write-ups for engineering), at Nordstrom corporate IT, at a biotech where I was the whole IT function with near-24/7 coverage, and most recently at Fred Hutch supporting clinicians on a regulated clinical application. I\'m comfortable in Linux and Windows, Docker and Kubernetes, SQL, REST and GraphQL APIs, and I script in Python, PowerShell, and Bash.',
  'On the AI side: I use LLM tooling every day, I\'ve built my own API-driven automation pipelines, and I run local models on my own GPU workstation, so I understand what your customers are trying to do with pods and serverless endpoints and where they get stuck. I\'m remote-first by preference, I write documentation without being asked, and I\'m happy on email, chat, phone, or a video call.',
  'I\'d welcome a conversation about whether this is a fit.',
  'Thanks for reading.',
], out + '/Kyle_Hammrich_Runpod_L2_Cover_Letter.docx'),

letter([
  'Z Networks — IT Technician (Marysville)',
  'I\'m applying for the IT Technician position in Marysville. I live in Stanwood, I\'ve done this work for a long time, and I\'d like to do it close to home for a company that takes customer service as seriously as your careers page says you do.',
  'The short version of my background: Nordstrom corporate IT (helpdesk, imaging, VoIP, PowerShell deployment tooling), support engineering at Tempered Networks, sole IT function for a biotech (Windows Server, Active Directory to Azure AD hybrid migration, device policies, near-24/7 support), then Ziply Fiber, where I led a 200-VM Azure migration and ran production operations for those systems. More recently I\'ve supported clinicians at Fred Hutch and worked the help desk at the Tulalip Tribes. I hold a CCNA, Network+, and A+.',
  'You\'ll see I\'ve held manager titles, so I\'ll be direct about why I want a technician seat: I like fixing things for people, I like small companies where you see the whole picture, and I\'d rather be hands-on than in meetings. I also run a small IT support practice, Owner IT, which is how I know the small-business side of this work firsthand; I\'m glad to talk through how that fits alongside a full-time role.',
  'I\'m available to start quickly and can be dispatched anywhere in Snohomish or King County. I\'d welcome a conversation.',
  'Thanks for your time.',
], out + '/Kyle_Hammrich_ZNetworks_Cover_Letter.docx'),
]);
