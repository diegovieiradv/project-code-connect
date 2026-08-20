import { render, screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders with text', () => {
    render(<Link href="/cadastro">Crie seu cadastro!</Link>)
    expect(screen.getByRole('link', { name: /crie seu cadastro/i })).toBeInTheDocument()
  })

  it('has correct href', () => {
    render(<Link href="/cadastro">Link</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cadastro')
  })

  it('opens in new tab when target is set', () => {
    render(<Link href="https://example.com" target="_blank">External</Link>)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })
})
