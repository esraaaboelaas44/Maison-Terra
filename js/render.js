const money = n => CONFIG.currency + n;
const getProduct = id => PRODUCTS.find(p => p.id === id);
let shopFilter = "All";

function productCard(p, { detail = false, reveal = true } = {}) {
  return `<article class="card ${reveal ? "rv" : ""}">
    <div class="img slot">${Img.layers("products/" + p.id, p.name, Img.art(p))}<button class="add" data-add="${p.id}">Add to Cart</button></div>
    <div class="pt-4">${detail ? `<p class="text-xs tracking-[.16em] uppercase text-acc">${p.cat}</p>` : ""}
    <h3 class="text-xl mt-1">${p.name}</h3>${detail ? `<p class="text-sm text-mute mt-1">${p.desc}</p>` : ""}<p class="mt-2">${money(p.price)}</p></div></article>`;
}

function renderStatic() {
  $("#cats").innerHTML = CATEGORIES.map((c, i) => `
    <a href="#shop" data-cat="${c.name}" class="card rv block" style="transition-delay:${i * .07}s">
      <div class="img slot" style="aspect-ratio:3/4">${Img.layers("categories/" + c.name.toLowerCase(), c.name, "", `linear-gradient(170deg,${c.color}aa,${c.color})`)}
        <div class="shade"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-4 text-white"><h3 class="text-2xl" style="color:#fff">${c.name}</h3><span class="text-xs opacity-90">${c.range}</span></div>
      </div></a>`).join("");
  $("#favs").innerHTML = FAVORITES.map(id => productCard(getProduct(id), { reveal: false })).join("");
  $("#newp").innerHTML = NEW_ARRIVALS.map(id => productCard(getProduct(id))).join("");
  $("#faqs").innerHTML = FAQS.map(([q, a]) => `<div class="faq border-b bd"><button class="w-full flex justify-between items-center py-5 text-left text-lg font-normal" aria-expanded="false">${q}<span class="p text-2xl text-acc ml-4">+</span></button><div class="a"><div><p class="text-mute pb-5 pr-8">${a}</p></div></div></div>`).join("");
  $("#fcat").innerHTML += CATEGORIES.map(c => `<li><a href="#shop" data-cat="${c.name}" class="hover:text-[color:var(--acc)]">${c.name}</a></li>`).join("");
}

function renderShop() {
  const list = shopFilter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === shopFilter);
  $("#chips").innerHTML = ["All", ...CATEGORIES.map(c => c.name)].map(c => `<button class="chip ${c === shopFilter ? "on" : ""}" data-f="${c}">${c}</button>`).join("");
  $("#pc").textContent = list.length + " products";
  $("#grid").innerHTML = list.map(p => productCard(p, { detail: true })).join("");
  observeReveals();
}

/* Scroll-reveal animation */
let _io;
function observeReveals() {
  _io && _io.disconnect();
  _io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); _io.unobserve(e.target); } }), { threshold: .12 });
  $$(".view.show .rv").forEach((e, i) => { e.style.transitionDelay = e.style.transitionDelay || (i % 4) * .08 + "s"; _io.observe(e); });
}
