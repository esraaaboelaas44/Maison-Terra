const Router = {
  start() { addEventListener("hashchange", () => this.go()); this.go(); },
  go() {
    let page = location.hash.slice(1);
    if (!$("#v-" + page)) page = "home";
    $$(".view").forEach(v => v.classList.remove("show"));
    $("#v-" + page).classList.add("show");
    $$("#nav .nl").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + page));
    if (page === "shop") renderShop();
    window.scrollTo({ top: 0, behavior: "instant" });
    observeReveals();
    $("#mnav").style.maxHeight = "0";
  }
};
