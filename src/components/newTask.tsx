import { ClipboardList, PlusCircle } from 'lucide-react'
import { Card } from './card'
import { SetStateAction, useState } from 'react'

export function NewTask() {
  const [inputContent, setInputContent] = useState('')
  const [cards, setCards] = useState([])

  function handleInputChange(event: {
    target: { value: SetStateAction<string> }
  }) {
    setInputContent(event.target.value)
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (inputContent !== '') {
      setCards([...cards, inputContent])
      setInputContent('')
      console.log(cards)
    }
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-2 mb-3  w-full top-32 absolute"
      >
        <input
          type="text"
          className="bg-zinc-700 rounded-lg outline-none text-zinc-400 text-base max-wv-2xl w-2/5 p-4 placeholder-zinc-400 max-w-xl min-w-64"
          placeholder="Adicione uma nova tarefa"
          value={inputContent}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex hover:bg-blue-400 gap-2	text-white rounded-lg bg-blue-500 p-4 items-center text-[0.875rem] font-bold"
        >
          Criar <PlusCircle className="size-4" />
        </button>
      </form>

      <div className="flex mt-16 mx-auto max-w-2xl text-white flex-col  px-1  ">
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
      </div>
      <div className="mt-6 max-w-xl mx-auto gap-2">
        {cards.map((card) => {
          return <Card content={card} key={card} />
        })}
      </div>
    </div>
  )
}
