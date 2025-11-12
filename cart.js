let cart = [];

// 分类按钮功能
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有active状态
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    products.forEach(product => {
      if (category === 'all' || product.getAttribute('data-category') === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});


document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const qty = button.parentElement.querySelector('.qty').value;
    cart.push({ name, qty });
    alert(`${name} 已加入购物车（数量：${qty}）`);
  });
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('您的购物车是空的');
    return;
  }

  const message = cart.map(item => `${item.name} x ${item.qty}`).join('%0A');
  const whatsappURL = `https://wa.me/601161707216?text=您好，我想下单：%0A${message}`;
  window.open(whatsappURL, '_blank');
});
