const CART_KEY = "CART_SESSION";
const CART_TIMEOUT = 1000 * 60 * 60 * 2; // ساعتين

function loadCartWithTimeout(){
    const raw = localStorage.getItem(CART_KEY);
    if(!raw) return {};

    const data = JSON.parse(raw);

    if(!data.time || !data.cart) return {};

        console.log( CART_TIMEOUT)
    if(Date.now() - data.time > CART_TIMEOUT){
        //localStorage.removeItem(CART_KEY);
        return {};
    }

    return data.cart;
}

function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify({
        cart: CART,
        time: Date.now()
    }));
}

function clearCart(){
    localStorage.removeItem(CART_KEY);
    CART = {};
}

