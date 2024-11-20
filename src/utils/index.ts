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
