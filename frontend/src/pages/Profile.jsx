import { useParams } from 'react-router-dom'
import { Users, MapPin, Cake } from 'lucide-react'

export default function Profile() {
  const { id } = useParams()

  // Mock user data
  const user = {
    id,
    username: 'johndoe',
    bio: 'Full-stack developer | Web3 enthusiast | Coffee lover ☕',
    profileImage: 'https://via.placeholder.com/200',
    location: 'São Paulo, Brasil',
    joinDate: 'Março 2024',
    followers: 1234,
    following: 567,
    posts: 89
  }

  return (
    <div className="min-h-screen bg-light pt-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Cover Image */}
        <div className="h-48 bg-gradient rounded-2xl mb-16" />

        {/* Profile Header */}
        <div className="card -mt-24 mb-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-0">
            <img 
              src={user.profileImage} 
              alt={user.username}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <div className="flex-1 md:ml-6">
              <h1 className="text-3xl font-bold">{user.username}</h1>
              <p className="text-gray-600 mt-2">@{user.username}</p>
              <p className="mt-3 text-gray-700">{user.bio}</p>
              <div className="flex gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Cake className="w-4 h-4" />
                  Entrou em {user.joinDate}
                </div>
              </div>
            </div>
            <button className="btn-primary">
              Seguir
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="card text-center">
            <p className="text-2xl font-bold text-primary">{user.posts}</p>
            <p className="text-gray-600 text-sm">Posts</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl font-bold text-primary">{user.followers.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">Seguidores</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl font-bold text-primary">{user.following}</p>
            <p className="text-gray-600 text-sm">Seguindo</p>
          </div>
        </div>

        {/* Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="card">
                <p className="text-gray-700 mb-3">Exemplo de post #{i}</p>
                <div className="flex gap-4 text-gray-600 text-sm">
                  <span>❤️ 123</span>
                  <span>💬 45</span>
                  <span>↗️ 12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
