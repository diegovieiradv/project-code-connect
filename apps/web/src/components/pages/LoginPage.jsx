import { AuthLayout } from '../templates/AuthLayout'
import { LoginFormSection } from '../organisms/LoginFormSection'

export function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AuthLayout>
      <LoginFormSection onSubmit={handleSubmit} />
    </AuthLayout>
  )
}
