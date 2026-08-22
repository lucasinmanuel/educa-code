// Exemplos de código por termo e por linguagem.
// Cada arquivo vira uma aba no editor simulado.
window.LANG_LABELS = {
  js: "JavaScript",
  java: "Java",
  python: "Python",
  sql: "SQL"
};

window.EXAMPLES = {
  frontend: {
    js: [
      {
        name: "index.html",
        code: [
          '<!DOCTYPE html>',
          '<html lang="pt-BR">',
          '<head>',
          '  <meta charset="UTF-8">',
          '  <link rel="stylesheet" href="style.css">',
          '</head>',
          '<body>',
          '  <h1>Produtos</h1>',
          '  <button id="carregar">Carregar</button>',
          '  <ul id="lista"></ul>',
          '',
          '  <script src="app.js"></script>',
          '</body>',
          '</html>'
        ].join("\n")
      },
      {
        name: "style.css",
        code: [
          '/* O frontend cuida da aparencia */',
          'body {',
          '  font-family: Arial, sans-serif;',
          '  padding: 24px;',
          '}',
          '',
          'button {',
          '  background: #673ab7;',
          '  color: white;',
          '  padding: 10px 20px;',
          '  border-radius: 8px;',
          '  cursor: pointer;',
          '}'
        ].join("\n")
      },
      {
        name: "app.js",
        code: [
          '// O frontend PEDE os dados. Ele nao os guarda.',
          'const botao = document.getElementById("carregar");',
          'const lista = document.getElementById("lista");',
          '',
          'botao.addEventListener("click", async () => {',
          '  const resposta = await fetch("/api/produtos");',
          '  const produtos = await resposta.json();',
          '',
          '  lista.innerHTML = "";',
          '  produtos.forEach(function (produto) {',
          '    const item = document.createElement("li");',
          '    item.textContent = produto.nome;',
          '    lista.appendChild(item);',
          '  });',
          '});'
        ].join("\n")
      }
    ]
  },

  backend: {
    js: [
      {
        name: "server.js",
        code: [
          '// Backend com Node.js + Express',
          'const express = require("express");',
          'const app = express();',
          '',
          'app.use(express.json());',
          '',
          '// O frontend chama esta rota',
          'app.get("/api/produtos", function (req, res) {',
          '  const produtos = buscarNoBanco();',
          '  res.json(produtos);',
          '});',
          '',
          '// REGRA DE NEGOCIO: so o backend decide isso',
          'app.post("/api/pedidos", function (req, res) {',
          '  if (req.body.quantidade > 10) {',
          '    return res.status(400).json({ erro: "Maximo 10 por pedido" });',
          '  }',
          '  res.status(201).json({ ok: true });',
          '});',
          '',
          'app.listen(3000);'
        ].join("\n")
      }
    ],
    java: [
      {
        name: "ProdutoController.java",
        code: [
          '// Backend com Java + Spring Boot',
          'package com.loja.controller;',
          '',
          'import org.springframework.web.bind.annotation.*;',
          'import org.springframework.http.ResponseEntity;',
          'import java.util.List;',
          '',
          '@RestController',
          '@RequestMapping("/api")',
          'public class ProdutoController {',
          '',
          '    @GetMapping("/produtos")',
          '    public List<Produto> listar() {',
          '        return produtoService.buscarTodos();',
          '    }',
          '',
          '    // REGRA DE NEGOCIO: so o backend decide isso',
          '    @PostMapping("/pedidos")',
          '    public ResponseEntity<?> criar(@RequestBody Pedido pedido) {',
          '        if (pedido.getQuantidade() > 10) {',
          '            return ResponseEntity.badRequest().body("Maximo 10");',
          '        }',
          '        return ResponseEntity.status(201).body(pedido);',
          '    }',
          '}'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "app.py",
        code: [
          '# Backend com Python + Flask',
          'from flask import Flask, request, jsonify',
          '',
          'app = Flask(__name__)',
          '',
          '@app.route("/api/produtos")',
          'def listar():',
          '    produtos = buscar_no_banco()',
          '    return jsonify(produtos)',
          '',
          '# REGRA DE NEGOCIO: so o backend decide isso',
          '@app.route("/api/pedidos", methods=["POST"])',
          'def criar():',
          '    dados = request.get_json()',
          '    if dados["quantidade"] > 10:',
          '        return jsonify(erro="Maximo 10 por pedido"), 400',
          '    return jsonify(ok=True), 201',
          '',
          'app.run(port=3000)'
        ].join("\n")
      }
    ]
  },

  api: {
    js: [
      {
        name: "consumir-api.js",
        code: [
          '// Consumindo uma API externa (o "outro sistema")',
          'async function buscarEndereco(cep) {',
          '  const url = "https://viacep.com.br/ws/" + cep + "/json/";',
          '  const resposta = await fetch(url);',
          '',
          '  if (!resposta.ok) {',
          '    throw new Error("Falha ao consultar a API");',
          '  }',
          '',
          '  const dados = await resposta.json();',
          '  return dados.logradouro + ", " + dados.localidade;',
          '}',
          '',
          '// Nao sabemos COMO os Correios guardam o dado.',
          '// So sabemos PEDIR pela API.',
          'buscarEndereco("01310100").then(console.log);'
        ].join("\n")
      }
    ],
    java: [
      {
        name: "ConsumirApi.java",
        code: [
          'import java.net.http.HttpClient;',
          'import java.net.http.HttpRequest;',
          'import java.net.http.HttpResponse;',
          'import java.net.URI;',
          '',
          'public class ConsumirApi {',
          '',
          '    public static String buscarEndereco(String cep) throws Exception {',
          '        HttpClient client = HttpClient.newHttpClient();',
          '',
          '        HttpRequest request = HttpRequest.newBuilder()',
          '            .uri(URI.create("https://viacep.com.br/ws/" + cep + "/json/"))',
          '            .GET()',
          '            .build();',
          '',
          '        HttpResponse<String> resposta =',
          '            client.send(request, HttpResponse.BodyHandlers.ofString());',
          '',
          '        return resposta.body();',
          '    }',
          '}'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "consumir_api.py",
        code: [
          'import requests',
          '',
          'def buscar_endereco(cep):',
          '    url = "https://viacep.com.br/ws/" + cep + "/json/"',
          '    resposta = requests.get(url)',
          '',
          '    if resposta.status_code != 200:',
          '        raise Exception("Falha ao consultar a API")',
          '',
          '    dados = resposta.json()',
          '    return dados["logradouro"] + ", " + dados["localidade"]',
          '',
          '# Nao sabemos COMO os Correios guardam o dado.',
          '# So sabemos PEDIR pela API.',
          'print(buscar_endereco("01310100"))'
        ].join("\n")
      }
    ]
  },

  "cliente-servidor": {
    js: [
      {
        name: "cliente.js",
        code: [
          '// O CLIENTE sempre comeca a conversa',
          'const resposta = await fetch("http://localhost:3000/produtos");',
          '',
          'console.log(resposta.status);  // 200',
          '',
          'const dados = await resposta.json();',
          'console.log(dados);',
          '',
          '// O servidor NUNCA liga para o cliente do nada.',
          '// Ele so responde quando e chamado.'
        ].join("\n")
      },
      {
        name: "servidor.js",
        code: [
          '// O SERVIDOR fica esperando, parado, ate alguem pedir',
          'const express = require("express");',
          'const app = express();',
          '',
          'app.get("/produtos", function (req, res) {',
          '  console.log("Chegou um pedido!");',
          '',
          '  res.status(200).json([',
          '    { id: 1, nome: "Teclado" },',
          '    { id: 2, nome: "Mouse" }',
          '  ]);',
          '});',
          '',
          'app.listen(3000, function () {',
          '  console.log("Servidor esperando na porta 3000...");',
          '});'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "cliente.py",
        code: [
          'import requests',
          '',
          '# O CLIENTE sempre comeca a conversa',
          'resposta = requests.get("http://localhost:3000/produtos")',
          '',
          'print(resposta.status_code)  # 200',
          'print(resposta.json())',
          '',
          '# O servidor NUNCA liga para o cliente do nada.'
        ].join("\n")
      },
      {
        name: "servidor.py",
        code: [
          'from flask import Flask, jsonify',
          '',
          'app = Flask(__name__)',
          '',
          '# O SERVIDOR fica esperando, parado, ate alguem pedir',
          '@app.route("/produtos")',
          'def produtos():',
          '    print("Chegou um pedido!")',
          '    return jsonify([',
          '        {"id": 1, "nome": "Teclado"},',
          '        {"id": 2, "nome": "Mouse"}',
          '    ]), 200',
          '',
          'app.run(port=3000)'
        ].join("\n")
      }
    ]
  },

  "banco-de-dados": {
    sql: [
      {
        name: "schema.sql",
        code: [
          '-- Cada tabela guarda um tipo de informacao',
          'CREATE TABLE usuarios (',
          '  id    INTEGER PRIMARY KEY,',
          '  nome  TEXT NOT NULL,',
          '  email TEXT UNIQUE NOT NULL',
          ');',
          '',
          'CREATE TABLE pedidos (',
          '  id         INTEGER PRIMARY KEY,',
          '  usuario_id INTEGER NOT NULL,',
          '  valor      REAL NOT NULL,',
          '  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)',
          ');'
        ].join("\n")
      },
      {
        name: "consultas.sql",
        code: [
          '-- Buscar todos os usuarios',
          'SELECT nome, email FROM usuarios;',
          '',
          '-- Buscar um usuario especifico',
          'SELECT * FROM usuarios WHERE email = "ana@email.com";',
          '',
          '-- JUNTAR duas tabelas: quem fez cada pedido',
          'SELECT u.nome, p.valor',
          'FROM pedidos p',
          'JOIN usuarios u ON u.id = p.usuario_id',
          'WHERE p.valor > 100;',
          '',
          '-- Inserir um novo registro',
          'INSERT INTO usuarios (nome, email)',
          'VALUES ("Ana", "ana@email.com");'
        ].join("\n")
      }
    ],
    js: [
      {
        name: "banco.js",
        code: [
          '// O backend conversa com o banco por queries',
          'const db = require("better-sqlite3")("loja.db");',
          '',
          'function buscarUsuarios() {',
          '  return db.prepare("SELECT nome, email FROM usuarios").all();',
          '}',
          '',
          'function criarUsuario(nome, email) {',
          '  const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";',
          '',
          '  // Os "?" evitam SQL Injection. Nunca monte a query com +',
          '  return db.prepare(sql).run(nome, email);',
          '}',
          '',
          'criarUsuario("Ana", "ana@email.com");',
          'console.log(buscarUsuarios());'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "banco.py",
        code: [
          'import sqlite3',
          '',
          'conexao = sqlite3.connect("loja.db")',
          'cursor = conexao.cursor()',
          '',
          'def buscar_usuarios():',
          '    cursor.execute("SELECT nome, email FROM usuarios")',
          '    return cursor.fetchall()',
          '',
          'def criar_usuario(nome, email):',
          '    sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)"',
          '',
          '    # Os "?" evitam SQL Injection. Nunca monte a query com +',
          '    cursor.execute(sql, (nome, email))',
          '    conexao.commit()',
          '',
          'criar_usuario("Ana", "ana@email.com")',
          'print(buscar_usuarios())'
        ].join("\n")
      }
    ]
  },

  dom: {
    js: [
      {
        name: "index.html",
        code: [
          '<body>',
          '  <h1 id="titulo">Ola!</h1>',
          '',
          '  <ul id="lista">',
          '    <li>Item A</li>',
          '  </ul>',
          '',
          '  <button id="btn">Mudar</button>',
          '',
          '  <script src="app.js"></script>',
          '</body>'
        ].join("\n")
      },
      {
        name: "app.js",
        code: [
          '// SELECIONAR um galho da arvore',
          'const titulo = document.getElementById("titulo");',
          'const lista = document.getElementById("lista");',
          '',
          '// LER o que esta nele',
          'console.log(titulo.textContent);  // "Ola!"',
          '',
          'document.getElementById("btn").addEventListener("click", function () {',
          '  // ALTERAR um galho existente',
          '  titulo.textContent = "Texto trocado!";',
          '  titulo.style.color = "purple";',
          '',
          '  // CRIAR um galho novo',
          '  const novoItem = document.createElement("li");',
          '  novoItem.textContent = "Item B";',
          '',
          '  // PENDURAR na arvore',
          '  lista.appendChild(novoItem);',
          '});',
          '',
          '// A pagina muda sem recarregar. Isso e mexer no DOM.'
        ].join("\n")
      }
    ]
  },

  "framework-biblioteca": {
    js: [
      {
        name: "com-biblioteca.js",
        code: [
          '// BIBLIOTECA: VOCE esta no comando.',
          '// Voce decide QUANDO chamar.',
          'import dayjs from "dayjs";',
          '',
          'function meuCodigo() {',
          '  const agora = new Date();',
          '',
          '  // Eu chamo a biblioteca no momento que eu quiser',
          '  const formatada = dayjs(agora).format("DD/MM/YYYY");',
          '',
          '  console.log(formatada);',
          '}',
          '',
          'meuCodigo();'
        ].join("\n")
      },
      {
        name: "com-framework.jsx",
        code: [
          '// FRAMEWORK: ELE esta no comando.',
          '// Voce preenche os espacos e ele chama voce.',
          'import { useState, useEffect } from "react";',
          '',
          'function MeuComponente() {',
          '  const [nome, setNome] = useState("");',
          '',
          '  // O React decide QUANDO rodar isso. Eu nao chamo.',
          '  useEffect(function () {',
          '    console.log("O framework me chamou");',
          '  }, []);',
          '',
          '  // O React decide QUANDO redesenhar. Eu nao chamo.',
          '  return <h1>Ola, {nome}</h1>;',
          '}'
        ].join("\n")
      }
    ],
    java: [
      {
        name: "ComBiblioteca.java",
        code: [
          '// BIBLIOTECA: VOCE esta no comando.',
          'import com.google.gson.Gson;',
          '',
          'public class ComBiblioteca {',
          '    public static void main(String[] args) {',
          '        Gson gson = new Gson();',
          '',
          '        // Eu chamo a biblioteca quando eu quiser',
          '        String json = gson.toJson(new Produto("Mouse", 50.0));',
          '',
          '        System.out.println(json);',
          '    }',
          '}'
        ].join("\n")
      },
      {
        name: "ComFramework.java",
        code: [
          '// FRAMEWORK: ELE esta no comando.',
          'import org.springframework.web.bind.annotation.*;',
          '',
          '@RestController',
          'public class ComFramework {',
          '',
          '    // Eu NUNCA chamo este metodo.',
          '    // O Spring chama quando chega um GET em /ola.',
          '    @GetMapping("/ola")',
          '    public String ola() {',
          '        return "O framework me chamou";',
          '    }',
          '}'
        ].join("\n")
      }
    ]
  },

  deploy: {
    js: [
      {
        name: "package.json",
        code: [
          '{',
          '  "name": "meu-projeto",',
          '  "version": "1.0.0",',
          '  "scripts": {',
          '    "dev": "node server.js",',
          '    "build": "vite build",',
          '    "start": "node server.js"',
          '  }',
          '}'
        ].join("\n")
      },
      {
        name: "Dockerfile",
        code: [
          '# Uma "caixa" com tudo que o projeto precisa para rodar',
          'FROM node:20-alpine',
          '',
          'WORKDIR /app',
          '',
          'COPY package*.json ./',
          'RUN npm install --production',
          '',
          'COPY . .',
          '',
          'EXPOSE 3000',
          'CMD ["npm", "start"]'
        ].join("\n")
      },
      {
        name: "deploy.yml",
        code: [
          '# .github/workflows/deploy.yml',
          '# Roda sozinho a cada push na branch main',
          'name: Deploy',
          '',
          'on:',
          '  push:',
          '    branches: [main]',
          '',
          'jobs:',
          '  publicar:',
          '    runs-on: ubuntu-latest',
          '    steps:',
          '      - uses: actions/checkout@v4',
          '      - run: npm install',
          '      - run: npm run build',
          '      - run: npm run deploy'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "requirements.txt",
        code: [
          'flask==3.0.0',
          'gunicorn==21.2.0',
          'requests==2.31.0'
        ].join("\n")
      },
      {
        name: "Dockerfile",
        code: [
          '# Uma "caixa" com tudo que o projeto precisa para rodar',
          'FROM python:3.12-slim',
          '',
          'WORKDIR /app',
          '',
          'COPY requirements.txt .',
          'RUN pip install -r requirements.txt',
          '',
          'COPY . .',
          '',
          'EXPOSE 8000',
          'CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]'
        ].join("\n")
      }
    ]
  },

  http: {
    js: [
      {
        name: "metodos.js",
        code: [
          '// GET - LER dados (nao muda nada)',
          'await fetch("/api/produtos");',
          '',
          '// POST - CRIAR algo novo',
          'await fetch("/api/produtos", {',
          '  method: "POST",',
          '  headers: { "Content-Type": "application/json" },',
          '  body: JSON.stringify({ nome: "Teclado", preco: 150 })',
          '});',
          '',
          '// PUT - EDITAR algo que ja existe',
          'await fetch("/api/produtos/7", {',
          '  method: "PUT",',
          '  headers: { "Content-Type": "application/json" },',
          '  body: JSON.stringify({ preco: 120 })',
          '});',
          '',
          '// DELETE - APAGAR',
          'await fetch("/api/produtos/7", { method: "DELETE" });'
        ].join("\n")
      },
      {
        name: "status.js",
        code: [
          'const resposta = await fetch("/api/produtos/7");',
          '',
          '// O numero ja diz o que aconteceu',
          'if (resposta.status === 200) {',
          '  console.log("Deu certo");',
          '}',
          '',
          'if (resposta.status === 404) {',
          '  console.log("Nao existe esse produto");',
          '}',
          '',
          'if (resposta.status === 500) {',
          '  console.log("O servidor quebrou");',
          '}',
          '',
          '// 2xx = sucesso',
          '// 4xx = erro de quem pediu',
          '// 5xx = erro do servidor'
        ].join("\n")
      }
    ],
    python: [
      {
        name: "metodos.py",
        code: [
          'import requests',
          '',
          'BASE = "http://localhost:3000/api/produtos"',
          '',
          '# GET - LER dados (nao muda nada)',
          'requests.get(BASE)',
          '',
          '# POST - CRIAR algo novo',
          'requests.post(BASE, json={"nome": "Teclado", "preco": 150})',
          '',
          '# PUT - EDITAR algo que ja existe',
          'requests.put(BASE + "/7", json={"preco": 120})',
          '',
          '# DELETE - APAGAR',
          'requests.delete(BASE + "/7")',
          '',
          'resposta = requests.get(BASE + "/7")',
          'print(resposta.status_code)  # 200, 404 ou 500'
        ].join("\n")
      }
    ]
  }
};
