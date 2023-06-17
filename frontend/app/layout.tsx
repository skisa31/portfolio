import './globals.css'
import Header from './header';
import Footer from './footer';
import { Noto_Sans_JP } from 'next/font/google'
import { Roboto } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const siteName = 'Kisa\'s Portfolio';
const description = 'Kisaのポートフォリオサイトです．';
const url = 'https://kisa-ss';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    local: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@shk4346',
    creator: '@shk4346',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${roboto.variable}`}>
      <body suppressHydrationWarning={true}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 w-full'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
