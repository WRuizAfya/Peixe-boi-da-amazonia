```markdown
# 🌱 Diário da Horta do Campus

Aplicação web desenvolvida para auxiliar a equipe da horta do campus no controle e acompanhamento das regas realizadas em cada canteiro, permitindo consultar rapidamente quando cada cultivo recebeu cuidados pela última vez.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Sobre o Projeto

A gestão manual de regas dificulta saber quais canteiros já foram atendidos no dia ou há quanto tempo cada cultura recebeu água. O **Diário da Horta do Campus** centraliza esses registros em uma interface simples e organizada, permitindo cadastro, edição, filtragem por canteiro e visualização imediata da última rega de cada espaço.

---

## ✨ Funcionalidades

- **Cadastro e Edição de Regas:** Formulário para registrar novas regas ou atualizar registros existentes.
- **Histórico Ordenado:** Listagem completa dos registros ordenada da rega mais recente para a mais antiga.
- **Filtro por Canteiro:** Consulta rápida para visualizar apenas o histórico de um canteiro específico.
- **Resumo da Última Rega:** Painel em destaque exibindo os dados da última rega realizada em cada canteiro.

---

## 🗂️ Modelo de Dados

A aplicação organiza as informações em duas entidades principais:

| Entidade | Campos | Descrição |
| :--- | :--- | :--- |
| **Canteiro** | `nome`, `cultura` | Identificação do canteiro e a cultura plantada no local. |
| **Registro de Rega** | `canteiro`, `data`, `responsavel`, `observacao` | Canteiro atendido, data da rega, nome fictício de quem realizou a rega e observação opcional. |

---

## ⚖️ Regras de Negócio

1. **Validação de Data:** A data da rega deve ser **igual ou anterior à data atual** (`data <= hoje`), impedindo registros futuros.
2. **Limite Diário por Canteiro:** O sistema permite **apenas um registro de rega por canteiro por dia**, evitando duplicidade de lançamentos no mesmo dia para o mesmo espaço.

---

## 🧪 Roteiro de Testes (Critérios de Aceitação)

Para validar o funcionamento das regras e da interface, execute o fluxo abaixo:

- [ ] **1. Histórico em múltiplos dias:** Cadastre duas regas em datas diferentes para o mesmo canteiro.
- [ ] **2. Ordenação e resumo:** Verifique se a listagem exibe o registro mais recente primeiro e se o painel de resumo reflete a última rega desse canteiro.
- [ ] **3. Bloqueio de duplicidade no mesmo dia:** Tente cadastrar uma nova rega para o mesmo canteiro em uma data já registrada e confirme que o sistema impede o cadastro.
- [ ] **4. Independência entre canteiros:** Cadastre uma rega na mesma data para um canteiro diferente e confirme que o registro é aceito normalmente.

---

## 🛠️ Tecnologias e Estrutura do Projeto

O projeto foi estruturado utilizando **React** com **Vite**, seguindo a organização modular de componentes e páginas:

```text
diario-horta-campus/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes específicos da aplicação (formulário, lista, resumo)
│   │   └── ui/          # Componentes reutilizáveis de interface (cards, alertas, botões)
│   ├── data/            # Dados iniciais de canteiros e registros
│   ├── pages/           # Páginas e rotas da aplicação
│   ├── App.jsx          # Componente raiz e configuração de navegação
│   ├── App.css          # Estilos globais da aplicação
│   └── main.jsx         # Ponto de entrada do React
├── index.html
└── package.json

```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* **Node.js** (com `npm`) ou **Bun** instalado na máquina.

### Passo a passo com npm

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Acesse a pasta do projeto
cd diario-horta-campus

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

```

*(Opcional)* Caso utilize **Bun**:

```bash
bun install
bun run dev

```

Após iniciar o servidor, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 👥 Integrantes do Grupo

* Alexandre Bruno de Sousa Sutil
* André Vinícius de Sousa
* Caio Gabriel Falcão Nascimento
* Erik Gabriel Dantas Leite
* Gustavo Duque de Oliveira
* João Pedro de Jesus Andrade
* Regieglison Felipe Oliveira Maciel
* Vítor da Silva Mota
* Wenceslau Ruiz

---

## 🎓 Contexto Acadêmico

Projeto desenvolvido para a disciplina de **Programação para Sistemas Web** — Centro Universitário São Lucas (Afya).

```

Principais melhorias aplicadas ao documento:
* **Correção e padronização técnica:** Ajustes nos termos do enunciado (como a data da rega e a unicidade por canteiro/dia) organizados em tabelas e listas escaneáveis.
* **Alinhamento com o material da disciplina:** Inclusão dos comandos de execução (`npm install`, `npm run dev` e suporte a `Bun`), estrutura de diretórios (`components/ui`, `pages`, `data`) e contexto institucional da disciplina de Programação para Sistemas Web.
* **Roteiro de testes interativo:** Transformação do cenário de teste em uma checklist verificável para facilitar a apresentação e avaliação do grupo[cite: 1, 2, 3, 4, 8, 11, 16].

```
