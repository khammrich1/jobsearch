// Regenerate every resume / cover letter / prep sheet into output/.
// Usage: npm run build            (all)
//        node scripts/build.js premera   (one enterprise variant)
const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const G = path.join(__dirname, '..', 'generators');
const OUT = path.join(__dirname, '..', 'output');
fs.mkdirSync(OUT, { recursive: true });
const only = process.argv[2];
const variants = ['commtrans', 'tulalip_sec', 'helion_ea', 'helion_ssa', 'gravitics', 'l2', 'znetworks', 'premera'];
const run = (script, ...args) => { console.log('>', script, ...args); execFileSync('node', [path.join(G, script), OUT, ...args], { stdio: 'inherit' }); };
if (only) { run('enterprise.js', only); process.exit(0); }
for (const v of variants) run('enterprise.js', v);
run('runpod_em.js');
run('letters.js');
run('letters_helion.js');
run('letter_ct.js');
run('letter_premera.js');
run('prep_ct.js');
