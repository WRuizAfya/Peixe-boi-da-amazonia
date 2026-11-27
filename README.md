
# Diário da Horta do Campus

Aplicação web desenvolvida para o controle, registro e consulta histórica das regas realizadas nos canteiros da horta do campus. O sistema permite acompanhar quando cada cultivo recebeu irrigação pela última vez, garantindo rastreabilidade operacional e evitando falhas ou excessos no manejo hídrico.

---

## 1. Contexto Acadêmico

- **Instituição:** Centro Universitário São Lucas (Afya)
- **Disciplina:** Programação para Sistemas Web
- **Tecnologias Base:** React, Vite e JavaScript (ES6+)

---

## 2. Objetivos e Escopo

A gestão manual de irrigação dificulta a verificação rápida de quais canteiros já foram atendidos no dia corrente ou há quanto tempo determinada cultura foi regada. Esta aplicação centraliza os lançamentos em interface web responsiva, estruturada em componentes reutilizáveis, atendendo aos seguintes requisitos funcionais:

- **RF01 — Cadastro de Regas:** Registrar novas operações de rega informando o canteiro, a data da execução, o nome fictício do responsável e uma observação opcional.
- **RF02 — Edição de Regas:** Permitir a alteração de registros previamente cadastrados para correção de dados.
- **RF03 — Listagem Cronológica:** Exibir o histórico completo de regas ordenado da data mais recente para a mais antiga.
- **RF04 — Filtragem por Canteiro:** Disponibilizar seletor para filtrar os registros exibidos de acordo com um canteiro específico.
- **RF05 — Resumo da Última Rega:** Apresentar um painel consolidado contendo os dados da rega mais recente de cada canteiro cadastrado.

---

## 3. Modelagem de Dados

A estrutura de dados da aplicação é composta por duas entidades principais:

### 3.1. Canteiro

| Atributo | Tipo | Obrigatoriedade | Descrição |
| :--- | :--- | :--- | :--- |
| `id` | `number` / `string` | Obrigatório | Identificador único do canteiro. |
| `nome` | `string` | Obrigatório | Designação ou identificação do canteiro no campus. |
| `cultura` | `string` | Obrigatório | Espécie ou cultura vegetal plantada no canteiro. |

### 3.2. Registro de Rega

| Atributo | Tipo | Obrigatoriedade | Descrição |
| :--- | :--- | :--- | :--- |
| `id` | `number` / `string` | Obrigatório | Identificador único do registro de rega. |
| `canteiroId` | `number` / `string` | Obrigatório | Referência ao canteiro em que a rega foi realizada. |
| `data` | `string` (ISO `YYYY-MM-DD`) | Obrigatório | Data em que a rega ocorreu. |
| `responsavel` | `string` | Obrigatório | Nome fictício do integrante que efetuou a rega. |
| `observacao` | `string` | Opcional | Anotações complementares sobre o estado do solo ou cultivo. |

---

## 4. Regras de Negócio

O sistema aplica duas validações obrigatórias no momento do cadastro e da edição de registros:

1. **RN01 — Restrição Temporal:** A data informada para a rega deve ser igual ou anterior à data atual do sistema (`data <= hoje`). Lançamentos com datas futuras são bloqueados.
2. **RN02 — Unicidade Diária por Canteiro:** É permitido apenas **um registro de rega por canteiro em um mesmo dia**. Caso já exista um lançamento para o canteiro selecionado na data informada, o sistema impede o cadastro duplicado.

---

## 5. Arquitetura e Estrutura de Diretórios

O projeto segue a arquitetura modular baseada em componentes e separação de responsabilidades proposta para aplicações React com Vite:

```text
diario-horta-campus/
├── public/                  # Arquivos estáticos públicos
├── src/
│   ├── assets/              # Imagens e recursos importados via código
│   ├── components/          # Componentes específicos do domínio da aplicação
│   │   └── ui/              # Componentes genéricos e reutilizáveis de interface
│   ├── data/                # Dados iniciais de canteiros e registros de exemplo
│   ├── pages/               # Páginas e organização de visualizações
│   ├── App.css              # Estilos específicos do componente raiz
│   ├── App.jsx              # Componente principal e orquestração de estado
│   ├── index.css            # Estilos globais da aplicação
│   └── main.jsx             # Ponto de entrada e montagem no elemento root
├── index.html               # Documento HTML base
├── package.json             # Dependências e scripts do projeto
└── vite.config.js           # Configurações do bundler Vite

```

---

## 6. Instalação e Execução

### 6.1. Pré-requisitos

* **Node.js** (versão LTS recomendada) com gerenciador de pacotes **npm**, ou **Bun** instalado no ambiente.

### 6.2. Execução com npm

```bash
# 1. Clonar o repositório
git clone <url-do-repositorio>

# 2. Acessar o diretório do projeto
cd diario-horta-campus

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor local de desenvolvimento
npm run dev

```

Para gerar os arquivos otimizados de produção:

```bash
npm run build

```

### 6.3. Execução com Bun (Alternativa)

```bash
bun install
bun run dev

```

Após a inicialização do servidor, acesse a aplicação no navegador pelo endereço local exibido no terminal (por padrão, `http://localhost:5173`).

---

## 7. Plano de Testes Funcionais

Para validar a conformidade da aplicação com os requisitos e regras de negócio, execute os casos de teste descritos abaixo:

| Caso de Teste | Procedimento | Resultado Esperado |
| --- | --- | --- |
| **CT01 — Histórico em dias distintos** | Cadastrar duas regas em datas diferentes (ex.: ontem e hoje) para o **Canteiro A**. | Ambos os registros são salvos, listados em ordem decrescente (mais recente primeiro) e o painel de resumo exibe a rega de hoje para o **Canteiro A**. |
| **CT02 — Bloqueio de duplicidade diária** | Tentar cadastrar uma segunda rega na data de hoje para o mesmo **Canteiro A**. | O sistema bloqueia o salvamento e exibe alerta informando que já existe registro para este canteiro nesta data (RN02). |
| **CT03 — Independência entre canteiros** | Cadastrar uma rega na data de hoje para o **Canteiro B**. | O registro é aceito normalmente, pois a restrição de unicidade aplica-se individualmente por canteiro. |
| **CT04 — Validação de data futura** | Tentar cadastrar uma rega com data posterior ao dia atual. | O sistema impede o cadastro por violar a restrição temporal (RN01). |

---

## 8. Integrantes do Grupo

* Alexandre Bruno de Sousa Sutil
* André Vinícius de Sousa
* Caio Gabriel Falcão Nascimento
* Erik Gabriel Dantas Leite
* Gustavo Duque de Oliveira
* João Pedro de Jesus Andrade
* Regieglison Felipe Oliveira Maciel
* Vítor da Silva Mota
* Wenceslau Ruiz
