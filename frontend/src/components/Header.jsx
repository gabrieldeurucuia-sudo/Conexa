import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">🎵 Vibe Hub</h1>
        <nav className="flex gap-4">
          <Link to="/login" className="btn-outline">
            Entrar
          </Link>
          <Link to="/register" className="btn-primary">
            Cadastrar
          </Link>
        </nav>
      </div>
    </header>
  )
}
