// Report page counts for every resume in output/ (needs libreoffice + pdfinfo). Resumes must be 1 page.
const { execFileSync } = require('child_process');
const fs = require('fs'); const path = require('path'); const os = require('os');
const OUT = path.join(__dirname, '..', 'output');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'onepage-'));
for (const f of fs.readdirSync(OUT).filter((f) => /Resume\.docx$/.test(f))) {
  execFileSync('soffice', ['--headless', '--convert-to', 'pdf', '--outdir', tmp, path.join(OUT, f)], { stdio: 'ignore' });
  const info = execFileSync('pdfinfo', [path.join(tmp, f.replace(/\.docx$/, '.pdf'))]).toString();
  const pages = /Pages:\s+(\d+)/.exec(info)[1];
  console.log(`${pages === '1' ? 'OK ' : 'FAIL'} ${pages}p  ${f}`);
}
