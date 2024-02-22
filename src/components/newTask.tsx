import { PlusCircle } from 'lucide-react'

export function NewTask() {
  return (
    <div className="flex justify-center gap-2 mb-3  w-full top-32 absolute  ">
      <input
        type="text"
        className="bg-zinc-600 rounded-lg max-w-2xl w-2/5 p-4"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="flex gap-2	text-white rounded-lg bg-blue-500 p-4 items-center text-[0.875rem] font-bold">
        Criar <PlusCircle className="size-4" />
      </button>
    </div>
  )
}
