import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { TransactionsContext } from '../../../../contexts/transactionsContext'
import { SearchFormContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransaction,
  )

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        disabled={isSubmitting}
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
