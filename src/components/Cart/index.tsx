import { useDispatch, useSelector } from 'react-redux'
import { IMaskInput } from 'react-imask'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/redux/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import fechar from '../../assets/images/fechar.png'
import * as S from './style'
import { TabButton } from './style'
import Card from '../Card'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)
  const [payWithCard, setPayWithCard] = useState(false)
  const [payWithCardd, setPayWithCardd] = useState(false)
  const [purchase, { data }] = usePurchaseMutation()
  const [payWith] = useState(false)

  const handleReturnToCart = () => {
    dispatch(close())
    dispatch(clear())
  }
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const confirmDadosReceptor = () => {
    if (
      form.values.receiver.length >= 4 &&
      form.values.endereco.length >= 8 &&
      form.values.city.length >= 4 &&
      form.values.cep.length >= 7
    ) {
      setPayWithCard(true)
    } else {
      alert('preencha seus dados corretamente para continuar')
    }
  }
  const confirmDadosCard = () => {
    if (
      form.values.cardName.length >= 4 &&
      form.values.cardNumber.length >= 16 &&
      form.values.cvv.length >= 3 &&
      form.values.mesVencimento.length >= 2 &&
      form.values.anoVencimento.length >= 1
    ) {
      setPayWithCard(false)
      setPayWithCardd(true)
    } else {
      alert('preencha seus dados corretamente para finalizar o pagamento')
    }
  }
  const form = useFormik({
    initialValues: {
      receiver: '',
      endereco: '',
      city: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      mesVencimento: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      ),
      anoVencimento: Yup.string().when((values, schema) =>
        payWith ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      }).catch((error) => {
        console.error('Erro ao realizar o pedido:', error)
        alert(
          'Ocorreu um erro ao realizar o pedido. Por favor, tente novamente.'
        )
      })
    }
  })

  const getErrorMessage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay
        onClick={() => {
          setShowCheckout(false)
          closeCart()
        }}
      />
      <S.Sidebar>
        {showCheckout ? (
          <>
            <>
              <form onSubmit={form.handleSubmit}>
                <S.Container className={isOpen ? 'is-open' : ''}>
                  {payWithCard ? (
                    <>
                      <Card
                        title={`Pagamento - Valor a Pagar ${parseToBrl(
                          getTotalPrice(items)
                        )}`}
                      >
                        <>
                          <S.FormContainer>
                            <S.InputGroup>
                              <label htmlFor="cardName">Nome do cartão</label>
                              <input
                                type="text"
                                required
                                id="cardName"
                                name="cardName"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.cardName}
                              />
                              <small>
                                {getErrorMessage(
                                  'cardName',
                                  form.errors.cardName
                                )}
                              </small>
                            </S.InputGroup>
                            <S.InputGroupThre>
                              <div>
                                <label htmlFor="cardNumber">
                                  Número do cartão
                                </label>
                                <IMaskInput
                                  className="InputOne"
                                  mask="0000.0000.0000.0000"
                                  type="text"
                                  required
                                  id="cardNumber"
                                  name="cardNumber"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.cardNumber}
                                />
                                <small>
                                  {getErrorMessage(
                                    'cardNumber',
                                    form.errors.cardNumber
                                  )}
                                </small>
                              </div>
                              <div>
                                <label htmlFor="cvv">CVV</label>
                                <IMaskInput
                                  className="InputTwo"
                                  mask="000"
                                  type="text"
                                  required
                                  id="cvv"
                                  name="cvv"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.cvv}
                                />
                                <small>
                                  {getErrorMessage('cvv', form.errors.cvv)}
                                </small>
                              </div>
                            </S.InputGroupThre>
                            <S.InputGroupTwo>
                              <div>
                                <label htmlFor="mesVencimento">
                                  Mês de vencimento
                                </label>
                                <IMaskInput
                                  className="Input"
                                  mask="00"
                                  type="text"
                                  required
                                  id="mesVencimento"
                                  name="mesVencimento"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.mesVencimento}
                                />
                                <small>
                                  {getErrorMessage(
                                    'mesVencimento',
                                    form.errors.mesVencimento
                                  )}
                                </small>
                              </div>
                              <div>
                                <label htmlFor="anoVencimento">
                                  Ano de vencimento
                                </label>
                                <IMaskInput
                                  mask="00"
                                  type="text"
                                  required
                                  id="anoVencimento"
                                  name="anoVencimento"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.anoVencimento}
                                />
                                <small>
                                  {getErrorMessage(
                                    'anoVencimento',
                                    form.errors.anoVencimento
                                  )}
                                </small>
                              </div>
                            </S.InputGroupTwo>
                          </S.FormContainer>

                          <S.GroupButtons>
                            <TabButton
                              type="submit"
                              onClick={() => {
                                confirmDadosCard()
                                form.handleSubmit()
                                dispatch(clear())
                              }}
                            >
                              finalizar pagamento
                            </TabButton>
                            <TabButton onClick={() => setPayWithCard(false)}>
                              voltar para editar endereço
                            </TabButton>
                          </S.GroupButtons>
                        </>
                      </Card>
                    </>
                  ) : (
                    <>
                      {payWithCardd ? (
                        <Card title={`Pedido realizado - ${data?.orderId}`}>
                          <>
                            <S.TextConcluido>
                              <p>
                                Estamos felizes em informar que seu pedido já
                                está em processo de preparação e, em breve, será
                                entregue no endereço fornecido.
                              </p>
                              <p>
                                Gostaríamos de ressaltar que nossos entregadores
                                não estão autorizados a realizar cobranças
                                extras.
                              </p>
                              <p>
                                Lembre-se da importância de higienizar as mãos
                                após o recebimento do pedido, garantindo assim
                                sua segurança e bem-estar durante a refeição.
                              </p>
                              <p>
                                Esperamos que desfrute de uma deliciosa e
                                agradável experiência gastronômica. Bom apetite!
                              </p>
                            </S.TextConcluido>

                            <TabButton
                              onClick={() => {
                                setShowCheckout(false)
                                setPayWithCardd(false)
                                closeCart()
                                handleReturnToCart()
                              }}
                            >
                              concluir
                            </TabButton>
                          </>
                        </Card>
                      ) : (
                        <Card title={'Entrega'}>
                          <S.FormContainer>
                            <S.InputGroup>
                              <label htmlFor="receiver">Quem ira receber</label>
                              <input
                                type="text"
                                required
                                id="receiver"
                                name="receiver"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.receiver}
                              />
                              <small>
                                {getErrorMessage(
                                  'receiver',
                                  form.errors.receiver
                                )}
                              </small>
                            </S.InputGroup>
                            <S.InputGroup>
                              <label htmlFor="endereco">Endereço</label>
                              <input
                                type="text"
                                required
                                id="endereco"
                                name="endereco"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.endereco}
                              />
                              <small>
                                {getErrorMessage(
                                  'endereco',
                                  form.errors.endereco
                                )}
                              </small>
                            </S.InputGroup>
                            <S.InputGroup>
                              <label htmlFor="city">Cidade</label>
                              <input
                                type="text"
                                required
                                id="city"
                                name="city"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.city}
                              />
                              <small>
                                {getErrorMessage('city', form.errors.city)}
                              </small>
                            </S.InputGroup>
                            <S.InputGroupTwo>
                              <div>
                                <label htmlFor="cep">CEP</label>
                                <IMaskInput
                                  className="Input"
                                  mask="00.000-000"
                                  type="text"
                                  required
                                  id="cep"
                                  name="cep"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.cep}
                                />
                                <small>
                                  {getErrorMessage('cep', form.errors.cep)}
                                </small>
                              </div>
                              <div>
                                <label htmlFor="numero">Número</label>
                                <input
                                  type="number"
                                  required
                                  id="numero"
                                  name="numero"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.numero}
                                />
                                <small>
                                  {getErrorMessage(
                                    'numero',
                                    form.errors.numero
                                  )}
                                </small>
                              </div>
                            </S.InputGroupTwo>
                            <S.InputGroup>
                              <label htmlFor="complemento">
                                Complemento (opcional)
                              </label>
                              <input
                                type="text"
                                id="complemento"
                                name="complemento"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.complemento}
                              />
                            </S.InputGroup>
                            <S.GroupButtons>
                              <TabButton
                                type="submit"
                                onClick={() => {
                                  confirmDadosReceptor()
                                }}
                              >
                                continuar com pagamento
                              </TabButton>
                              <TabButton onClick={() => setShowCheckout(false)}>
                                voltar para o carrinho
                              </TabButton>
                            </S.GroupButtons>
                          </S.FormContainer>
                        </Card>
                      )}
                    </>
                  )}
                </S.Container>
              </form>
            </>
          </>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItems key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {parseToBrl(item.preco)}</span>
                  </div>
                  <S.Fechar>
                    <img
                      onClick={() => removeItem(item.id)}
                      className="BtnFechar"
                      src={fechar}
                      alt=""
                    />
                  </S.Fechar>
                </S.CartItems>
              ))}
            </ul>
            <S.ValorTotal>
              <p>Valor Total</p>
              <p>{parseToBrl(getTotalPrice(items))}</p>
            </S.ValorTotal>
            <button
              className="btn"
              title="clique aqui para continuar com a compra"
              type="button"
              onClick={() => {
                if (items.length >= 1) {
                  setShowCheckout(true)
                } else {
                  alert('Não a items para continuar com a compra')
                  closeCart()
                  handleReturnToCart()
                }
              }}
            >
              Continuar Com A Entrega
            </button>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
