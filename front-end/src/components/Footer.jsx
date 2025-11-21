import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center text-sm py-4 mt-10">
      &copy; {new Date().getFullYear()} sudo-rides. All rights reserved.
    </footer>
  )
}