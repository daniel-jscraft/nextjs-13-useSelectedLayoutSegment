'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function Layout({ children }) {
    console.log("/app/blog/layout")
    console.log(useSelectedLayoutSegment())
    console.log(useSelectedLayoutSegments())
    return (<>{children}</>)
}