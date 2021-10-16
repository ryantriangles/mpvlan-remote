const i = setInterval(() => {
  const title = document.querySelector("h3");
  if (title) {
    document.title = title.textContent + " #mpv";
    clearInterval(i);
  }
}, 1000);
