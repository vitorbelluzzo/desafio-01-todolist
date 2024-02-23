import { Card } from './card'

export function Tasks() {
  return (
    <div className="flex mt-16 mx-auto max-w-2xl text-white flex-col  px-1 ">
      <div className="flex justify-between  w-full">
        <div className="flex gap-2 items-center">
          <h1 className="text-sm font-bold text-blue-400">Tarefas criadas</h1>
          <span className="px-2 py-0.5 bg-zinc-600 rounded-full">0</span>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-sm font-bold text-purple-400">Concluídas</h1>
          <span className="px-2 py-0.5 bg-zinc-600 rounded-full">0 de 0</span>
        </div>
      </div>

      <div className="border-t-[1px] border-zinc-600 h-60 mt-6 rounded-lg">
        <Card />
      </div>
    </div>
  )
}
