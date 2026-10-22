
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const money = value => new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

  const imageUrl = (id, width = 900) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

  const products = [
    {
      id: "AET001", name: "The Maharani Gold", category: "Bridal",
      price: 18990, oldPrice: 22990, badge: "SIGNATURE",
      colour: "Antique gold & crimson", material: "Silk-inspired festive drape with intricate zari-inspired detailing",
      description: "A statement drape inspired by regal Indian celebrations, created for the moments that deserve to be remembered.",
      image: "photo-1610030469983-98e550d6193c", featured: 1
    },
    {
      id: "AET002", name: "Midnight Banarasi", category: "Banarasi",
      price: 15490, oldPrice: null, badge: "BESTSELLER",
      colour: "Midnight blue", material: "Banarasi-inspired woven-look fabric with traditional gold accents",
      description: "Deep, luminous colour meets timeless occasion dressing in a sophisticated evening statement.",
      image: "photo-1617627143750-d86bc21e42bb", featured: 2
    },
    {
      id: "AET003", name: "Rosewater Romance", category: "Silk",
      price: 12990, oldPrice: null, badge: "",
      colour: "Dusty rose", material: "Silk-inspired drape with a soft lustrous finish",
      description: "An understated romantic palette for intimate celebrations, festive lunches and cherished gatherings.",
      image: "photo-1610030469668-8e9f641aaf7c", featured: 3
    },
    {
      id: "AET004", name: "Emerald Heirloom", category: "Banarasi",
      price: 16990, oldPrice: 19490, badge: "LIMITED EDIT",
      colour: "Emerald green", material: "Traditional-look occasion weave with gold-toned accents",
      description: "Rich emerald tones and a sense of occasion, designed for a wardrobe that outlives trends.",
      image: "photo-1583391733956-6c78276477e8", featured: 4
    },
    {
      id: "AET005", name: "Ivory Moonlight", category: "Silk",
      price: 9990, oldPrice: null, badge: "NEW ARRIVAL",
      colour: "Warm ivory", material: "Silk-inspired lightweight occasion fabric",
      description: "Quiet luxury in its purest form: graceful, versatile and beautifully understated.",
      image: "photo-1610030469983-98e550d6193c", featured: 5
    },
    {
      id: "AET006", name: "The Crimson Muse", category: "Bridal",
      price: 21990, oldPrice: null, badge: "BRIDAL EDIT",
      colour: "Deep crimson", material: "Ceremonial-inspired fabric with elaborate gold-look accents",
      description: "An expressive celebration of colour, crafted in spirit for unforgettable bridal moments.",
      image: "photo-1617627143750-d86bc21e42bb", featured: 6
    },
    {
      id: "AET007", name: "Sandalwood Stories", category: "Linen",
      price: 6490, oldPrice: null, badge: "",
      colour: "Sandalwood beige", material: "Linen-inspired textured fabric",
      description: "Natural tones and relaxed elegance for the woman who finds beauty in simplicity.",
      image: "photo-1610030469668-8e9f641aaf7c", featured: 7
    },
    {
      id: "AET008", name: "Peacock Reverie", category: "Festive",
      price: 11490, oldPrice: null, badge: "POPULAR",
      colour: "Peacock teal", material: "Festive occasion fabric with decorative woven-look accents",
      description: "A vibrant teal statement for festive gatherings, family portraits and joyful occasions.",
      image: "photo-1583391733956-6c78276477e8", featured: 8
    },
    {
      id: "AET009", name: "Champagne Dusk", category: "Silk",
      price: 13990, oldPrice: null, badge: "",
      colour: "Champagne beige", material: "Silk-inspired fabric with a subtle luminous finish",
      description: "Soft champagne tones bring a refined, contemporary mood to traditional occasion wear.",
      image: "photo-1610030469983-98e550d6193c", featured: 9
    },
    {
      id: "AET010", name: "Temple Garden", category: "Banarasi",
      price: 17990, oldPrice: null, badge: "ARTISAN EDIT",
      colour: "Burgundy & gold", material: "Traditional-inspired brocade aesthetic",
      description: "Inspired by the richness of heritage textiles and the grandeur of ceremonial dressing.",
      image: "photo-1617627143750-d86bc21e42bb", featured: 10
    },
    {
      id: "AET011", name: "Lavender Hour", category: "Festive",
      price: 8490, oldPrice: null, badge: "NEW ARRIVAL",
      colour: "Lavender", material: "Lightweight festive fabric with a flowing drape",
      description: "A fresh, modern colour story for celebrations that call for something a little different.",
      image: "photo-1610030469668-8e9f641aaf7c", featured: 11
    },
    {
      id: "AET012", name: "The Ruby Chapter", category: "Bridal",
      price: 24990, oldPrice: null, badge: "PREMIUM",
      colour: "Ruby red", material: "Bridal-inspired statement fabric with decorative detailing",
      description: "A bold, celebratory centrepiece for a wedding wardrobe built around unforgettable moments.",
      image: "photo-1583391733956-6c78276477e8", featured: 12
    },
    {
      id: "AET013", name: "Monsoon Sage", category: "Linen",
      price: 5790, oldPrice: null, badge: "",
      colour: "Sage green", material: "Linen-inspired textured everyday fabric",
      description: "A muted green palette with an effortless character for everyday elegance.",
      image: "photo-1610030469668-8e9f641aaf7c", featured: 13
    },
    {
      id: "AET014", name: "Blue Hour Silk", category: "Silk",
      price: 11990, oldPrice: null, badge: "",
      colour: "Sapphire blue", material: "Silk-inspired fabric with a fluid finish",
      description: "An elegant blue drape that moves easily from a family celebration to an evening gathering.",
      image: "photo-1617627143750-d86bc21e42bb", featured: 14
    },
    {
      id: "AET015", name: "Marigold Poetry", category: "Festive",
      price: 7990, oldPrice: null, badge: "FESTIVE PICK",
      colour: "Marigold yellow", material: "Festive-inspired lightweight occasion fabric",
      description: "Warm, joyful colour inspired by the flowers and traditions of Indian festivities.",
      image: "photo-1583391733956-6c78276477e8", featured: 15
    },
    {
      id: "AET016", name: "Black Orchid", category: "Banarasi",
      price: 19990, oldPrice: null, badge: "EVENING EDIT",
      colour: "Black & antique gold", material: "Evening occasion fabric with brocade-inspired detailing",
      description: "A dramatic, dark palette for evening occasions and those who prefer understated impact.",
      image: "photo-1610030469983-98e550d6193c", featured: 16
    }
  ];

  const STORAGE = {
    cart: "aeterna_cart_v1",
    wishlist: "aeterna_wishlist_v1"
  };

  function readStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  let cart = readStorage(STORAGE.cart, []);
  let wishlist = readStorage(STORAGE.wishlist, []);
  let activeCategory = "All";
  let searchQuery = "";
  let sortMode = "featured";
  let wishlistOnly = false;
  let modalProduct = null;
  let modalQuantity = 1;
  let introFinished = false;
  let toastTimer;

  // Validate saved cart items against the current catalogue.
  cart = Array.isArray(cart)
    ? cart.filter(item =>
        products.some(product => product.id === item.id) &&
        Number.isInteger(item.qty) &&
        item.qty > 0 &&
        item.qty <= 99
      )
    : [];

  wishlist = Array.isArray(wishlist)
    ? wishlist.filter(id => products.some(product => product.id === id))
    : [];

  const productGrid = $("#productGrid");
  const emptyResults = $("#emptyResults");
  const cartDrawer = $("#cartDrawer");
  const uiOverlay = $("#uiOverlay");
  const productModal = $("#productModal");
  const checkoutModal = $("#checkoutModal");
  const searchPanel = $("#searchPanel");
  const searchInput = $("#searchInput");

  function saveState() {
    try {
      localStorage.setItem(STORAGE.cart, JSON.stringify(cart));
      localStorage.setItem(STORAGE.wishlist, JSON.stringify(wishlist));
    } catch {
      showToast("Your browser could not save changes for the next visit.");
    }
  }

  function getProduct(id) {
    return products.find(product => product.id === id);
  }

  function getCartQuantity() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => {
      const product = getProduct(item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  // INTRO
  document.body.classList.add("loading");

  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    $("#intro")?.classList.add("out");
    document.body.classList.remove("loading");
  }

  $("#skipIntro")?.addEventListener("click", finishIntro);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishIntro();
  } else {
    setTimeout(finishIntro, 3500);
  }

  // PRODUCT CATALOGUE
  function getVisibleProducts() {
    let visible = products.filter(product => {
      const categoryMatches =
        activeCategory === "All" || product.category === activeCategory;

      const searchMatches = [
        product.name,
        product.category,
        product.colour,
        product.material,
        product.description,
        product.id
      ].join(" ").toLowerCase().includes(searchQuery.toLowerCase());

      const wishlistMatches =
        !wishlistOnly || wishlist.includes(product.id);

      return categoryMatches && searchMatches && wishlistMatches;
    });

    if (sortMode === "low") visible.sort((a, b) => a.price - b.price);
    if (sortMode === "high") visible.sort((a, b) => b.price - a.price);
    if (sortMode === "name") visible.sort((a, b) => a.name.localeCompare(b.name));
    if (sortMode === "featured") visible.sort((a, b) => a.featured - b.featured);

    return visible;
  }

  function renderProducts() {
    const visible = getVisibleProducts();

    $("#resultsCount").textContent =
      `${visible.length} ${visible.length === 1 ? "piece" : "pieces"}`;

    $$(".category-tab").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.category === activeCategory
      );
    });

    productGrid.innerHTML = visible.map((product, index) => `
      <article class="product-card" style="animation-delay:${Math.min(index * 35, 280)}ms">
        <div class="product-image-wrap" data-action="quick-view" data-id="${product.id}">
          <img
            class="product-image"
            src="${imageUrl(product.image)}"
            alt="${escapeHTML(product.name)} — illustrative saree collection image"
            loading="lazy"
            decoding="async"
          >
          ${product.badge ? `<span class="product-badge">${escapeHTML(product.badge)}</span>` : ""}
          <button
            class="wishlist-button ${wishlist.includes(product.id) ? "is-loved" : ""}"
            data-action="wishlist"
            data-id="${product.id}"
            aria-label="${wishlist.includes(product.id) ? "Remove from" : "Add to"} wishlist: ${escapeHTML(product.name)}"
            aria-pressed="${wishlist.includes(product.id)}"
            type="button"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
            </svg>
          </button>
          <button class="quick-view" data-action="quick-view" data-id="${product.id}" type="button">
            QUICK VIEW <span>↗</span>
          </button>
        </div>
        <div class="product-info">
          <p class="product-category">${escapeHTML(product.category)} COLLECTION</p>
          <div class="product-name-row">
            <h3 class="product-name">${escapeHTML(product.name)}</h3>
            <span class="product-price">${money(product.price)}</span>
          </div>
          <p class="product-description">${escapeHTML(product.colour)}</p>
          <button class="card-add" data-action="add" data-id="${product.id}" type="button">
            ADD TO BAG <span>+</span>
          </button>
        </div>
      </article>
    `).join("");

    emptyResults.hidden = visible.length !== 0;
    productGrid.hidden = visible.length === 0;
  }

  $("#categoryTabs").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    wishlistOnly = false;
    renderProducts();
  });

  $("#sortSelect").addEventListener("change", event => {
    sortMode = event.target.value;
    renderProducts();
  });

  $("#resetFilters").addEventListener("click", () => {
    activeCategory = "All";
    searchQuery = "";
    wishlistOnly = false;
    sortMode = "featured";
    searchInput.value = "";
    $("#sortSelect").value = "featured";
    renderProducts();
  });

  // SEARCH
  $("#searchToggle").addEventListener("click", () => {
    searchPanel.hidden = false;
    searchInput.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#searchClose").addEventListener("click", () => {
    searchPanel.hidden = true;
    searchInput.value = "";
    searchQuery = "";
    renderProducts();
  });

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim();
    wishlistOnly = false;
    renderProducts();
  });

  // WISHLIST
  function toggleWishlist(id) {
    const index = wishlist.indexOf(id);

    if (index >= 0) {
      wishlist.splice(index, 1);
      showToast("Removed from your wishlist.");
    } else {
      wishlist.push(id);
      showToast("Saved to your wishlist.");
    }

    saveState();
    updateHeaderCounts();
    renderProducts();
  }

  $("#wishlistToggle").addEventListener("click", () => {
    wishlistOnly = !wishlistOnly;
    activeCategory = "All";

    if (wishlistOnly) {
      showToast("Showing your saved pieces.");
      $("#collections").scrollIntoView({ behavior: "smooth" });
    } else {
      showToast("Showing the full collection.");
    }

    renderProducts();
  });

  // CART
  function addToCart(id, quantity = 1) {
    const product = getProduct(id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
      if (existing.qty + quantity > 99) {
        showToast("Maximum quantity per piece is 99.");
        return;
      }
      existing.qty += quantity;
    } else {
      cart.push({ id, qty: quantity });
    }

    saveState();
    updateCart();
    showToast(`${product.name} added to your bag.`);
  }

  function changeQuantity(id, change) {
    const item = cart.find(entry => entry.id === id);
    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
      cart = cart.filter(entry => entry.id !== id);
    } else if (item.qty > 99) {
      item.qty = 99;
      showToast("Maximum quantity per piece is 99.");
    }

    saveState();
    updateCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveState();
    updateCart();
    showToast("Piece removed from your bag.");
  }

  function updateHeaderCounts() {
    $("#cartCount").textContent = getCartQuantity();
    $("#wishlistCount").textContent = wishlist.length;
    $("#cartTitleCount").textContent = `(${getCartQuantity()})`;
  }

  function renderCartItems() {
    $("#cartItems").innerHTML = cart.map(item => {
      const product = getProduct(item.id);
      if (!product) return "";

      return `
        <article class="cart-item">
          <img src="${imageUrl(product.image, 300)}" alt="${escapeHTML(product.name)}" loading="lazy">
          <div class="cart-item-details">
            <h3>${escapeHTML(product.name)}</h3>
            <p>${escapeHTML(product.colour)}</p>
            <div class="quantity-control">
              <button type="button" data-action="cart-minus" data-id="${product.id}" aria-label="Decrease ${escapeHTML(product.name)} quantity">−</button>
              <span>${item.qty}</span>
              <button type="button" data-action="cart-plus" data-id="${product.id}" aria-label="Increase ${escapeHTML(product.name)} quantity">+</button>
            </div>
            <button class="remove-item" type="button" data-action="remove" data-id="${product.id}">REMOVE</button>
          </div>
          <span class="cart-item-price">${money(product.price * item.qty)}</span>
        </article>
      `;
    }).join("");
  }

  function updateCart() {
    updateHeaderCounts();
    renderCartItems();

    const subtotal = getSubtotal();
    const isEmpty = cart.length === 0;
    const freeShippingThreshold = 25000;
    const remaining = Math.max(0, freeShippingThreshold - subtotal);

    $("#cartEmpty").classList.toggle("show", isEmpty);
    $("#cartItems").hidden = isEmpty;
    $("#cartFooter").hidden = isEmpty;

    $("#cartSubtotal").textContent = money(subtotal);
    $("#shippingBar").style.width =
      `${Math.min(100, subtotal / freeShippingThreshold * 100)}%`;

    $("#shippingMessage").textContent = isEmpty
      ? "Your next beautiful find awaits."
      : remaining > 0
        ? `You're ${money(remaining)} away from complimentary shipping.`
        : "Complimentary shipping unlocked for this demo.";

    // The shipping threshold is illustrative; configure actual policy before launch.
  }

  // DRAWER / OVERLAY
  let currentPanel = null;

  function openPanel(panel) {
    closePanels(false);
    currentPanel = panel;

    uiOverlay.classList.add("visible");
    document.body.classList.add("ui-locked");

    if (panel === "cart") {
      cartDrawer.classList.add("open");
      cartDrawer.setAttribute("aria-hidden", "false");
      $("#closeCart").focus();
    }

    if (panel === "product") {
      productModal.classList.add("open");
      productModal.setAttribute("aria-hidden", "false");
      $("[data-close-modal]", productModal).focus();
    }

    if (panel === "checkout") {
      checkoutModal.classList.add("open");
      checkoutModal.setAttribute("aria-hidden", "false");
      $("[data-close-modal]", checkoutModal).focus();
    }
  }

  function closePanels(removeLock = true) {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");

    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");

    checkoutModal.classList.remove("open");
    checkoutModal.setAttribute("aria-hidden", "true");

    uiOverlay.classList.remove("visible");
    currentPanel = null;

    if (removeLock) document.body.classList.remove("ui-locked");
  }

  $("#cartToggle").addEventListener("click", () => openPanel("cart"));
  $("#footerCartLink").addEventListener("click", () => openPanel("cart"));
  $("#closeCart").addEventListener("click", () => closePanels());
  $("#continueShopping").addEventListener("click", () => {
    closePanels();
    $("#collections").scrollIntoView({ behavior: "smooth" });
  });

  uiOverlay.addEventListener("click", () => closePanels());

  // QUICK VIEW
  function openProductModal(id) {
    const product = getProduct(id);
    if (!product) return;

    modalProduct = product;
    modalQuantity = 1;

    $("#modalImage").src = imageUrl(product.image, 1000);
    $("#modalImage").alt = `${product.name} — illustrative collection image`;
    $("#modalBadge").textContent = product.badge || product.category;
    $("#modalCategory").textContent = `${product.category} COLLECTION · ${product.id}`;
    $("#modalTitle").textContent = product.name;
    $("#modalPrice").textContent = money(product.price);
    $("#modalDescription").textContent = product.description;
    $("#modalColour").textContent = product.colour;
    $("#modalMaterial").textContent = product.material;
    $("#modalQty").textContent = modalQuantity;
    $("#modalAddPrice").textContent = money(product.price);

    openPanel("product");
  }

  $("#modalQtyMinus").addEventListener("click", () => {
    modalQuantity = Math.max(1, modalQuantity - 1);
    $("#modalQty").textContent = modalQuantity;
    $("#modalAddPrice").textContent = money(modalProduct.price * modalQuantity);
  });

  $("#modalQtyPlus").addEventListener("click", () => {
    modalQuantity = Math.min(99, modalQuantity + 1);
    $("#modalQty").textContent = modalQuantity;
    $("#modalAddPrice").textContent = money(modalProduct.price * modalQuantity);
  });

  $("#modalAdd").addEventListener("click", () => {
    if (!modalProduct) return;
    const id = modalProduct.id;
    const quantity = modalQuantity;

    closePanels();
    addToCart(id, quantity);
  });

  // CHECKOUT
  function openCheckout() {
    if (cart.length === 0) {
      showToast("Your bag is empty. Discover a piece you love first.");
      return;
    }

    $("#checkoutSummary").textContent =
      `${getCartQuantity()} item(s) · ${cart.map(item => {
        const product = getProduct(item.id);
        return `${product.name} × ${item.qty}`;
      }).join(", ")}`;

    $("#checkoutTotal").textContent = money(getSubtotal());
    $("#checkoutStatus").textContent = "";

    closePanels();
    openPanel("checkout");
  }

  $("#checkoutButton").addEventListener("click", openCheckout);

  $("#checkoutForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    // Demonstration only: no order is placed and no payment is collected.
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();

    $("#checkoutStatus").textContent =
      `Thank you, ${name}. This demo is ready for a secure order-processing integration. No order or payment has been submitted.`;

    showToast("Demo checkout validated. No payment taken.");
  });

  // GLOBAL PRODUCT ACTIONS
  document.addEventListener("click", event => {
    const actionElement = event.target.closest("[data-action]");

    if (actionElement) {
      const { action, id } = actionElement.dataset;

      if (action === "wishlist") {
        event.stopPropagation();
        toggleWishlist(id);
        return;
      }

      if (action === "add") {
        event.stopPropagation();
        addToCart(id);
        return;
      }

      if (action === "quick-view") {
        openProductModal(id);
        return;
      }

      if (action === "cart-minus") {
        changeQuantity(id, -1);
        return;
      }

      if (action === "cart-plus") {
        changeQuantity(id, 1);
        return;
      }

      if (action === "remove") {
        removeFromCart(id);
        return;
      }
    }

    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) closePanels();
  });

  $$(".category-feature").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.featureCategory;
      wishlistOnly = false;
      searchQuery = "";
      searchInput.value = "";
      renderProducts();
      $("#collections").scrollIntoView({ behavior: "smooth" });
    });
  });

  $$("[data-footer-category]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      activeCategory = link.dataset.footerCategory;
      wishlistOnly = false;
      renderProducts();
      $("#collections").scrollIntoView({ behavior: "smooth" });
    });
  });

  // MOBILE MENU
  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
  }

  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    mainNav.classList.toggle("open", open);
  });

  $$("#mainNav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePanels();
      closeMenu();
      searchPanel.hidden = true;
    }
  });

  // HEADER SCROLL EFFECT
  const siteHeader = $("#siteHeader");
  const backToTop = $("#backToTop");

  function updateScroll() {
    siteHeader.classList.toggle("scrolled", window.scrollY > 30);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // REVEAL EFFECTS
  const revealTargets = $$(".section-heading, .editorial-copy, .newsletter > div");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal", "visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealTargets.forEach(element => element.classList.add("visible"));
  }

  // NEWSLETTER DEMO
  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    const email = $("#newsletterEmail");

    if (!email.reportValidity()) return;

    $("#newsletterStatus").textContent =
      "Thank you for your interest. Connect a mailing-list service to store subscriptions.";

    showToast("Thank you for joining the Aeterna community.");
    email.value = "";
  });

  // FOOTER YEAR AND INITIAL RENDER
  $("#footerYear").textContent = new Date().getFullYear();

  renderProducts();
  updateCart();
  updateHeaderCounts();
  updateScroll();
});
