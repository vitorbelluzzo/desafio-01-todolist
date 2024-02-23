import { Trash2 } from 'lucide-react'

export function Card({ content }: { content: string }) {
  return (
    <div className=" flex rounded-lg bg-zinc-700 p-4 gap-3 items-start justify-between border-zinc-600 border mt-3">
      <input
        type="checkbox"
        id="checkbox"
        className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-400 rounded-full mt-1 focus:outline-none
        checked:bg-blue-400 after:bg-"
      />
      <p
        htmlFor="checkbox"
        className="text-white text-sm w-full  peer-checked:text-gray-400 peer-checked:line-through"
      >
        {content}
      </p>
      <Trash2 className="size-5 cursor-pointer text-zinc-300 hover:text-red-500" />
    </div>
  )
}
