(() => {
  const sections = document.querySelectorAll('section');

  const options = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0
  }

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
})();

function callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      selectElement(entry.target);
      //observer.unobserve(entry.target); //監視を一度で辞める場合に必要
    }
  });
}

function selectElement(target) {
  const activeIndex = document.querySelector("#index-list .select");

  if (activeIndex !== null) {
    activeIndex.classList.remove("select");
  }

  const newActiveIndex = document.querySelector(`a[href="#${target.id}"]`);
  newActiveIndex.classList.add("select");
}
