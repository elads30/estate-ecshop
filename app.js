// Estate App Logic - Premium Store & Cart Management with Multi-language (Hebrew/English)

// Product Catalog Data with Multi-language Strings
const products = [
    {
        id: 'estate-keyboard',
        title: { he: 'מקלדת מכנית Estate Eclipse', en: 'Estate Eclipse Mechanical Keyboard' },
        brand: 'Estate',
        category: 'electronics',
        price: 749,
        rating: 4.9,
        reviews: 142,
        imgClass: 'img-keyboard',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/></svg>`,
        description: {
            he: 'חוויית הקלדה יוקרתית שאין שנייה לה. מקלדת מכנית מלאה עם גוף אלומיניום תעופתי מכורסם ב-CNC, סוויצ׳ים שקטים בהתאמה אישית ומסך OLED מובנה להצגת סטטוסים וחתימות.',
            en: 'An unparalleled luxury typing experience. Full mechanical keyboard with CNC-milled aircraft-grade aluminum, custom silent switches, and a built-in OLED display.'
        },
        specs: {
            he: {
                'סוג מתגים': 'Estate Linear Silent Yellow (משומנים מראש)',
                'חיבור': 'חוטי Type-C / אלחוטי 2.4GHz / Bluetooth 5.1',
                'תאורה': 'RGB מלאה לכל מקש בנפרד',
                'חומר גוף': 'אלומיניום תעופתי 6063',
                'סוללה': '4000mAh (עד 150 שעות ללא תאורה)'
            },
            en: {
                'Switch Type': 'Estate Linear Silent Yellow (Pre-lubed)',
                'Connectivity': 'Wired Type-C / Wireless 2.4GHz / Bluetooth 5.1',
                'Lighting': 'Per-key full RGB lighting',
                'Body Material': '6063 Aircraft-grade aluminum',
                'Battery': '4000mAh (up to 150 hours without RGB)'
            }
        }
    },
    {
        id: 'estate-cologne',
        title: { he: 'בושם בוטיק Estate Noir Extrait', en: 'Estate Noir Extrait Cologne' },
        brand: 'Estate',
        category: 'fashion',
        price: 490,
        rating: 4.8,
        reviews: 96,
        imgClass: 'img-fragrance',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 18a6 6 0 0 1 12 0v2H6v-2zM9 10a3 3 0 0 1 6 0v6H9v-6zM12 2v4M10 3h4"/></svg>`,
        description: {
            he: 'ניחוח יוניסקס עוצמתי וממכר שעוצב במיוחד עבור מותג Estate. שילוב מהפנט של עץ אלגום חם, ענבר עשיר, ונגיעות עדינות של תבלינים שחורים.',
            en: 'A powerful and addictive unisex fragrance designed for Estate. A hypnotic blend of warm sandalwood, rich amber, and black spices.'
        },
        specs: {
            he: {
                'ריכוז': 'Extrait de Parfum (ריכוז שמן גבוה במיוחד)',
                'תווי ראש': 'פלפל שחור, הל, תאנה',
                'תווי לב': 'קשמיר, ארז, סיגליות',
                'תווי בסיס': 'סנדלווד, אמבר, וניל',
                'נפח': '100 מ״ל'
            },
            en: {
                'Concentration': 'Extrait de Parfum (Highest oil concentration)',
                'Top Notes': 'Black pepper, Cardamom, Fig',
                'Heart Notes': 'Cashmere, Cedarwood, Violet',
                'Base Notes': 'Sandalwood, Amber, Vanilla',
                'Volume': '100ml'
            }
        }
    },
    {
        id: 'estate-speaker',
        title: { he: 'רמקול חכם Estate Horizon Touch', en: 'Estate Horizon Touch Smart Speaker' },
        brand: 'Estate',
        category: 'home',
        price: 990,
        rating: 4.7,
        reviews: 84,
        imgClass: 'img-smartspeaker',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 10v4M10 12h4"/></svg>`,
        description: {
            he: 'מרכז הבית החכם שלך בגימור מינימליסטי מרהיב של זכוכית מעוגלת ואלומיניום מוברש. מסך מגע אינטראקטיבי, סאונד היקפי ב-360 מעלות ועוזרת קולית מובנית.',
            en: 'Your smart home hub in a stunning minimalist glass and brushed aluminum finish. Touch display, 360-degree immersive sound, and built-in voice assistant.'
        },
        specs: {
            he: {
                'הספק שמע': '60W RMS (סאונד 360 מעלות)',
                'מסך': 'AMOLED Touch בגודל 4 אינץ׳',
                'קישוריות': 'Wi-Fi 6, Bluetooth 5.2, AirPlay 2',
                'בית חכם': 'תומך ב-Matter, Apple Home, Google Home',
                'מיקרופונים': 'מערך של 4 מיקרופונים עם ביטול רעשים'
            },
            en: {
                'Audio Power': '60W RMS (360-degree sound)',
                'Screen': '4-inch AMOLED Touchscreen',
                'Connectivity': 'Wi-Fi 6, Bluetooth 5.2, AirPlay 2',
                'Smart Home': 'Supports Matter, Apple Home, Google Home',
                'Microphones': '4 far-field microphone array with noise canceling'
            }
        }
    },
    {
        id: 'estate-headphones',
        title: { he: 'אוזניות ANC אלחוטיות Estate Soundwave Pro', en: 'Estate Soundwave Pro ANC Headphones' },
        brand: 'Estate',
        category: 'electronics',
        price: 1190,
        rating: 4.9,
        reviews: 218,
        imgClass: 'img-headphones',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2m-16 0h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/></svg>`,
        description: {
            he: 'חוויית שמע עוטפת ונקייה מרעשים. ביטול רעשים אקטיבי היברידי (Hybrid ANC) מתקדם, כריות אוזן מעור כבש אמיתי ודרייברים מותאמים אישית בקוטר 40 מ״מ.',
            en: 'An immersive noise-canceling audio experience. Advanced Hybrid ANC, genuine sheepskin leather earcups, and custom 40mm drivers for hi-res audio.'
        },
        specs: {
            he: {
                'סוג דרייבר': 'דינמי 40 מ״מ עם דיאפרגמת בריליום',
                'חיי סוללה': 'עד 45 שעות נגינה עם ANC פעיל',
                'טעינה מהירה': '10 דקות טעינה מעניקות 5 שעות נגינה',
                'ביטול רעשים': 'Hybrid ANC עד 42dB',
                'משקל': '260 גרם'
            },
            en: {
                'Driver Type': '40mm dynamic with beryllium diaphragm',
                'Battery Life': 'Up to 45 hours with ANC on',
                'Fast Charge': '10 min charge yields 5 hours play',
                'Noise Canceling': 'Hybrid ANC up to 42dB',
                'Weight': '260g'
            }
        }
    },
    {
        id: 'shoes-veloce',
        title: { he: 'נעלי ריצה Veloce Cloud', en: 'Veloce Cloud Running Shoes' },
        brand: 'Veloce',
        category: 'fashion',
        price: 349,
        rating: 4.6,
        reviews: 310,
        imgClass: 'img-shoes',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18h18M6 18c0-4 1-8 6-8s6 4 9 8M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg>`,
        description: {
            he: 'נעלי ריצה קלות משקל המציעות תמיכה מירבית לכף הרגל הודות לטכנולוגיית סוליית סופגת זעזועים מתקדמת. גפה נושמת מסיבים ממוחזרים.',
            en: 'Lightweight running shoes providing maximum foot support through advanced shock-absorbing outsole technology. Breathable recycled fiber upper.'
        },
        specs: {
            he: {
                'משקל': '220 גרם (לנעל בודדת)',
                'חומר גפה': 'רשת סרוגה נושמת (Knit Mesh)',
                'שימוש עיקרי': 'ריצת כביש, אימוני חדר כושר',
                'שיכוך': 'קצף EVA מתקדם בעל החזר אנרגטי'
            },
            en: {
                'Weight': '220g (per shoe)',
                'Upper Material': 'Breathable Knit Mesh',
                'Primary Use': 'Road running, Gym workouts',
                'Cushioning': 'Advanced high-energy return EVA foam'
            }
        }
    },
    {
        id: 'watch-chronos',
        title: { he: 'שעון חכם Chronos Titanium', en: 'Chronos Titanium Smart Watch' },
        brand: 'Chronos',
        category: 'electronics',
        price: 1399,
        rating: 4.8,
        reviews: 175,
        imgClass: 'img-watch',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 2M12 5V2M12 19v3M5 12H2M19 12h3"/></svg>`,
        description: {
            he: 'שעון ספורט חכם יוקרתי עם גוף עשוי טיטניום טהור וזכוכית ספיר חסינת שריטות. מד דופק מובנה, GPS מדויק ומעקב שינה מתקדם.',
            en: 'A premium smart sports watch with a pure titanium case and scratch-resistant sapphire glass. Built-in heart rate monitor and high-accuracy GPS.'
        },
        specs: {
            he: {
                'חומר גוף': 'טיטניום בדרגה 5',
                'זכוכית': 'קריסטל ספיר (Sapphire Crystal)',
                'עמידות במים': '5ATM (עד 50 מטר עומק)',
                'חיי סוללה': 'עד 14 ימי שימוש רגיל'
            },
            en: {
                'Body Material': 'Grade 5 Titanium',
                'Glass Type': 'Sapphire Crystal (Scratch-resistant)',
                'Water Resistance': '5ATM (Up to 50 meters)',
                'Battery Life': 'Up to 14 days normal usage'
            }
        }
    },
    {
        id: 'lamp-lumina',
        title: { he: 'מנורת שולחן Lumina Smart OLED', en: 'Lumina Smart OLED Desk Lamp' },
        brand: 'Lumina',
        category: 'home',
        price: 249,
        rating: 4.5,
        reviews: 89,
        imgClass: 'img-lamp',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 22h6M12 18v4M6 12a6 6 0 0 1 12 0v6H6v-6zM12 2a3 3 0 0 1 3 3v2H9V5a3 3 0 0 1 3-3z"/></svg>`,
        description: {
            he: 'מנורת עבודה בעיצוב דק ומינימליסטי. משטח טעינה אלחוטי מובנה בבסיס המנורה, תאורה חמה/קרה מתכווננת וחיישן בהירות אוטומטי.',
            en: 'Sleek and minimalist work lamp. Features built-in wireless charging pad in the base, adjustable warm/cool light temperatures, and auto-brightness sensor.'
        },
        specs: {
            he: {
                'הספק אור': '800 לומן (מקור אור LED מובנה)',
                'טמפרטורת אור': '2700K - 6500K (מתכוונן)',
                'טעינה אלחוטית': 'תומך ב-Qi Fast Charge עד 15W',
                'חיבור מתח': 'USB Type-C (כלול כבל ומטען קיר)'
            },
            en: {
                'Light Output': '800 Lumens (Integrated LED)',
                'Color Temp': '2700K - 6500K (Adjustable)',
                'Wireless Charging': 'Supports Qi Fast Charge up to 15W',
                'Power Input': 'USB Type-C (includes cable and wall adapter)'
            }
        }
    },
    {
        id: 'backpack-nomad',
        title: { he: 'תיק גב Nomad Travel 30L', en: 'Nomad Travel Backpack 30L' },
        brand: 'Nomad',
        category: 'fashion',
        price: 420,
        rating: 4.7,
        reviews: 130,
        imgClass: 'img-backpack',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 20V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 4V2h6v2M12 8v8M9 12h6"/></svg>`,
        description: {
            he: 'תיק נסיעות מודולרי עשוי בד קורדורה חסין מים. נפח מורחב של 30 ליטר עם תאים ייעודיים למחשב נייד עד 16 אינץ׳, טאבלט, ובגדים.',
            en: 'Modular travel backpack made of waterproof Cordura fabric. Expandable 30L volume with dedicated compartments for a 16-inch laptop, tablet, and clothing.'
        },
        specs: {
            he: {
                'נפח': '30 ליטר (ניתן להרחבה ל-35 ליטר)',
                'חומר': 'Cordura 1000D חסין מים ושפשופים',
                'תא מחשב': 'מרופד ומוגן, מתאים ללפטופים עד 16 אינץ׳',
                'משקל': '1.1 ק״ג'
            },
            en: {
                'Volume': '30 Liters (expandable to 35L)',
                'Material': 'Waterproof and abrasion-resistant Cordura 1000D',
                'Laptop Pocket': 'Padded compartment fitting up to 16-inch laptops',
                'Weight': '1.1 kg'
            }
        }
    },
    {
        id: 'espresso-retro',
        title: { he: 'מכונת אספרסו קומפקטית Retro Cafe', en: 'Retro Cafe Espresso Machine' },
        brand: 'Barista',
        category: 'home',
        price: 649,
        rating: 4.6,
        reviews: 114,
        imgClass: 'img-espresso',
        svgIcon: `<svg class="image-vector-symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2h12v3H6V2zm1 3v13a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V5H7zm4 7h2M9 15h6"/></svg>`,
        description: {
            he: 'מכונת אספרסו בעיצוב רטרו אלגנטי המשתלבת נהדר בכל מטבח. לחץ משאבה עוצמתי של 15 בר המבטיח קרמה עשירה, וידית הקצפת חלב מובנית.',
            en: 'An elegant retro espresso machine fitting perfectly in any kitchen. Features powerful 15-bar pump pressure for rich crema and built-in milk frother.'
        },
        specs: {
            he: {
                'לחץ משאבה': '15 בר (15 Bar)',
                'מיכל מים': '1.2 ליטר (נשלף לניקוי קל)',
                'חומר גוף': 'פלדת אל-חלד וגימור אמייל מט',
                'הספק גוף חימום': '1100W (חימום מהיר תוך 40 שניות)'
            },
            en: {
                'Pump Pressure': '15 Bar',
                'Water Tank': '1.2 Liters (removable for easy cleaning)',
                'Body Material': 'Stainless steel with matte enamel finish',
                'Heater Power': '1100W (Fast heat-up in 40 seconds)'
            }
        }
    }
];

