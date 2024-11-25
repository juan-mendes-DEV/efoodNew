import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number // Identificador único do item
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string
}
type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const pratos = state.items.find((item) => item.id === action.payload.id)
      if (!pratos) {
        state.items.push(action.payload)
      } else {
        alert('o prato ja esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remove, clear } = cartSlice.actions
export default cartSlice.reducer
