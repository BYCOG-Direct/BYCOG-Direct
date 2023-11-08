import '@styles/globals.css';

import { Lexend } from 'next/font/google'
import Nav from '@components/nav';

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'BYCOG Direct',
  description: 'Below each person’s likes, dislikes, decision making and personality is a process they impulsively use all the time. We call these processes bycodes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
