const categorias = {
  Almoço: {
    Carnes: [
      {
        imagem: 'carne.webp',
        nome: 'Carne Premium',
        preco: 59,
        precoPromocional: 39.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.Uma carne de qualidade superior, macia e suculenta.Uma carne de qualidade superior, macia e suculenta.Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'carne.webp',
        nome: 'Picanha Maturada',
        preco: 99,
        precoPromocional: 79.99,
        descricao: 'Ai lula',
      },
    ],
    Frango: [
      {
        imagem: 'Topen.webp',
        nome: 'Frango Assado',
        preco: 30,
        precoPromocional: 25.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Frango à Milanesa',
        preco: 35,
        precoPromocional: 29.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
  },
  Bebidas: {
    Refrigerantes: [
      {
        imagem: 'Topen.webp',
        nome: 'Refrigerante Cola',
        preco: 8,
        precoPromocional: 5.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Água Mineral',
        precoPromocional: 2.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
    Vinhos: [
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Tinto Reservado',
        preco: 79,
        precoPromocional: 49.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Branco Seco',
        preco: 69,
        precoPromocional: 44.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
  },
  Sobremesas: {
    Refrigerantes: [
      {
        imagem: 'Topen.webp',
        nome: 'comita',
        preco: 8,
        precoPromocional: 5.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Água Mineral',
        precoPromocional: 2.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
    Vinhos: [
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Tinto Reservado',
        preco: 79,
        precoPromocional: 49.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Branco Seco',
        preco: 69,
        precoPromocional: 44.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
  },
  Sobremes: {
    Refrigerantes: [
      {
        imagem: 'Topen.webp',
        nome: 'comita',
        preco: 8,
        precoPromocional: 5.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Água Mineral',
        precoPromocional: 2.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
    Vinhos: [
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Tinto Reservado',
        preco: 79,
        precoPromocional: 49.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Branco Seco',
        preco: 69,
        precoPromocional: 44.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
  },
  Sobremesa: {
    Refrigerantes: [
      {
        imagem: 'Topen.webp',
        nome: 'comita',
        preco: 8,
        precoPromocional: 5.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Água Mineral',
        precoPromocional: 2.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
    Vinhos: [
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Tinto Reservado',
        preco: 79,
        precoPromocional: 49.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
      {
        imagem: 'Topen.webp',
        nome: 'Vinho Branco Seco',
        preco: 69,
        precoPromocional: 44.99,
        descricao: 'Uma carne de qualidade superior, macia e suculenta.',
      },
    ],
  },
};
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const clearSearchButton = document.getElementById('clear-search-button');
  
  // Adicionando evento para mudanças no campo de pesquisa
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    clearSearchButton.style.display = query ? 'block' : 'none'; // Mostrar ou esconder o botão de limpar

    // Redefinir a categoria e subcategoria para 0 quando o usuário começar a digitar
    resetCategoryAndSubcategory();

    // Filtrar produtos com base na pesquisa
    filterProducts(query);
  });

  // Limpar pesquisa ao clicar no botão de 'X'
  clearSearchButton.addEventListener('click', () => {
    searchInput.value = '';  // Limpar campo de entrada
    clearSearchButton.style.display = 'none';  // Esconder o botão de limpar
    resetCategoryAndSubcategory();  // Resetar categoria e subcategoria
    filterProducts('');  // Exibir todos os produtos
  });

  const categoryButtons = document.querySelectorAll('.category-button');
  
  // Adicionar a classe 'active' ao primeiro botão e exibir os produtos dessa categoria
  if (categoryButtons.length > 0) {
    categoryButtons[0].classList.add('active');
    const firstCategory = categoryButtons[0].classList[1]; // Usando a segunda classe, que é o nome da categoria
    toggleCategory(firstCategory);
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active')); // Remover a classe active de todas as categorias
      button.classList.add('active'); // Adicionar a classe active na categoria clicada
      const category = button.classList[1]; // Usando a segunda classe que é o nome da categoria
      toggleCategory(category);
    });
  });
});

// Função para resetar categoria e subcategoria para a 0
function resetCategoryAndSubcategory() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const subcategoryDropdown = document.querySelector('.subcategory-dropdown');
  const clearSelectionButton = document.querySelector('.clear-selection-button');

  // Remover a classe 'active' de todas as categorias
  categoryButtons.forEach(button => button.classList.remove('active'));

  // Resetando a classe ativa da categoria para o primeiro botão
  if (categoryButtons.length > 0) {
    categoryButtons[0].classList.add('active');
    const firstCategory = categoryButtons[0].classList[1]; // Nome da categoria 0
    toggleCategory(firstCategory);
  }

  // Resetando a subcategoria para a primeira opção
  if (subcategoryDropdown) {
    subcategoryDropdown.selectedIndex = 0;  // "Selecione uma categoria"
  }

  if (clearSelectionButton) {
    clearSelectionButton.style.display = 'none';  // Esconder o botão de limpar
  }
}

// Função para alternar categoria e exibir os produtos
function toggleCategory(category) {
  const mainContainer = document.querySelector('.sub-categorias');
  const subcategories = categorias[category]; // Usando categorias do seu objeto 'categorias'

  mainContainer.innerHTML = ''; // Limpar conteúdo anterior

  // Adicionar dropdown de subcategorias
  const subcategoryDropdownContainer = document.createElement('div');
  subcategoryDropdownContainer.classList.add('subcategory-dropdown-container');
  const subcategoryDropdown = document.createElement('select');
  subcategoryDropdown.classList.add('subcategory-dropdown');

  // Adicionar a opção "Selecione uma categoria"
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Selecione uma categoria';
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  subcategoryDropdown.appendChild(defaultOption);

  // Adicionar as opções de subcategoria
  Object.keys(subcategories).forEach(subcategoria => {
    const option = document.createElement('option');
    option.value = subcategoria;
    option.textContent = subcategoria;
    subcategoryDropdown.appendChild(option);
  });

  // Adicionar o botão de limpar a seleção
  const clearSelectionButton = document.createElement('button');
  clearSelectionButton.textContent = '';
  clearSelectionButton.classList.add('clear-selection-button');
  clearSelectionButton.title = 'Desmarcar subcategoria';
  clearSelectionButton.style.display = 'none'; // Oculto inicialmente

  clearSelectionButton.addEventListener('click', () => {
    subcategoryDropdown.selectedIndex = 0; // Reset para "Selecione"
    displayRandomProducts(subcategories);
    clearSelectionButton.style.display = 'none'; // Ocultar o botão "X"
  });

  subcategoryDropdown.addEventListener('change', () => {
    const selectedSubcategory = subcategoryDropdown.value;
    if (selectedSubcategory) {
      displayProducts(subcategories[selectedSubcategory]);
      clearSelectionButton.style.display = 'inline'; // Mostrar botão "X"
    } else {
      displayRandomProducts(subcategories);
      clearSelectionButton.style.display = 'none'; // Ocultar botão "X"
    }
  });

  subcategoryDropdownContainer.appendChild(subcategoryDropdown);
  subcategoryDropdownContainer.appendChild(clearSelectionButton);
  mainContainer.appendChild(subcategoryDropdownContainer);

  // Exibir produtos aleatórios por padrão
  displayRandomProducts(subcategories);
}


// Função para exibir produtos de forma aleatória
function displayRandomProducts(subcategories) {
  const mainContainer = document.querySelector('.main-container');
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const productContainer = document.createElement('div');
  productContainer.classList.add('products');

  Object.entries(subcategories).forEach(([subcategoria, products]) => {
    const randomProducts = products.slice().sort(() => 0.5 - Math.random()).slice(0, 5);

    randomProducts.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
  <div class="product">
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  });
  productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      if (description.classList.contains('active')) {
        description.classList.remove('active');
      } else {
        description.classList.add('active');
      }        
    });
  });
  mainContainer.appendChild(productContainer);
}

// Função para exibir produtos da subcategoria selecionada
// Função para exibir produtos da subcategoria selecionada
function displayProducts(products) {
  const mainContainer = document.querySelector('.main-container');

  // Limpar produtos anteriores
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const productContainer = document.createElement('div');
  productContainer.classList.add('products');

  if (products && products.length > 0) {
    products.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
      <div class="product">
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;

      productContainer.innerHTML += productHTML;
    });

    // Adicionar evento aos botões "Ver Descrição"
    productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
      button.addEventListener('click', () => {
        const description = button.nextElementSibling;
        if (description.classList.contains('active')) {
          description.classList.remove('active');
        } else {
          description.classList.add('active');
        }        
      });
    });
  } else {
    productContainer.innerHTML = `<p class="no-products active">Nenhum produto disponível nessa subcategoria.</p>`;
  }

  mainContainer.appendChild(productContainer);
}


