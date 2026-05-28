import { Link } from 'react-router-dom'
import { Home, Heart, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export default function Sidebar() {
  const { user } = useAuthStore()

  return (
    <div className="hidden md:block md:col-span-1">
      <div className="card sticky top-24">
        <nav className="space-y-4">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" href="/dashboard" />
          <NavItem icon={<Heart className="w-5 h-5" />} label="Favoritos" href="#" />
          <NavItem icon={<Mail className="w-5 h-5" />} label="Mensagens" href="#" />
          <NavItem icon={<Bookmark className="w-5 h-5" />} label="Salvos" href="#" />
          <NavItem icon={<User className="w-5 h-5" />} label="Perfil" href={`/profile/${user?.id}`} />
          <NavItem icon={<MoreHorizontal className="w-5 h-5" />} label="Mais" href="#" />
        </nav>
        <button className="btn-primary w-full mt-6">
          Postar
        </button>
      </div>
    </div>
  )
}

function NavItem({ icon, label, href }) {
  return (
    <Link 
      to={href}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition text-gray-700 font-semibold"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
