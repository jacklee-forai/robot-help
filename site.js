const q = document.querySelector("#siteSearch");
if (q) {
  const cards = [...document.querySelectorAll("[data-search]")];
  const out = document.querySelector("#results");
  const filter = () => {
    const s = q.value.trim().toLowerCase();
    let n = 0;
    cards.forEach(c => {
      const ok = !s || c.dataset.search.toLowerCase().includes(s);
      c.style.display = ok ? "block" : "none";
      if (ok) n++;
    });
    out.textContent = s && n === 0 ? "目前這 5 個測試頁沒有符合的結果。" : "";
  };
  q.addEventListener("input", filter);
  const b = document.querySelector("#searchBtn");
  if (b) b.addEventListener("click", filter);
}