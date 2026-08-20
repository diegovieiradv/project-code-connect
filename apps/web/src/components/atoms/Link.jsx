export function Link({ children, href, variant = 'brand', className = '', ...props }) {
  const variants = {
    brand: 'text-verde-destaque hover:underline',
    muted: 'text-offwhite underline',
  }

  return (
    <a href={href} className={`transition-colors ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}