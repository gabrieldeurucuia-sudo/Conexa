import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User, Mail, Lock, Building2 } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import axios from 'axios'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'normal'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    setLoading(true)
    try {
      const response = await axios.post('/api/v1/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        account_type: formData.accountType
      })
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao cadastrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">🎵 Vibe Hub</h1>
        <p className="text-center text-gray-600 mb-8">Junte-se à nossa comunidade!</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Usuário</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="seu_usuário"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Confirmar Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Tipo de Conta</label>
            <div className="grid grid-cols-2 gap-3">
              <label className={`p-3 border-2 rounded-lg cursor-pointer text-center transition ${
                formData.accountType === 'normal' 
                  ? 'border-primary bg-primary bg-opacity-10' 
                  : 'border-gray-200'
              }`}>
                <input
                  type="radio"
                  name="accountType"
                  value="normal"
                  checked={formData.accountType === 'normal'}
                  onChange={handleChange}
                  className="hidden"
                />
                <User className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm font-semibold">Normal</span>
              </label>
              <label className={`p-3 border-2 rounded-lg cursor-pointer text-center transition ${
                formData.accountType === 'business' 
                  ? 'border-primary bg-primary bg-opacity-10' 
                  : 'border-gray-200'
              }`}>
                <input
                  type="radio"
                  name="accountType"
                  value="business"
                  checked={formData.accountType === 'business'}
                  onChange={handleChange}
                  className="hidden"
                />
                <Building2 className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm font-semibold">Empresarial</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full mt-6 disabled:opacity-50"
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Já tem conta? 
          <Link to="/login" className="text-primary font-semibold ml-2 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}
