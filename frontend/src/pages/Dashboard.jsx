import { useState } from 'react'
import { Heart, MessageCircle, Share2, Image, Video } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { usePostsStore } from '../store/postsStore'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  const { user, accountType, availableResources, usedResources } = useAuthStore()
  const { posts, addPost } = usePostsStore()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePost = async (e) => {
    e.preventDefault()
    if (!content.trim()) return

    setLoading(true)
    try {
      const newPost = {
        id: Date.now(),
        user_id: user?.id,
        content,
        likes_count: 0,
        comments_count: 0,
        shares_count: 0,
        created_at: new Date().toISOString()
      }
      addPost(newPost)
      setContent('')
    } catch (err) {
      console.error('Erro ao postar:', err)
    } finally {
      setLoading(false)
    }
  }

  const resourcePercentage = (usedResources / availableResources) * 100

  return (
    <div className="min-h-screen bg-light pt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Feed */}
        <div className="md:col-span-2">
          {/* Post Creator */}
          <div className="card mb-6">
            <div className="flex gap-4 mb-4">
              <img 
                src="https://via.placeholder.com/50" 
                alt="Avatar" 
                className="w-12 h-12 rounded-full"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="O que está acontecendo? 🎵"
                className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-primary"
                rows="3"
              />
            </div>
            <div className="flex gap-3 justify-between items-center">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Image className="w-5 h-5 text-primary" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Video className="w-5 h-5 text-primary" />
                </button>
              </div>
              <button
                onClick={handlePost}
                disabled={!content.trim() || loading}
                className="btn-primary disabled:opacity-50"
              >
                {loading ? 'Postando...' : 'Postar'}
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-gray-600 mb-2">Nenhum post ainda</p>
                <p className="text-sm text-gray-500">Seja o primeiro a compartilhar sua vibe!</p>
              </div>
            ) : (
              posts.map(post => <Post key={post.id} post={post} />)
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          {/* Account Info */}
          <div className="card mb-6">
            <h3 className="font-bold mb-4">👤 Minha Conta</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-600">Tipo de Conta</p>
                <p className="font-semibold capitalize">{accountType === 'business' ? 'Empresarial' : 'Normal'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Recursos</p>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient h-full transition-all"
                    style={{ width: `${Math.min(resourcePercentage, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">{usedResources} / {availableResources}</p>
              </div>
            </div>
          </div>

          {/* Trending */}
          <div className="card">
            <h3 className="font-bold mb-4">🔥 Tendências</h3>
            <div className="space-y-3">
              <TrendingItem tag="#ReactJS" posts={1234} />
              <TrendingItem tag="#WebDev" posts={5890} />
              <TrendingItem tag="#Vibe" posts={12340} />
              <TrendingItem tag="#Community" posts={8765} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrendingItem({ tag, posts }) {
  return (
    <div className="hover:bg-gray-100 p-2 rounded cursor-pointer transition">
      <p className="font-semibold text-primary">{tag}</p>
      <p className="text-xs text-gray-600">{posts.toLocaleString()} posts</p>
    </div>
  )
}
