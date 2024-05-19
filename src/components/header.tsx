export function Header() {
  return (
    <header className="flex justify-center bg-black items-center flex-col h-40 max-w-screen mx-auto">
      <div className="flex  gap-2 justify-start ">
        <img src="/rocket.svg" alt="" className="mt-2.5" />
        <span className="font-bold text-purple-500 text-4xl">
          <span className="text-blue-400">to</span>do
        </span>
      </div>
    </header>
  )
}
