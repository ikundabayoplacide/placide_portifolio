import { NextResponse } from "next/server"

export async function GET() {
  const coverLetterContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 1800
>>
stream
BT
/F1 24 Tf
50 750 Td
(Cover Letter) Tj
0 -40 Td
/F1 12 Tf
(IKUNDABAYO Placide) Tj
0 -15 Td
(Full-Stack Developer) Tj
0 -15 Td
(Email: ikundabayoplacide500@gmail.com) Tj
0 -15 Td
(Phone: +250 789 897 235) Tj
0 -15 Td
(Location: Kigali, Rwanda) Tj
0 -40 Td
(Dear Hiring Manager,) Tj
0 -30 Td
(I am writing to express my strong interest in joining your) Tj
0 -15 Td
(development team. As a passionate Full-Stack Developer with) Tj
0 -15 Td
(expertise in JavaScript, React, Laravel, and mobile development,) Tj
0 -15 Td
(I am excited about the opportunity to contribute to your) Tj
0 -15 Td
(organization's success.) Tj
0 -30 Td
(My experience includes internships at Silve-Rwanda Ltd,) Tj
0 -15 Td
(Brave Tech, and PAC Rwanda, where I have developed) Tj
0 -15 Td
(full-stack applications using modern technologies.) Tj
0 -15 Td
(I am currently pursuing my Bachelor's degree in Computer) Tj
0 -15 Td
(& Software Engineering at the University of Rwanda.) Tj
0 -30 Td
(I am committed to continuous learning and growth,) Tj
0 -15 Td
(and I believe my technical skills combined with my) Tj
0 -15 Td
(passion for innovation make me a valuable addition) Tj
0 -15 Td
(to any development team.) Tj
0 -30 Td
(Thank you for considering my application.) Tj
0 -15 Td
(I look forward to discussing how I can contribute) Tj
0 -15 Td
(to your team's success.) Tj
0 -40 Td
(Sincerely,) Tj
0 -15 Td
(IKUNDABAYO Placide) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000251 00000 n 
0000002105 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
2182
%%EOF`

  return new NextResponse(coverLetterContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="IKUNDABAYO_Placide_Cover_Letter.pdf"',
    },
  })
}