// Função para filtrar os produtos conforme o texto de pesquisa
function filterProducts(query) {
  const mainContainer = document.querySelector('.main-container');
  const existingProducts = mainContainer.querySelector('.products');
  if (existingProducts) existingProducts.remove();

  const filteredProducts = [];
  
  // Iterar pelas categorias e subcategorias para filtrar os produtos
  Object.entries(categorias).forEach(([category, subcategories]) => {
    Object.entries(subcategories).forEach(([subcategory, products]) => {
      const matchedProducts = products.filter((product) => 
        product.nome.toLowerCase().includes(query)
      );

      if (matchedProducts.length > 0) {
        filteredProducts.push(...matchedProducts);
      }
    });
  });

  if (filteredProducts.length > 0) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('products');

    filteredProducts.forEach((produto) => {
      const precoOriginal = produto.preco
        ? `<p><span class="preco-original">R$${produto.preco.toFixed(2)}</span></p>`
        : '';

      const productHTML = `
        <div class="product">
        <div class="product-img">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <button onclick="addToCart('${produto.nome}', ${produto.precoPromocional.toFixed(2)})">
            <img src="3669464_add_cart_shopping_ic_icon.svg" alt="adicionar no carrinho">
          </button>
        </div>
        <div class="info-product">
          <h3>${produto.nome}</h3>
          <div class="prices">
            <p><span class="preco-promocional">R$${produto.precoPromocional.toFixed(2)}</span></p>
            ${precoOriginal}
          </div>
        </div>
                  <button class="toggle-description-button"><img src="info-icon.svg" alt="Informações da comida"></button>
        <p class="product-description">${produto.descricao}</p>
      </div>
      `;
      productContainer.innerHTML += productHTML;
    });

    productContainer.querySelectorAll('.toggle-description-button').forEach((button) => {
      button.addEventListener('click', () => {
        const description = button.nextElementSibling;
        if (description.classList.contains('active')) {
          description.classList.remove('active');
        } else {
          description.classList.add('active');
        }        
      });
    });

    mainContainer.appendChild(productContainer);

    // Remover a classe active de no-products se algum produto for encontrado
    const noProductElement = mainContainer.querySelector('.no-products');
    if (noProductElement) {
      noProductElement.classList.remove('active');
    }
  } else {
    mainContainer.innerHTML = `<p class="no-products active">Nenhum produto encontrado.</p>`;
  }
}
