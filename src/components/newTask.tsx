import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

export function NewTask() {
  const [newTask, setNewTask] = useState([''])

  function handleNewTask() {
    event?.preventDefault()
  }

  return (
    <form className="flex justify-center gap-2 mb-3  w-full top-32 absolute  ">
      <input
        type="text"
        className="bg-zinc-700 rounded-lg outline-none text-zinc-400 text-base max-wv-2xl w-2/5 p-4 placeholder-zinc-400 max-w-xl min-w-64"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTask}
      />
      <button className="flex hover:bg-blue-400 gap-2	text-white rounded-lg bg-blue-500 p-4 items-center text-[0.875rem] font-bold">
        Criar <PlusCircle className="size-4" />
      </button>
    </form>
  )
}
