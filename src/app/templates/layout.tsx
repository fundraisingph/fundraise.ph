import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
