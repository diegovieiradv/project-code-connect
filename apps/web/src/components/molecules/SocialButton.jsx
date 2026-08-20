export function SocialButton({ icon, label, _provider, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1 cursor-pointer group"
      aria-label={`Entrar com ${label}`}
    >
      <img src={icon} alt={`${label} icon`} className="w-8 h-8 group-hover:opacity-80 transition-opacity" />
      <span className="text-[12.5px] text-offwhite">{label}</span>
    </button>
  )
}