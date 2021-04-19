(() => {
  const scrollTrigger = document.querySelectorAll('a[href^="#"]');
  let eventType = window.ontouchstart ? 'touchstart' : 'click';

  for (let i = 0; i < scrollTrigger.length; i++) {
    scrollTrigger[i].addEventListener(eventType, (e) => {
      e.preventDefault();

      const targetPosition = targetCalc(scrollTrigger, i);

      scrollToAction(targetPosition);
    });
  }


  const toTop = document.querySelector('.to-top');

  //TOPへ戻るボタンへのイベント
  toTop.addEventListener(eventType, () => {
    scrollToAction(0);
  });

  //スクロール時にクラスを付与する
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    addStickyAndAppear(header, 'sticky', 80);
    addStickyAndAppear(toTop, 'appear', 350);
  });
})();


function targetCalc(elements, i) {
  const href = elements[i].getAttribute('href');
  const targetElement = document.querySelector(href);

  const rect = targetElement.getBoundingClientRect().top;
  const offset = pageYOffset;
  let gap = i === 0 ? 0 : 50;
  const target = rect + offset - gap;

  return target;
}

function scrollToAction(target){
  scrollTo({
    top: target,
    behavior: 'smooth'
  });
}

function addStickyAndAppear(element, className, pixel) {
  const offset = pageYOffset;

  if (offset > pixel && !element.classList.contains(className)) {
    element.classList.add(className);
  } else if (offset <= pixel && element.classList.contains(className)) {
    element.classList.remove(className);
  }
}
