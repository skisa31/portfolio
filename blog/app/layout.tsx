import './globals.css'
import Header from './header'
import Footer from './footer'

const siteName = '記事一覧';
const description = 'Kisaの日常ブログの記事一覧です．';
const url = 'https://kisa-ss/blog/';

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
    <html lang="ja">
      <body suppressHydrationWarning={true}>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 max-w-6xl w-full mx-auto'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
