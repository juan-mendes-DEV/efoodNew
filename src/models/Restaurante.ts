class Restaurante {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  id: number
  link: string
  nota: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    link: string,
    nota: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.link = link
    this.nota = nota
  }
}
export class RestAdd {
  description: string
  image: string
  link: string
  title: string
  id: number
  type: string
  price: number
  pessoasServida: string
  receita: string

  constructor(
    description: string,
    image: string,
    link: string,
    title: string,
    id: number,
    type: string,
    price: number,
    pessoasServida: string,
    receita: string
  ) {
    this.description = description
    this.image = image
    this.link = link
    this.title = title
    this.id = id
    this.type = type
    this.price = price
    this.pessoasServida = pessoasServida
    this.receita = receita
  }
}

export default Restaurante
