const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let items;

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }

  contacts.appendChild(fragment);
  items = Array.from(contacts.getElementsByClassName("contact"));
}

const onScroll = (()=>{
  let timeOut;
  return () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      stickyHeader.textContent = ~~(contacts.scrollTop / 18);
    })
  }
})();
contacts.addEventListener("scroll", onScroll);
addContacts();
