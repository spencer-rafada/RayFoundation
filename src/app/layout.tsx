import type { Metadata } from 'next'
import ThemeProvider from './_providers/ThemeProvider'
import Navbar from './components/Navbar'
import './globals.css'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Ray Foundation',
  description: 'Transforming Lives Through Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <Navbar></Navbar>
          <section>{children}</section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
