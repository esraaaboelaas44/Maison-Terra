function initClicks() {
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");   if (add) { e.preventDefault(); Cart.add(add.dataset.add); }
    const f = e.target.closest("[data-f]");       if (f) { shopFilter = f.dataset.f; renderShop(); }
    const c = e.target.closest("[data-cat]");     if (c) shopFilter = c.dataset.cat;
    const q = e.target.closest("[data-q]");       if (q) { const [id, d] = q.dataset.q.split(":"); Cart.change(id, +d); }
    const faq = e.target.closest(".faq button");
    if (faq) { const w = faq.parentElement; w.classList.toggle("open"); faq.setAttribute("aria-expanded", w.classList.contains("open")); }
  });
}
function initCartDrawer() {
  $("#cartBtn").onclick = () => Cart.open(true);
  $("#cx").onclick = $("#veil").onclick = () => Cart.open(false);
  $("#co").onclick = () => { Cart.open(false); toast("This is a demo — checkout isn’t connected."); };
}
function initMobileMenu() {
  $("#burger").onclick = () => { const m = $("#mnav"); m.style.maxHeight = m.style.maxHeight && m.style.maxHeight !== "0px" ? "0" : m.scrollHeight + "px"; };
}
function initContactForm() {
  $("#send").onclick = () => {
    const name = $("#fn").value.trim(), email = $("#fe").value.trim(), msg = $("#fm").value.trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) { $("#ferr").textContent = "Please fill in your name, a valid email, and a message."; return; }
    // TODO: send the form to your backend / email service here
    $("#formWrap").innerHTML = `<div class="text-center py-16" style="animation:pg .6s"><h2 class="text-4xl mb-3">Thank you, ${name.replace(/[<>&]/g, "")}.</h2><p class="text-mute">Your message is on its way. We’ll reply within 24 hours.</p></div>`;
  };
}
function initDragScroll() {
  const s = $("#favs"); let down = 0, x0 = 0, left0 = 0;
  s.addEventListener("pointerdown", e => { if (e.pointerType === "touch") return; down = 1; x0 = e.clientX; left0 = s.scrollLeft; s.style.scrollSnapType = "none"; s.style.cursor = "grabbing"; });
  addEventListener("pointermove", e => { if (down) s.scrollLeft = left0 - (e.clientX - x0); });
  addEventListener("pointerup", () => { if (down) { down = 0; s.style.scrollSnapType = ""; s.style.cursor = ""; } });
}
