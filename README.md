<h1>Lumio UI ✨</h1>

<p>
  Lumio UI é uma biblioteca de componentes React moderna, leve e reutilizável,
  criada com foco em consistência visual, tipagem forte e experiência de desenvolvedor.
</p>

<p>
  O projeto foi desenvolvido como um design system pessoal com o objetivo de explorar
  arquitetura de bibliotecas frontend, componentização escalável e publicação via npm.
</p>

<h2>🚀 Instalação</h2>

<pre><code>npm install @cainho_dev/lumio-ui</code></pre>

<p>ou</p>

<pre><code>yarn add @cainho_dev/lumio-ui</code></pre>

<h2>📦 Requisitos</h2>

<ul>
  <li>React 18+</li>
  <li>React DOM 18+</li>
  <li>styled-components (caso utilizado)</li>
</ul>

<h2>🔧 Uso</h2>

<pre><code>
import { Button } from "@cainho_dev/lumio-ui";

export function Example() {
  return (
    &lt;Button variant="isPrimary"&gt;
      Clique aqui
    &lt;/Button&gt;
  );
}
</code></pre>

<h2>🎨 Customização de Tema</h2>

<p>
  Lumio UI possui um sistema de tema que permite personalizar cores globais da biblioteca.
  Para isso, basta envolver sua aplicação com o <strong>ThemeProvider</strong>.
</p>

<pre><code>
import { ThemeProvider } from "@cainho_dev/lumio-ui";

export default function App() {
  return (
    &lt;ThemeProvider
      theme={{
        colors: {
          primary: "#FF0000"
        }
      }}
    &gt;
      {/* sua aplicação */}
    &lt;/ThemeProvider&gt;
  );
}
</code></pre>

<p>
  Nesse exemplo, todos os componentes da biblioteca passarão a utilizar
  <strong>vermelho como cor primária</strong>.
</p>

<p>
  Caso nenhum tema seja definido, a biblioteca utilizará automaticamente
  o <strong>tema padrão do Lumio UI</strong>.
</p>

<h2>🎨 Componentes Disponíveis</h2>

<ul>
  <li>Button</li>
  <li>(futuros: Input, Card, Modal, etc.)</li>
</ul>

<h2>🧩 Exemplo de Props (Button)</h2>

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>variant</td>
      <td>string</td>
      <td>Define o estilo visual do botão</td>
    </tr>
    <tr>
      <td>size</td>
      <td>number</td>
      <td>Define o tamanho da fonte</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>boolean</td>
      <td>Desativa o botão</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>function</td>
      <td>Evento de clique</td>
    </tr>
  </tbody>
</table>

<h2>🏗 Estrutura do Projeto</h2>

<pre><code>
src/
 ├─ components/
 │   └─ Button/
 │       ├─ Button.tsx
 │       ├─ Button.types.ts
 │       └─ index.ts
 ├─ theme/
 │   ├─ ThemeProvider.tsx
 │   └─ defaultTheme.ts
 └─ index.ts
</code></pre>

<h2>🔄 Versionamento</h2>

<ul>
  <li>PATCH → Correções</li>
  <li>MINOR → Novas funcionalidades</li>
  <li>MAJOR → Breaking changes</li>
</ul>

<h2>📌 Objetivo do Projeto</h2>

<ul>
  <li>Estudo de arquitetura de bibliotecas React</li>
  <li>Exploração de design systems</li>
  <li>Experiência com build tools (tsup)</li>
  <li>Publicação e versionamento no npm</li>
  <li>Documentação com Storybook</li>
</ul>

<h2>🤝 Contribuição</h2>

<p>
  Contribuições são bem-vindas. Sinta-se à vontade para abrir issues ou pull requests.
</p>
