import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme['gray-800']};

  h2 {
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${({ theme }) => theme['gray-500']};
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1rem;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};

      &:disabled {
        cursor: not-allowed;
        filter: brightness(0.3);
      }

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};

      &:disabled {
        cursor: not-allowed;
        filter: brightness(0.3);
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background-color 0.375s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  border-radius: 50%;
  padding: 4px;
  color: ${({ theme }) => theme['gray-500']};

  &:hover {
    background: ${({ theme }) => theme['red-700']};
    transition: background-color 0.375s;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme['gray-600']};
    transition: background-color 0.375s;
  }
`
