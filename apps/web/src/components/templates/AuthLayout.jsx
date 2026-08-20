import { BannerSection } from '../organisms/BannerSection'
import bannerLogin from '/banner-login.png'

export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-black from-15% via-cinza-escuro via-50% to-black to-85%">
      <div className="flex w-full max-w-[1134px] min-h-[725px] rounded-[32px] overflow-hidden bg-cinza-escuro border-2 border-verde-destaque/40 shadow-[0_25px_60px_-15px_rgba(129,254,136,0.35)]">
        <BannerSection bannerSrc={bannerLogin} logoText="code connect" />

        <div className="flex-1 flex items-center justify-center px-8 py-12 lg:px-16">
          {children}
        </div>
      </div>
    </div>
  )
}