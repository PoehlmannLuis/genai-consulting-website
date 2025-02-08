import './globals.css'

export const metadata = {
  title: 'GenAI Consulting Bayern | Luis Poehlmann',
  description: 'GenAI Consulting Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
