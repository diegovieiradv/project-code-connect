import { useId } from 'react'

export function Input({ label, type = 'text', placeholder, ...props }) {
  const id = useId()

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-[18px] text-offwhite">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-cinza-medio text-cinza-escuro rounded px-4 py-2 text-[15px] outline-none focus:ring-2 focus:ring-verde-destaque placeholder:text-cinza-escuro/70"
        {...props}
      />
    </div>
  )
}