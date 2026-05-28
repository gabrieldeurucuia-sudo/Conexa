import { Link } from 'react-router-dom'
import { Music, Users, Zap, TrendingUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">🎵 Vibe Hub</h1>
        <p className="text-2xl mb-8 opacity-90">Conecte experiências, compartilhe vibrações</p>
        <div className="flex gap-4 justify-center">
          <Link to="/register" className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:scale-105 transition">
            Começar Agora
          </Link>
          <Link to="/login" className="px-8 py-4 border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition">
            Entrar
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Por que escolher Vibe Hub?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="w-12 h-12" />}
              title="Conexões"
              description="Conecte-se com pessoas que compartilham suas vibrações"
            />
            <FeatureCard 
              icon={<Music className="w-12 h-12" />}
              title="Conteúdo"
              description="Compartilhe posts, fotos e vídeos com sua comunidade"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12" />}
              title="Crescimento"
              description="Acompanhe seu crescimento com analytics detalhados"
            />
            <FeatureCard 
              icon={<Zap className="w-12 h-12" />}
              title="Premium"
              description="Desbloqueie recursos avançados para empresas"
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planos e Recursos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PlanCard 
              name="Conta Normal"
              resources="1.000"
              features={[
                '✅ Posts ilimitados',
                '✅ Seguir usuários',
                '✅ Mensagens privadas',
                '✅ Notificações',
                '✅ Busca e descoberta'
              ]}
              price="Gratuito"
            />
            <PlanCard 
              name="Conta Empresarial"
              resources="1.550"
              features={[
                '✅ Tudo do plano normal',
                '✅ Analytics detalhados',
                '✅ Agendamento de posts',
                '✅ Equipe colaborativa',
                '✅ Monetização',
                '✅ API access'
              ]}
              price="Premium"
              highlighted
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card text-center">
      <div className="text-primary mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PlanCard({ name, resources, features, price, highlighted }) {
  return (
    <div className={`card border-2 ${highlighted ? 'border-primary scale-105' : 'border-gray-200'}`}>
      {highlighted && <div className="bg-primary text-white px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">POPULAR</div>}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-4xl font-bold text-primary mb-4">{resources}</p>
      <p className="text-sm text-gray-600 mb-4">recursos disponíveis</p>
      <p className="text-lg font-semibold mb-6">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-gray-700">{feature}</li>
        ))}
      </ul>
      <button className={highlighted ? 'btn-primary w-full' : 'btn-outline w-full'}>
        Escolher Plano
      </button>
    </div>
  )
}
