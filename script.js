const brandConfig = {
  brandName: "SPIRIT",
  tagline: "Нажимай, улучшай героев и продвигайся всё дальше с каждой новой игровой сессией.",
  description: "Каждую неделю в Spirit Cliker начинается новая гонка. Поднимайся по рангам от бронзы до алмаза, попадай в топ-50 своего дивизиона и забирай Telegram Stars. Чем выше лига — тем выше ставки и крупнее призовой фонд.",
  primaryLink: "https://t.me/Ryoho_bot",
  characters: {
    primaryBackground: "assets/images/character-bg-1.jpg",
    secondaryBackground: "assets/images/character-bg-2.jpg",
    primary: "assets/images/character-1.png",
    secondary: "assets/images/character-2.png",
  },
  socials: [
    {
      name: "Telegram",
      handle: "@Spirix",
      href: "https://t.me/Ryoho_bot",
      description: "Быстрый вход в игру, основные ссылки, сообщения и прямая связь с проектом.",
      icon: "telegram",
    },
    {
      name: "Instagram",
      handle: "@spirit_cliker",
      href: "https://www.instagram.com/spirit_cliker/",
      description: "Анонсы героев, визуальные тизеры, игровые арты и контент проекта.",
      icon: "instagram",
    },
    {
      name: "TikTok",
      handle: "@your_brand",
      href: "https://tiktok.com/@your_brand",
      description: "Короткие ролики, прокачка, забавные моменты и вирусные игровые клипы.",
      icon: "tiktok",
    },
    {
      name: "X / Twitter",
      handle: "@your_brand",
      href: "https://x.com/your_brand",
      description: "Патчноуты, анонсы, технические уведомления и быстрые новости по игре.",
      icon: "x",
    },
    {
      name: "YouTube",
      handle: "@Spirit Cliker",
      href: "https://youtube.com/@spirit-cliker?si=N2XgQemGQW90aWjN",
      description: "Трейлеры, devlog-видео, гайды, игровые события и длинный формат контента.",
      icon: "youtube",
    },
    {
      name: "Telegram Канал",
      handle: "@Spirit Clicker",
      href: "https://t.me/Spirit_cliker",
      description: "Новости запуска, игровые события, дропы наград и обновления для игроков.",
      icon: "telegram",
    },
  ],
};

