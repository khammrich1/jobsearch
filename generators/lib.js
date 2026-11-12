const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, LevelFormat, AlignmentType } = require('docx');

const F = 'Calibri';
const p = (text, opts = {}) => new Paragraph({ children: [new TextRun({ text, font: F, size: 21, ...opts })], spacing: { after: 60 } });
const role = (title, meta) => new Paragraph({
  spacing: { before: 80, after: 40 },
  children: [new TextRun({ text: title, font: F, size: 21, bold: true }), new TextRun({ text: `  |  ${meta}`, font: F, size: 21 })],
});
const b = (text) => new Paragraph({ numbering: { reference: 'bul', level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text, font: F, size: 21 })] });
const h = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, font: F, size: 24, bold: true, color: '000000' })] });

function resume(children, out) {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: F, size: 21 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: F, size: 24, bold: true, color: '000000' }, paragraph: { spacing: { before: 160, after: 60 }, keepNext: true } },
      ],
    },
    numbering: { config: [{ reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 620, right: 1008, bottom: 560, left: 1008 } } },
      children,
    }],
  });
  return Packer.toBuffer(doc).then(buf => fs.writeFileSync(out, buf));
}

const header = (headline, loc) => [
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: 'Kyle Hammrich', font: F, size: 40, bold: true })] }),
  p('425-293-5918  |  Khammrich1@outlook.com  |  linkedin.com/in/kyletechspace' + (loc ? '  |  ' + loc : '')),
  p(headline, { bold: true }),
];

const edu = () => [new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: 'Education', font: F, size: 21, bold: true }), new TextRun({ text: '  |  B.S. Computer Science, Western Governors University, 2015  |  Data Analytics Certificate, WSU, 2024', font: F, size: 21 })] })];

function letter(lines, out) {
  const lp = (text, opts = {}) => new Paragraph({ children: [new TextRun({ text, font: F, size: 22, ...opts })], spacing: { after: 160 } });
  const doc = new Document({
    styles: { default: { document: { run: { font: F, size: 22 } } } },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1200, right: 1300, bottom: 1200, left: 1300 } } },
      children: [
        new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: 'Kyle Hammrich', font: F, size: 28, bold: true })] }),
        lp('425-293-5918  |  Khammrich1@outlook.com  |  linkedin.com/in/kyletechspace'),
        lp('November 11, 2026'),
        ...lines.map(l => lp(l)),
        lp('Kyle Hammrich'),
      ],
    }],
  });
  return Packer.toBuffer(doc).then(buf => fs.writeFileSync(out, buf));
}

module.exports = { p, role, b, h, resume, header, edu, letter };
