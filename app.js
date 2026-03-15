/* ============================================================
   CLICKO – app.js
   Full e-commerce functionality
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  // CHARGERS
  { id: 1,  name: 'NanoGaN 65W Dual Port Charger',        brand: 'CLICKO',       category: 'chargers',          price: 4149,   originalPrice: 6649,   rating: 4.8, reviews: 1248, emoji: '🔌', badge: 'best-seller', tags: ['fast charge','gan','usb-c'],    description: 'Ultra-compact 65W GaN charger that powers two devices simultaneously. Charges a MacBook, phone and tablet all at once. 40% smaller than standard chargers.',   features: ['65W total output','Dual USB-C ports','GaN technology','Foldable plug','LED indicator','Travel-friendly'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 2,  name: '100W 4-Port Desktop Charging Station', brand: 'SwiftCharge', category: 'chargers',          price: 5799,   originalPrice: 8299,   rating: 4.7, reviews: 876,  emoji: '🔋', badge: 'sale',        tags: ['desktop','multi-port','100w'],  description: '100W desktop charging hub with 4 ports — 2x USB-C and 2x USB-A. Smart power distribution ensures every device gets optimal charging speed.',               features: ['100W total','2x USB-C 45W','2x USB-A 18W','Smart power distribution','Overheat protection','Desktop stand'], isNew: false, isSale: true,  dateAdded: '2024-02' },
  { id: 3,  name: 'MagSnap 15W Wireless Charger',         brand: 'CLICKO',       category: 'chargers',          price: 2899,   originalPrice: null,   rating: 4.6, reviews: 543,  emoji: '🌀', badge: 'new',         tags: ['wireless','magsafe','15w'],     description: 'MagSafe-compatible 15W wireless charger with magnetic alignment for perfect placement every time. Works with all Qi-enabled devices.',                          features: ['15W fast wireless','MagSafe compatible','Qi universal','Slim 5mm design','LED status ring','Overcharge protection'], isNew: true,  isSale: false, dateAdded: '2024-06' },
  { id: 4,  name: 'SwiftDrive 20W Car Charger',           brand: 'SwiftCharge', category: 'chargers',          price: 1659,   originalPrice: null,   rating: 4.5, reviews: 2100, emoji: '🚗', badge: null,          tags: ['car','fast charge','compact'],  description: 'Ultra-compact car charger with 20W Power Delivery for lightning-fast in-car charging. Flush-fits your car\'s 12V port.',                                      features: ['20W USB-C PD','Dual port','Flush design','Overvoltage protection','Universal compatibility','Aluminum body'], isNew: false, isSale: false, dateAdded: '2023-11' },
  { id: 5,  name: 'Solar Panel 10W Outdoor Charger',      brand: 'ProLine',     category: 'chargers',          price: 3749,   originalPrice: 4999,   rating: 4.3, reviews: 312,  emoji: '☀️', badge: 'sale',        tags: ['solar','outdoor','portable'],   description: 'Fold-out solar panel charger perfect for camping and hiking. Charges your devices with clean solar energy anywhere.',                                          features: ['10W solar output','Waterproof design','Foldable 3-panel','Carabiner loops','USB-A + USB-C','Works in low light'], isNew: false, isSale: true,  dateAdded: '2024-03' },
  { id: 6,  name: 'NanoGaN 30W Slim Travel Charger',      brand: 'CLICKO',       category: 'chargers',          price: 2499,   originalPrice: null,   rating: 4.7, reviews: 891,  emoji: '✈️', badge: 'new',         tags: ['travel','gan','compact'],       description: 'Passport-sized 30W GaN charger designed for travelers. Fits in any pocket and charges your phone at full speed.',                                             features: ['30W USB-C PD','Ultra-slim 12mm','GaN3 chip','Auto-voltage','TSA-friendly','Foldable prongs'], isNew: true,  isSale: false, dateAdded: '2024-07' },

  // EARPHONES
  { id: 7,  name: 'ProBuds X ANC True Wireless',          brand: 'AudioMax',    category: 'earphones',         price: 7499,   originalPrice: 10799,  rating: 4.9, reviews: 3421, emoji: '🎧', badge: 'best-seller', tags: ['anc','wireless','hi-res'],      description: 'Flagship ANC earbuds with 4-mic setup for industry-leading noise cancellation. 30-hour total battery life with Hi-Res Audio certification.',                 features: ['Active Noise Cancellation','30hr battery','Hi-Res Audio','IPX5 water resistant','Wear detection','Wireless charging case'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 8,  name: 'CLICKO Buds Air Ultra-Thin TWS',        brand: 'CLICKO',       category: 'earphones',         price: 4999,   originalPrice: null,   rating: 4.6, reviews: 1876, emoji: '🎵', badge: 'new',         tags: ['tws','lightweight','bass'],     description: 'Feather-light 4.5g earbuds that disappear in your ears. Big bass, crystal-clear mids, and sparkling highs — in a package you\'ll forget you\'re wearing.',  features: ['4.5g ultra-light','24hr total battery','Touch controls','Voice assistant','IPX4 resistant','Low latency mode'], isNew: true,  isSale: false, dateAdded: '2024-05' },
  { id: 9,  name: 'NeckArc Pro Wireless Neckband',         brand: 'AudioMax',    category: 'earphones',         price: 3299,   originalPrice: 4549,   rating: 4.4, reviews: 987,  emoji: '🎼', badge: 'sale',        tags: ['neckband','sports','bass'],     description: 'Ergonomic neckband earphones with magnetic snap for easy storage. Perfect for workouts with IPX6 sweat resistance.',                                         features: ['20hr playtime','IPX6 sweat proof','Magnetic snap','Fast charge (10min = 2hr)','Deep bass drivers','Built-in mic'], isNew: false, isSale: true,  dateAdded: '2023-12' },
  { id: 10, name: 'StudioWire Pro Wired Earphones',        brand: 'CLICKO',       category: 'earphones',         price: 2079,   originalPrice: null,   rating: 4.5, reviews: 2341, emoji: '🎤', badge: null,          tags: ['wired','studio','usb-c'],      description: 'Professional-grade wired earphones with balanced armature drivers. Studio-accurate sound reproduction at an accessible price.',                               features: ['10mm balanced armature','USB-C + 3.5mm adaptor','Braided cable','In-line mic + remote','Noise isolating','Studio-tuned EQ'], isNew: false, isSale: false, dateAdded: '2023-10' },
  { id: 11, name: 'SportsElite IPX7 Wireless Earbuds',     brand: 'ProLine',     category: 'earphones',         price: 4149,   originalPrice: 5799,   rating: 4.7, reviews: 1432, emoji: '🏃', badge: 'sale',        tags: ['sports','ipx7','wireless'],    description: 'Built to survive any workout. Secure ear-wing design stays in place during runs, gym sessions, and swims. IPX7 fully waterproof.',                          features: ['IPX7 waterproof','Ear-wing secure fit','25hr battery','Quick charge','Sports EQ mode','Transparency mode'], isNew: false, isSale: true,  dateAdded: '2024-02' },
  { id: 12, name: 'KidsSafe Volume-Limited Earphones',     brand: 'CLICKO',       category: 'earphones',         price: 1579,   originalPrice: null,   rating: 4.3, reviews: 678,  emoji: '🌈', badge: 'new',         tags: ['kids','safe','colorful'],      description: 'Specially designed for children with 85dB volume limiting for hearing safety. Durable, washable, and comes in 5 vibrant colors.',                            features: ['85dB volume limit','Tangle-free cable','Durable flex cable','Washable','5 color options','Universal 3.5mm jack'], isNew: true,  isSale: false, dateAdded: '2024-06' },

  // CABLES
  { id: 13, name: 'ArmorBraid 240W USB-C Cable 2m',        brand: 'CLICKO',       category: 'cables',            price: 1909,   originalPrice: null,   rating: 4.8, reviews: 4231, emoji: '⚡', badge: 'best-seller', tags: ['usb-c','240w','braided'],      description: '240W rated USB-C cable with military-grade braided nylon that\'s rated for 35,000+ bends. Charges everything from phones to laptops.',                      features: ['240W power delivery','5A / 48V rated','USB 3.2 Gen2 (10Gbps)','4K@60Hz video','35,000 bend test','2-year warranty'], isNew: false, isSale: false, dateAdded: '2023-09' },
  { id: 14, name: 'LightLink Lightning to USB-C 1.5m',     brand: 'SwiftCharge', category: 'cables',            price: 1249,   originalPrice: 1659,   rating: 4.6, reviews: 1876, emoji: '🔗', badge: 'sale',        tags: ['lightning','iphone','mfi'],    description: 'Apple MFi certified Lightning cable for guaranteed compatibility with all iPhones and iPads. Reinforced connector is 3x more durable than stock.',             features: ['Apple MFi certified','Reinforced connector','3A fast charging','Braided design','1.5m length','Lifetime warranty'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 15, name: 'MicroFlex Micro-USB Pack (3 cables)',    brand: 'CLICKO',       category: 'cables',            price: 1079,   originalPrice: null,   rating: 4.4, reviews: 3210, emoji: '📦', badge: null,          tags: ['micro-usb','pack','value'],    description: 'Value 3-pack of high-quality Micro-USB cables in 0.5m, 1m, and 2m lengths. Ideal for older devices, smart speakers, and controllers.',                    features: ['3-cable pack (0.5m/1m/2m)','Fast charging 2.4A','480Mbps data transfer','Tangle-resistant','Durable TPE jacket','Wide compatibility'], isNew: false, isSale: false, dateAdded: '2023-11' },
  { id: 16, name: 'MagLink 3-in-1 Magnetic Cable',         brand: 'ProLine',     category: 'cables',            price: 2249,   originalPrice: 2899,   rating: 4.5, reviews: 987,  emoji: '🧲', badge: 'sale',        tags: ['magnetic','3-in-1','universal'], description: '3-in-1 magnetic cable with swappable USB-C, Lightning, and Micro-USB tips. Never struggle with plugging in the right cable again.',                        features: ['3 magnetic tips included','360° connector rotation','100W charging support','Data transfer up to 480Mbps','Strong magnetic connection','LED tip indicator'], isNew: false, isSale: true,  dateAdded: '2024-03' },
  { id: 17, name: 'SpeedReel Retractable USB-C Cable',      brand: 'CLICKO',       category: 'cables',            price: 1499,   originalPrice: null,   rating: 4.3, reviews: 654,  emoji: '🎡', badge: 'new',         tags: ['retractable','compact','travel'], description: 'Retractable coil design extends to 1.5m and retracts to a compact 15cm. Perfect for travel and desks. No more cable clutter.',                           features: ['Extends to 1.5m','Compact 15cm retracted','60W charging','Auto-retract mechanism','USB 2.0 data','Desk-friendly design'], isNew: true,  isSale: false, dateAdded: '2024-07' },
  { id: 18, name: 'DesktopHub USB-C to HDMI+USB+PD',       brand: 'SwiftCharge', category: 'cables',            price: 3299,   originalPrice: 4549,   rating: 4.7, reviews: 1123, emoji: '🖥️', badge: 'sale',        tags: ['hub','hdmi','adapter'],        description: 'All-in-one USB-C hub with 4K HDMI, 2x USB-A 3.0, 1x USB-C PD 100W, and SD card reader. Turn any USB-C laptop into a productivity powerhouse.',            features: ['4K@60Hz HDMI','2x USB-A 3.0','100W USB-C PD pass-through','SD + microSD reader','Plug & play','Aluminum chassis'], isNew: false, isSale: true,  dateAdded: '2024-04' },

  // CASES
  { id: 19, name: 'ArmourX Military-Grade Phone Case',     brand: 'CLICKO',       category: 'cases',             price: 2499,   originalPrice: null,   rating: 4.8, reviews: 5621, emoji: '🛡️', badge: 'best-seller', tags: ['military','drop-proof','rugged'], description: 'MIL-STD-810G certified drop protection up to 6 feet. Shock-absorbing TPU core with polycarbonate shell. Available for all major phone models.',              features: ['MIL-STD-810G certified','6ft drop protection','Raised lip camera guard','Wireless charging compatible','Grippy texture','Lifetime guarantee'], isNew: false, isSale: false, dateAdded: '2023-08' },
  { id: 20, name: 'ClearShield Ultra-Thin Case',           brand: 'ProLine',     category: 'cases',             price: 1329,   originalPrice: 1909,   rating: 4.6, reviews: 3210, emoji: '💎', badge: 'sale',        tags: ['clear','slim','transparent'],  description: 'Show off your phone\'s original design with our anti-yellowing crystal-clear case. Just 0.8mm thin and stays clear forever.',                               features: ['Anti-yellowing coating','0.8mm ultra-thin','Military-grade TPU','Wireless charging compatible','Precise cutouts','Anti-scratch back'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 21, name: 'MagFolio Leather Wallet Case',          brand: 'CLICKO',       category: 'cases',             price: 3749,   originalPrice: 4999,   rating: 4.7, reviews: 1234, emoji: '👜', badge: 'sale',        tags: ['leather','wallet','folio'],    description: 'Premium full-grain leather folio case with 3 card slots and a hidden cash pocket. Converts to a kickstand for hands-free viewing.',                         features: ['Genuine full-grain leather','3 card slots + cash pocket','Kickstand function','Magnetic closure','RFID blocking','Hand-stitched edges'], isNew: false, isSale: true,  dateAdded: '2024-02' },
  { id: 22, name: 'FrostGrip Matte Frosted Case',          brand: 'ProLine',     category: 'cases',             price: 1659,   originalPrice: null,   rating: 4.5, reviews: 2109, emoji: '❄️', badge: 'new',         tags: ['matte','frosted','slim'],      description: 'Silky matte finish that never shows fingerprints. The perfect balance of grip and style. Available in 8 premium colors.',                                   features: ['Anti-fingerprint matte','Silky smooth grip','8 color options','Precise cutouts','Camera protection','Wireless charging safe'], isNew: true,  isSale: false, dateAdded: '2024-06' },
  { id: 23, name: 'BioCase Eco-Friendly Bamboo Case',      brand: 'CLICKO',       category: 'cases',             price: 1909,   originalPrice: null,   rating: 4.4, reviews: 678,  emoji: '🌿', badge: 'new',         tags: ['eco','bamboo','sustainable'],  description: 'Made from real bamboo veneer and plant-based bioplastic. 100% compostable and stylishly unique — every case has a distinct wood grain pattern.',             features: ['100% compostable materials','Real bamboo veneer','Each piece unique','Drop tested 4ft','Wireless charging safe','Carbon-neutral shipping'], isNew: true,  isSale: false, dateAdded: '2024-07' },

  // POWER BANKS
  { id: 24, name: 'MaxPower 20K Pro Power Bank',           brand: 'CLICKO',       category: 'powerbanks',        price: 4999,   originalPrice: 6649,   rating: 4.8, reviews: 2876, emoji: '🔋', badge: 'sale',        tags: ['20000mah','fast charge','large'], description: '20,000mAh power bank with dual 30W USB-C ports and one USB-A. The LED display shows exact percentage. Charges a phone 5+ times on a single charge.',       features: ['20,000mAh capacity','2x 30W USB-C','1x USB-A 18W','LED % display','Pass-through charging','Airplane approved'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 25, name: 'PocketJuice 10K Slim Power Bank',       brand: 'SwiftCharge', category: 'powerbanks',        price: 2899,   originalPrice: null,   rating: 4.6, reviews: 1432, emoji: '⚡', badge: 'new',         tags: ['10000mah','slim','pocket'],    description: 'Ultra-slim 10,000mAh power bank that fits in your back pocket. Only 14mm thick! 20W USB-C Power Delivery for full-speed charging.',                        features: ['10,000mAh','20W USB-C PD','12W USB-A','14mm ultra-slim','5-LED indicator','Fabric finish'], isNew: true,  isSale: false, dateAdded: '2024-05' },
  { id: 26, name: 'SolarPack 15K Solar Power Bank',        brand: 'ProLine',     category: 'powerbanks',        price: 4549,   originalPrice: 6249,   rating: 4.5, reviews: 876,  emoji: '🌞', badge: 'sale',        tags: ['solar','outdoor','waterproof'], description: 'Dual solar panels on a rugged 15,000mAh battery. IP66 waterproof and shockproof. The ultimate companion for outdoor adventures.',                         features: ['15,000mAh','Dual solar panels','IP66 waterproof','Shockproof housing','LED flashlight','USB-C + USB-A output'], isNew: false, isSale: true,  dateAdded: '2024-03' },
  { id: 27, name: 'MagPack 5K MagSafe Power Bank',         brand: 'CLICKO',       category: 'powerbanks',        price: 3749,   originalPrice: null,   rating: 4.7, reviews: 654,  emoji: '🧲', badge: 'new',         tags: ['magsafe','wireless','compact'], description: 'Magnetic 5,000mAh power bank that snaps onto your MagSafe iPhone and wirelessly charges it on the go. No cables needed.',                                 features: ['5,000mAh','MagSafe magnetic attachment','7.5W wireless output','USB-C wired fallback','Ultra-slim 8mm','Integrated kickstand'], isNew: true,  isSale: false, dateAdded: '2024-06' },

  // SCREEN PROTECTORS
  { id: 28, name: 'DiamondGuard 9H Tempered Glass',        brand: 'CLICKO',       category: 'screen-protectors', price: 1159,   originalPrice: null,   rating: 4.7, reviews: 6543, emoji: '🪟', badge: 'best-seller', tags: ['tempered','9h','glass'],       description: '9H hardness tempered glass screen protector with oleophobic coating. Includes alignment installation frame for perfect bubble-free application.',              features: ['9H hardness','2.5D curved edges','Oleophobic coating','Alignment frame included','Touch accuracy maintained','Dual-layer package'], isNew: false, isSale: false, dateAdded: '2023-07' },
  { id: 29, name: 'PrivacyShield Anti-Spy Filter',         brand: 'ProLine',     category: 'screen-protectors', price: 1579,   originalPrice: 2079,   rating: 4.5, reviews: 1234, emoji: '🔒', badge: 'sale',        tags: ['privacy','anti-spy','filter'],  description: 'Micro-louver privacy filter blocks side-angle viewing. Only the person directly in front of the screen can see content. 9H tempered glass base.',              features: ['160° privacy angle','9H tempered glass','Anti-glare coating','Full edge-to-edge','Touch sensitivity preserved','Easy install frame'], isNew: false, isSale: true,  dateAdded: '2024-01' },
  { id: 30, name: 'FlexShield TPU Screen Film',            brand: 'CLICKO',       category: 'screen-protectors', price: 829,    originalPrice: null,   rating: 4.4, reviews: 2109, emoji: '🌊', badge: null,          tags: ['tpu','film','flexible'],       description: 'Self-healing TPU film that automatically fills in minor scratches. Flexible enough to cover curved screens with full edge protection.',                       features: ['Self-healing TPU','Curved screen compatible','Full-edge coverage','Anti-fingerprint','Ultra-clear HD','3-pack included'], isNew: false, isSale: false, dateAdded: '2023-10' },
  { id: 31, name: 'UltraClear Matte Anti-Glare Film',      brand: 'SwiftCharge', category: 'screen-protectors', price: 999,    originalPrice: 1329,   rating: 4.3, reviews: 876,  emoji: '🖼️', badge: 'sale',        tags: ['matte','anti-glare','outdoor'], description: 'Matte anti-glare coating eliminates reflections for perfect screen visibility in sunlight. Reduces eye strain during extended screen time.',                 features: ['Anti-glare matte coat','100% UV protection','Reduced eye strain','Easy bubble-free install','9H hardness','3-pack'], isNew: false, isSale: true,  dateAdded: '2024-02' },
  { id: 32, name: 'ProCam Lens Protector Pack',            brand: 'CLICKO',       category: 'screen-protectors', price: 649,    originalPrice: null,   rating: 4.6, reviews: 3210, emoji: '📷', badge: 'new',         tags: ['camera','lens','protector'],   description: 'Ultra-clear 9H tempered glass lens protectors for your camera module. Preserves full photo quality while protecting against scratches and drops.',            features: ['Camera-specific design','9H hardness','Zero light interference','Easy self-install','Full module coverage','2-pack'], isNew: true,  isSale: false, dateAdded: '2024-05' },
];

// ============================================================
// STATE
// ============================================================
let cart = JSON.parse(localStorage.getItem('clicko_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('clicko_wishlist') || '[]');
let currentView = 'home';
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let heroInterval = null;
let currentSlide = 0;

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  updateCartUI();
  updateWishlistBadge();
  startHeroCarousel();
  startCountdown();
});

// ============================================================
// VIEW MANAGEMENT
// ============================================================
function showView(view) {
  document.getElementById('home-view').classList.toggle('hidden', view !== 'home');
  document.getElementById('shop-view').classList.toggle('hidden', view !== 'shop');
  document.getElementById('wishlist-view').classList.toggle('hidden', view !== 'wishlist');
  currentView = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  showView('home');
}

function showWishlist() {
  showView('wishlist');
  renderWishlistGrid();
}

// ============================================================
// HERO CAROUSEL
// ============================================================
function startHeroCarousel() {
  heroInterval = setInterval(() => nextSlide(), 5000);
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  document.getElementById('hero-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() { goToSlide(currentSlide + 1); clearInterval(heroInterval); startHeroCarousel(); }
function prevSlide() { goToSlide(currentSlide - 1); clearInterval(heroInterval); startHeroCarousel(); }

// ============================================================
// COUNTDOWN TIMER
// ============================================================
function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 2);
  end.setHours(23, 59, 59);

  function update() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const el = document.getElementById('countdown');
    if (el) {
      el.innerHTML = [
        { v: d, l: 'Days' }, { v: h, l: 'Hours' }, { v: m, l: 'Mins' }, { v: s, l: 'Secs' }
      ].map(u => `<div class="countdown-unit"><span>${String(u.v).padStart(2,'0')}</span><span>${u.l}</span></div>`).join('');
    }
  }
  update();
  setInterval(update, 1000);
}

// ============================================================
// PRODUCT RENDERING
// ============================================================
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function formatPrice(p) { return '₹' + Math.round(p).toLocaleString('en-IN'); }

function getDiscountPercent(current, original) {
  if (!original) return null;
  return Math.round((1 - current / original) * 100);
}

function cartQtyBtn(id) {
  const item = cart.find(i => i.id === id);
  if (!item) {
    return `<button class="add-to-cart-btn" onclick="addToCart(${id})" aria-label="Add to cart" title="Add to cart">+</button>`;
  }
  return `
    <div class="card-qty-stepper">
      <button class="card-qty-btn" onclick="cardDecrement(event,${id})">−</button>
      <span class="card-qty-val">${item.qty}</span>
      <button class="card-qty-btn" onclick="cardIncrement(event,${id})">+</button>
    </div>`;
}

function cardIncrement(event, id) {
  event.stopPropagation();
  const item = cart.find(i => i.id === id);
  if (item) { item.qty++; } else { cart.push({ id, qty: 1 }); }
  saveCart();
  updateCartUI();
  renderCartItems();
  updateCardQtyBtn(id);
  showToast('Cart updated!', 'success');
}

function cardDecrement(event, id) {
  event.stopPropagation();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty--;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
  updateCardQtyBtn(id);
}

function updateCardQtyBtn(id) {
  document.querySelectorAll(`.product-card[data-id="${id}"] .product-price-row`).forEach(row => {
    const container = row.querySelector('.add-to-cart-btn, .card-qty-stepper');
    if (container) {
      const temp = document.createElement('div');
      temp.innerHTML = cartQtyBtn(id);
      container.replaceWith(temp.firstElementChild);
    }
  });
}

function createProductCard(product, compact = false) {
  const inWishlist = wishlist.includes(product.id);
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const badge = product.badge === 'best-seller' ? 'HOT' : product.isNew ? 'NEW' : product.isSale ? `${discount}% OFF` : null;
  const badgeClass = product.badge === 'best-seller' ? 'badge-hot' : product.isNew ? 'badge-new' : 'badge-sale';

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-image" onclick="openModal(${product.id})">
        <span>${product.emoji}</span>
        <button class="quick-view-btn">Quick View</button>
        <div class="product-badges">
          ${badge ? `<span class="product-badge ${badgeClass}">${badge}</span>` : ''}
        </div>
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(event, ${product.id})" aria-label="Add to wishlist">
          ${inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name" onclick="openModal(${product.id})">${product.name}</div>
        <div class="product-rating">
          <span class="stars" title="${product.rating} stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
            ${discount ? `<span class="price-discount">-${discount}%</span>` : ''}
          </div>
          ${cartQtyBtn(product.id)}
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const featured = PRODUCTS.filter(p => p.badge === 'best-seller' || p.isNew).slice(0, 8);
  const grid = document.getElementById('featured-grid');
  if (grid) grid.innerHTML = featured.map(p => createProductCard(p)).join('');
}

// ============================================================
// SHOP / FILTER / SORT
// ============================================================
function filterByCategory(cat) {
  showView('shop');
  // set category radio
  const radios = document.querySelectorAll('input[name="cat"]');
  radios.forEach(r => { r.checked = r.value === cat; });
  // update title
  const titles = {
    all: 'All Products', chargers: 'Chargers', earphones: 'Earphones',
    cables: 'Cables', cases: 'Phone Cases', powerbanks: 'Power Banks', 'screen-protectors': 'Screen Protectors'
  };
  document.getElementById('shop-title').textContent = titles[cat] || 'Products';
  document.getElementById('shop-subtitle').textContent = cat === 'all'
    ? 'Discover our full range of premium mobile accessories'
    : `Browse our collection of ${(titles[cat] || '').toLowerCase()}`;
  currentPage = 1;
  applyFilters();
}

function applyFilters() {
  const cat = document.querySelector('input[name="cat"]:checked')?.value || 'all';
  const priceRange = document.querySelector('input[name="price"]:checked')?.value || 'all';
  const minRating = document.querySelector('input[name="rating"]:checked')?.value || 'all';
  const sortVal = document.getElementById('sort-select')?.value || 'featured';
  const search = document.getElementById('search-input')?.value?.toLowerCase().trim() || '';
  const brands = [...document.querySelectorAll('.filter-group input[type="checkbox"]:checked')].map(c => c.value);

  let filtered = [...PRODUCTS];

  // category
  if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);

  // price
  if (priceRange !== 'all') {
    const [min, max] = priceRange === '8000+' ? [8000, Infinity] : priceRange.split('-').map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // rating
  if (minRating !== 'all') {
    filtered = filtered.filter(p => p.rating >= Number(minRating));
  }

  // brand
  if (brands.length) filtered = filtered.filter(p => brands.includes(p.brand));

  // search
  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search) ||
      p.tags.some(t => t.includes(search)) ||
      p.description.toLowerCase().includes(search)
    );
  }

  // sort
  switch (sortVal) {
    case 'price-asc':  filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating':     filtered.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     filtered.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded)); break;
    case 'name-asc':   filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break; // featured = original order
  }

  renderShopGrid(filtered);
}

function renderShopGrid(products) {
  const grid = document.getElementById('shop-grid');
  const noResults = document.getElementById('no-results');
  const count = document.getElementById('results-count');

  if (!products.length) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    count.textContent = '0 products';
    document.getElementById('pagination').innerHTML = '';
    return;
  }
  noResults.classList.add('hidden');

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageProducts = products.slice(start, start + ITEMS_PER_PAGE);

  count.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
  grid.innerHTML = pageProducts.map(p => createProductCard(p)).join('');
  renderPagination(totalPages, products);
}

function renderPagination(totalPages, allProducts) {
  const el = document.getElementById('pagination');
  if (totalPages <= 1) { el.innerHTML = ''; return; }

  let html = '';
  html += `<button class="page-btn" onclick="changePage(${currentPage - 1}, event)" ${currentPage === 1 ? 'disabled' : ''}>&#8249;</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i}, event)">${i}</button>`;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<span style="padding:0 4px;align-self:center">…</span>`;
    }
  }
  html += `<button class="page-btn" onclick="changePage(${currentPage + 1}, event)" ${currentPage === totalPages ? 'disabled' : ''}>&#8250;</button>`;
  el.innerHTML = html;
}

function changePage(page, event) {
  currentPage = page;
  applyFilters();
  document.querySelector('.shop-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearFilters() {
  document.querySelectorAll('input[name="cat"]')[0].checked = true;
  document.querySelectorAll('input[name="price"]')[0].checked = true;
  document.querySelectorAll('input[name="rating"]')[0].checked = true;
  document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(c => c.checked = false);
  document.getElementById('sort-select').value = 'featured';
  document.getElementById('search-input').value = '';
  document.getElementById('shop-title').textContent = 'All Products';
  currentPage = 1;
  applyFilters();
}

// ============================================================
// SEARCH
// ============================================================
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('search-input').focus();
  }
}

function handleSearch() {
  const q = document.getElementById('search-input').value.trim();
  if (q.length === 0 && currentView !== 'shop') return;
  if (q.length > 0 && currentView !== 'shop') {
    showView('shop');
    document.getElementById('shop-title').textContent = `Search: "${q}"`;
    document.getElementById('shop-subtitle').textContent = 'Search results';
  }
  currentPage = 1;
  applyFilters();
}

// ============================================================
// VIEW TOGGLE (grid/list)
// ============================================================
function setView(type) {
  const grid = document.getElementById('shop-grid');
  document.getElementById('grid-view-btn').classList.toggle('active', type === 'grid');
  document.getElementById('list-view-btn').classList.toggle('active', type === 'list');
  if (type === 'list') {
    grid.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
  }
}

// ============================================================
// MOBILE MENU / FILTERS
// ============================================================
function toggleMobileMenu() {
  const nav = document.getElementById('nav-links');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function toggleMobileFilters() {
  document.getElementById('filter-sidebar').classList.toggle('mobile-open');
  document.getElementById('cart-overlay').classList.toggle('open');
  // reuse overlay for filter backdrop
}

function closeMobileFilters() {
  document.getElementById('filter-sidebar').classList.remove('mobile-open');
  document.getElementById('cart-overlay').classList.remove('open');
}

// ============================================================
// PRODUCT MODAL
// ============================================================
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const discount = getDiscountPercent(p.price, p.originalPrice);
  const inWishlist = wishlist.includes(p.id);

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-body">
      <div class="modal-image">${p.emoji}</div>
      <div class="modal-info">
        <span class="modal-badge">${p.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
        <h2>${p.name}</h2>
        <div class="modal-stars">
          <span class="stars">${renderStars(p.rating)}</span>
          <span>${p.rating} (${p.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="modal-price">
          <span class="current">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="original">${formatPrice(p.originalPrice)}</span>` : ''}
          ${discount ? `<span class="discount">-${discount}%</span>` : ''}
        </div>
        <p class="modal-description">${p.description}</p>
        <ul class="modal-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="modal-actions">
          <div class="modal-qty">
            <button class="qty-btn" onclick="modalQty(-1)">−</button>
            <span class="qty-value" id="modal-qty-val">1</span>
            <button class="qty-btn" onclick="modalQty(1)">+</button>
          </div>
          <button class="btn btn-primary" style="flex:1" onclick="addToCartFromModal(${p.id})">Add to Cart</button>
          <button class="btn ${inWishlist ? 'btn-danger' : 'btn-outline'}" onclick="toggleWishlistModal(${p.id})" id="modal-wish-btn">
            ${inWishlist ? '❤️ Saved' : '🤍 Save'}
          </button>
        </div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:8px">
          <span>Brand: <strong>${p.brand}</strong></span> &nbsp;|&nbsp;
          <span>✓ In Stock</span> &nbsp;|&nbsp;
          <span>🚚 Ships in 1-2 days</span>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

let modalQtyVal = 1;
function modalQty(delta) {
  modalQtyVal = Math.max(1, modalQtyVal + delta);
  document.getElementById('modal-qty-val').textContent = modalQtyVal;
}

function addToCartFromModal(id) {
  addToCart(id, modalQtyVal);
  closeModal();
}

function toggleWishlistModal(id) {
  toggleWishlist(null, id);
  const inWishlist = wishlist.includes(id);
  const btn = document.getElementById('modal-wish-btn');
  if (btn) {
    btn.className = `btn ${inWishlist ? 'btn-danger' : 'btn-outline'}`;
    btn.innerHTML = inWishlist ? '❤️ Saved' : '🤍 Save';
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
  modalQtyVal = 1;
}

// ============================================================
// CART
// ============================================================
function saveCart() {
  localStorage.setItem('clicko_cart', JSON.stringify(cart));
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
  if (!isOpen) renderCartItems();
}

function addToCart(id, qty = 1) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart();
  updateCartUI();
  renderCartItems();
  updateCardQtyBtn(id);
  showToast(`Added to cart!`, 'success');
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  const countBadge = document.getElementById('cart-count-badge');
  badge.textContent = total;
  badge.classList.toggle('hidden', total === 0);
  countBadge.textContent = total;
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><h3>Your cart is empty</h3><p>Add some products to get started!</p></div>`;
    document.getElementById('cart-total').textContent = '$0.00';
    return;
  }

  let total = 0;
  el.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const subtotal = p.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${p.emoji}</div>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <span class="cart-item-price">${formatPrice(p.price)}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeCartQty(${p.id}, -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${p.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">✕</button>
      </div>
    `;
  }).join('');
  document.getElementById('cart-total').textContent = formatPrice(total);
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('Removed from cart');
}

function checkout() {
  if (!cart.length) { showToast('Your cart is empty!', 'error'); return; }
  showToast('Redirecting to checkout… (demo)', 'success');
  setTimeout(() => toggleCart(), 1500);
}

// ============================================================
// WISHLIST
// ============================================================
function saveWishlist() {
  localStorage.setItem('clicko_wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(event, id) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast('Added to wishlist ❤️', 'success');
  } else {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  }
  saveWishlist();
  updateWishlistBadge();

  // update button in card
  const btn = document.querySelector(`.product-card[data-id="${id}"] .wishlist-btn`);
  if (btn) {
    const inWishlist = wishlist.includes(id);
    btn.classList.toggle('active', inWishlist);
    btn.innerHTML = inWishlist ? '❤️' : '🤍';
  }

  // if in wishlist view, re-render
  if (currentView === 'wishlist') renderWishlistGrid();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge');
  badge.textContent = wishlist.length;
  badge.classList.toggle('hidden', wishlist.length === 0);
}

function renderWishlistGrid() {
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  if (!items.length) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    grid.innerHTML = items.map(p => createProductCard(p)).join('');
  }
}

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ============================================================
// FORMS
// ============================================================
function handleNewsletter(e) {
  e.preventDefault();
  showToast('Thanks for subscribing! 🎉', 'success');
  e.target.reset();
}

function handleContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll get back to you soon.', 'success');
  e.target.reset();
}

// ============================================================
// OVERLAY click closes cart & mobile filters
// ============================================================
document.getElementById('cart-overlay').addEventListener('click', () => {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar.classList.contains('open')) {
    toggleCart();
  } else {
    closeMobileFilters();
  }
});

document.getElementById('close-cart').addEventListener('click', toggleCart);

// Close search on outside click
document.addEventListener('click', (e) => {
  const bar = document.getElementById('search-bar');
  const toggle = document.getElementById('search-toggle');
  if (!bar.contains(e.target) && !toggle.contains(e.target)) {
    bar.classList.remove('open');
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar.classList.contains('open')) toggleCart();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    toggleSearch();
  }
});

// Sticky header shadow
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.1)'
    : '0 2px 12px rgba(0,0,0,0.06)';
});
