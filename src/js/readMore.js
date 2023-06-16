export const readMoreButton = document.getElementById("read-more");
export const textAbout = document.querySelector(".main__read-more--none");

export function readMore() {
  let toggle = false;
  readMoreButton.addEventListener('click', () => {
  if (!toggle) {
    readMoreButton.classList.toggle("show-more--active");
    textAbout.classList.toggle("main__text-about");
    readMoreButton.textContent = "Скрыть";
    toggle = true;
  } else if (toggle) {
    readMoreButton.classList.toggle("show-more--active");
    textAbout.classList.toggle("main__text-about");
    readMoreButton.textContent = "Читать далее";
    toggle = false;}
});
};
