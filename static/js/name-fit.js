(function () {
  function fitClientName(el) {
    if (!el) return;

    // Mantem visual limpo e evita quebra.
    el.style.whiteSpace = "nowrap";
    el.style.overflow = "hidden";
    el.style.textOverflow = "ellipsis";
    el.style.maxWidth = "100%";

    var parent = el.parentElement;
    if (!parent) return;

    // Limites de fonte para manter hierarquia visual.
    var maxPx = Math.max(28, Math.floor(window.innerHeight * 0.09));
    var minPx = 20;

    el.style.fontSize = maxPx + "px";

    // Reduz gradualmente ate caber no container.
    while (el.scrollWidth > parent.clientWidth && maxPx > minPx) {
      maxPx -= 1;
      el.style.fontSize = maxPx + "px";
    }
  }

  function applyFit() {
    var candidates = document.querySelectorAll(
      ".featured-container .client-name, .featured-message .client-name"
    );
    candidates.forEach(fitClientName);
  }

  function startObservers() {
    applyFit();

    var mo = new MutationObserver(function () {
      applyFit();
    });

    mo.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    window.addEventListener("resize", applyFit, { passive: true });

    // Reaplica em intervalos curtos para chamadas novas.
    setInterval(applyFit, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObservers);
  } else {
    startObservers();
  }
})();
