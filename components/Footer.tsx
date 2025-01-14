import React from 'react'

const Footer = () => {
    const getYear = new Date().getFullYear()
  return (
        <footer className="bg-background text-foreground py-4 text-center border-t border-border relative">
            <p>© {getYear} xTrafikskola. All rights reserved.</p>
        </footer>
  )
}

export default Footer