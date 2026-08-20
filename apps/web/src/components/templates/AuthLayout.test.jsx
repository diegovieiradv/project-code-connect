import { render, screen } from '@testing-library/react'
import { AuthLayout } from './AuthLayout'

describe('AuthLayout', () => {
  it('renders children', () => {
    render(
      <AuthLayout>
        <div>Test content</div>
      </AuthLayout>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders banner section', () => {
    render(
      <AuthLayout>
        <div>Content</div>
      </AuthLayout>
    )
    expect(screen.getByRole('img', { name: 'Banner' })).toBeInTheDocument()
  })
})
