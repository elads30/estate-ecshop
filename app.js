// LuxeMarket App Logic - Premium Store & Cart Management

// Product Catalog Data
const products = [
    {
        id: 'estate-keyboard',
        title: 'מקלדת מכנית Estate Eclipse',
        brand: 'Estate',
        category: 'electronics',
        price: 749,
        rating: 4.9,
        reviews: 142,
        imgClass: 'img-keyboard',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/></svg>`,
        description: 'חוויית הקלדה יוקרתית שאין שנייה לה. מקלדת מכנית מלאה עם גוף אלומיניום תעופתי מכורסם ב-CNC, סוויצ׳ים שקטים בהתאמה אישית ומסך OLED מובנה להצגת סטטוסים וחתימות מותאמות אישית.',
        specs: {
            'סוג מתגים': 'Estate Linear Silent Yellow (משומנים מראש)',
            'חיבור': 'חוטי Type-C / אלחוטי 2.4GHz / Bluetooth 5.1',
            'תאורה': 'RGB מלאה לכל מקש בנפרד',
            'חומר גוף': 'אלומיניום תעופתי 6063',
            'סוללה': '4000mAh (עד 150 שעות ללא תאורה)'
        }
    },
    {
        id: 'estate-cologne',
        title: 'בושם בוטיק Estate Noir Extrait',
        brand: 'Estate',
        category: 'fashion',
        price: 490,
        rating: 4.8,
        reviews: 96,
        imgClass: 'img-fragrance',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 18a6 6 0 0 1 12 0v2H6v-2zM9 10a3 3 0 0 1 6 0v6H9v-6zM12 2v4M10 3h4"/></svg>`,
        description: 'ניחוח יוניסקס עוצמתי וממכר שעוצב במיוחד עבור מותג Estate. שילוב מהפנט של עץ אלגום חם, ענבר עשיר, ונגיעות עדינות של תבלינים שחורים ווניל מדגסקר.',
        specs: {
            'ריכוז': 'Extrait de Parfum (ריכוז שמן גבוה במיוחד)',
            'תווי ראש': 'פלפל שחור, הל, תאנה',
            'תווי לב': 'קשמיר, ארז, סיגליות',
            'תווי בסיס': 'סנדלווד, אמבר, וניל',
            'נפח': '100 מ״ל'
        }
    },
    {
        id: 'estate-speaker',
        title: 'רמקול חכם Estate Horizon Touch',
        brand: 'Estate',
        category: 'home',
        price: 990,
        rating: 4.7,
        reviews: 84,
        imgClass: 'img-smartspeaker',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 10v4M10 12h4"/></svg>`,
        description: 'מרכז הבית החכם שלך בגימור מינימליסטי מרהיב של זכוכית מעוגלת ואלומיניום מוברש. מסך מגע אינטראקטיבי, סאונד היקפי ב-360 מעלות ועוזרת קולית מובנית.',
        specs: {
            'הספק שמע': '60W RMS (סאונד 360 מעלות)',
            'מסך': 'AMOLED Touch בגודל 4 אינץ׳',
            'קישוריות': 'Wi-Fi 6, Bluetooth 5.2, AirPlay 2, Spotify Connect',
            'בית חכם': 'תומך ב-Matter, Apple Home, Google Home',
            'מיקרופונים': 'מערך של 4 מיקרופונים רחוקי שדה WITH ביטול רעשים'
        }
    },
    {
        id: 'estate-headphones',
        title: 'אוזניות ANC אלחוטיות Estate Soundwave Pro',
        brand: 'Estate',
        category: 'electronics',
        price: 1190,
        rating: 4.9,
        reviews: 218,
        imgClass: 'img-headphones',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2m-16 0h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/></svg>`,
        description: 'חוויית שמע עוטפת ונקייה מרעשים. ביטול רעשים אקטיבי היברידי (Hybrid ANC) מתקדם, כריות אוזן מעור כבש אמיתי ודרייברים מותאמים אישית בקוטר 40 מ״מ להפקת שמע ברזולוציה גבוהה.',
        specs: {
            'סוג דרייבר': 'דינמי 40 מ״מ עם דיאפרגמת בריליום',
            'חיי סוללה': 'עד 45 שעות נגינה עם ANC פעיל',
            'טעינה מהירה': '10 דקות טעינה מעניקות 5 שעות נגינה',
            'ביטול רעשים': 'Hybrid ANC עד 42dB',
            'משקל': '260 גרם'
        }
    },
    {
        id: 'shoes-veloce',
        title: 'נעלי ריצה Veloce Cloud',
        brand: 'Veloce',
        category: 'fashion',
        price: 349,
        rating: 4.6,
        reviews: 310,
        imgClass: 'img-shoes',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18h18M6 18c0-4 1-8 6-8s6 4 9 8M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg>`,
        description: 'נעלי ריצה קלות משקל המציעות תמיכה מירבית לכף הרגל הודות לטכנולוגיית סוליית סופגת זעזועים מתקדמת. גפה נושמת מסיבים ממוחזרים.',
        specs: {
            'משקל': '220 גרם (לנעל בודדת)',
            'חומר גפה': 'רשת סרוגה נושמת (Knit Mesh)',
            'שימוש עיקרי': 'ריצת כביש, אימוני חדר כושר',
            'שיכוך': 'קצף EVA מתקדם בעל החזר אנרגטי'
        }
    },
    {
        id: 'watch-chronos',
        title: 'שעון חכם Chronos Titanium',
        brand: 'Chronos',
        category: 'electronics',
        price: 1399,
        rating: 4.8,
        reviews: 175,
        imgClass: 'img-watch',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 2M12 5V2M12 19v3M5 12H2M19 12h3"/></svg>`,
        description: 'שעון ספורט חכם יוקרתי עם גוף עשוי טיטניום טהור וזכוכית ספיר חסינת שריטות. מד דופק מובנה, GPS מדויק ומעקב שינה מתקדם.',
        specs: {
            'חומר גוף': 'טיטניום בדרגה 5',
            'זכוכית': 'קריסטל ספיר (Sapphire Crystal)',
            'עמידות במים': '5ATM (עד 50 מטר עומק)',
            'חיי סוללה': 'עד 14 ימי שימוש רגיל'
        }
    },
    {
        id: 'lamp-lumina',
        title: 'מנורת שולחן Lumina Smart OLED',
        brand: 'Lumina',
        category: 'home',
        price: 249,
        rating: 4.5,
        reviews: 89,
        imgClass: 'img-lamp',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 22h6M12 18v4M6 12a6 6 0 0 1 12 0v6H6v-6zM12 2a3 3 0 0 1 3 3v2H9V5a3 3 0 0 1 3-3z"/></svg>`,
        description: 'מנורת עבודה בעיצוב דק ומינימליסטי. משטח טעינה אלחוטי מובנה בבסיס המנורה, תאורה חמה/קרה מתכווננת וחיישן בהירות אוטומטי.',
        specs: {
            'הספק אור': '800 לומן (מקור אור LED מובנה)',
            'טמפרטורת אור': '2700K - 6500K (מתכוונן)',
            'טעינה אלחוטית': 'תומך ב-Qi Fast Charge עד 15W',
            'חיבור מתח': 'USB Type-C (כלול כבל ומטען קיר)'
        }
    },
    {
        id: 'backpack-nomad',
        title: 'תיק גב חסין מים Nomad Travel 30L',
        brand: 'Nomad',
        category: 'fashion',
        price: 420,
        rating: 4.7,
        reviews: 130,
        imgClass: 'img-backpack',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 20V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 4V2h6v2M12 8v8M9 12h6"/></svg>`,
        description: 'תיק נסיעות מודולרי עשוי בד קורדורה חסין מים. נפח מורחב של 30 ליטר עם תאים ייעודיים למחשב נייד עד 16 אינץ׳, טאבלט, ובגדים לנסיעה קצרה.',
        specs: {
            'נפח': '30 ליטר (ניתן להרחבה ל-35 ליטר)',
            'חומר': 'Cordura 1000D חסין מים ושפשופים',
            'תא מחשב': 'מרופד ומוגן, מתאים ללפטופים עד 16 אינץ׳',
            'משקל': '1.1 ק״ג'
        }
    },
    {
        id: 'espresso-retro',
        title: 'מכונת אספרסו קומפקטית Retro Cafe',
        brand: 'Barista',
        category: 'home',
        price: 649,
        rating: 4.6,
        reviews: 114,
        imgClass: 'img-espresso',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2h12v3H6V2zm1 3v13a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V5H7zm4 7h2M9 15h6"/></svg>`,
        description: 'מכונת אספרסו בעיצוב רטרו אלגנטי המשתלבת נהדר בכל מטבח. לחץ משאבה עוצמתי של 15 בר המבטיח קרמה עשירה, וידית הקצפת חלב מובנית.',
        specs: {
            'לחץ משאבה': '15 בר (15 Bar)',
            'מיכל מים': '1.2 ליטר (נשלף לניקוי קל)',
            'חומר גוף': 'פלדת אל-חלד וגימור אמייל מט',
            'הספק גוף חימום': '1100W (חימום מהיר תוך 40 שניות)'
        }
    }
];

