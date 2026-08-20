import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginFormSection } from './LoginFormSection'

describe('LoginFormSection', () => {
  it('renders login heading', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('renders welcome text', () => {
    render(<LoginFormSection />)
    expect(screen.getByText('Boas-vindas! Faça seu login.')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<LoginFormSection />)
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<LoginFormSection />)
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
  })

  it('renders remember me checkbox', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('checkbox', { name: /lembrar-me/i })).toBeInTheDocument()
  })

  it('renders forgot password link', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('link', { name: /esqueci a senha/i })).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar com gmail/i })).toBeInTheDocument()
  })

  it('renders signup link', () => {
    render(<LoginFormSection />)
    expect(screen.getByRole('link', { name: /crie seu cadastro/i })).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn()
    render(<LoginFormSection onSubmit={onSubmit} />)
    await userEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
