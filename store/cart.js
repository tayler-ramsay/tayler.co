import shop from '@/api/shop'

export const state = () => ({
  products: [],
  //{id, quantity}
  cart: [],
  checkout: null
}) // data


export const getters = {
  availableProducts(state, getters) {
    // computed props
    return state.products.filter(product => product.inventory > 0);

  },
  cartProducts(state) {
    return state.cart.map(cartItem => {
      const product = state.products.find(product => product.id === cartItem.id)
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      }
    })
  },
  cartTotal(state, getters) {
    return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
  }
}


export const mutations = {
  setProducts(state, products) {
    //update products
    state.products = products
  },
  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },
  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
  },
  decrementProductInventory(state, product) {
    product.inventory--
  }
}

export const actions = {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      // make api call
      //run setProducts mutation
      shop.getProducts(products => {
        commit('setProducts', products)
        resolve()
      });
    })
  },
  addProductToCart(context, product) {
    if (product.inventory > 0) {
      const cartItem = context.state.cart.find(item => item.id === product.id)
      if (!cartItem) {
        context.commit('pushProductToCart', product.id)
      } else {
        context.commit('incrementItemQuantity', cartItem)
      }
      context.commit('decrementProductInventory', product)
    }

  },
  checkout({state, commit}) {
    shop.buyProducts (
      state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
            commit('setCheckoutStatus', 'fail')
        }
    )

  }
}
