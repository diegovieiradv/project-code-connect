import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialButton } from './SocialButton'

describe('SocialButton', () => {
  it('renders with label', () => {
    render(<SocialButton icon="/github.svg" label="Github" provider="github" />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
  })

  it('displays label text', () => {
    render(<SocialButton icon="/github.svg" label="Github" provider="github" />)
    expect(screen.getByText('Github')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<SocialButton icon="/github.svg" label="Github" provider="github" onClick={onClick} />)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders icon image', () => {
    render(<SocialButton icon="/github.svg" label="Github" provider="github" />)
    expect(screen.getByRole('img', { name: /github icon/i })).toHaveAttribute('src', '/github.svg')
  })
})
