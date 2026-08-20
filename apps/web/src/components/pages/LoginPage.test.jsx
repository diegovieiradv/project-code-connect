import { render, screen } from '@testing-library/react'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('renders login form', () => {
    render(<LoginPage />)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('renders banner', () => {
    render(<LoginPage />)
    expect(screen.getByRole('img', { name: 'Banner' })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /lembrar-me/i })).toBeInTheDocument()
  })

  it('renders social login options', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar com gmail/i })).toBeInTheDocument()
  })

  it('renders signup link', () => {
    render(<LoginPage />)
    expect(screen.getByRole('link', { name: /crie seu cadastro/i })).toBeInTheDocument()
  })
})