// UI Translations
const translations = {
    he: {
        announcement: 'משלוח חינם על כל מוצרי מותג העל <strong>Estate</strong>! השתמשו בקוד: <span class="promo-code">ESTATEFREE</span>',
        searchPlaceholder: 'חפשו מוצרים, מותגים או קטגוריות...',
        userGreeting: 'שלום',
        catAll: 'הכל',
        catEstate: '✨ מותג Estate',
        catElectronics: 'אלקטרוניקה',
        catFashion: 'אופנה וביגוד',
        catHome: 'בית ועיצוב',
        heroTag: 'הכירו את מותג Estate',
        heroTitle: 'Estate Eclipse',
        heroSubtitle: 'מקלדת מכנית יוקרתית בגימור אלומיניום תעופתי, מתגים שקטים בהתאמה אישית ומסך OLED מובנה.',
        heroExplore: 'גלה עוד',
        heroAddToCart: 'הוסף לעגלה',
        brandRibbonTitle: 'קולקציית הפרימיום הבלעדית של Estate',
        brandRibbonDesc: 'חוויית משתמש מעוצבת, חומרים איכותיים וטכנולוגיה עילית. עוצב בסטנדרט ללא פשרות.',
        brandRibbonBtn: 'צפה בכל הקולקציה',
        catalogTitleAll: 'כל המוצרים',
        catalogTitleEstate: 'קולקציית העל Estate',
        catalogTitleElectronics: 'אלקטרוניקה',
        catalogTitleFashion: 'אופנה וביגוד',
        catalogTitleHome: 'בית ועיצוב',
        sortSelectFeatured: 'מוצרים נבחרים',
        sortSelectLow: 'מחיר: מהנמוך לגבוה',
        sortSelectHigh: 'מחיר: מהגבוה לנמוך',
        sortSelectRating: 'דירוג לקוחות',
        cartTitle: 'סל הקניות שלך',
        cartEmpty: 'עגלת הקניות שלך ריקה כרגע',
        cartStartShopping: 'התחל לקנות',
        promoCodeLabel: 'קוד קופון',
        promoApplyBtn: 'החל',
        cartSubtotal: 'סכום ביניים:',
        cartDiscount: 'הנחה',
        cartTotal: 'סה"כ כולל מע"מ:',
        cartCheckoutBtn: 'המשך לתשלום מאובטח',
        checkoutTitle: 'פרטי משלוח ותשלום',
        checkoutName: 'שם מלא',
        checkoutEmail: 'כתובת אימייל',
        checkoutAddress: 'כתובת למשלוח',
        checkoutCard: 'מספר כרטיס אשראי (דמו)',
        checkoutExpiry: 'תוקף',
        checkoutCvv: 'CVV',
        checkoutPayBtn: 'שלם כעת',
        checkoutSuccessTitle: 'ההזמנה הושלמה בהצלחה!',
        checkoutSuccessDesc: 'תודה שקנית ב-<strong>Estate</strong>. אישור הזמנה נשלח לאימייל שלך.',
        checkoutOrderNo: 'מספר הזמנה:',
        checkoutDeliveryTime: 'זמן אספקה משוער:',
        checkoutDeliveryTimeVal: 'עד 3 ימי עסקים',
        checkoutBackBtn: 'חזרה לחנות',
        loginTitle: 'ברוכים הבאים ל-Estate',
        loginDesc: 'אנא התחבר כדי לשמור את עגלת הקניות והיסטוריית ההזמנות שלך.',
        loginNameLabel: 'שם מלא',
        loginEmailLabel: 'כתובת אימייל',
        loginBtn: 'כניסה לחנות',
        footerDesc: 'חנות מקוונת המאפשרת לך ליהנות ממוצרי מותגים בינלאומיים לצד מוצרי מותג Estate היוקרתי בעיצובים בלעדיים.',
        footerNavTitle: 'ניווט מהיר',
        footerContactTitle: 'שירות לקוחות',
        footerPhone: 'טלפון: 1-800-200-300',
        footerMail: 'מייל: support@estate.co.il',
        footerCopyright: '&copy; 2026 Estate Inc. כל הזכויות שמורות. מעוצב בגאווה עבור אביהו.',
        toastAddCart: 'המוצר נוסף לעגלה!',
        toastPromoApplied: 'קוד הקופון הוחל בהצלחה! קיבלת 10% הנחה.',
        toastPromoInvalid: 'קוד קופון לא בתוקף.',
        toastOrderCompleted: 'הרכישה הושלמה בהצלחה!',
        toastWelcome: 'ברוך הבא',
        quickViewBtn: 'תצוגה מהירה',
        qtyBtnText: 'כמות',
        priceText: 'מחיר'
    },
    en: {
        announcement: 'Free shipping on all <strong>Estate</strong> premium products! Use code: <span class="promo-code">ESTATEFREE</span>',
        searchPlaceholder: 'Search products, brands or categories...',
        userGreeting: 'Hello',
        catAll: 'All',
        catEstate: '✨ Estate Brand',
        catElectronics: 'Electronics',
        catFashion: 'Fashion & Apparel',
        catHome: 'Home & Living',
        heroTag: 'Introducing Estate Brand',
        heroTitle: 'Estate Eclipse',
        heroSubtitle: 'A premium mechanical keyboard with aircraft-grade aluminum casing, custom silent switches, and a built-in OLED display.',
        heroExplore: 'Explore More',
        heroAddToCart: 'Add to Cart',
        brandRibbonTitle: 'Estate Premium Exclusive Collection',
        brandRibbonDesc: 'Designed user experience, high-quality materials and top-tier technology. Crafted without compromises.',
        brandRibbonBtn: 'View Entire Collection',
        catalogTitleAll: 'All Products',
        catalogTitleEstate: 'Estate Premium Collection',
        catalogTitleElectronics: 'Electronics',
        catalogTitleFashion: 'Fashion & Apparel',
        catalogTitleHome: 'Home & Living',
        sortSelectFeatured: 'Featured Products',
        sortSelectLow: 'Price: Low to High',
        sortSelectHigh: 'Price: High to Low',
        sortSelectRating: 'Customer Rating',
        cartTitle: 'Your Shopping Cart',
        cartEmpty: 'Your shopping cart is currently empty',
        cartStartShopping: 'Start Shopping',
        promoCodeLabel: 'Promo Code',
        promoApplyBtn: 'Apply',
        cartSubtotal: 'Subtotal:',
        cartDiscount: 'Discount',
        cartTotal: 'Total (incl. VAT):',
        cartCheckoutBtn: 'Proceed to Secure Checkout',
        checkoutTitle: 'Shipping & Payment Details',
        checkoutName: 'Full Name',
        checkoutEmail: 'Email Address',
        checkoutAddress: 'Shipping Address',
        checkoutCard: 'Credit Card Number (Demo)',
        checkoutExpiry: 'Expiry Date',
        checkoutCvv: 'CVV',
        checkoutPayBtn: 'Pay Now',
        checkoutSuccessTitle: 'Order Completed Successfully!',
        checkoutSuccessDesc: 'Thank you for shopping at <strong>Estate</strong>. An order confirmation email has been sent.',
        checkoutOrderNo: 'Order Number:',
        checkoutDeliveryTime: 'Estimated Delivery:',
        checkoutDeliveryTimeVal: 'Up to 3 business days',
        checkoutBackBtn: 'Back to Store',
        loginTitle: 'Welcome to Estate',
        loginDesc: 'Please log in to save your shopping cart and order history.',
        loginNameLabel: 'Full Name',
        loginEmailLabel: 'Email Address',
        loginBtn: 'Enter Store',
        footerDesc: 'An online store featuring international brands alongside the exclusive Estate premium products.',
        footerNavTitle: 'Quick Links',
        footerContactTitle: 'Customer Service',
        footerPhone: 'Phone: 1-800-200-300',
        footerMail: 'Email: support@estate.co.il',
        footerCopyright: '&copy; 2026 Estate Inc. All rights reserved. Proudly designed for Avihu.',
        toastAddCart: 'Product added to cart!',
        toastPromoApplied: 'Promo code applied successfully! You got a 10% discount.',
        toastPromoInvalid: 'Invalid promo code.',
        toastOrderCompleted: 'Purchase completed successfully!',
        toastWelcome: 'Welcome',
        quickViewBtn: 'Quick View',
        qtyBtnText: 'Qty',
        priceText: 'Price'
    }
};

