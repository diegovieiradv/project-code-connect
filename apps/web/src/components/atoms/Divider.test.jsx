import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders with text', () => {
    render(<Divider text="ou entre com outras contas" />)
    expect(screen.getByText('ou entre com outras contas')).toBeInTheDocument()
  })

  it('renders without text', () => {
    const { container } = render(<Divider />)
    expect(container.querySelector('.h-px')).toBeInTheDocument()
  })
})
