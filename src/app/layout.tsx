import type { Metadata } from 'next'
import ThemeProvider from './_providers/ThemeProvider'
import Navbar from './components/Navbar'

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
        </ThemeProvider>
      </body>
    </html>
  )
}
