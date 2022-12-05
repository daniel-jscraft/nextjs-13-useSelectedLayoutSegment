'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function RootLayout({ children }) {
  console.log("/app/layout")
  console.log(useSelectedLayoutSegment())
  console.log(useSelectedLayoutSegments())

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
