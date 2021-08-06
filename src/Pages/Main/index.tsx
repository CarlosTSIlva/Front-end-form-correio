import React from "react";

import { Container } from "./styles";

const MainPage: React.FC = () => {
  return (
    <Container>
      <section>
        <h1>Teste Frontend Octa+</h1>
        <p>
          Esse projeto contem a estrutura básica para ser realizado o desafio,
          já estão instalados alguns pacotes básicos para auxiliar o
          desenvolvimento. Contarão pontos extras o uso de hooks customizados,
          boas praticas de acessibilidade, context api, uso do react-router-dom
          e boas práticas de código. <strong>Boa sorte!</strong>
        </p>
      </section>
    </Container>
  );
};

export default MainPage;
