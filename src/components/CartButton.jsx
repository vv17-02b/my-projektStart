import React from 'react';

function CartButton({ count = 0, onClick }) {
    return (
        <button className="cart-button" onClick={onClick} aria-label="Open cart">
            🛒
            {count > 0 && <span className="cart-count">{count}</span>}
        </button>
    );
}

export default CartButton;
