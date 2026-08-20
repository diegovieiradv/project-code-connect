import { Input, Button, Checkbox, Divider, Link } from '../atoms'
import { SocialButton } from '../molecules'
import githubIcon from '/github.svg'
import gmailIcon from '/gmail.svg'

export function LoginFormSection({ onSubmit }) {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[320px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-[31px] font-semibold text-offwhite m-0">Login</h1>
          <p className="text-[22px] text-offwhite m-0">Boas-vindas! Faça seu login.</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4" aria-label="Formulário de login">
          <Input label="Email ou usuário" placeholder="usuario123" type="text" />
          <Input label="Senha" placeholder="••••••" type="password" />

          <div className="flex items-center justify-between">
            <Checkbox label="Lembrar-me" />
            <Link href="#" variant="muted" className="text-[15px]">Esqueci a senha</Link>
          </div>

          <Button type="submit" className="w-full">
            Login <span className="text-lg">→</span>
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <Divider text="ou entre com outras contas" />

        <div className="flex justify-center gap-6">
          <SocialButton icon={githubIcon} label="Github" provider="github" />
          <SocialButton icon={gmailIcon} label="Gmail" provider="google" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[15px] text-offwhite">Ainda não tem conta?</span>
        <Link href="/cadastro" className="text-[18px] font-semibold flex items-center gap-2">
          Crie seu cadastro!
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}