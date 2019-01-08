import shop from '@/api/shop'

export const state = () => ({
  //data
  products: [],
  //{id. quantity}
  cart:[],
  checkoutStatus:null
})

export const getters = {
  //computed props
  availableProducts(state, getters) {
    return state.products.filter(product => product.inventory > 0)
  },
  cartProducts (state) {
   return state.cart.map(cartItem => {
      const product = state.products.find(product => product.id === cartItem.id)
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      }
    })
  },
  cartTotal(state, getters){
    return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
  },
  productIsInStock(){
    return(product) => {
      return product.inventory > 0
    }
  }
}

export const actions = {
  //methods 
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      shop.getProducts(products => {
        commit('setProducts', products)
        resolve()
      })
    })
  },
  addProductToCart({state, getters, commit}, product){
      // is there a product
      if(getters.productIsInStock(product)){
        const cartItem = state.cart.find(item => item.id === product.id)
        //if there is no cart item pushProductToCart
        if(!cartItem){
            commit('pushProductToCart', product.id)
        // other wise incrementItemQuantity
        }else{
            commit('incrementItemQuantity', cartItem)
        }
        // decrementProductInventory avoid duplicate
        commit('decrementProductInventory', product)
      }
  },
  checkout({state, commit}) {
    shop.buyProducts(
      state.cart,
      ()=> {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      },
      ()=>{
        commit('setCheckoutStatus', 'fail')
      }
    )
  }
}


export const mutations = {
  setProducts(state, products) {
    //update state of products
    state.products = products
  },
  pushProductToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },

    decrementProductInventory (state, product) {
      product.inventory--
    },
    setCheckoutStatus(state, status){
      state.checkoutStatus = status
    },
    emptyCart(state){
      state.cart = []
    }
}
