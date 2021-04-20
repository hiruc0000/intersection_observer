(() => {
  const sections = document.querySelectorAll('section');
  const titles = document.querySelectorAll('.section-title');

  // const options = {
  //   root: null,
  //   rootMargin: '-50% 0px',
  //   threshold: 0
  // }

  const observer = new IntersectionObserver(callback, options = {rootMargin: '-50% 0px'});
  const observer2 = new IntersectionObserver(callback2, options = {rootMargin: '0px 0px -20%'});

  sections.forEach((section) => {
    observer.observe(section);
  });

  titles.forEach((title) => {
    observer2.observe(title);
  });
})();


//  ヘッダーナビへの処理
function callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      selectIndex(entry.target);
      // observer.unobserve(entry.target); //監視を一度で辞める場合に必要
    }
  });
}

function selectIndex(target) {
  const activeIndex = document.querySelector('#index-list .select');
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    section.classList.remove('select');
  });

  if (activeIndex !== null) {
    activeIndex.classList.remove('select');
  }

  const newActiveIndex = document.querySelector(`a[href="#${target.id}"]`);
  newActiveIndex.classList.add('select');
}

//  セクションタイトルへの処理
function callback2(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('fadein');
      observer.unobserve(entry.target); //監視を一度で辞める場合に必要
    }
  });
}
