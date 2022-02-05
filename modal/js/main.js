function createModal(config) {
  const hideModalonEscape = (e) => {
    if (e.key === "Escape") {
      hideModal();
    }
  };

  const hideModal = () => {
    modal.remove();
    document.removeEventListener("keyup", hideModalonEscape);
  };

  //create modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  //create modal container
  const container = document.createElement("div");
  container.classList.add("modal-container");

  //create header
  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = config.title;
  container.appendChild(header);

  //close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times";
  header.appendChild(closeButton);
  closeButton.onclick = hideModal;

  //create modal background
  const background = document.createElement("div");
  background.classList.add("background");
  modal.appendChild(background);
  background.onclick = hideModal;

  //create body
  const body = document.createElement("div");
  body.classList.add("body");

  body.innerHTML = config.body;
  container.appendChild(body);
  body.innerHTML =
    config.body instanceof HTMLElement ? config.body.innerHTML : config.body;

  modal.appendChild(container);
  document.body.appendChild(modal);

  document.addEventListener("keyup", hideModalonEscape);
}

document.querySelector("#modal-1").onclick = function () {
  createModal({
    title: "Welcome",
    body: "this is body",
  });
};

document.querySelector("#modal-2").onclick = function () {
  createModal({
    title: "Welcome",
    body: document.querySelector(".modal-content"),
  });
};
