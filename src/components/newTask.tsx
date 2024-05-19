import { PlusCircle } from 'lucide-react'
import { Card } from './card'
import { SetStateAction, useEffect, useState } from 'react'
import image from '../assets/Clipboard.svg'

export function NewTask() {
  const [inputContent, setInputContent] = useState('')
  const [cards, setCards] = useState<string[]>([])
  const [countTask, setCountTask] = useState(0)
  const [countTaskDone, setCountTaskDone] = useState(0)

  useEffect(() => {
    const saveCardsOnlocalStorage = localStorage.getItem('cards')
    if (saveCardsOnlocalStorage) {
      setCards(JSON.parse(saveCardsOnlocalStorage))
    }
  }, [])

  function handleInputChange(event: {
    target: { value: SetStateAction<string> }
  }) {
    setInputContent(event.target.value)
  }

  function handleSubmitAndSetTaskCount(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (inputContent !== '') {
      const newCards = [...cards, inputContent]

      localStorage.setItem('cards', JSON.stringify(newCards))
      setCards(newCards)
      setInputContent('')
      setCountTask(countTask + 1)
      console.log('cards salvos')
    }
  }

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setCountTaskDone(countTaskDone + 1)
      console.log('task checkado')
    } else {
      setCountTaskDone(countTaskDone - 1)
    }
  }
  function deleteCard(index: number) {
    const newCards = [...cards]
    const isTaskDone = index < countTaskDone
    const newCountTaskDone = isTaskDone ? countTaskDone - 1 : countTaskDone
    const newCountTask = Math.max(countTask - 1, 0)

    newCards.splice(index, 1)
    localStorage.setItem('cards', JSON.stringify(newCards))
    setCards(newCards)
    setCountTask(newCountTask)
    setCountTaskDone(newCountTaskDone)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmitAndSetTaskCount}
        className="flex justify-center gap-2 mb-3  w-full top-32 absolute"
      >
        <input
          type="text"
          className="bg-zinc-700 rounded-lg outline-none text-zinc-400 text-base max-wv-2xl w-2/5 p-4 placeholder-zinc-400 max-w-xl min-w-64"
          placeholder="Adicione uma nova tarefa"
          value={inputContent}
          onChange={handleInputChange}
          required
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
            <span className="px-2 py-0.5 bg-zinc-600 rounded-full">
              {countTask}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-sm font-bold text-purple-400">Concluídas</h1>
            <span className="px-2 py-0.5 bg-zinc-600 rounded-full">
              {countTaskDone} de {countTask}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-xl mx-auto gap-2 h-screen">
        {cards.length > 0 ? (
          cards.map((card, i) => (
            <Card
              key={i}
              content={card}
              deleteCard={() => deleteCard(i)}
              onCheckboxChange={handleCheckboxChange}
            />
          ))
        ) : (
          <div className="flex flex-col items-center border-t pt-16 rounded-lg border-zinc-600">
            <img src={image} className="size-14" alt="Clipboard" />
            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="text-base font-bold text-zinc-400">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-zinc-400">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