// App State Management
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let appliedPromo = null;
let currentLang = 'he'; // Default is Hebrew

// DOM Elements Cache
const elements = {
    productGrid: document.getElementById('product-grid-container'),
    searchInput: document.getElementById('search-input'),
    searchButton: document.getElementById('search-button'),
    searchSuggestions: document.getElementById('search-suggestions'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeSunIcon: document.getElementById('theme-sun-icon'),
    themeMoonIcon: document.getElementById('theme-moon-icon'),
    languageToggleBtn: document.getElementById('language-toggle-btn'),
    langBtnText: document.getElementById('lang-btn-text'),
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
    initLanguage();
    loadCartFromLocalStorage();
    renderProducts();
    setupEventListeners();
    initTheme();
    checkLoginState();
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

// Multi-language System Logic
function initLanguage() {
    currentLang = localStorage.getItem('estate_lang') || 'he';
    applyLanguage(currentLang);
}

function toggleLanguage() {
    const newLang = currentLang === 'he' ? 'en' : 'he';
    currentLang = newLang;
    localStorage.setItem('estate_lang', newLang);
    applyLanguage(newLang);
    renderProducts();
    updateCartUI();
}

function applyLanguage(lang) {
    // 1. Toggle page direction and document language
    if (lang === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'he');
        elements.langBtnText.innerText = 'EN';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        elements.langBtnText.innerText = 'HE';
    }

    // 2. Translate static HTML nodes with data-i18n attributes
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(el => {
        const translationKey = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][translationKey]) {
            el.innerHTML = translations[lang][translationKey];
        }
    });

    // 3. Update non-standard text attributes (placeholders, labels, phone texts)
    elements.searchInput.placeholder = translations[lang].searchPlaceholder;
    document.getElementById('promo-input').placeholder = lang === 'he' ? 'קוד קופון' : 'Promo Code';
    document.getElementById('checkout-address').placeholder = lang === 'he' ? 'רחוב, מספר בית, עיר' : 'Street, House No., City';
    document.getElementById('login-name').placeholder = lang === 'he' ? 'הכנס את שמך' : 'Enter your name';
    
    // Update footer contacts details directly
    document.getElementById('footer-phone-text').innerText = lang === 'he' ? 'טלפון: 1-800-200-300' : 'Phone: 1-800-200-300';
    document.getElementById('footer-mail-text').innerText = lang === 'he' ? 'מייל: support@estate.co.il' : 'Email: support@estate.co.il';

    // Update greeting text based on logged user
    const savedUser = localStorage.getItem('estate_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            document.getElementById('user-greeting-label').innerText = `${translations[lang].userGreeting}, ${user.name}`;
        } catch (e) {}
    } else {
        document.getElementById('user-greeting-label').innerText = translations[lang].userGreeting;
    }

    // Update catalog category title based on state
    filterByCategory(currentCategory);
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme toggle click
    elements.themeToggleBtn.addEventListener('click', toggleTheme);

    // Language toggle click
    elements.languageToggleBtn.addEventListener('click', toggleLanguage);
    
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
            const estateNavBtn = document.getElementById('cat-estate');
            if (estateNavBtn) estateNavBtn.click();
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
            p.title[currentLang].toLowerCase().includes(queryLower) || 
            p.brand.toLowerCase().includes(queryLower) ||
            p.description[currentLang].toLowerCase().includes(queryLower)
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
                <p>${currentLang === 'he' ? 'לא נמצאו מוצרים המתאימים לסינון הנוכחי.' : 'No products found matching current criteria.'}</p>
            </div>
        `;
        return;
    }

    filteredList.forEach(product => {
        const isEstate = product.brand === 'Estate';
        const cardClass = isEstate ? 'product-card brand-aura-card' : 'product-card';
        
        const cardHtml = `
            <article class="${cardClass}" id="card-${product.id}">
                ${isEstate ? `<span class="brand-badge-tag">Estate</span>` : ''}
                <div class="product-card-image-box">
                    <div class="product-image-placeholder ${product.imgClass}">
                        ${product.svgIcon}
                    </div>
                    <div class="card-quick-view-overlay">
                        <button class="btn btn-sm btn-primary" onclick="quickViewProduct('${product.id}')">${translations[currentLang].quickViewBtn}</button>
                    </div>
                </div>
                <div class="product-card-details">
                    <span class="product-card-category">${product.brand} | ${translateCategory(product.category)}</span>
                    <h3 class="product-card-title">${product.title[currentLang]}</h3>
                    
                    <div class="rating-container">
                        <span class="stars-gold">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                        <span class="rating-val">${product.rating}</span>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>

                    <div class="product-card-price-buy">
                        <div class="product-price-label">
                            <span class="product-price-val">₪${product.price.toLocaleString()}</span>
                        </div>
                        <button class="card-buy-btn" onclick="addToCartDirect('${product.id}')" aria-label="Add to cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
        elements.productGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Translate Categories to Hebrew/English
