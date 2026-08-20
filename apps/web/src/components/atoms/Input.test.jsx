import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Input placeholder="Digite seu email" />)
    expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument()
  })

  it('handles text input', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Input label="Email" onChange={onChange} />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'test@email.com')
    expect(input).toHaveValue('test@email.com')
  })

  it('renders password type', () => {
    render(<Input label="Senha" type="password" />)
    const input = screen.getByLabelText('Senha')
    expect(input).toHaveAttribute('type', 'password')
  })
})
