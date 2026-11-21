const Cart = {
  items: {},
  load() { try { this.items = JSON.parse(localStorage.getItem("mt-cart") || "{}"); } catch (e) {} },
  save() { try { localStorage.setItem("mt-cart", JSON.stringify(this.items)); } catch (e) {} },
  add(id) {
    this.items[id] = (this.items[id] || 0) + 1; this.save(); this.paint();
    const c = $("#cnt"); c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump");
    toast(getProduct(id).name + " added to cart");
  },
  change(id, d) {
    this.items[id] = Math.max(0, (this.items[id] || 0) + d);
    if (!this.items[id]) delete this.items[id];
    this.save(); this.paint();
  },
  open(o) { $("#drawer").classList.toggle("open", o); $("#veil").classList.toggle("open", o); },
  paint() {
    const ids = Object.keys(this.items).filter(getProduct);
    let n = 0, total = 0;
    $("#items").innerHTML = ids.length ? ids.map(id => {
      const p = getProduct(id), q = this.items[id]; n += q; total += q * p.price;
      return `<div class="flex gap-4 py-4 border-b bd">
        <div class="img slot nolabel w-20 shrink-0">${Img.layers("products/" + p.id, p.name, Img.art(p))}</div>
        <div class="flex-1"><h3 class="text-lg leading-tight">${p.name}</h3><p class="text-sm text-mute">${money(p.price)}</p>
        <div class="flex items-center gap-3 mt-2 text-sm"><button data-q="${id}:-1" class="w-7 h-7 border bd" aria-label="Less">−</button>${q}<button data-q="${id}:1" class="w-7 h-7 border bd" aria-label="More">+</button></div></div></div>`;
    }).join("") : `<p class="text-mute text-center mt-16">Your cart is empty.</p>`;
    $("#cnt").textContent = n; $("#sub").textContent = money(total);
    const left = CONFIG.freeShipping - total;
    $("#ship").textContent = !total ? "" : left <= 0 ? "You’ve unlocked free shipping." : `${money(left)} away from free shipping.`;
  }
};
