const Img = {
  src: path => CONFIG.imgDir + path + CONFIG.imgExt,

  art(p) {
    const c = p.color; let s;
    if (p.cat === "Ceramics") s = `<path d="M38 80 Q22 62 40 44 Q44 30 42 22 L58 22 Q56 30 60 44 Q78 62 62 80Z" fill="${c}"/>`;
    else if (p.cat === "Textiles") s = `<rect x="20" y="30" width="60" height="42" rx="3" fill="${c}"/><path d="M20 40h60M20 50h60M20 60h60" stroke="rgba(0,0,0,.12)"/>`;
    else if (p.cat === "Lighting") s = `<path d="M34 30 L66 30 L72 54 L28 54Z" fill="${c}"/><rect x="48" y="54" width="4" height="22" fill="#6b5a3a"/><ellipse cx="50" cy="78" rx="14" ry="3" fill="#6b5a3a"/>`;
    else if (p.cat === "Kitchen") s = `<circle cx="50" cy="50" r="28" fill="${c}"/><circle cx="50" cy="50" r="18" fill="rgba(255,255,255,.28)"/>`;
    else s = `<rect x="24" y="40" width="52" height="22" rx="10" fill="${c}"/>`;
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><rect width="100" height="100" fill="#efe5d6"/>${s}</svg>`;
  },

  // Inner HTML of a slot (placeholder + photo)
  layers(path, alt = "", phInner = "", phBg = "") {
    const src = Img.src(path);
    return `<div class="ph" style="${phBg ? "background:" + phBg : ""}">${phInner}<small>${src}</small></div>` +
           `<img class="zoom" src="${src}" alt="${alt}" loading="lazy" onload="this.previousElementSibling.remove()" onerror="this.remove()">`;
  },

  hydrate(root = document) {
    $$("[data-img]", root).forEach(el => {
      el.classList.add("slot");
      el.innerHTML = Img.layers(el.dataset.img, el.dataset.alt || "", "", el.dataset.ph || "");
    });
  }
};
