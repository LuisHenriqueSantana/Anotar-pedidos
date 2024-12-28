let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart)); // Salvar no localStorage
  updateCartDisplay();
}

function removeFromCart(name) {
  const index = cart.findIndex((item) => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Atualizar no localStorage
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById(
    "cart-count"
  ).textContent = `Adicionado: ${cartCount}`;

  const cartElement = document.querySelector(".cart");
  if (cartCount > 0) {
    cartElement.style.display = "flex"; // Mostra o carrinho
    cartElement.classList.add("active"); // Adiciona a classe de animação
  } else {
    cartElement.style.display = "flex"; // Oculta o carrinho
    cartElement.classList.remove("active"); // Remove a classe de animação
  }
}

function clearCart() {
  // Limpa o carrinho e atualiza o localStorage
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  // Atualiza a exibição do carrinho
  updateCartDisplay();
}

function finalizePurchase() {
  // Passa os produtos na URL, cada produto será separado por um "&"
  const queryString = cart
    .map(
      (item) => `product=${encodeURIComponent(item.name)}:${item.price}`
    )
    .join("&");
  // Redireciona para o checkout.html com os parâmetros
  window.location.href = `checkout.html?${queryString}`;
}

// Exemplo de função para inicializar os itens do carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", updateCartDisplay);