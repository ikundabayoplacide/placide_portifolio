import { NextResponse } from "next/server"

export async function GET() {
  const cvContent = `%PDF-1.4
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
/Length 2500
>>
stream
BT
/F1 24 Tf
50 750 Td
(IKUNDABAYO Placide) Tj
0 -30 Td
/F1 16 Tf
(Full-Stack Developer) Tj
0 -40 Td
/F1 12 Tf
(Email: ikundabayoplacide500@gmail.com) Tj
0 -20 Td
(Phone: +250 789 897 235) Tj
0 -20 Td
(Location: Kigali, Rwanda) Tj
0 -20 Td
(GitHub: github.com/ikundabayoplacide) Tj
0 -40 Td
/F1 16 Tf
(EDUCATION) Tj
0 -25 Td
/F1 12 Tf
(Bachelor of Science - Computer & Software Engineering) Tj
0 -15 Td
(University of Rwanda \$$2021-2025\$$) Tj
0 -30 Td
/F1 16 Tf
(EXPERIENCE) Tj
0 -25 Td
/F1 12 Tf
(Internship - Full Stack Development) Tj
0 -15 Td
(Silve-Rwanda Ltd \$$June 2024 - Feb 2025\$$) Tj
0 -15 Td
(Technologies: Laravel, React Native) Tj
0 -25 Td
(WordPress Developer) Tj
0 -15 Td
(Brave Tech \$$Feb 2024 - April 2024\$$) Tj
0 -15 Td
(Technologies: WordPress, PHP, CSS) Tj
0 -25 Td
(Web Developer) Tj
0 -15 Td
(PAC Rwanda \$$October 2023 - December 2023\$$) Tj
0 -15 Td
(Technologies: HTML, CSS, React) Tj
0 -30 Td
/F1 16 Tf
(TECHNICAL SKILLS) Tj
0 -25 Td
/F1 12 Tf
(Programming: JavaScript, TypeScript) Tj
0 -15 Td
(Frontend: React, HTML/CSS) Tj
0 -15 Td
(Backend: Node.js, Laravel) Tj
0 -15 Td
(Mobile: React Native) Tj
0 -15 Td
(Database: PostgreSQL, MongoDB) Tj
0 -15 Td
(CMS: WordPress) Tj
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
0000002805 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
2882
%%EOF`

  return new NextResponse(cvContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="IKUNDABAYO_Placide_CV.pdf"',
    },
  })
}
