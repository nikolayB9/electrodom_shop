import {ref, computed} from 'vue'
import axios from "axios";

let cartProducts = ref([])

export default function useCart() {

    cartProducts.value = getProducts()

    function getProducts() {
        return JSON.parse(localStorage.getItem('cart')) ?? []
    }

    function updateStorage() {
        localStorage.setItem('cart', JSON.stringify(cartProducts.value))
    }

    function changeQty(product) {
        const qty = document.getElementById(product.title).value
        if (qty > 0 && qty % 1 === 0) {
            product.qty = qty
        } else {
            product.qty = 1
            document.getElementById(product.title).value = 1
        }
        updateStorage()
    }

    function removeProduct(id) {
        cartProducts.value = cartProducts.value.filter(p => p.id !== id)
        updateStorage()
    }

    function addProduct(product, qty = 1) {
        const {id, title, price, image} = product
        let newProduct = {id, title, price, image, qty}

        cartProducts.value.forEach(product => {
            if (product.id === newProduct.id) {
                product.qty += qty
                newProduct = null
            }
        });

        if (newProduct) {
            cartProducts.value.push(newProduct)
        }

        updateStorage()
    }

    function getDecimalPrice(price) {
        return ((Math.round(price * 100)) / 100).toFixed(2);
    }

    const productsMinData = computed(() => {
        let products = []
        cartProducts.value.forEach(product => {
            products.push({'id': product.id, 'qty': product.qty})
        });
        return products
    })

    const cartTotal = computed(() => {
        const sum = cartProducts.value.reduce(
            (a, p) => a + (Math.round(p.qty * p.price * 100)) / 100,
            0
        )
        return getDecimalPrice(sum)
    })

    const totalQty = computed(() => {
        return cartProducts.value.length
    })

    return {cartProducts, cartTotal, productsMinData, getProducts, updateStorage, changeQty, totalQty, removeProduct, addProduct,
        getDecimalPrice}
}