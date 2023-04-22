import Link from 'next/link'
import React from 'react'

export default function Social() {
  return (
    <ul className="flex gap-4 list-none">
        <li>
            <a href="https://www.linkedin.com/in/tkprachith/">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/kevncrypting">GitHub</a>
        </li>
        <li>
            <Link href="blog/first-post">Blog</Link>
        </li>
    </ul>
  )
}
