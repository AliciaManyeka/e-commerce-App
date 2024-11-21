import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
    const savedCart = localStorage.getItem('cartProducts')
    return {
        products: savedCart ? JSON.parse(savedCart) : [],
        selectedItems:0,
        totalPrice:0,
        tax:0,
        taxRate:0.05,
        grandTotal:0,
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialState(),
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find((product) => product._id === action.payload._id);
            if (!isExist) {
                state.products.push({...action.payload, quantity: 1})
            }
            else {
                isExist.quantity += 1;
                console.log('Item quantity increased');
            }

            state.selectedItems = state.products.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.products.reduce((total, item) => total + (item.price * item.quantity), 0);
            state.tax = state.totalPrice * state.taxRate;
            state.grandTotal = state.totalPrice + state.tax;
        },
        updateQuantity: (state, action) => {
            const products = state.products.map((product) => {
                if(product._id === action.payload.id) {
                    if(action.payload.type === 'increment') {
                        product.quantity += 1;
                    } else if(action.payload.type === 'decrement') {
                        if(product.quantity > 1) {
                            product.quantity -= 1;   
                        }
                    }
                }
                return product;
            });

            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload.id);
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },

        clearCart: (state, action) => {
            state.products = [];
            state.selectedItems = 0;
            state.totalPrice = 0;
            state.tax = 0;
            state.grandTotal = 0;
            localStorage.removeItem('cartProducts');
        }
    }
});

// utilities function
export const setSelectedItems = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity)
}, 0)

export const setTotalPrice = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price)
}, 0)

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTotalPrice(state) * state.taxRate
}

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


