const Theme = {
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  moon: "M12 3a9 9 0 109 9 7 7 0 01-9-9z",
  set(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("#themeIcon").setAttribute("d", t === "dark" ? this.sun : this.moon);
    try { localStorage.setItem("mt-theme", t); } catch (e) {}
  },
  init() {
    let t = "light"; try { t = localStorage.getItem("mt-theme") || "light"; } catch (e) {}
    this.set(t);
    $("#themeBtn").onclick = () => this.set(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }
};
