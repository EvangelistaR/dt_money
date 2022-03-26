import { Container } from "./styles";

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Água e luz</td>
            <td className="withdraw">- R$300</td>
            <td>Custos</td>
            <td>5/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}