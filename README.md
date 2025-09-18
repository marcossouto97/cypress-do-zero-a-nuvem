# 📌 Projeto de Estudos com Cypress  

Este repositório foi criado para fins de estudo e prática de automações de testes utilizando o **Cypress**.  
O projeto acompanha o conteúdo do curso [**Cypress, do Zero à Nuvem**](https://www.udemy.com/course/testes-automatizados-com-cypress-basico).  

---

## 🚀 Objetivo  
- Aprender os conceitos fundamentais de testes automatizados com Cypress.  
- Praticar boas práticas de automação de testes de interface.  
- Criar uma base sólida para projetos futuros de QA automatizado.  

---

## 🛠️ Tecnologias Utilizadas  
- [Node.js](https://nodejs.org/)  
- [Cypress](https://www.cypress.io/)  

---

## 📂 Estrutura do Projeto  
.
├── cypress
│ ├── e2e # Casos de teste (end-to-end)
│ ├── fixtures # Massa de dados fake (JSON)
│ ├── support # Comandos customizados e configurações
│
├── node_modules # Dependências do projeto
├── cypress.config.js
├── package.json
└── README.md


---

## ▶️ Como Executar o Projeto  

### 1. Clone este repositório  
```bash
git clone https://github.com/marcossouto97/cypress-do-zero-a-nuvem

```


### 2. Instale as dependências

npm install

### 3. Execute o Cypress em modo interativo
npx cypress open


### 4. Execute os testes em modo headless
npx cypress run


### 📖 Aprendizados do Curso

Estrutura de testes no Cypress (describe, it, beforeEach, etc.).

Boas práticas com selectors.

Criação de fixtures para dados mockados.

Uso de comandos customizados para reaproveitamento.

Execução em diferentes navegadores e ambientes.

Integração com CI/CD (GitHub Actions).

### 📌 Status do Projeto

✔️ Em andamento – sendo atualizado conforme avanço no curso.