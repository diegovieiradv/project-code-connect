import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Lembrar-me" />)
    expect(screen.getByRole('checkbox', { name: /lembrar-me/i })).toBeInTheDocument()
  })

  it('toggles checked state', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox label="Lembrar-me" onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })

  it('can be checked by default', () => {
    render(<Checkbox label="Lembrar-me" checked readOnly />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
