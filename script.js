/**
 * ==========================================================================
 * META IT SCHOOL ANDIJAN - MODERN INTERACTIVE JAVASCRIPT
 * 100% Pure Vanilla JavaScript (ES6+) - Accessible, Robust & Error-Free
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. DATA: COURSE DETAILS SYLLABUS FOR MODALS
  // ------------------------------------------------------------------------
  const courseDetailsData = {
    frontend: {
      badge: "Dasturlash • Frontend",
      title: "Frontend Dasturlash (React & Next.js)",
      duration: "Davomiyligi: 6 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $700 — $1,800/oy",
      summary: "Ushbu kursda siz zamonaviy veb-saytlar va murakkab veb-ilovalarning foydalanuvchi ko'radigan qismini noldan yaratishni o'rganasiz. Kurs oxirida xalqaro standartdagi 10+ real loyihaga ega bo'lasiz.",
      syllabus: [
        "1-oy: HTML5 semantikasi, zamonaviy CSS3, Flexbox, CSS Grid, Responsive (mobil) moslashuvchanlik.",
        "2-oy: Tailwind CSS, Bootstrap 5, Git va GitHub bilan jamoaviy ishlash.",
        "3-oy: JavaScript asoslari: O'zgaruvchilar, funksiyalar, massivlar, obyektlar, DOM bilan ishlash.",
        "4-oy: Chuqur JavaScript (ES6+): Asinxron dasturlash, Promises, Async/Await, REST API bilan integratsiya.",
        "5-oy: React.js kutubxonasi: Komponentlar, Hooks (useState, useEffect, useContext), Redux Toolkit.",
        "6-oy: Next.js (SSR/SSG), TypeScript asoslari, Vercel/Netlify ga loyihalarni joylash va Diplom himoyasi."
      ],
      benefits: [
        "12+ haqiqiy portfolio loyihalari",
        "Junior+ darajasidagi bilimlarga ega bo'lish",
        "GitHub profilingizni xalqaro standartda yuritish",
        "Mock interview (texnik suhbat) tayyorgarligi"
      ]
    },
    backend: {
      badge: "Dasturlash • Backend",
      title: "Backend Dasturlash (Python & Django)",
      duration: "Davomiyligi: 6 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $800 — $2,200/oy",
      summary: "Tizimlarning ichki logikasi, xavfsizlik, ma'lumotlar bazasi va sun'iy intellekt integratsiyasini noldan o'rganing. Python — hozirgi kunda dunyodagi eng ommabop dasturlash tilidir.",
      syllabus: [
        "1-oy: Python asoslari: Sintaksis, ma'lumot turlari, shartlar, sikllar, funksiyalar.",
        "2-oy: Obyektga yo'naltirilgan dasturlash (OOP), modullar, xatolar bilan ishlash va algoritmlar.",
        "3-oy: Ma'lumotlar bazasi: SQL, Relational DBs, PostgreSQL, murakkab so'rovlar va optimizatsiya.",
        "4-oy: Django Web Framework: MVT arxitekturasi, Admin panel, ORM, autentifikatsiya va xavfsizlik.",
        "5-oy: Django REST Framework (DRF): RESTful API lar yaratish, Swagger/Postman, JWT tokenlar.",
        "6-oy: Docker, Redis, Celery, Telegram Botlar yaratish va Linux VPS serverlarga Deploy qilish."
      ],
      benefits: [
        "10+ mustaqil API va ma'lumotlar bazasi loyihalari",
        "Telegram bot va web-xizmatlar integratsiyasi",
        "Kiberxavfsizlik va ma'lumotlar himoyasi asoslari",
        "Kompaniyalarga tavsiyanoma va rezyume yordami"
      ]
    },
    fullstack: {
      badge: "Dasturlash • Fullstack",
      title: "Fullstack JavaScript (Node.js & MERN)",
      duration: "Davomiyligi: 8 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $1,000 — $2,500/oy",
      summary: "Bitta dasturlash tili (JavaScript/TypeScript) orqali ham mijoz qismini (React), ham server qismini (Node.js, Express, NestJS) mukammal yaratishni o'rganing.",
      syllabus: [
        "1-2-oy: Web asoslari, Chuqurlashtirilgan JavaScript (ES2024), Asinxron arxitektura.",
        "3-oy: Frontend texnologiyalari: React.js, Tailwind CSS, State Management (Zustand/Redux).",
        "4-oy: Node.js platformasi, Event Loop, File System, Streams.",
        "5-oy: Express.js va NestJS: REST API, Middleware, Validation, Error Handling.",
        "6-oy: Ma'lumotlar bazalari: MongoDB (NoSQL) va PostgreSQL (SQL) bilan ishlash.",
        "7-oy: Microservices arxitekturasi, WebSockets (real-time chatlar), Docker.",
        "8-oy: Katta Fullstack startap loyihasi yaratish va Diplom himoyasi."
      ],
      benefits: [
        "Universal dasturchi bo'lib yetishish",
        "Frilans va xalqaro masofaviy ishlarga to'liq tayyorgarlik",
        "15+ tugallangan amaliy loyiha",
        "Xalqaro sertifikat va IT Park ko'magi"
      ]
    },
    flutter: {
      badge: "Mobil • iOS & Android",
      title: "Mobile Dasturlash (Flutter & Dart)",
      duration: "Davomiyligi: 6 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $800 — $2,000/oy",
      summary: "Google tomonidan yaratilgan Flutter frameworki yordamida bitta kod bazasi bilan bir vaqtda ham Android, ham iOS (iPhone) uchun professional mobil ilovalar yaratish.",
      syllabus: [
        "1-oy: Dart dasturlash tili: Sintaksis, OOP, Kolleksiyalar, Null Safety.",
        "2-oy: Flutter asoslari: Widgetlar arxitekturasi, UI yasash, Navigation & Routing.",
        "3-oy: Responsive mobil dizayn, Animatsiyalar va Gesture handling.",
        "4-oy: State Management: Provider, Riverpod va BLoC arxitekturasi.",
        "5-oy: Firebase integratsiyasi: Auth, Firestore, Push Notifications, REST API ulanishi.",
        "6-oy: Google Play va App Store ga ilovani joylashtirish (Publishing), Diplom loyihasi."
      ],
      benefits: [
        "8+ to'liq mobil ilovalar portfeli",
        "Har ikkala platforma (Android va iOS) uchun kod yoza olish",
        "Play Market va App Store ga joylash ko'nikmasi",
        "Mentorlar bilan birgalikda amaliyot"
      ]
    },
    uiux: {
      badge: "Dizayn • Kreativ",
      title: "UI/UX & Zamonaviy Grafik Dizayn",
      duration: "Davomiyligi: 4 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $500 — $1,500/oy",
      summary: "Dasturlash kodlarisiz IT sohasiga kirishning eng zo'r yo'li! Saytlar va ilovalar foydalanuvchilariga qulay va jozibador bo'lishini loyihalashni o'rganasiz.",
      syllabus: [
        "1-oy: Dizayn nazariyasi: Ranglar psixologiyasi, Tipografika, Kompozitsiya, Adobe Photoshop & Illustrator asoslari.",
        "2-oy: Figma vositasini mukammal o'rganish: Auto Layout, Components, Variants, Prototype tayyorlash.",
        "3-oy: UX tadqiqotlar: User Persona, Customer Journey Map, Wireframes, Usability Testing.",
        "4-oy: Design Systems yaratish, Dribbble va Behance da shaxsiy brend qurish, Diplom loyihasi."
      ],
      benefits: [
        "Kod yozish talab qilinmaydi",
        "10+ sifatli portfolio loyihalari Behance da",
        "Frilansda tez buyurtma olish imkoniyati",
        "Dizayn studiyalari bilan hamkorlik"
      ]
    },
    foundation: {
      badge: "Boshlang'ich • IT Baza",
      title: "IT Foundation & Kompyuter Savodxonligi",
      duration: "Davomiyligi: 2 oy (Haftada 3 kun, 1.5 soatdan)",
      salary: "Boshlang'ich maqsad: Dasturlashga mustahkam poydevor",
      summary: "Kompyuterni professional darajada boshqarish, internet xavfsizligi, ofis dasturlari va dasturlashga dastlabki mantiqiy qadamlarni o'rgatuvchi intensiv kurs.",
      syllabus: [
        "1-oy: Windows OS chuqur sozlamalari, Fayllar tizimi, Blind Typing (O'n barmoqda tez yozish), MS Office (Word, Excel, PowerPoint).",
        "2-oy: Internet xavfsizligi, Kibergigiyena, Algoritmlar va mantiqiy fikrlash, HTML & CSS ga ilk kirish."
      ],
      benefits: [
        "Kompyuterdan qo'rquvni yengish",
        "Dasturlash kurslariga 100% tayyor bo'lish",
        "Tezkor klaviatura terish mahorati",
        "Meta IT School da keyingi kurslarga chegirma"
      ]
    },
    kids: {
      badge: "Bolalar uchun • 7-14 Yosh",
      title: "Kids IT & Scratch (Bolalar Uchun Dasturlash)",
      duration: "Davomiyligi: 4 oy (Haftada 3 kun, 1.5 soatdan)",
      salary: "Maqsad: Mantiqiy tafakkur va ijodkorlikni o'stirish",
      summary: "Bolalarni telefonga qaramlikdan qutqarib, o'zlarining shaxsiy multfilmlari, interaktiv o'yinlari va dasturlarini yaratuvchi yosh ixtirochilarga aylantiramiz.",
      syllabus: [
        "1-oy: Kompyuter bilan to'g'ri ishlash, Mantiqiy topshiriqlar, Algoritm tushunchasi.",
        "2-oy: Scratch platformasida vizual bloklar orqali 2D o'yinlar va animatsiyalar yaratish.",
        "3-oy: Kodu Game Lab: 3D o'yin olamini qurish va qahramonlarni harakatlantirish.",
        "4-oy: Python for Kids: Ilk dasturlash kodlari va Yosh Dasturchi sertifikati."
      ],
      benefits: [
        "Mantiqiy va matematik fikrlashning o'sishi",
        "O'z o'yinlari va loyihalarini yaratish quvonchi",
        "Shinam va xavfsiz o'quv muhiti",
        "Bolalar uchun maxsus sertifikat"
      ]
    },
    ai: {
      badge: "Sun'iy Intellekt • Yangi Avlod",
      title: "Sun'iy Intellekt (AI) & Data Science",
      duration: "Davomiyligi: 6 oy (Haftada 3 kun, 2 soatdan + Coworking)",
      salary: "Boshlang'ich maosh: $1,200 — $3,000/oy",
      summary: "Katta hajmdagi ma'lumotlarni tahlil qilish, neyron tarmoqlar, Machine Learning va OpenAI modellarini amaliy loyihalarga integratsiya qilish bo'yicha elita kursi.",
      syllabus: [
        "1-oy: Python for Data Science: Numpy, Pandas, Matplotlib, Seaborn orqali tahlil.",
        "2-oy: Ma'lumotlarni tozalash, tahliliy modellar va statistik hisob-kitoblar.",
        "3-oy: Machine Learning asoslari: Regressiya, Tasniflash, Clustering (Scikit-Learn).",
        "4-oy: Deep Learning & Neyron tarmoqlar: TensorFlow va PyTorch asoslari.",
        "5-oy: Natural Language Processing (NLP) va ChatGPT API integratsiyalari.",
        "6-oy: Computer Vision (OpenCV) va Katta Tahliliy Diplom Loyihasi."
      ],
      benefits: [
        "Eng yuqori haq to'lanadigan IT yo'nalishi",
        "Real biznes ma'lumotlari bilan ishlash",
        "Xalqaro AI tanlovlarida ishtirok etish imkoni",
        "Maxsus AI sertifikati"
      ]
    }
  };

  // ------------------------------------------------------------------------
  // 2. TOP ANNOUNCEMENT BAR
  // ------------------------------------------------------------------------
  const announcementBar = document.getElementById('announcementBar');
  const closeAnnouncementBtn = document.getElementById('closeAnnouncement');

  if (closeAnnouncementBtn && announcementBar) {
    if (sessionStorage.getItem('meta_announcement_closed') === 'true') {
      announcementBar.classList.add('hidden');
    }

    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
      sessionStorage.setItem('meta_announcement_closed', 'true');
    });
  }

  // ------------------------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & MOBILE MENU
  // ------------------------------------------------------------------------
  const mainHeader = document.getElementById('mainHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Sticky header class
  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (mainHeader) {
      if (scrollPos > 30) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const toggleMobileMenu = (forceClose = false) => {
    if (!mobileToggle || !navMenu || !menuBackdrop) return;

    const isOpen = forceClose ? false : !navMenu.classList.contains('open');

    if (isOpen) {
      navMenu.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      menuBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      menuBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(true);
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMobileMenu(true);
      closeModal(courseModal);
      closeModal(successModal);
    }
  });

  // Back to top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK ON SCROLL (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], header[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px'
    });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ------------------------------------------------------------------------
  // 5. ANIMATED NUMBER COUNTERS (HERO STATS)
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-number');

  const startCounters = () => {
    statNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(target)) return;

      const duration = 1600; // ms
      const startTime = performance.now();
      const originalText = counter.textContent;
      const hasPlus = originalText.includes('+');
      const hasPercent = originalText.includes('%');

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        let formatted = currentVal.toLocaleString();
        if (hasPlus) formatted += '+';
        if (hasPercent) formatted += '%';

        counter.textContent = formatted;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = originalText;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const heroSection = document.querySelector('.hero-section');
  if (heroSection && 'IntersectionObserver' in window) {
    let countersStarted = false;
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        startCounters();
      }
    }, { threshold: 0.2 });

    heroObserver.observe(heroSection);
  } else {
    startCounters();
  }

  // ------------------------------------------------------------------------
  // 6. COURSES FILTER TABS
  // ------------------------------------------------------------------------
  const filterTabs = document.querySelectorAll('.filter-tab');
  const courseCards = document.querySelectorAll('.course-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 7. COURSE DETAILS MODAL (POPUP)
  // ------------------------------------------------------------------------
  const courseModal = document.getElementById('courseModal');
  const closeCourseModalBtn = document.getElementById('closeCourseModal');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  const modalEnrollBtn = document.getElementById('modalEnrollBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDuration = document.getElementById('modalDuration');
  const modalBody = document.getElementById('modalBody');

  let activeModalCourse = '';

  const openCourseModal = (courseKey) => {
    const data = courseDetailsData[courseKey];
    if (!data || !courseModal) return;

    activeModalCourse = data.title;

    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDuration) modalDuration.textContent = `${data.duration} • ${data.salary}`;

    if (modalBody) {
      modalBody.innerHTML = `
        <p style="margin-bottom: 1.25rem; font-size: 0.98rem; color: #cbd5e1; line-height: 1.65;">
          ${data.summary}
        </p>
        
        <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;">
          📋 Kurs Dasturidan Asosiy Mavzular:
        </h4>
        <ul style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.45rem; padding-left: 1.2rem; color: #94a3b8; font-size: 0.9rem;">
          ${data.syllabus.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff; margin-bottom: 0.75rem;">
          ⭐ Sizga Beriladigan Imkoniyatlar:
        </h4>
        <ul style="display: flex; flex-direction: column; gap: 0.45rem; padding-left: 1.2rem; color: #38bdf8; font-size: 0.9rem;">
          ${data.benefits.map(item => `<li>✓ ${item}</li>`).join('')}
        </ul>
      `;
    }

    openModal(courseModal);
  };

  const openModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.add('active');
    modalElement.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.remove('active');
    modalElement.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach click listener to "Dasturni ko'rish" buttons
  const viewModalBtns = document.querySelectorAll('.view-course-modal');
  viewModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course-id');
      openCourseModal(courseId);
    });
  });

  if (closeCourseModalBtn) {
    closeCourseModalBtn.addEventListener('click', () => closeModal(courseModal));
  }
  if (modalCancelBtn) {
    modalCancelBtn.addEventListener('click', () => closeModal(courseModal));
  }

  // Click outside modal dialog to close
  if (courseModal) {
    courseModal.addEventListener('click', (e) => {
      if (e.target === courseModal) {
        closeModal(courseModal);
      }
    });
  }

  // Modal "Ushbu kursga yozilish" button click
  if (modalEnrollBtn) {
    modalEnrollBtn.addEventListener('click', () => {
      closeModal(courseModal);
      selectCourseAndScroll(activeModalCourse);
    });
  }

  // ------------------------------------------------------------------------
  // 8. SELECT COURSE & SCROLL TO FORM ACTION
  // ------------------------------------------------------------------------
  const userCourseSelect = document.getElementById('userCourse');
  const trialSection = document.getElementById('trial-form');

  const selectCourseAndScroll = (courseName) => {
    if (userCourseSelect && courseName) {
      // Find matching option in select
      let matched = false;
      for (let i = 0; i < userCourseSelect.options.length; i++) {
        const opt = userCourseSelect.options[i];
        if (opt.value.toLowerCase().includes(courseName.toLowerCase()) || 
            courseName.toLowerCase().includes(opt.value.toLowerCase())) {
          userCourseSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched && userCourseSelect.options.length > 1) {
        userCourseSelect.selectedIndex = 1;
      }
    }

    if (trialSection) {
      trialSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on name input for convenience
      setTimeout(() => {
        const nameInput = document.getElementById('userName');
        if (nameInput) nameInput.focus();
      }, 600);
    }
  };

  const selectCourseButtons = document.querySelectorAll('.select-course-btn');
  selectCourseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course-name');
      selectCourseAndScroll(courseName);
    });
  });

  // ------------------------------------------------------------------------
  // 9. FAQ ACCORDION
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // ------------------------------------------------------------------------
  // 10. PHONE NUMBER MASKING & REAL-TIME VALIDATION
  // ------------------------------------------------------------------------
  const phoneInput = document.getElementById('userPhone');
  const nameInput = document.getElementById('userName');
  const courseInput = document.getElementById('userCourse');

  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const courseError = document.getElementById('courseError');

  // Format phone as +998 (XX) XXX-XX-XX
  const formatUzbekPhone = (value) => {
    // Keep only numbers
    const digits = value.replace(/\D/g, '');
    
    // If empty
    if (!digits) return '';

    // If starts with 998, keep it, otherwise add 998
    let normalized = digits;
    if (!normalized.startsWith('998')) {
      if (normalized.startsWith('9') || normalized.startsWith('3') || normalized.startsWith('8')) {
        normalized = '998' + normalized;
      }
    }

    // Limit to 12 digits (998 + 9 digits)
    normalized = normalized.substring(0, 12);

    let formatted = '+998';
    const rest = normalized.substring(3);

    if (rest.length > 0) {
      formatted += ' (' + rest.substring(0, 2);
    }
    if (rest.length >= 2) {
      formatted += ') ';
    }
    if (rest.length > 2) {
      formatted += rest.substring(2, 5);
    }
    if (rest.length >= 5) {
      formatted += '-';
    }
    if (rest.length > 5) {
      formatted += rest.substring(5, 7);
    }
    if (rest.length >= 7) {
      formatted += '-';
    }
    if (rest.length > 7) {
      formatted += rest.substring(7, 9);
    }

    return formatted;
  };

  if (phoneInput) {
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value.trim()) {
        phoneInput.value = '+998 ';
      }
    });

    phoneInput.addEventListener('input', (e) => {
      const raw = phoneInput.value;
      const formatted = formatUzbekPhone(raw);
      phoneInput.value = formatted;

      // Real-time error clearing
      if (phoneInput.classList.contains('is-invalid')) {
        validatePhone();
      }
    });

    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value.trim() === '+998' || phoneInput.value.trim() === '+998 ') {
        phoneInput.value = '';
      }
      validatePhone();
    });
  }

  // Name validation
  const validateName = () => {
    if (!nameInput) return true;
    const val = nameInput.value.trim();
    if (!val) {
      nameInput.classList.add('is-invalid');
      if (nameError) nameError.textContent = "Iltimos, ism va familiyangizni kiriting.";
      return false;
    }
    if (val.length < 2) {
      nameInput.classList.add('is-invalid');
      if (nameError) nameError.textContent = "Ismingiz kamida 2 ta harfdan iborat bo'lishi kerak.";
      return false;
    }
    nameInput.classList.remove('is-invalid');
    if (nameError) nameError.textContent = "";
    return true;
  };

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.classList.contains('is-invalid')) validateName();
    });
    nameInput.addEventListener('blur', validateName);
  }

  // Phone validation
  const validatePhone = () => {
    if (!phoneInput) return true;
    const digits = phoneInput.value.replace(/\D/g, '');
    
    if (!phoneInput.value.trim()) {
      phoneInput.classList.add('is-invalid');
      if (phoneError) phoneError.textContent = "Iltimos, telefon raqamingizni kiriting.";
      return false;
    }

    // Must be 12 digits (998 + 9 digits)
    if (digits.length < 12) {
      phoneInput.classList.add('is-invalid');
      if (phoneError) phoneError.textContent = "To'liq 9 ta raqamni kiriting: +998 (90) 123-45-67";
      return false;
    }

    phoneInput.classList.remove('is-invalid');
    if (phoneError) phoneError.textContent = "";
    return true;
  };

  // Course validation
  const validateCourse = () => {
    if (!courseInput) return true;
    if (!courseInput.value) {
      courseInput.classList.add('is-invalid');
      if (courseError) courseError.textContent = "Iltimos, o'zingizga qiziq kursni tanlang.";
      return false;
    }
    courseInput.classList.remove('is-invalid');
    if (courseError) courseError.textContent = "";
    return true;
  };

  if (courseInput) {
    courseInput.addEventListener('change', validateCourse);
  }

  // ------------------------------------------------------------------------
  // 11. FORM SUBMISSION TO NETLIFY SERVERLESS FUNCTION
  // ------------------------------------------------------------------------
  const trialForm = document.getElementById('freeTrialForm');
  const formAlert = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitBtn');
  const btnSpinner = document.getElementById('btnSpinner');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const successModal = document.getElementById('successModal');
  const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
  const successMessage = document.getElementById('successMessage');

  const showAlert = (message, type = 'error') => {
    if (!formAlert) return;
    formAlert.textContent = message;
    formAlert.className = `form-alert alert-${type}`;
    formAlert.classList.remove('hidden');
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const hideAlert = () => {
    if (!formAlert) return;
    formAlert.classList.add('hidden');
    formAlert.textContent = '';
  };

  const setSubmittingState = (isSubmitting) => {
    if (!submitBtn) return;
    submitBtn.disabled = isSubmitting;
    if (btnSpinner) {
      if (isSubmitting) {
        btnSpinner.classList.remove('hidden');
      } else {
        btnSpinner.classList.add('hidden');
      }
    }
    if (btnText) {
      btnText.textContent = isSubmitting 
        ? "Yuborilmoqda, iltimos kuting..." 
        : "🎁 Bepul Darsga Joy Band Qilish";
    }
  };

  if (trialForm) {
    trialForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideAlert();

      // Validate all fields
      const isNameValid = validateName();
      const isPhoneValid = validatePhone();
      const isCourseValid = validateCourse();

      if (!isNameValid || !isPhoneValid || !isCourseValid) {
        showAlert("Iltimos, shakldagi barcha qizil bilan belgilangan maydonlarni to'g'ri to'ldiring.", "error");
        // Focus first invalid field
        if (!isNameValid && nameInput) nameInput.focus();
        else if (!isPhoneValid && phoneInput) phoneInput.focus();
        else if (!isCourseValid && courseInput) courseInput.focus();
        return;
      }

      // Collect form data
      const formData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        course: courseInput.value,
        timeSlot: document.getElementById('timeSlot') ? document.getElementById('timeSlot').value : 'Ixtiyoriy vaqt',
        experience: document.getElementById('userExperience') ? document.getElementById('userExperience').value : 'Noldan',
        message: document.getElementById('userMessage') ? document.getElementById('userMessage').value.trim() : '',
        source: 'Meta IT School Veb-sayti (Andijon)'
      };

      setSubmittingState(true);

      try {
        // If opened locally via file:// protocol where serverless functions cannot run
        if (window.location.protocol === 'file:') {
          setTimeout(() => {
            trialForm.reset();
            if (phoneInput) phoneInput.value = '';
            if (successMessage) {
              successMessage.innerHTML = "Arizangiz muvaffaqiyatli tekshirildi! Saytingiz <strong>Netlify</strong>ga joylangach, barcha arizalar avtomatik ravishda serverless funksiya orqali to'g'ridan-to'g'ri Telegram kanalga (<strong>-1004400912360</strong>) boradi.";
            }
            openModal(successModal);
            setSubmittingState(false);
          }, 600);
          return;
        }

        // Send request to Netlify serverless function
        // Note: Bot token is securely managed on serverless side!
        const endpoint = '/.netlify/functions/send-trial';
        
        let response;
        try {
          response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
        } catch (fetchError) {
          console.warn('Netlify function fetch error:', fetchError);
          throw new Error('Tarmoqqa ulanishda xatolik yuz berdi. Iltimos, internet aloqangizni tekshiring.');
        }

        const data = await response.json();

        if (response.ok && data.success) {
          // Success!
          trialForm.reset();
          if (phoneInput) phoneInput.value = '';
          
          if (successMessage && data.message) {
            successMessage.textContent = data.message;
          }
          openModal(successModal);
        } else {
          // Server returned an error message
          const errorMsg = data.error || "Arizani yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring yoki to'g'ridan-to'g'ri telefon qiling.";
          showAlert(errorMsg, "error");
        }

      } catch (err) {
        console.error('Submission error:', err);
        showAlert(err.message || "Xatolik yuz berdi. Iltimos, +998 (90) 123-45-67 raqamiga to'g'ridan-to'g'ri qo'ng'iroq qiling.", "error");
      } finally {
        if (window.location.protocol !== 'file:') {
          setSubmittingState(false);
        }
      }
    });
  }

  // Close Success Modal
  if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener('click', () => closeModal(successModal));
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal(successModal);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 12. SMOOTH SCROLLING FOR ALL INTERNAL LINKS
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('🚀 META IT SCHOOL Andijon veb-sayti muvaffaqiyatli ishga tushirildi.');
});
