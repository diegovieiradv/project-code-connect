export function Divider({ text }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex-1 h-px bg-offwhite" />
      {text && <span className="text-[15px] text-offwhite whitespace-nowrap">{text}</span>}
      <div className="flex-1 h-px bg-offwhite" />
    </div>
  )
}