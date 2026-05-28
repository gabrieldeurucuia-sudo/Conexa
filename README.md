# 🎵 Vibe Hub - Rede Social de Conexões

**Vibe Hub** é uma rede social moderna que conecta pessoas através de experiências e vibrações. Com suporte para contas normais e empresariais, oferecendo recursos diferenciados para cada tipo de usuário.

## 📊 Estrutura de Recursos

### 👤 Contas Normais
- **1.000 recursos** disponíveis
- Acesso básico a todas as funcionalidades
- Limite de posts, seguidores e mensagens

### 🏢 Contas Empresariais (sem CNPJ)
- **1.550 recursos** disponíveis
- +550 recursos premium adicionais
- Funcionalidades avançadas de analytics
- Maior limite de armazenamento e alcance

## 🚀 Funcionalidades

### Core Features
- ✅ Autenticação e perfil de usuário
- ✅ Timeline/Feed de posts
- ✅ Comentários e reações
- ✅ Sistema de seguindo/seguidores
- ✅ Mensagens privadas
- ✅ Notificações em tempo real
- ✅ Busca e descoberta
- ✅ Trending topics

### Features Premium (Empresas)
- 📊 Analytics detalhados
- 📈 Relatórios de alcance
- 🎯 Segmentação de audiência
- 📅 Agendamento de posts
- 🔐 Controle avançado de privacidade
- 👥 Gerenciamento de equipes

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: React + TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Auth**: JWT + OAuth2
- **Real-time**: WebSocket

## 📁 Estrutura do Projeto

```
vibe-hub/
├── backend/           # API REST
├── frontend/          # Interface Web
├── mobile/           # App Mobile (futuro)
├── docs/             # Documentação
└── config/           # Configurações
```

## 🔧 Como Começar

### Pré-requisitos
- Node.js 18+
- PostgreSQL 13+
- Redis 6+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/gabrieldeurucuia-sudo/Conexa.git
cd Conexa

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Rodar migrations
npm run migrate

# Iniciar servidor
npm run dev
```

## 📚 Documentação

- [API Documentation](./docs/api.md)
- [Database Schema](./docs/database.md)
- [Feature List](./docs/features.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 📝 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes

## 👥 Contribuições

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Desenvolvido com 💜 por Vibe Hub Team**
