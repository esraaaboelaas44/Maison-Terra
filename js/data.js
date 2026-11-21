const PRODUCTS = [
  { id: "ceramic-vase",   name: "Hand-thrown Ceramic Vase",   cat: "Ceramics", price: 128, color: "#c4714f", desc: "Organic form vase with warm terracotta glaze, each piece uniquely shaped by hand." },
  { id: "linen-runner",   name: "Linen Table Runner",         cat: "Textiles", price: 85,  color: "#d9c8ae", desc: "Natural linen runner with visible weave texture, softens beautifully with each wash." },
  { id: "brass-lamp",     name: "Brass Table Lamp",           cat: "Lighting", price: 245, color: "#b8913f", desc: "Mid-century inspired brass lamp with linen shade, casts warm ambient light." },
  { id: "dinner-plates",  name: "Stoneware Dinner Plate Set", cat: "Kitchen",  price: 165, color: "#e8dcc6", desc: "Set of four speckled cream plates with organic handmade character." },
  { id: "wool-throw",     name: "Woven Wool Throw",           cat: "Textiles", price: 195, color: "#a5522f", desc: "Warm rust-colored wool throw with textured weave pattern, perfect for layering." },
  { id: "oak-board",      name: "Oak Serving Board",          cat: "Objects",  price: 72,  color: "#b98d5c", desc: "Solid oak board with natural grain, rustic yet refined for serving or display." },
  { id: "glass-carafe",   name: "Amber Glass Carafe",         cat: "Kitchen",  price: 58,  color: "#c9822b", desc: "Organic-shaped amber glass carafe that catches and warms the light." },
  { id: "rattan-pendant", name: "Rattan Pendant Light",       cat: "Lighting", price: 310, color: "#c8a46e", desc: "Handwoven rattan pendant with natural texture, creates beautiful shadow patterns." },
  { id: "ceramic-mugs",   name: "Ceramic Mug Set",            cat: "Ceramics", price: 96,  color: "#9b6b4d", desc: "Set of four mugs in earthy tones, each with handmade character." },
  { id: "cotton-napkins", name: "Linen Napkin Set",           cat: "Textiles", price: 48,  color: "#e0d3bd", desc: "Set of four natural linen napkins with visible texture and soft hand." },
  { id: "marble-mortar",  name: "Marble Mortar & Pestle",     cat: "Objects",  price: 135, color: "#dcd8d2", desc: "White marble mortar with natural veining, polished and substantial." },
  { id: "candle-holder",  name: "Ceramic Candle Holder",      cat: "Ceramics", price: 64,  color: "#3a3532", desc: "Matte black ceramic holder with minimalist cylindrical form." }
];
const CATEGORIES = [
  { name: "Ceramics", range: "$64–$128",  color: "#c4714f" },
  { name: "Textiles", range: "$48–$195",  color: "#a5522f" },
  { name: "Lighting", range: "$245–$310", color: "#b8913f" },
  { name: "Kitchen",  range: "$58–$165",  color: "#c9822b" },
  { name: "Objects",  range: "$72–$135",  color: "#b98d5c" }
];
const FAVORITES    = ["wool-throw", "oak-board", "glass-carafe", "rattan-pendant", "ceramic-mugs", "cotton-napkins"];
const NEW_ARRIVALS = ["ceramic-vase", "linen-runner", "brass-lamp", "dinner-plates"];
const FAQS = [
  ["How long does shipping take?", "Standard shipping takes 5-7 business days within the continental US. Expedited shipping (2-3 business days) is available at checkout. International orders typically arrive within 10-14 business days."],
  ["What is your return policy?", "We accept returns within 30 days of delivery for items in their original condition. Custom or personalized items cannot be returned."],
  ["Do you ship internationally?", "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location and are calculated at checkout."],
  ["Are your products handmade?", "Many of our products are handmade or made in small batches by independent artisans. Each piece may have slight variations that reflect its handcrafted nature."],
  ["How should I care for my items?", "Care instructions vary by material. Most ceramics and glass are dishwasher safe, while natural materials like wood and rattan require hand cleaning. Specific care instructions are included with each product."],
  ["Can I track my order?", "Yes, you will receive a tracking number via email once your order ships. You can also view tracking information in your account."],
  ["Do you offer gift wrapping?", "Yes, we offer complimentary gift wrapping on all orders. You can select this option at checkout and include a personalized message."],
  ["What payment methods do you accept?", "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay."]
];
