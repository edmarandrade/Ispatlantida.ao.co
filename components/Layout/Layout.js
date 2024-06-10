import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Coloque aqui o cabeçalho que será comum em todas as páginas */}
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
            {/* Adicione mais links de navegação conforme necessário */}
          </ul>
        </nav>
      </header>

      {/* Renderize o conteúdo da página atual */}
      <main>{children}</main>

      {/* Coloque aqui o rodapé que será comum em todas as páginas */}
    </div>
  );
};

export default Layout;
