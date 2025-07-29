document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  new Rellax('.hero', { speed: -2 });

  // Проверка и применение темы
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('themeThumb').style.left = '50%';
  }

  // Проверка языка
  const lang = localStorage.getItem('lang');
  if (lang === 'kz') {
    switchToKZ();
    document.getElementById('langThumb').style.left = '50%';
  }

  // Закрытие меню при клике вне
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('side-menu');
    const burger = document.querySelector('.burger');
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // Закрытие меню при выборе пункта
  document.querySelectorAll('.side-menu nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('side-menu').classList.remove('open');
    });
  });

  // Показ кнопки "Наверх"
  window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // Свайп для меню
  let touchStartX = 0;
  document.querySelector('.burger').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  document.querySelector('.burger').addEventListener('touchmove', (e) => {
    let touchEndX = e.touches[0].clientX;
    if (touchStartX - touchEndX > 50) { // Свайп вправо для открытия
      document.getElementById('side-menu').classList.add('open');
    }
  });

  document.getElementById('side-menu').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  document.getElementById('side-menu').addEventListener('touchmove', (e) => {
    let touchEndX = e.touches[0].clientX;
    if (touchEndX - touchStartX > 50) { // Свайп влево для закрытия
      document.getElementById('side-menu').classList.remove('open');
    }
  });
});

// Функции из оригинала
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('open');
}

function toggleTheme() {
  const body = document.body;
  const thumb = document.getElementById('themeThumb');
  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
    thumb.style.left = '50%';
  } else {
    localStorage.setItem('theme', 'dark');
    thumb.style.left = '0';
  }
}

function toggleLanguage() {
  const thumb = document.getElementById('langThumb');
  const currentLang = localStorage.getItem('lang');
  if (currentLang !== 'kz') {
    switchToKZ();
    localStorage.setItem('lang', 'kz');
    thumb.style.left = '50%';
  } else {
    switchToRU();
    localStorage.setItem('lang', 'ru');
    thumb.style.left = '0';
  }
}

function switchToKZ() {
  document.getElementById('mainTitle').textContent = 'Чешир мысығы';
  document.querySelector('.subtitle').textContent = 'Табиғи. Сапалы. Сиқырлы.';
  document.getElementById('introTitle').textContent = 'Қазақстандағы үздік органикалық дүкен';
  document.getElementById('introText').innerHTML = 'Алматы мен Астана бізді таңдайды!<br>Табиғи сапа әлеміне еңіңіз';
  document.getElementById('pricingTitle').textContent = 'Бағалар тізімі';
  document.getElementById('product1Title').textContent = 'Crumble (Wax)';
  document.getElementById('product2Title').textContent = 'Гаш импорт';
  document.getElementById('product3Title').textContent = 'Wax Мёд';
  document.getElementById('linksTitle').textContent = 'Біздің сілтемелеріміз';
  document.getElementById('faqTitle').textContent = 'FAQ/Біз туралы';
  document.querySelector('#faq p:nth-child(1)').textContent = 'Біз — «Чешир мысығы», органикалық тауарлар әлеміндегі сенімді серіктесіңіз. Біздің өнімдерімізге табиғи шайлар, акация балдары және Қазақстанның экологиялық таза аймақтарынан жиналған шөптік жиынтықтар кіреді.';
  document.querySelector('#faq p:nth-child(2)').innerHTML = '<strong>Төлем:</strong> Тек криптовалюта арқылы қабылданады. Егер сұрақтарыңыз болса, операторларымыз сізге көмектеседі!';
  document.querySelector('#faq p:nth-child(3)').textContent = '<strong>Өнімдер туралы:</strong> Барлық өнімдер қатаң сапа бақылауынан өтеді, сізге ең жақсысын кепілдейді.';
  document.getElementById('reviewsTitle').textContent = 'Пікірлер рейтингпен 5';
  document.getElementById('reviewName').placeholder = 'Атыңыз (міндетті емес)';
  document.getElementById('reviewText').placeholder = 'Сіздің пікіріңіз';
  document.querySelector('.review-form button').textContent = 'Жіберу';
  document.getElementById('footerText').textContent = '© 2024 Чешир мысығы';
  // Меню
  document.getElementById('menuPricing').textContent = 'Бағалар тізімі';
  document.getElementById('menuLinks').textContent = 'Біздің сілтемелеріміз';
  document.getElementById('menuFAQ').textContent = 'FAQ/Біз туралы';
  document.getElementById('menuReviews').textContent = 'Пікірлер';
  // Обновление текста в модальном окне
  if (document.getElementById('modalProductTitle')) {
    const title = document.getElementById('modalProductTitle').textContent;
    if (products[title]) {
      document.getElementById('modalProductTitle').textContent = products[title].kz.title;
      document.getElementById('modalProductDescription').textContent = products[title].kz.description;
    }
  }
}

