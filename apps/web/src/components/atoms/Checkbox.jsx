export function Checkbox({ label, checked, onChange, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-verde-destaque cursor-pointer"
        {...props}
      />
      {label && <span className="text-[15px] text-cinza-medio">{label}</span>}
    </label>
  )
}