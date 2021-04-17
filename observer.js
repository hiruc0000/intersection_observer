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

function callback(entries) {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      selectElement(entry.target);
    }
  });
}

function selectElement(target) {
  const activeIndex = document.querySelector("#index-list .select");

  if (activeIndex !== null) {
    activeIndex.classList.remove("select");
  }

  const newActiveIndex = document.querySelector(`a[href='#${target.id}']`);
  newActiveIndex.classList.add("select");
}









//  参考サイト
//  https://ics.media/entry/190902/
//  https://qiita.com/tkyngnm/items/fe94ef459c0de78fb89e