const iconSprites = {
  telegram: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21.2 4.4 18.1 19c-.2 1-.8 1.2-1.7.8l-4.7-3.5-2.3 2.2c-.2.3-.5.5-1 .5l.3-4.8 8.9-8c.4-.4-.1-.6-.6-.3l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5l18.2-7c.8-.3 1.5.2 1.3 1.1Z" fill="currentColor"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.2 3c.7 2 1.8 3.3 4 3.8v3.2c-1.5 0-2.8-.4-4-1.1v6.3c0 3.3-2.7 5.8-6 5.8a5.9 5.9 0 0 1-4-10.3 6 6 0 0 1 4.1-1.6V12a2.8 2.8 0 1 0 2.8 2.8V3h3.1Z" fill="currentColor"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h4.2l4.2 5.7L17.4 4H20l-6.3 7.3L20.5 20h-4.2l-4.6-6.2L6.2 20H3.5l6.8-7.9L4 4Z" fill="currentColor"/>
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 8.6c-.2-1.3-1.2-2.3-2.5-2.5C16.8 5.8 14.4 5.6 12 5.6c-2.4 0-4.8.2-6.5.5C4.2 6.3 3.2 7.3 3 8.6a26 26 0 0 0 0 6.8c.2 1.3 1.2 2.3 2.5 2.5 1.7.3 4.1.5 6.5.5 2.4 0 4.8-.2 6.5-.5 1.3-.2 2.3-1.2 2.5-2.5a26 26 0 0 0 0-6.8Z" stroke="currentColor" stroke-width="1.8"/>
      <path d="m10 15.1 5-3.1-5-3.1v6.2Z" fill="currentColor"/>
    </svg>
  `,
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setLink(id, href, label) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.href = href;
  if (label) {
    element.textContent = label;
  }
}

function applyImage(imageId, src) {
  const image = document.getElementById(imageId);
  if (!image) {
    return;
  }

  const frame = image.closest(".character-panel__frame");

  const markMissing = () => {
    image.classList.add("is-missing");
    if (frame) {
      frame.classList.add("is-empty");
      frame.dataset.placeholder = image.dataset.fallbackLabel || "Добавьте PNG";
    }
  };

  const markLoaded = () => {
    image.classList.remove("is-missing");
    if (frame) {
      frame.classList.remove("is-empty");
      delete frame.dataset.placeholder;
    }
  };

  image.addEventListener("error", markMissing, { once: true });
  image.addEventListener("load", markLoaded, { once: true });
  image.src = src;

  if (image.complete) {
    if (image.naturalWidth > 0) {
      markLoaded();
    } else {
      markMissing();
    }
  }
}

function applyBackground(backgroundId, src) {
  const background = document.getElementById(backgroundId);
  if (!background) {
    return;
  }

  const probe = new Image();

  probe.addEventListener("load", () => {
    background.style.backgroundImage = `url("${src}")`;
    background.classList.remove("is-empty");
  }, { once: true });

  probe.addEventListener("error", () => {
    background.style.backgroundImage = "none";
    background.classList.add("is-empty");
  }, { once: true });

  probe.src = src;

  if (probe.complete) {
    if (probe.naturalWidth > 0) {
      background.style.backgroundImage = `url("${src}")`;
      background.classList.remove("is-empty");
    } else {
      background.style.backgroundImage = "none";
      background.classList.add("is-empty");
    }
  }
}

function renderSocialLinks() {
  const container = document.getElementById("socialLinks");

  if (!container) {
    return;
  }

  container.innerHTML = brandConfig.socials.map((social, index) => `
    <a
      class="social-card reveal"
      data-reveal="up"
      href="${social.href}"
      target="_blank"
      rel="noreferrer"
      aria-label="${social.name}: ${social.handle}"
    >
      <div class="social-card__head">
        <div class="social-card__icon">${iconSprites[social.icon] || ""}</div>
        <span class="social-card__index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="social-card__body">
        <h3>${social.name}</h3>
        <p>${social.description}</p>
      </div>
      <span class="social-card__cta">${social.handle}</span>
    </a>
  `).join("");
}

function applyBrandContent() {
  document.title = `${brandConfig.brandName} | Игра-Кликер`;

  setText("brandMark", brandConfig.brandName);
  setText("heroBrandName", brandConfig.brandName);
  setText("heroTagline", brandConfig.tagline);
  setText("heroDescription", brandConfig.description);
  setText("socialsDescription", "Следи за патчами, событиями, новостями и активностью сообщества в одном месте.");
  setText("footerBrandName", brandConfig.brandName);
  setText("footerTagline", brandConfig.tagline);
  setText("footerCopyright", `(c) ${new Date().getFullYear()} ${brandConfig.brandName}. Все права защищены.`);

  setLink("headerPrimaryLink", brandConfig.primaryLink, "Играть сейчас");
  setLink("heroPrimaryLink", brandConfig.primaryLink, "Играть сейчас");

  const telegram = brandConfig.socials.find((item) => item.name === "Telegram") || brandConfig.socials[0];
  const instagram = brandConfig.socials.find((item) => item.name === "Instagram") || brandConfig.socials[1];
  const tiktok = brandConfig.socials.find((item) => item.name === "TikTok") || brandConfig.socials[2];

  setLink("footerTelegram", telegram.href, telegram.name);
  setLink("footerInstagram", instagram.href, instagram.name);
  setLink("footerTiktok", tiktok.href, tiktok.name);

  applyBackground("characterBgOne", brandConfig.characters.primaryBackground);
  applyBackground("characterBgTwo", brandConfig.characters.secondaryBackground);
  applyImage("characterOne", brandConfig.characters.primary);
  applyImage("characterTwo", brandConfig.characters.secondary);
}

function initRevealAnimations() {
  const revealItems = [...document.querySelectorAll(".reveal")];

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
    observer.observe(item);
  });
}

function init() {
  applyBrandContent();
  renderSocialLinks();
  initRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
