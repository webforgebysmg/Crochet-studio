/* =========================================================
   CROCHET STUDIO
   FINAL JAVASCRIPT
   =========================================================

   IMPORTANT:

   The PRODUCT CATALOGUE is at the top.

   When adding future products, you normally only need
   to edit that section.

   ========================================================= */


/* =========================================================
   WEBSITE SETTINGS
   ========================================================= */

const BRAND = "CROCHET Studio";

/*
   Replace this with the actual WhatsApp number.

   IMPORTANT:
   Include country code.
   India = 91

   Example:
   919876543210
*/
const WHATSAPP_NUMBER = "918452942656";


/*
   Replace this with the actual Instagram profile.
*/
const INSTAGRAM_URL = "https://www.instagram.com/crochet__.studio?stkn=OXQ3ejV2dGRzajhv";


/* =========================================================
   PRODUCT CATALOGUE
   =========================================================

   ADD / EDIT PRODUCTS ONLY HERE.

   MULTIPLE IMAGES ARE SUPPORTED.

   Example:

   images: [
       "assets/images/product.jpg",
       "assets/images/product-side.jpg",
       "assets/images/product-closeup.jpg"
   ]

   availability:
       true  = available
       false = unavailable

   ========================================================= */

const products = [

  /* =======================================================
     BOUQUETS
     ======================================================= */

  {
    id: "pink-dream-bouquet",
    name: "Pink Dream Bouquet",
    price: 180,
    category: "Single Flower Bouquets",

    description:
      "A sweet handmade crochet bouquet, thoughtfully created to bring a little colour and warmth to someone's day.",

    images: [
      "assets/images/pink-dream-bouquet.jpg"
    ],

    customization: [
      "Choose your preferred colour",
      "Add a personalised note",
      "Custom wrapping available"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "golden-glow-bouquet",
    name: "Golden Glow Bouquet",
    price: 460,
    category: "Single Flower Bouquets",

    description:
      "A warm handmade crochet bouquet with beautiful golden floral details, made to brighten any occasion.",

    images: [
      "assets/images/golden-glow-bouquet.jpg"
    ],

    customization: [
      "Choose flower colours",
      "Add a personalised note",
      "Custom wrapping available"
    ],

    availability: true,
  },


  {
    id: "whimsical-bloom-bouquet",
    name: "Whimsical Bloom Bouquet",
    price: 1500,
    category: "Bouquets",

    description:
      "A handmade crochet bouquet A beautiful handmade crochet bouquet featuring 1 lily, 3 tulips, 3 daisies, and 4 roses. Perfect for birthdays, anniversaries, or a thoughtful gift for someone special. Each flower is lovingly crafted to create a charming, long-lasting keepsake.",

    images: [
      "assets/images/whimsical-bloom-bouquet.jpg"
    ],

    customization: [
      "Choose flower combination",
      "Choose colour palette",
      "Add a personalised note",
      "Custom wrapping available"
    ],

    availability: true,
    collection: "Premium Bouquet"
  },


  {
    id: "sunshine-garden-bouquet",
    name: "Sunshine Garden Bouquet",
    price: 800,
    category: "Bouquets",

    description:
      "A charming handmade crochet bouquet featuring 1 XL sunflower, 1 daisy, and 3 tulips. Perfect for birthdays, special occasions, or a thoughtful gift for someone special. Each flower is carefully crafted with love to create a beautiful, long-lasting keepsake.",

    images: [
      "assets/images/sunshine-garden-bouquet.jpg"
    ],

    customization: [
      "Choose flower colours",
      "Choose wrapping style",
      "Add a personalised note"
    ],

    availability: true,
    collection: "Premium Bouquet"
  },


  {
    id: "sweet-heart-bloom-bouquet",
    name: "Sweet Heart Bloom Bouquet",
    price: 350,
    category: "Bouquets",

    description:
      "A charming handmade crochet bouquet featuring sweet floral details and heart-inspired elements.",

    images: [
      "assets/images/sweetheart-bloom-bouquet.jpg",
      "assets/images/sweetheart-bloom2-bouquet.jpg",
    ],

    customization: [
      "Choose flower colours",
      "Add a personalised note",
      "Custom wrapping available"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "sunshine-bouquet",
    name: "Sunshine Bouquet",
    price: 180,
    category: "Single Flower Bouquets",

    description:
      "A bright handmade crochet sunflower bouquet, perfect as a small thoughtful gift.",

    images: [
      "assets/images/sunshine-bouquet.jpg"
    ],

    customization: [
      "Add a personalised note"
    ],

    availability: true,
    collection: "Bestsellers"
  },

   {
    id: "blooming-rainbow-bouquet",
    name: "Blooming Rainbow Bouquet",
    price: 2300,
    category: "Bouquets",

    description:
      "Handmade Crochet Bouquet: A beautiful handmade crochet bouquet featuring 1 lily, 2 lavender stems, 2 sunflowers, 5 roses, and 7 tulips. Perfect for birthdays, anniversaries, or a thoughtful gift for someone special. Each flower is crafted with love to create a long-lasting keepsake.",

    images: [
      "assets/images/blooming-rainbow-bouquet.jpg",
      "assets/images/blooming-rainbow-bouquet1.jpg",
      "assets/images/blooming-rainbow-bouquet2.jpg"
    ],

    customization: [
      "Add a personalised note"
    ],

    availability: true,
    collection: "Premium Bouquet"
  },



  /* =======================================================
     CROCHET KEYCHAINS
     ======================================================= */

  {
    id: "sweetheart-keychain",
    name: "Sweetheart",
    price: 100,
    category: "Crochet Keychains",

    description:
      "A cute handmade crochet heart keychain, perfect for keys, bags and thoughtful little gifts.",

    images: [
      "assets/images/sweetheart-keychain.jpg",
      "assets/images/sweetheart-keychain1.jpg",
    ],

    customization: [
      "Choose colour",
      "Custom colour combination available"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "fish-cake-keychain",
    name: "Fish Cake",
    price: 130,
    category: "Crochet Keychains",

    description:
      "A cheerful handmade crochet fish cake keychain.",

    images: [
      "assets/images/fish-cake-keychain.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "tulip-twist-keychain",
    name: "Tulip Twist",
    price: 110,
    category: "Crochet Keychains",

    description:
      "A delicate handmade crochet tulip keychain.",

    images: [
      "assets/images/tulip-twist-keychain.jpg",
      "assets/images/tulip-twist-keychain2.jpg",
    ],

    customization: [
      "Choose tulip colour"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "rosie-bloom-keychain",
    name: "Rosie Bloom",
    price: 110,
    category: "Crochet Keychains",

    description:
      "A beautiful handmade crochet rose keychain.",

    images: [
      "assets/images/rosie-bloom-keychain.jpg"
    ],

    customization: [
      "Choose rose colour"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "keychain-cherry",
    name: "Crochet Cherry",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A playful handmade crochet cherry keychain.",

    images: [
      "assets/images/keychain-cherry.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "blossom-berry-keychain",
    name: "Blossom Berry",
    price: 150,
    category: "Crochet Keychains",

    description:
      "A cute handmade crochet strawberry paired with a delicate white crochet flower.",

    images: [
      "assets/images/blossom-berry-keychain.jpg"
    ],

    customization: [

    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "bat-stitch-keychain",
    name: "Bat Stitch",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A cute handmade crochet bat stitch keychain.",

    images: [
      "assets/images/bat-stitch-keychain.jpg"
    ],

    customization: [
      "Choose colour"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "tommy-tomato-keychain",
    name: "Tommy Tomato",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A fun handmade crochet tomato keychain.",

    images: [
      "assets/images/tommy-tomato-keychain.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "white-sakura-keychain",
    name: "White Sakura",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A playful handmade crochet white flower keychain.",

    images: [
      "assets/images/white-sakura-keychain.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "bluebell-keychain",
    name: "Bluebell",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A cute handmade crochet Bluebell keychain.",

    images: [
      "assets/images/bluebell-keychain.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "cherry-petal-keychain",
    name: "Cherry Petal",
    price: 130,
    category: "Crochet Keychains",

    description:
      "A bright handmade crochet cherry petal keychain.",

    images: [
      "assets/images/cherry-petal-keychain.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  {
    id: "Daisy-dreamwrap-keychain",
    name: "Daisy Dream Wrap",
    price: 120,
    category: "Crochet Keychains",

    description:
      "A tiny handmade crochet flower keychain.",

    images: [
      "assets/images/daisy-dreamwrap-keychain.jpg"
    ],

    customization: [
      "Choose flower colour"
    ],

    availability: true,
    collection: "Bestsellers"
  },




  {
    id: "keychain-chocochip-cookie",
    name: "Crochet Chocochip Cookie",
    price: 150,
    category: "Crochet Keychains",

    description:
      "A fun handmade crochet chocolate chip cookie keychain.",

    images: [
      "assets/images/keychain-chocochip-cookie.jpg"
    ],

    customization: [
      "Choose colour combination"
    ],

    availability: true,
    collection: "Bestsellers"
  },


  /* =======================================================
     FUTURE PRODUCTS

     COPY THIS BLOCK WHEN YOU ADD A NEW PRODUCT.

     YOU CAN HAVE 50, 100 OR MORE PRODUCTS.

     ======================================================= */

  
  {
    id: "golden-sunshine-pot",
    name: "Golden Sunshine Pot",
    price: 400,
    category: "Crochet Flower Pots",

    description:
      "A charming handmade crochet sunflower pot that adds a cheerful splash of sunshine and warmth to any space.",

    images: [
      "assets/images/golden-sunshine-pot.jpg",
    ],

    customization: [
      "Choose colour",
      "Add personalised note",
      "NO. OF FLOWERS"
    ],

    availability: true,
    collection: "Flower Pots"
  },


  {
    id: "lilac-lily",
    name: "Lilac lily",
    price: 250,
    category: "Single Flowers",

    description:
      "Delicate lilac crochet lilies, handcrafted to bring a dreamy touch of elegance to any moment.",

    images: [
      "assets/images/lilac-lily1.jpg",
      "assets/images/lilac-lily2.jpg",
    ],

    customization: [
      "Choose colour",
      "Add personalised note",
    ],

    availability: true,
    collection: "Bestsellers"
  },


   {
    id: "ruby-tulip-wrap",
    name: "Ruby Tulip Wrap",
    price: 220,
    category: "Single Flower Bouquets",

    description:
      "A beautifully wrapped ruby-red crochet tulip, perfect for expressing love through a thoughtful little gift.",

    images: [
      "assets/images/ruby-tulip-wrap-single-bouquet.jpg",
      "assets/images/ruby-tulip-wrap-single-bouquet2.jpg",
    ],

    customization: [
      "Choose colour",
      "Add personalised note",
    ],

    availability: true,
    collection: "Single Flower Bouquets"
  },

   {
    id: "scarlet-bloom-single-bouquet",
    name: "Scarlet Bloom",
    price: 180,
    category: "Single Flower Bouquets",

    description:
      "A striking scarlet crochet flower, lovingly handmade to make special moments unforgettable.",

    images: [
      "assets/images/scarlet-bloom-single-bouquet.jpg",
      "assets/images/scarlet-bloom-single-bouquet2.jpg",
    ],

    customization: [
      "Choose colour",
      "Add personalised note",
    ],

    availability: true,
    collection: "Bestselllers"
   }, 
    
    {
    id: "sunny-flower",
    name: "Sunny FLower",
    price: 250,
    category: "Single Flowers",

    description:
      "A cheerful crochet bloom that brings a little sunshine, colour, and happiness wherever it goes.",

    images: [
      "assets/images/sunny-flower1.jpg",
      "assets/images/sunny-flower2.jpg",
    ],

    customization: [
      "Choose colour",
      "Add personalised note",
    ],

    availability: true,
    collection: "Bestsellers"
  },

  /*
  {
    id: "new-product-002",
    name: "Another Product",
    price: 499,
    category: "Bouquets",

    description:
      "Product description here.",

    images: [
      "assets/images/another-product.jpg"
    ],

    customization: [
      "Choose colour",
      "Custom wrapping available"
    ],

    availability: true,
    collection: "Season Special"
  },
  */

];


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let cart = [];

let selectedProduct = null;

let cartLineId = 0;

let currentProducts = [...products];

let currentImageIndex = 0;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const grid =
  document.getElementById("product-grid");

const sidebar =
  document.getElementById("sidebar");

const overlay =
  document.getElementById("overlay");

const cartPanel =
  document.getElementById("cart-panel");

const modal =
  document.getElementById("product-modal");

const modalImage =
  document.getElementById("modal-image");

const modalDots =
  document.getElementById("gallery-dots");

const customFields =
  document.getElementById("custom-fields");


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderCategories();

  renderProducts(products);

  setupNavigation();

  setupSearch();

  setupCart();

  setupModal();

  setupQuantity();

  setupSpecialButtons();

  document.getElementById("instagram-link").href =
    INSTAGRAM_URL;

});


/* =========================================================
   CATEGORY MENU
   ========================================================= */

function renderCategories() {

  const menu =
    document.getElementById("category-menu");

  const categories =
    [...new Set(products.map(product => product.category))];

  menu.innerHTML = `
    <button data-category="all">
      All products
    </button>
  `;

  categories.forEach(category => {

    const button =
      document.createElement("button");

    button.dataset.category = category;

    button.textContent = category;

    menu.appendChild(button);

  });

  menu.querySelectorAll("[data-category]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const category =
          button.dataset.category;

        closeSidebar();

        if (category === "all") {

          renderProducts(products);

          updateListing(
            "Explore our collections.",
            "Find a little something to love."
          );

          return;
        }

        const filtered =
          products.filter(
            product => product.category === category
          );

        renderProducts(filtered);

        updateListing(
          category,
          `Explore our ${category.toLowerCase()}.`
        );

      });

    });

}


/* =========================================================
   PRODUCT RENDERING
   ========================================================= */

function renderProducts(list) {

  currentProducts = [...list];

  const availableProducts =
    list.filter(product => product.availability !== false);

  document.getElementById("result-count").textContent =
    `${list.length} ${list.length === 1 ? "product" : "products"}`;

  document.getElementById("no-results").hidden =
    list.length !== 0;

  if (!list.length) {

    grid.innerHTML = "";

    return;
  }

  grid.innerHTML =
    list.map(product => createProductCard(product))
      .join("");


  grid.querySelectorAll("[data-product]")
    .forEach(card => {

      card.addEventListener("click", event => {

        if (event.target.closest("button")) {
          return;
        }

        openCustomizer(card.dataset.product);

      });

    });


  grid.querySelectorAll("[data-add]")
    .forEach(button => {

      button.addEventListener("click", event => {

        event.stopPropagation();

        openCustomizer(button.dataset.add);

      });

    });

}


function createProductCard(product) {

  const image =
    product.images && product.images.length
      ? product.images[0]
      : "";

  const isAvailable =
    product.availability !== false;

  const imageHTML =
    image
      ? `
        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.parentElement.classList.add('placeholder'); this.style.display='none'; this.nextElementSibling.style.display='block';"
        >

        <div class="placeholder-content"
             style="display:none;">
          <span>✿</span>
          <small>Photo coming soon</small>
        </div>
      `
      : `
        <div class="placeholder-content">
          <span>✿</span>
          <small>Photo coming soon</small>
        </div>
      `;


  const badge =
    !isAvailable
      ? `<div class="product-badge unavailable">Unavailable</div>`
      : product.collection === "Premium Bouquet"
        ? `<div class="product-badge">Premium</div>`
        : "";


  return `
    <article
      class="product-card"
      data-product="${escapeHTML(product.id)}"
    >

      <div class="product-image">

        ${imageHTML}

        ${badge}

      </div>

      <div class="product-info">

        <p class="eyebrow">
          ${escapeHTML(product.category)}
        </p>

        <h3>
          ${escapeHTML(product.name)}
        </h3>

        <p>
          ${escapeHTML(product.description)}
        </p>

        <div class="product-bottom">

          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          <button
            class="order-button"
            data-add="${escapeHTML(product.id)}"
            ${!isAvailable ? "disabled" : ""}
          >
            ${isAvailable ? "View ↗" : "Unavailable"}
          </button>

        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   PRODUCT CUSTOMIZER
   ========================================================= */

function openCustomizer(id) {

  selectedProduct =
    products.find(product => product.id === id);

  if (!selectedProduct) {
    return;
  }

  if (selectedProduct.availability === false) {
    return;
  }

  currentImageIndex = 0;

  document.getElementById("modal-category").textContent =
    selectedProduct.category;

  document.getElementById("modal-title").textContent =
    selectedProduct.name;

  document.getElementById("modal-description").textContent =
    selectedProduct.description;

  document.getElementById("modal-price").textContent =
    formatPrice(selectedProduct.price);


  document.getElementById("colour-choice").value =
    "As shown / available";

  document.getElementById("item-quantity").value =
    1;

  document.getElementById("item-note").value =
    "";


  renderCustomizationFields();

  renderGallery();

  modal.hidden = false;

  document.body.classList.add("no-scroll");

}


function closeCustomizer() {

  modal.hidden = true;

  selectedProduct = null;

  document.body.classList.remove("no-scroll");

}


function renderCustomizationFields() {

  if (!selectedProduct) {
    return;
  }

  const options =
    selectedProduct.customization || [];

  if (!options.length) {

    customFields.innerHTML = "";

    return;
  }

  customFields.innerHTML = `
    <div class="modal-customization">

      <strong>
        CUSTOMISATION AVAILABLE
      </strong>

      <ul>
        ${options.map(option =>
          `<li>${escapeHTML(option)}</li>`
        ).join("")}
      </ul>

    </div>
  `;

}


/* =========================================================
   PRODUCT GALLERY
   ========================================================= */

function renderGallery() {

  if (!selectedProduct) {
    return;
  }

  const images =
    selectedProduct.images || [];

  if (!images.length) {

    modalImage.style.display = "none";

    document.querySelector(".modal-image-area")
      .classList.add("placeholder");

    modalDots.innerHTML = "";

    return;
  }

  modalImage.style.display = "block";

  document.querySelector(".modal-image-area")
    .classList.remove("placeholder");

  showGalleryImage();

}


function showGalleryImage() {

  const images =
    selectedProduct.images || [];

  if (!images.length) {
    return;
  }

  const image =
    images[currentImageIndex];

  modalImage.src = image;

  modalImage.alt =
    `${selectedProduct.name} image ${currentImageIndex + 1}`;


  modalImage.onerror = () => {

    modalImage.style.display = "none";

  };


  modalDots.innerHTML =
    images.map((_, index) => `
      <button
        class="gallery-dot ${index === currentImageIndex ? "active" : ""}"
        data-gallery-index="${index}"
        aria-label="View image ${index + 1}">
      </button>
    `).join("");


  modalDots.querySelectorAll("[data-gallery-index]")
    .forEach(dot => {

      dot.addEventListener("click", () => {

        currentImageIndex =
          Number(dot.dataset.galleryIndex);

        showGalleryImage();

      });

    });


  const hasMultiple =
    images.length > 1;

  document.getElementById("gallery-prev").style.display =
    hasMultiple ? "block" : "none";

  document.getElementById("gallery-next").style.display =
    hasMultiple ? "block" : "none";

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addSelectedProductToCart() {

  if (!selectedProduct) {
    return;
  }

  const quantity =
    Number(
      document.getElementById("item-quantity").value
    );

  if (
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 20
  ) {

    alert(
      "Please select a quantity between 1 and 20."
    );

    return;
  }


  const options = {

    colour:
      document.getElementById("colour-choice").value,

    note:
      document.getElementById("item-note")
        .value
        .trim()

  };


  cart.push({

    ...selectedProduct,

    lineId:
      ++cartLineId,

    qty:
      quantity,

    options

  });


  renderCart();

  closeCustomizer();

  openCart();

}


/* =========================================================
   CART
   ========================================================= */

function renderCart() {

  const count =
    cart.reduce(
      (sum, item) => sum + item.qty,
      0
    );

  document.getElementById("cart-count")
    .textContent = count;


  const container =
    document.getElementById("cart-items");


  if (!cart.length) {

    container.innerHTML = `
      <div class="empty-cart">

        <span>♡</span>

        <p>Your bag is empty.</p>

        <small>
          Add something handmade to get started.
        </small>

      </div>
    `;

  } else {

    container.innerHTML =
      cart.map(item => `

        <div class="cart-item">

          <div>

            <strong>
              ${escapeHTML(item.name)}
            </strong>

            <p>
              Qty: ${item.qty}
            </p>

            <p>
              Colour: ${escapeHTML(item.options.colour)}
            </p>

            ${
              item.options.note
                ? `<p>Note: ${escapeHTML(item.options.note)}</p>`
                : ""
            }

            <p>
              ${formatPrice(item.price * item.qty)}
            </p>

          </div>

          <button
            class="remove-btn"
            data-remove="${item.lineId}">
            Remove
          </button>

        </div>

      `).join("");


    container
      .querySelectorAll("[data-remove]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const id =
            Number(button.dataset.remove);

          cart =
            cart.filter(
              item => item.lineId !== id
            );

          renderCart();

        });

      });

  }


  const total =
    cart.reduce(
      (sum, item) =>
        sum + (Number(item.price) || 0) * item.qty,
      0
    );


  document.getElementById("cart-total")
    .textContent =
      formatPrice(total);

}


/* =========================================================
   WHATSAPP CHECKOUT
   ========================================================= */

function checkoutWhatsApp() {

  if (!cart.length) {

    alert(
      "Your bag is empty. Add something handmade first."
    );

    return;
  }


  const lines =
    cart.map(item => {

      const details = [

        `Product: ${item.name}`,

        `Quantity: ${item.qty}`,

        `Colour: ${item.options.colour}`,

        item.options.note
          ? `Note: ${item.options.note}`
          : "",

        `Price: ${formatPrice(item.price * item.qty)}`

      ].filter(Boolean);


      return details.join("\n");

    });


  const total =
    cart.reduce(
      (sum, item) =>
        sum + (Number(item.price) || 0) * item.qty,
      0
    );


  const message =
    `Hello ${BRAND}! I'd like to enquire about this order:\n\n` +

    lines.join("\n\n") +

    `\n\nTotal shown: ${formatPrice(total)}` +

    `\n\nPlease confirm the final price, availability, delivery charges and payment details.`;


  sendWhatsApp(message);

}


/* =========================================================
   CUSTOM ORDER
   ========================================================= */

function customOrderWhatsApp() {

  const message =
    `Hello ${BRAND}! I'd like to request a custom crochet order.\n\n` +
    `I'd like to discuss the design, colours, size, quantity and pricing.`;

  sendWhatsApp(message);

}


/* =========================================================
   SEND WHATSAPP
   ========================================================= */

function sendWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

  const searchToggle =
    document.getElementById("search-toggle");

  const searchBar =
    document.getElementById("search-bar");

  const searchInput =
    document.getElementById("search-input");

  const searchClose =
    document.getElementById("search-close");


  searchToggle.addEventListener("click", () => {

    searchBar.hidden =
      !searchBar.hidden;

    if (!searchBar.hidden) {

      searchInput.focus();

    }

  });


  searchClose.addEventListener("click", () => {

    searchBar.hidden = true;

    searchInput.value = "";

    renderProducts(products);

  });


  searchInput.addEventListener("input", () => {

    const query =
      searchInput.value
        .trim()
        .toLowerCase();


    if (!query) {

      renderProducts(products);

      updateListing(
        "Explore our collections.",
        "Find a little something to love."
      );

      return;

    }


    const results =
      products.filter(product => {

        const searchable =
          [
            product.name,
            product.category,
            product.description,
            product.collection
          ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);

      });


    renderProducts(results);

    updateListing(
      `Search: "${searchInput.value}"`,
      `${results.length} matching ${results.length === 1 ? "product" : "products"}.`
    );

  });

}


/* =========================================================
   SPECIAL COLLECTIONS
   ========================================================= */

function setupSpecialButtons() {

  document.querySelectorAll("[data-special]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const special =
          button.dataset.special;

        closeSidebar();

        if (special === "Custom Orders") {

          customOrderWhatsApp();

          return;

        }


        const filtered =
          products.filter(
            product =>
              product.collection === special
          );


        renderProducts(filtered);


        updateListing(
          special,
          `Explore our ${special.toLowerCase()}.`
        );


        document.getElementById("shop")
          .scrollIntoView({
            behavior: "smooth"
          });

      });

    });

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

  document
    .getElementById("menu-open")
    .addEventListener("click", openSidebar);


  document
    .getElementById("menu-close")
    .addEventListener("click", closeSidebar);


  overlay.addEventListener(
    "click",
    closeEverything
  );


  document
    .getElementById("explore")
    .addEventListener("click", () => {

      renderProducts(products);

      updateListing(
        "Explore our collections.",
        "Find a little something to love."
      );

      document.getElementById("shop")
        .scrollIntoView({
          behavior: "smooth"
        });

    });


  document
    .getElementById("clear-filter")
    .addEventListener("click", () => {

      renderProducts(products);

      updateListing(
        "Explore our collections.",
        "Find a little something to love."
      );

      document.getElementById("shop")
        .scrollIntoView({
          behavior: "smooth"
        });

    });


  document
    .getElementById("no-results-reset")
    .addEventListener("click", () => {

      renderProducts(products);

      updateListing(
        "Explore our collections.",
        "Find a little something to love."
      );

    });


  document
    .getElementById("custom-order")
    .addEventListener(
      "click",
      customOrderWhatsApp
    );


  document
    .getElementById("brand")
    .addEventListener("click", event => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

}


function openSidebar() {

  sidebar.classList.add("open");

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


function closeSidebar() {

  sidebar.classList.remove("open");

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");

}


function openCart() {

  cartPanel.classList.add("open");

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


function closeCart() {

  cartPanel.classList.remove("open");

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");

}


function closeEverything() {

  closeSidebar();

  closeCart();

}


/* =========================================================
   CART SETUP
   ========================================================= */

function setupCart() {

  document
    .getElementById("cart-open")
    .addEventListener(
      "click",
      openCart
    );


  document
    .getElementById("cart-close")
    .addEventListener(
      "click",
      closeCart
    );


  document
    .getElementById("checkout")
    .addEventListener(
      "click",
      checkoutWhatsApp
    );


  renderCart();

}


/* =========================================================
   MODAL SETUP
   ========================================================= */

function setupModal() {

  document
    .getElementById("modal-close")
    .addEventListener(
      "click",
      closeCustomizer
    );


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        closeCustomizer();

      }

    }
  );


  document
    .getElementById("add-customised")
    .addEventListener(
      "click",
      addSelectedProductToCart
    );


  document
    .getElementById("gallery-prev")
    .addEventListener(
      "click",
      () => {

        if (!selectedProduct) return;

        const length =
          selectedProduct.images.length;

        currentImageIndex =
          (currentImageIndex - 1 + length) % length;

        showGalleryImage();

      }
    );


  document
    .getElementById("gallery-next")
    .addEventListener(
      "click",
      () => {

        if (!selectedProduct) return;

        const length =
          selectedProduct.images.length;

        currentImageIndex =
          (currentImageIndex + 1) % length;

        showGalleryImage();

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeCustomizer();

        closeEverything();

      }


      if (
        selectedProduct &&
        event.key === "ArrowLeft"
      ) {

        document
          .getElementById("gallery-prev")
          .click();

      }


      if (
        selectedProduct &&
        event.key === "ArrowRight"
      ) {

        document
          .getElementById("gallery-next")
          .click();

      }

    }
  );

}


/* =========================================================
   QUANTITY
   ========================================================= */

function setupQuantity() {

  const input =
    document.getElementById("item-quantity");


  document
    .getElementById("quantity-minus")
    .addEventListener("click", () => {

      const value =
        Number(input.value);

      input.value =
        Math.max(1, value - 1);

    });


  document
    .getElementById("quantity-plus")
    .addEventListener("click", () => {

      const value =
        Number(input.value);

      input.value =
        Math.min(20, value + 1);

    });

}


/* =========================================================
   LISTING TITLE
   ========================================================= */

function updateListing(title, subtitle) {

  document.getElementById("listing-title")
    .innerHTML =
      escapeHTML(title);

  document.getElementById("listing-subtitle")
    .textContent =
      subtitle;

}


/* =========================================================
   HELPERS
   ========================================================= */

function formatPrice(price) {

  return `₹${Number(price || 0).toLocaleString("en-IN")}`;

}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}