function switchToRU() {
  document.getElementById('mainTitle').textContent = 'Чеширский Кот';
  document.querySelector('.subtitle').textContent = 'Organic. Quality. Magic';
  document.getElementById('introTitle').textContent = 'Лучший органический магазин в Казахстане';
  document.getElementById('introText').innerHTML = 'Алматы и Астана — выбирают нас!<br>Погрузитесь в мир натурального качества';
  document.getElementById('pricingTitle').textContent = 'Прайс-лист';
  document.getElementById('product1Title').textContent = 'Crumble (Wax)';
  document.getElementById('product2Title').textContent = 'Гаш импорт';
  document.getElementById('product3Title').textContent = 'Wax Мёд';
  document.getElementById('linksTitle').textContent = 'Наши ссылки';
  document.getElementById('faqTitle').textContent = 'FAQ/О нас';
  document.querySelector('#faq p:nth-child(1)').textContent = 'Мы — «Чеширский Кот», ваш надежный партнер в мире органических товаров. Наши продукты включают натуральные чаи, мёд акации и травяные сборы, собранные из экологически чистых регионов Казахстана.';
  document.querySelector('#faq p:nth-child(2)').innerHTML = '<strong>Оплата:</strong> Принимаем только криптовалюту. Если есть вопросы, наши операторы помогут вам разобраться!';
  document.querySelector('#faq p:nth-child(3)').textContent = '<strong>О товарах:</strong> Все продукты проходят строгий контроль качества, чтобы гарантировать вам лучшее.';
  document.getElementById('reviewsTitle').textContent = 'Отзывы с рейтингом 5';
  document.getElementById('reviewName').placeholder = 'Имя (необязательно)';
  document.getElementById('reviewText').placeholder = 'Ваш отзыв';
  document.querySelector('.review-form button').textContent = 'Отправить';
  document.getElementById('footerText').textContent = '© 2024 Чеширский Кот';
  // Меню
  document.getElementById('menuPricing').textContent = 'Прайс-лист';
  document.getElementById('menuLinks').textContent = 'Наши ссылки';
  document.getElementById('menuFAQ').textContent = 'FAQ/О нас';
  document.getElementById('menuReviews').textContent = 'Отзывы';
  // Обновление текста в модальном окне
  if (document.getElementById('modalProductTitle')) {
    const title = document.getElementById('modalProductTitle').textContent;
    if (products[title]) {
      document.getElementById('modalProductTitle').textContent = products[title].title;
      document.getElementById('modalProductDescription').textContent = products[title].description;
    }
  }
}

function logoDisappears() {
  const title = document.getElementById('mainTitle');
  const logo = document.querySelector('.logo');

  title.style.transition = 'opacity 0.6s';
  logo.style.transition = 'opacity 0.6s';

  title.style.opacity = 0;
  logo.style.opacity = 0;

  setTimeout(() => {
    title.textContent = 'Иногда я исчезаю... 🐾';
    title.style.opacity = 1;
  }, 800);

  setTimeout(() => {
    const lang = localStorage.getItem('lang') || 'ru';
    if (lang === 'kz') {
      title.textContent = 'Чешир мысығы';
    } else {
      title.textContent = 'Чеширский Кот';
    }
    logo.style.opacity = 1;
  }, 3000);
}

