const handleBodyHeight = () => {
  const text = document.querySelector("#height");
  const height =
    document.querySelector("div").offsetHeight;
  text.textContent = `${height}px - ${new Date().getMilliseconds()}`;

  window.requestAnimationFrame(handleBodyHeight);
};

window.requestAnimationFrame(handleBodyHeight);
