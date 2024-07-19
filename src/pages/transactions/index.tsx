import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/searchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 10.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>01/05/1985</td>
            </tr>

            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 10,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>01/05/1985</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
