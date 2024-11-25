import { CartItem } from '../store/redux/cart'

export const getDescription = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + '...'
  }
  return descricao
}
export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: CartItem[]): number => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return accumulator + currentItem.preco
    }
    return accumulator
  }, 0)
}
