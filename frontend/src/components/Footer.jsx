export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">🎵 Vibe Hub</h3>
          <p className="text-gray-400">Conecte experiências, compartilhe vibrações</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Produto</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Planos</a></li>
            <li><a href="#" className="hover:text-white transition">Segurança</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Empresa</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Sobre</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition">Termos</a></li>
            <li><a href="#" className="hover:text-white transition">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2026 Vibe Hub. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
