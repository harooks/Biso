window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  const maxMove = window.innerHeight - 40; // 上下移動可能距離
  document.querySelector(".scroll-indicator").style.transform = `translateY(${
    scrollPercent * maxMove
  }px)`;
});
