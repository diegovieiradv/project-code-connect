import '@testing-library/jest-dom'

vi.mock('/github.svg', () => ({ default: '/github.svg' }))
vi.mock('/gmail.svg', () => ({ default: '/gmail.svg' }))
vi.mock('/banner-login.png', () => ({ default: '/banner-login.png' }))
vi.mock('../assets/react.svg', () => ({ default: '/react.svg' }))
