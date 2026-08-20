import { render, screen } from '@testing-library/react'
import { BannerSection } from './BannerSection'

describe('BannerSection', () => {
  it('renders banner image', () => {
    render(<BannerSection bannerSrc="/banner-login.png" />)
    expect(screen.getByRole('img', { name: 'Banner' })).toHaveAttribute('src', '/banner-login.png')
  })

  it('renders logo text', () => {
    render(<BannerSection bannerSrc="/banner-login.png" logoText="code connect" />)
    expect(screen.getByText('code connect')).toBeInTheDocument()
  })
})
