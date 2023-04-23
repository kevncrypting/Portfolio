import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-400 hover:text-blue-800">
        {children}
    </button>
  )
}