// App State Management
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let appliedPromo = null;

// DOM Elements Cache
const elements = {
    productGrid: document.getElementById('product-grid-container'),
    searchInput: document.getElementById('search-input'),
    searchButton: document.getElementById('search-button'),
    searchSuggestions: document.getElementById('search-suggestions'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeSunIcon: document.getElementById('theme-sun-icon'),
    themeMoonIcon: document.getElementById('theme-moon-icon'),
    cartDrawerTrigger: document.getElementById('cart-drawer-trigger'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartDrawerClose: document.getElementById('cart-drawer-close'),
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartCountBadge: document.getElementById('cart-count-badge'),
    cartTotalQty: document.getElementById('cart-total-qty'),
    cartSubtotalPrice: document.getElementById('cart-subtotal-price'),
    cartDiscountPrice: document.getElementById('cart-discount-price'),
    cartTotalPrice: document.getElementById('cart-total-price'),
    discountDisplayRow: document.getElementById('discount-display-row'),
    discountPercent: document.getElementById('discount-percent'),
    cartFooterSection: document.getElementById('cart-footer-section'),
    checkoutTriggerBtn: document.getElementById('checkout-trigger-btn'),
    checkoutPayTotal: document.getElementById('checkout-pay-total'),
    checkoutModal: document.getElementById('checkout-modal'),
    checkoutCloseBtn: document.getElementById('checkout-close-btn'),
    checkoutCloseOverlay: document.getElementById('checkout-close-overlay'),
    checkoutFormView: document.getElementById('checkout-form-view'),
    checkoutSuccessView: document.getElementById('checkout-success-view'),
    successDoneBtn: document.getElementById('success-done-btn'),
    paymentForm: document.getElementById('payment-form'),
    promoInput: document.getElementById('promo-input'),
    applyPromoBtn: document.getElementById('apply-promo-btn'),
    toastNotification: document.getElementById('toast-notification'),
    toastMessage: document.getElementById('toast-message'),
    quickViewModal: document.getElementById('quick-view-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCloseOverlay: document.getElementById('modal-close-overlay'),
    modalProductDetails: document.getElementById('modal-product-details'),
    viewBrandCollectionBtn: document.getElementById('view-brand-collection-btn'),
    sortSelect: document.getElementById('sort-select'),
    catalogTitle: document.getElementById('catalog-title')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();
    renderProducts();
    setupEventListeners();
    initTheme();
});

// Theme Management (Light/Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.body.className = savedTheme;
    updateThemeIcons(savedTheme === 'dark-theme');
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light-theme' : 'dark-theme';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(!isDark);
}

function updateThemeIcons(isDark) {
    if (isDark) {
        elements.themeSunIcon.classList.remove('hidden');
        elements.themeMoonIcon.classList.add('hidden');
    } else {
        elements.themeSunIcon.classList.add('hidden');
        elements.themeMoonIcon.classList.remove('hidden');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme toggle click
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Category filter buttons
    const categoryBtns = document.querySelectorAll('.nav-category-link');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterByCategory(e.currentTarget.getAttribute('data-category'));
        });
    });

    // View Brand Collection button
    if (elements.viewBrandCollectionBtn) {
        elements.viewBrandCollectionBtn.addEventListener('click', () => {
            const auraNavBtn = document.getElementById('cat-aura');
            if (auraNavBtn) auraNavBtn.click();
        });
    }

    // Sort select box
    elements.sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Search input typing
    elements.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        handleSearchInput();
    });
    
    // Hide search suggestions on document click
    document.addEventListener('click', (e) => {
        if (!elements.searchSuggestions.contains(e.target) && e.target !== elements.searchInput) {
            elements.searchSuggestions.classList.add('hidden');
        }
    });

    // Cart Drawer triggers
    elements.cartDrawerTrigger.addEventListener('click', openCartDrawer);
    elements.cartDrawerClose.addEventListener('click', closeCartDrawer);
    elements.cartDrawerOverlay.addEventListener('click', closeCartDrawer);
    
    const startShoppingBtn = document.getElementById('cart-start-shopping-btn');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', closeCartDrawer);
    }

    // Promo code apply
    elements.applyPromoBtn.addEventListener('click', applyPromoCode);

    // Checkout Trigger
    elements.checkoutTriggerBtn.addEventListener('click', openCheckoutModal);
    elements.checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
    elements.checkoutCloseOverlay.addEventListener('click', closeCheckoutModal);
    elements.successDoneBtn.addEventListener('click', closeCheckoutModal);

    // Quick View Modal Close
    elements.modalCloseBtn.addEventListener('click', closeQuickViewModal);
    elements.modalCloseOverlay.addEventListener('click', closeQuickViewModal);
}

