import Header from "./components/Header/Header"

export const metadata = {
  title: 'QLU Robotics',
  description: 'QLU Robotics WebPage',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Header/>{children}</body>
    </html>
  )
}