// Данные о продуктах
const products = {
  'Crumble (Wax)': {
    title: 'Crumble (Wax)',
    description: 'Лучший в Казахстане, натуральный концентрат.',
    kz: { title: 'Crumble (Wax)', description: 'Қазақстандағы ең үздік, табиғи концентрат.' }
  },
  'Гаш импорт': {
    title: 'Гаш импорт',
    description: 'Чистейший концентрат ТГК 80%.',
    kz: { title: 'Гаш импорт', description: 'ТГК 80% ең таза концентрат.' }
  },
  'Wax Мёд': {
    title: 'Wax Мёд',
    description: 'Чистейший концентрат ТГК 80%.',
    kz: { title: 'Wax Мёд', description: 'ТГК 80% ең таза концентрат.' }
  }
};

// Открытие модального окна для продуктов
function openProductModal(productName) {
  const product = products[productName];
  if (product) {
    const lang = localStorage.getItem('lang') || 'ru';
    document.getElementById('modalProductTitle').textContent = lang === 'kz' ? product.kz.title : product.title;
    document.getElementById('modalProductDescription').textContent = lang === 'kz' ? product.kz.description : product.description;
    document.getElementById('productModal').style.display = 'flex';
  } else {
    console.error('Продукт не найден:', productName);
  }
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Закрытие при клике вне модального окна
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

// Добавление нового отзыва с Firebase
function submitReview() {
  const userName = document.getElementById('reviewName').value || 'Аноним';
  const comment = document.getElementById('reviewText').value;
  const rating = 5; // Фиксированный рейтинг 5, как указано в "Отзывы с рейтингом 5"
  if (!comment) {
    alert('Пожалуйста, напишите отзыв.');
    return;
  }
  db.collection('CheshirCat').add({
    userName: userName,
    comment: comment,
    rating: rating,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    alert('Спасибо за ваш отзыв!');
  }).catch((error) => {
    console.error('Ошибка при добавлении отзыва: ', error);
    alert('Произошла ошибка. Попробуйте снова.');
  });
}

// Слайдер товаров
let slideIndex = 0;
const sliderTrack = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.price-card');
const slideWidth = slides[0].offsetWidth + 40;

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Свайп для слайдера
let touchStartXSlider = 0;
let touchMoveXSlider = 0;

document.querySelector('.slider').addEventListener('touchstart', (e) => {
  touchStartXSlider = e.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchmove', (e) => {
  touchMoveXSlider = e.touches[0].clientX;
  const diff = touchStartXSlider - touchMoveXSlider;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    touchStartXSlider = touchMoveXSlider; // Сброс для предотвращения многократного срабатывания
  }
});

document.querySelector('.slider').addEventListener('touchend', () => {
  touchStartXSlider = 0;
  touchMoveXSlider = 0;
});

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  updateSlider();
}

setInterval(nextSlide, 5000);

// Прокрутка наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Инициализация Firebase (добавлено здесь для использования db)
const firebaseConfig = {
  apiKey: "AIzaSyAgaOh_o19HVFufMIQj-XEc",
  authDomain: "cheshir-fed83.firebaseapp.com",
  projectId: "cheshir-fed83",
  storageBucket: "cheshir-fed83.appspot.com",
  messagingSenderId: "733642341122",
  appId: "1:733642341122:web:afd2dd217e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Отображение отзывов
const reviewsList = document.getElementById('reviewsList');
db.collection('CheshirCat').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
  reviewsList.innerHTML = '';
  snapshot.forEach((doc) => {
    const review = doc.data();
    if (review.rating === 5) { // Показываем только отзывы с рейтингом 5
      reviewsList.innerHTML += `
        <div class="review-item">
          <h3>${review.userName || 'Аноним'}</h3>
          <p>${review.comment || 'Без комментария'}</p>
          <p>Рейтинг: ${review.rating || 0}/5</p>
          <p>Дата: ${review.timestamp ? review.timestamp.toDate().toLocaleString() : 'Нет даты'}</p>
        </div>
      `;
    }
  });
});