// Render Products Catalog
function renderProducts() {
    let filteredList = [...products];

    // 1. Filter by category
    if (currentCategory === 'estate') {
        filteredList = filteredList.filter(p => p.brand === 'Estate');
    } else if (currentCategory !== 'all') {
        filteredList = filteredList.filter(p => p.category === currentCategory);
    }

    // 2. Filter by search query
    if (searchQuery) {
        const queryLower = searchQuery.toLowerCase();
        filteredList = filteredList.filter(p => 
            p.title.toLowerCase().includes(queryLower) || 
            p.brand.toLowerCase().includes(queryLower) ||
            p.description.toLowerCase().includes(queryLower)
        );
    }

    // 3. Apply sorting
    if (currentSort === 'price-low') {
        filteredList.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filteredList.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filteredList.sort((a, b) => b.rating - a.rating);
    }
    // 'featured' keeps default catalog order

    // Update catalog UI
    elements.productGrid.innerHTML = '';
    
    if (filteredList.length === 0) {
        elements.productGrid.innerHTML = `
            <div class="no-products-state">
                <p>לא נמצאו מוצרים המתאימים לסינון הנוכחי.</p>
            </div>
        `;
        return;
    }

    filteredList.forEach(product => {
        const isAura = product.brand === 'Estate';
        const cardClass = isAura ? 'product-card brand-aura-card' : 'product-card';
        
        const cardHtml = `
            <article class="${cardClass}" id="card-${product.id}">
                ${isAura ? `<span class="brand-badge-tag">Estate</span>` : ''}
                <div class="product-card-image-box">
                    <div class="product-image-placeholder ${product.imgClass}">
                        ${product.svgIcon}
                    </div>
                    <div class="card-quick-view-overlay">
                        <button class="btn btn-sm btn-primary" onclick="quickViewProduct('${product.id}')">תצוגה מהירה</button>
                    </div>
                </div>
                <div class="product-card-details">
                    <span class="product-card-category">${product.brand} | ${translateCategory(product.category)}</span>
                    <h3 class="product-card-title">${product.title}</h3>
                    
                    <div class="rating-container">
                        <span class="stars-gold">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                        <span class="rating-val">${product.rating}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>

                    <div class="product-card-price-buy">
                        <div class="product-price-label">
                            <span class="product-price-val">₪${product.price.toLocaleString()}</span>
                        </div>
                        <button class="card-buy-btn" onclick="addToCartDirect('${product.id}')" aria-label="הוסף לעגלה">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
        elements.productGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Translate Categories to Hebrew
function translateCategory(cat) {
    switch (cat) {
        case 'electronics': return 'אלקטרוניקה';
        case 'fashion': return 'אופנה וביגוד';
        case 'home': return 'בית ועיצוב';
        default: return cat;
    }
}

// Handle Category Filter Changes
function filterByCategory(category) {
    currentCategory = category;
    
    // Update Title of Catalog
    if (category === 'all') {
        elements.catalogTitle.innerText = 'כל המוצרים';
    } else if (category === 'estate') {
        elements.catalogTitle.innerText = 'קולקציית העל Estate';
    } else {
        elements.catalogTitle.innerText = translateCategory(category);
    }
    
    renderProducts();
}

// Live Search Suggestions Dropdown
function handleSearchInput() {
    if (!searchQuery) {
        elements.searchSuggestions.classList.add('hidden');
        renderProducts();
        return;
    }

    const suggestions = products.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Max 5 suggestions

    if (suggestions.length === 0) {
        elements.searchSuggestions.classList.add('hidden');
        renderProducts();
        return;
    }

    elements.searchSuggestions.innerHTML = '';
    suggestions.forEach(p => {
        const itemHtml = `
            <div class="suggestion-item" onclick="selectSuggestion('${p.id}')">
                <div class="suggestion-info">
                    <span class="suggestion-title">${p.title}</span>
                    <span class="suggestion-price">₪${p.price.toLocaleString()}</span>
                </div>
            </div>
        `;
        elements.searchSuggestions.insertAdjacentHTML('beforeend', itemHtml);
    });

    elements.searchSuggestions.classList.remove('hidden');
    renderProducts();
}

// Handle selection of search suggestions
function selectSuggestion(productId) {
    elements.searchSuggestions.classList.add('hidden');
    elements.searchInput.value = '';
    searchQuery = '';
    quickViewProduct(productId);
}

// Toast Notification Banner
function showToast(message, icon = '✨') {
    elements.toastMessage.innerText = message;
    elements.toastNotification.querySelector('.toast-icon').innerText = icon;
    
    elements.toastNotification.classList.remove('hidden');
    elements.toastNotification.classList.add('open');

    // Remove notification after 3 seconds
    setTimeout(() => {
        elements.toastNotification.classList.remove('open');
        setTimeout(() => elements.toastNotification.classList.add('hidden'), 300);
    }, 3000);
}

// Cart Management Actions
function addToCartDirect(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            brand: product.brand,
            price: product.price,
            imgClass: product.imgClass,
            quantity: 1
        });
    }

    updateCartUI();
    saveCartToLocalStorage();
    showToast(`המוצר "${product.title}" נוסף לעגלה!`, '🛒');
}

// Helper trigger from Hero carousel buttons
window.addToCartDirect = addToCartDirect;

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToLocalStorage();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCartToLocalStorage();
    }
}

// Apply Promo Code discounts
function applyPromoCode() {
    const code = elements.promoInput.value.trim().toUpperCase();
    if (!code) return;

    if (code === 'ESTATEFREE' || code === 'SAVE10') {
        appliedPromo = { code: code, rate: 0.10 }; // 10% discount
        showToast('קוד הקופון הוחל בהצלחה! קיבלת 10% הנחה.', '🎉');
        updateCartUI();
    } else {
        showToast('קוד קופון לא בתוקף.', '❌');
    }
    elements.promoInput.value = '';
}

// Compute prices & update Cart Panel interface
function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCountBadge.innerText = totalQty;
    elements.cartTotalQty.innerText = totalQty;

    // Pop animation on badge
    elements.cartCountBadge.classList.remove('animate-pop');
    void elements.cartCountBadge.offsetWidth; // Trigger reflow
    elements.cartCountBadge.classList.add('animate-pop');

    if (cart.length === 0) {
        elements.cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>עגלת הקניות שלך ריקה כרגע</p>
                <button class="btn btn-outline" onclick="closeCartDrawer()">התחל לקנות</button>
            </div>
        `;
        elements.cartFooterSection.classList.add('hidden');
        return;
    }

    elements.cartFooterSection.classList.remove('hidden');
    elements.cartItemsList.innerHTML = '';

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const isAura = item.brand === 'Estate';
        
        const itemHtml = `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <span class="cart-item-price">₪${(item.price * item.quantity).toLocaleString()}</span>
                    ${isAura ? `<span class="cart-item-brand">✨ מותג Estate</span>` : ''}
                    
                    <div class="quantity-adjuster" style="margin-top: 8px; width: fit-content;">
                        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" aria-label="הסר מוצר">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        `;
        elements.cartItemsList.insertAdjacentHTML('beforeend', itemHtml);
    });

    elements.cartSubtotalPrice.innerText = `₪${subtotal.toLocaleString()}`;
    
    let total = subtotal;
    if (appliedPromo) {
        const discountVal = subtotal * appliedPromo.rate;
        total = subtotal - discountVal;
        
        elements.discountPercent.innerText = `${appliedPromo.rate * 100}%`;
        elements.cartDiscountPrice.innerText = `-₪${discountVal.toLocaleString()}`;
        elements.discountDisplayRow.classList.remove('hidden');
    } else {
        elements.discountDisplayRow.classList.add('hidden');
    }

    elements.cartTotalPrice.innerText = `₪${total.toLocaleString()}`;
    elements.checkoutPayTotal.innerText = `₪${total.toLocaleString()}`;
}

