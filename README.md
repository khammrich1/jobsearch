# Job Search — Kyle Hammrich

Private working repo for the 2026 job search. Tracked as a project in [Today](https://github.com/khammrich1/Today) via `EOD_STATUS.md`; gates in [ProjectStatus](https://github.com/khammrich1/ProjectStatus) `boards/JOB_SEARCH.md`; daily actions in [Todo](https://github.com/khammrich1/Todo).

## Layout

```
generators/   docx-js sources for every resume, cover letter and prep sheet (lib.js is the shared base)
output/       the generated .docx files (what was actually submitted lives in OneDrive\Documents\Resumes\2026\<Company>\)
scripts/      build.js (regenerate all), onepage.js (resume page-count check)
docs/         TRACKER.md (applications, follow-ups, known issues), interview prep notes
EOD_STATUS.md the dated end-of-day log Today reads
```

## Regenerate

```bash
npm ci
npm run build            # all
node scripts/build.js premera   # one variant: commtrans | tulalip_sec | helion_ea | helion_ssa | gravitics | l2 | znetworks | premera
npm run check            # page counts (needs LibreOffice + poppler)
```

## Rules

- Source of truth for dates, titles and education is Kyle's LinkedIn and what Kyle has stated. Never invent.
- Education line: B.S. Computer Science, Western Governors University, 2015; Data Analytics Certificate, WSU, 2024.
- Allyis (Mar 2018–Aug 2019, Kirkland) and Tempered Networks (Oct 2017–Mar 2018, Seattle) are separate jobs.
- Applications already submitted are not corrected or re-sent. Fix the files here; hand over the corrected version only if asked.
- Resumes are one page. Run `npm run check` after editing.
- LinkedIn: 200-char connection notes; limited personalized invites per month — don't burn them.
