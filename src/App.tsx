import { Header } from './components/header'
import { NewTask } from './components/newTask'

export function App() {
  return (
    <div>
      <Header />
      <NewTask content={undefined} />
    </div>
  )
}
