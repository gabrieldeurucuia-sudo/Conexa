# 🎵 Vibe Hub - Frontend

Interface web da rede social Vibe Hub desenvolvida com React, TypeScript, Tailwind CSS e Vite.

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
cd frontend
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build

```bash
npm run build
```

## 📁 Estrutura

```
frontend/
├── src/
│   ├── pages/          # Páginas principais
│   ├── components/     # Componentes reutilizáveis
│   ├── store/          # Estado global (Zustand)
│   ├── App.jsx         # Componente raiz
│   ├── main.jsx        # Entrada da aplicação
│   └── index.css       # Estilos globais
├── public/             # Arquivos estáticos
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Tecnologias

- **React 18** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navegação
- **Zustand** - State management
- **Lucide React** - Icons
- **Axios** - HTTP client
- **Socket.io** - Real-time communication

## 📝 Páginas

- **Home** - Página inicial com features
- **Login** - Autenticação
- **Register** - Registro de novo usuário
- **Dashboard** - Feed principal
- **Profile** - Perfil do usuário

## 🔗 API Integration

Os endpoints da API estão mapeados em `vite.config.js` com proxy para `http://localhost:3000`

## 📦 Componentes Principais

- **Navigation** - Barra de navegação
- **Post** - Componente de post
- **Sidebar** - Menu lateral
- **Header** - Cabeçalho da página
- **Footer** - Rodapé

## 🌟 Features

✅ Autenticação com JWT
✅ Criação de posts
✅ Sistema de likes
✅ Perfil de usuário
✅ Tendências
✅ Responsivo (mobile-first)
✅ Dark mode ready

## 📄 Licença

MIT
