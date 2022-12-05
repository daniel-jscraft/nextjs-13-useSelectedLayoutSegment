'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function Layout({ children }) {
    console.log("/app/blog/[id]/layout")
    console.trace(useSelectedLayoutSegment())
    console.trace(useSelectedLayoutSegments())
    return (<>{children}</>)
}