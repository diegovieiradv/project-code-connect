export function BannerSection({ bannerSrc, logoText = 'code connect' }) {
  return (
    <div className="relative hidden lg:flex lg:w-[500px] shrink-0 overflow-hidden self-stretch">
      <img
        src={bannerSrc}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-verde-destaque/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-verde-destaque" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-verde-destaque">{logoText}</span>
        </div>
      </div>
    </div>
  )
}