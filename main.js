const modalSwiper = (triggers) => {
  // モーダルのプロパティ
  const modalProps = [
    {
      name : 'modal01',
      images: [
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png'
      ]
    },
    {
      name : 'modal02',
      images: [
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png'
      ]
    },
    {
      name : 'modal03',
      images: [
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png',
        'https://placehold.jp/480x340.png'
      ]
    }
  ];
  
  // Swiper初期化の関数
  const initSwiper = (images) => {
    // Swiperを初期化
    const swiper = new Swiper('.swiper', {
      loop: true,  
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  
    // スライドアイテムをリセット
    const swiperSlides = document.querySelector('.js-modal-sliders');
    swiperSlides.innerHTML = '';
  
    // スライドアイテムを生成
    images.forEach((image) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${image}">`;
      swiperSlides.appendChild(slide);
    });
  
    // Swiperを更新
    swiper.update();
  };
  
  // モーダルを開く関数
  const openModal = (name) => {
    // Swiperを初期化
    const modalProp = modalProps.find((item) => item.name === name);
    if(modalProp) initSwiper(modalProp.images);
  
    // モーダルを表示
    const modal = document.querySelector('.js-modal');
    modal.classList.add('is-active');
  
    // モダールを閉じる関数
    const closeModal = () => {
      modal.classList.remove('is-active');
      const swiperSliders = document.querySelector('.js-modal-sliders');
      swiperSliders.innerHTML = '';
    };
  
    // モーダルを閉じる
    const modalOverlay = modal.querySelector('.js-modal-overlay');
    const modalClose = modal.querySelector('.js-modal-close');
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
  };
  
  // ボタンクリック時にモーダルを開く
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modalName = trigger.dataset.name;
      openModal(modalName);
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.querySelectorAll('.js-modal-open');
  if(modalTriggers) modalSwiper(modalTriggers);
});