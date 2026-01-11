const CART_KEY = "CART_SESSION";

// تحميل الكارت
function loadCart(){
    const raw = localStorage.getItem(CART_KEY);
    if(!raw) return {};

    try {
        const data = JSON.parse(raw);
        return data.cart || {};
    } catch(e){
        return {};
    }
}

// حفظ الكارت
function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify({
        cart: CART
    }));
}

// مسح الكارت (يدوي فقط)
function clearCart(){
    CART = {};
    localStorage.removeItem(CART_KEY);
}