// Drawer Visibility toggling
function openCartDrawer() {
    elements.cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeCartDrawer() {
    elements.cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
}

// Save/Load Cart LocalStorage
function saveCartToLocalStorage() {
    localStorage.setItem('estate_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('estate_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// Quick View Modal Populate & Open
function quickViewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const isAura = product.brand === 'Estate';
    
    // Formulate specification rows
    let specsHtml = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsHtml += `
            <tr>
                <td class="spec-label">${key}</td>
                <td class="spec-value">${value}</td>
            </tr>
        `;
    }

    const modalContentHtml = `
        <div class="modal-product-img-box">
            <div class="product-image-placeholder ${product.imgClass}" style="width:100%; height:100%; border-radius:12px;">
                ${product.svgIcon}
            </div>
        </div>
        <div class="modal-product-details-box">
            <span class="modal-product-badge ${isAura ? 'badge-aura' : ''}">
                ${isAura ? '✨ מותג הבית Estate' : translateCategory(product.category)}
            </span>
            <h2 class="modal-product-title">${product.title}</h2>
            
            <div class="rating-container">
                <span class="stars-gold">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                <span class="rating-val">${product.rating}</span>
                <span class="rating-count">(${product.reviews} ביקורות רוכשים)</span>
            </div>

            <p class="modal-product-desc">${product.description}</p>
            
            <table class="spec-table">
                <tbody>
                    ${specsHtml}
                </tbody>
            </table>

            <div class="modal-price-tag">₪${product.price.toLocaleString()}</div>
            
            <button class="btn btn-primary" onclick="addToCartFromModal('${product.id}')" style="margin-top: 15px;">
                <span>הוסף לסל הקניות</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </button>
        </div>
    `;

    elements.modalProductDetails.innerHTML = modalContentHtml;
    elements.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Expose quickViewProduct globally
window.quickViewProduct = quickViewProduct;

function addToCartFromModal(productId) {
    addToCartDirect(productId);
    closeQuickViewModal();
}

// Expose addToCartFromModal globally
window.addToCartFromModal = addToCartFromModal;

function closeQuickViewModal() {
    elements.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Checkout Modal Actions
function openCheckoutModal() {
    // Hide Cart drawer first
    closeCartDrawer();
    
    // Open Checkout modal
    elements.checkoutFormView.classList.remove('hidden');
    elements.checkoutSuccessView.classList.add('hidden');
    elements.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    elements.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Payment simulation & confetti result
function handlePaymentSubmit(event) {
    event.preventDefault();
    
    const payBtn = document.getElementById('pay-now-btn');
    payBtn.disabled = true;
    payBtn.innerText = 'מבצע חיוב מאובטח...';
    
    // Simulate transaction delay
    setTimeout(() => {
        payBtn.disabled = false;
        payBtn.innerText = 'שלם כעת';
        
        // Generate mock order number
        const randomOrderNum = `EST-${Math.floor(10000 + Math.random() * 90000)}`;
        document.getElementById('order-number-val').innerText = randomOrderNum;

        // Transition views
        elements.checkoutFormView.classList.add('hidden');
        elements.checkoutSuccessView.classList.remove('hidden');
        
        // Clear Cart
        cart = [];
        appliedPromo = null;
        updateCartUI();
        saveCartToLocalStorage();
        
        showToast('הרכישה הושלמה בהצלחה!', '🎉');
    }, 2000);
}

// Expose handlePaymentSubmit globally
window.handlePaymentSubmit = handlePaymentSubmit;
