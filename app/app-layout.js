export const metadata = {
  title: 'Strong Mama PT',
  description: 'Specialized coaching for postpartum rehabilitation and return to exercise',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
