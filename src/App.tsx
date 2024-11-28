import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Vite + React + Remix + Tailwind
        </h1>
        <Link 
          to="/" 
          className="text-red-500 hover:text-red-700 underline"
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default App