function translateCategory(cat) {
    if (currentLang === 'he') {
        switch (cat) {
            case 'electronics': return 'אלקטרוניקה';
            case 'fashion': return 'אופנה וביגוד';
            case 'home': return 'בית ועיצוב';
            default: return cat;
        }
    } else {
        switch (cat) {
            case 'electronics': return 'Electronics';
            case 'fashion': return 'Fashion';
            case 'home': return 'Home & Living';
            default: return cat.charAt(0).toUpperCase() + cat.slice(1);
        }
    }
}

// Handle Category Filter Changes
function filterByCategory(category) {
    currentCategory = category;
    
    // Update Title of Catalog
    if (category === 'all') {
        elements.catalogTitle.innerText = translations[currentLang].catalogTitleAll;
    } else if (category === 'estate') {
        elements.catalogTitle.innerText = translations[currentLang].catalogTitleEstate;
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
        p.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) || 
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
                    <span class="suggestion-title">${p.title[currentLang]}</span>
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
            title: product.title, // Object holding he/en
            brand: product.brand,
            price: product.price,
            imgClass: product.imgClass,
            quantity: 1
        });
    }

    updateCartUI();
    saveCartToLocalStorage();
    showToast(translations[currentLang].toastAddCart, '🛒');
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
        showToast(translations[currentLang].toastPromoApplied, '🎉');
        updateCartUI();
    } else {
        showToast(translations[currentLang].toastPromoInvalid, '❌');
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
                <p>${translations[currentLang].cartEmpty}</p>
                <button class="btn btn-outline" onclick="closeCartDrawer()">${translations[currentLang].cartStartShopping}</button>
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
        const isEstate = item.brand === 'Estate';
        
        const itemHtml = `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title[currentLang]}</h4>
                    <span class="cart-item-price">₪${(item.price * item.quantity).toLocaleString()}</span>
                    ${isEstate ? `<span class="cart-item-brand">✨ ${translations[currentLang].catEstate}</span>` : ''}
                    
                    <div class="quantity-adjuster" style="margin-top: 8px; width: fit-content;">
                        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
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

    const isEstate = product.brand === 'Estate';
    
    // Formulate specification rows based on current language
    let specsHtml = '';
    for (const [key, value] of Object.entries(product.specs[currentLang])) {
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
            <span class="modal-product-badge ${isEstate ? 'badge-aura' : ''}">
                ${isEstate ? `✨ ${translations[currentLang].catEstate}` : translateCategory(product.category)}
            </span>
            <h2 class="modal-product-title">${product.title[currentLang]}</h2>
            
            <div class="rating-container">
                <span class="stars-gold">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                <span class="rating-val">${product.rating}</span>
                <span class="rating-count">(${product.reviews} ${currentLang === 'he' ? 'ביקורות רוכשים' : 'customer reviews'})</span>
            </div>

            <p class="modal-product-desc">${product.description[currentLang]}</p>
            
            <table class="spec-table">
                <tbody>
                    ${specsHtml}
                </tbody>
            </table>

            <div class="modal-price-tag">₪${product.price.toLocaleString()}</div>
            
            <button class="btn btn-primary" onclick="addToCartFromModal('${product.id}')" style="margin-top: 15px;">
                <span>${currentLang === 'he' ? 'הוסף לסל הקניות' : 'Add to Shopping Cart'}</span>
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

// Payment simulation & checkout success result
function handlePaymentSubmit(event) {
    event.preventDefault();
    
    const payBtn = document.getElementById('pay-now-btn');
    payBtn.disabled = true;
    payBtn.innerText = currentLang === 'he' ? 'מבצע חיוב מאובטח...' : 'Processing secure payment...';
    
    // Simulate transaction delay
    setTimeout(() => {
        payBtn.disabled = false;
        payBtn.innerText = translations[currentLang].checkoutPayBtn;
        
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
        
        showToast(translations[currentLang].toastOrderCompleted, '🎉');
    }, 2000);
}

// Expose handlePaymentSubmit globally
window.handlePaymentSubmit = handlePaymentSubmit;

// Login Management & Session Persistence
function handleLoginSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById('login-name');
    const emailInput = document.getElementById('login-email');
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();

    if (!userName) return;

    // Save to localStorage (persistent)
    const user = { name: userName, email: userEmail };
    localStorage.setItem('estate_user', JSON.stringify(user));

    // Apply login UI state
    applyLoginState(user);
    showToast(`${translations[currentLang].toastWelcome}, ${userName}!`, '👋');
}

function applyLoginState(user) {
    const loginOverlay = document.getElementById('login-overlay');
    if (loginOverlay) {
        loginOverlay.classList.add('hidden');
    }
    
    // Update header profile greeting
    const greetingLabel = document.getElementById('user-greeting-label');
    if (greetingLabel) {
        greetingLabel.innerText = `${translations[currentLang].userGreeting}, ${user.name}`;
    }

    // Auto-fill checkout form details
    const checkoutNameInput = document.getElementById('checkout-name');
    const checkoutEmailInput = document.getElementById('checkout-email');
    if (checkoutNameInput) checkoutNameInput.value = user.name;
    if (checkoutEmailInput) checkoutEmailInput.value = user.email;
}

function checkLoginState() {
    const savedUser = localStorage.getItem('estate_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            applyLoginState(user);
        } catch (e) {
            showLoginOverlay();
        }
    } else {
        showLoginOverlay();
    }
}

function showLoginOverlay() {
    const loginOverlay = document.getElementById('login-overlay');
    if (loginOverlay) {
        loginOverlay.classList.remove('hidden');
    }
}

// Expose handleLoginSubmit globally
window.handleLoginSubmit = handleLoginSubmit;
