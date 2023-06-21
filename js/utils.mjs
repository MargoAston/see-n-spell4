export async function renderWithTemplate(
    templateFn,
    parentElement,
    data,
    callback,
    position = "afterbegin",
    clear = true
  ) {
    if (clear) {
      parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if (callback) {
      callback(data);
    }
}

function loadTemplate(path) {
    return async function () {
          const res = await fetch(path);
          if (res.ok) {
            const html = await res.text();
            return html;
        }
    };
}

export async function loadHeaderFooter() {
    const headerTemplateFn = await loadTemplate("../public/partials/header.html");
    const footerTemplateFn = await loadTemplate("../public/partials/footer.html");
  
    const headerEl = document.querySelector("#main-header");
    const footerEl = document.querySelector("#main-footer");
  
    await renderWithTemplate(headerTemplateFn, headerEl);
    await renderWithTemplate(footerTemplateFn, footerEl);
  
  
    // document.querySelector('#searchBtn2').addEventListener('click', searchProducts);
}