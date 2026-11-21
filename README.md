# Eco-Consumo

[Português](#português) · [English](#english)

## Português

### Sobre o projeto

O **Eco-Consumo** é uma plataforma educativa sobre consumo consciente, preservação ambiental e participação cidadã. O site transforma temas ambientais em conteúdos simples e aplicáveis ao cotidiano, com foco especial em Florianópolis, SC.

A experiência apresenta notícias e iniciativas locais, práticas para reduzir impactos ambientais, materiais educativos e projetos que protegem a biodiversidade da ilha, como o Projeto Tamar e o Projeto Lontra.

### Objetivos

- Incentivar escolhas de consumo mais responsáveis.
- Divulgar iniciativas ambientais de Florianópolis.
- Aproximar educação ambiental da rotina das pessoas.
- Valorizar a conservação de praias, matas, rios e fauna costeira.
- Organizar conteúdos confiáveis em uma experiência acessível e responsiva.

### Tecnologias utilizadas

- **React 18** — construção da interface por componentes.
- **Vite 4** — desenvolvimento local e build de produção.
- **JavaScript / JSX** — lógica e composição das páginas.
- **CSS3** — layout responsivo, design system e acessibilidade visual.
- **React Slick** — componentes de carrossel quando necessários.
- **Node.js 24.x** — runtime definido para o projeto e para o deploy.
- **Vercel** — hospedagem e publicação da aplicação.

### Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Para verificar o código:

```bash
npm run lint
```

### Configurar e validar o PostHog

Use Node 24 (`nvm install && nvm use`, se você usa nvm) e Yarn 1:

```bash
yarn install --frozen-lockfile
```

Crie um arquivo `.env.local` na raiz do projeto. Preencha `VITE_POSTHOG_KEY` com o project token público e
`VITE_POSTHOG_HOST` com o host de ingestão do projeto (neste projeto,
`https://us.i.posthog.com`). Reinicie o servidor depois de alterar variáveis.
As variáveis `POSTHOG_CLI_*` não são necessárias para desenvolvimento local.

```bash
yarn build
yarn lint
yarn eslint src/posthog.js src/posthog-logger.js src/main.jsx src/components/Header.jsx src/components/MainContent.jsx --max-warnings 0
yarn dev
```

O projeto ainda não tem suíte de testes automatizados nem script `test`.
Valide as integrações no navegador:

- Clique nos dois CTAs para dicas: `practice_guidance_started`, com `entry_point` igual a `hero` e `closing_banner`.
- Abra as três referências locais: `local_reference_opened`.
- Abra “Aprofundar no tema”: `educational_resource_opened`.
- Abra os dois projetos: `conservation_project_opened`.
- Abra os três recursos da comunidade: `community_resource_opened`.
- Em PostHog → Activity, confira os cinco nomes e suas propriedades.
- Em Logs, filtre por `service.name = eco-consumo-web` e ambiente `development`.
  A inicialização gera `eco-consumo web application started`; os CTAs geram
  `practice guidance started`; os links externos geram `outbound resource opened`.
  Todos usam severidade `INFO`.
- Apenas no servidor de desenvolvimento, acesse `/?posthog_test=error` e depois
  `/?posthog_test=rejection`. Cada URL gera uma falha controlada após três segundos.
  Confira os eventos `$exception` e as ocorrências “Eco-Consumo PostHog smoke test”
  em Error Tracking. Volte para `/` para sair do teste. O código do teste é removido
  do build de produção.

#### Vercel e source maps

Em Vercel → projeto Eco-Consumo → Settings → Environment Variables, configure
`VITE_POSTHOG_KEY` e `VITE_POSTHOG_HOST` em **Production, Preview e Development**.
Esses valores entram no JavaScript durante o build; alterar as variáveis exige
um novo deploy. O arquivo `.env.local` não configura a Vercel.

Para o upload dos source maps, configure também no servidor de build:

- `POSTHOG_CLI_HOST=https://us.posthog.com` (host da API, diferente do host de ingestão).
- `POSTHOG_CLI_PROJECT_ID`: ID numérico em PostHog → Project settings.
- `POSTHOG_CLI_API_KEY`: chave pessoal com escopos `error tracking write` e
  `organization read`. Guarde como segredo na Vercel; nunca use prefixo `VITE_`.

Depois de configurar os valores, defina o **Build Command** da Vercel como
`yarn build:deploy`, mantenha Node **24.x** e Output Directory **dist**.
Esse comando valida as cinco variáveis, gera source maps ocultos, injeta os IDs
nos bundles, faz upload e remove os `.map` após o sucesso. Uma falha no upload
interrompe o deploy. O build local `yarn build` continua disponível sem credenciais
de upload. Publique os mesmos arquivos de `dist` processados pela CLI, sem rodar
outro build por cima.

Após o deploy, confira o upload em Error Tracking → Symbol sets e repita os cliques
no site publicado. Não use o teste de erro em produção.
Referência: [upload de source maps com a CLI oficial](https://posthog.com/docs/error-tracking/upload-source-maps/cli).

### Estrutura principal

```text
src/
├── components/
│   ├── Header.jsx
│   ├── MainContent.jsx
│   └── Navigation.jsx
├── App.jsx
├── App.css
└── main.jsx
```

### Conteúdo e referências

O conteúdo local é organizado por temas: Florianópolis em movimento, educação ambiental, práticas de consumo consciente, conservação da biodiversidade e histórias inspiradoras. Links externos devem apontar para páginas reais das instituições, projetos e veículos responsáveis pelas informações.

## English

### About the project

**Eco-Consumo** is an educational platform about conscious consumption, environmental preservation, and civic participation. The website turns environmental topics into simple, practical content for everyday life, with a special focus on Florianópolis, Santa Catarina, Brazil.

The experience features local news and initiatives, practical ways to reduce environmental impact, educational resources, and projects that protect the island’s biodiversity, including Projeto Tamar and Projeto Lontra.

### Goals

- Encourage more responsible consumption choices.
- Highlight environmental initiatives in Florianópolis.
- Bring environmental education closer to everyday life.
- Promote the preservation of beaches, forests, rivers, and coastal wildlife.
- Organize trusted content in an accessible and responsive experience.

### Technologies

- **React 18** — component-based interface development.
- **Vite 4** — local development and production builds.
- **JavaScript / JSX** — application logic and page composition.
- **CSS3** — responsive layout, design system, and visual accessibility.
- **React Slick** — carousel components when needed.
- **Node.js 24.x** — runtime defined for the project and deployment.
- **Vercel** — application hosting and deployment.

### Running locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

To check the code:

```bash
npm run lint
```

### Main structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── MainContent.jsx
│   └── Navigation.jsx
├── App.jsx
├── App.css
└── main.jsx
```

### Content and references

Local content is organized around Florianópolis in motion, environmental education, conscious consumption practices, biodiversity conservation, and inspiring stories. External links should point to real pages from the institutions, projects, and publishers responsible for the information.
