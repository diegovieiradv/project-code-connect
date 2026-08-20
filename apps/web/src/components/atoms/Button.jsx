export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-verde-destaque text-verde-petroleo font-semibold hover:bg-verde-destaque/90',
    secondary: 'bg-transparent border border-offwhite text-offwhite hover:bg-cinza-escuro',
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-[18px] transition-colors cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}