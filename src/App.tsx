import { Header } from './components/header'
import { NewTask } from './components/newTask'
import { Tasks } from './components/tasks'

export function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <Tasks />
    </div>
  )
}
