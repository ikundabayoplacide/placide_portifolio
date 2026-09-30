import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  const filePath = join(process.cwd(), "src", "docs", "general cover letter.pdf")
  const fileBuffer = readFileSync(filePath)

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="IKUNDABAYO_Placide_Cover_Letter.pdf"',
    },
  })
}
