import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { useState } from 'react'

export default function Post({ post }) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes_count)

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className="card hover:shadow-lg transition">
      <div className="flex gap-4">
        <img 
          src="https://via.placeholder.com/48" 
          alt="Author" 
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold">@username</h4>
              <p className="text-xs text-gray-500">há 2 horas</p>
            </div>
            <button className="text-gray-400 hover:text-primary">⋯</button>
          </div>
          <p className="mt-3 text-gray-800">{post.content}</p>
          
          <div className="flex gap-8 mt-4 text-gray-600 text-sm">
            <button className="flex items-center gap-2 hover:text-primary transition">
              <Heart 
                className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : ''}`}
                onClick={handleLike}
              />
              <span>{likesCount}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments_count}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition">
              <Share2 className="w-4 h-4" />
              <span>{post.shares_count}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
