(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const chapterCounts = Object.freeze({
    1: 11,
    2: 13,
    3: 13,
    4: 11,
    5: 7,
    6: 8,
  });

  const tabs = document.querySelector("#chapter-tabs");
  const grid = document.querySelector("#infographic-grid");
  const chapterTitle = document.querySelector("#active-chapter-title");
  const chapterCount = document.querySelector("#active-chapter-count");
  const lightbox = document.querySelector("#lightbox");
  const lightboxScroll = document.querySelector("#lightbox-scroll");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxTitle = document.querySelector("#lightbox-title");
  const lightboxClose = document.querySelector("#lightbox-close");
  const lightboxPrevious = document.querySelector("#lightbox-previous");
  const lightboxNext = document.querySelector("#lightbox-next");

  let activeChapter = 1;
  let activeItem = 1;

  function infographicPath(chapter, item) {
    return `chapter${String(chapter).padStart(3, "0")}/infographic-${chapter}.${item}.png`;
  }

  function labelFor(chapter, item) {
    return `Infographic ${chapter}.${item}`;
  }

  function chapterFromHash() {
    const match = window.location.hash.match(/^#chapter-(\d)$/);
    const chapter = match ? Number(match[1]) : 1;
    return chapterCounts[chapter] ? chapter : 1;
  }

  function renderTabs() {
    const fragment = document.createDocumentFragment();

    Object.entries(chapterCounts).forEach(([chapterValue, count]) => {
      const chapter = Number(chapterValue);
      const tab = document.createElement("button");
      tab.className = "chapter-tab";
      tab.id = `chapter-tab-${chapter}`;
      tab.type = "button";
      tab.role = "tab";
      tab.setAttribute("aria-controls", "infographic-grid");
      tab.setAttribute("aria-selected", chapter === activeChapter ? "true" : "false");
      tab.tabIndex = chapter === activeChapter ? 0 : -1;
      tab.innerHTML = `Chapter ${chapter} <span>${count}</span>`;
      tab.addEventListener("click", () => selectChapter(chapter, true));
      tab.addEventListener("keydown", handleTabKeydown);
      fragment.append(tab);
    });

    tabs.replaceChildren(fragment);
  }

  function handleTabKeydown(event) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabButtons = [...tabs.querySelectorAll('[role="tab"]')];
    const currentIndex = tabButtons.indexOf(event.currentTarget);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabButtons.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabButtons.length - 1;

    tabButtons[nextIndex].focus();
    selectChapter(nextIndex + 1, true);
  }

  function selectChapter(chapter, updateHash = false) {
    activeChapter = chapter;
    activeItem = 1;

    tabs.querySelectorAll('[role="tab"]').forEach((tab, index) => {
      const selected = index + 1 === chapter;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.tabIndex = selected ? 0 : -1;
    });

    if (updateHash) {
      history.replaceState(null, "", `#chapter-${chapter}`);
    }

    renderGallery();
  }

  function renderGallery() {
    const count = chapterCounts[activeChapter];
    const fragment = document.createDocumentFragment();

    chapterTitle.textContent = `Chapter ${activeChapter}`;
    chapterCount.textContent = `${count} infographics`;
    grid.setAttribute("aria-labelledby", `chapter-tab-${activeChapter}`);

    for (let item = 1; item <= count; item += 1) {
      const path = infographicPath(activeChapter, item);
      const label = labelFor(activeChapter, item);
      const card = document.createElement("article");
      const button = document.createElement("button");
      const media = document.createElement("span");
      const index = document.createElement("span");
      const image = document.createElement("img");
      const caption = document.createElement("span");
      const captionTitle = document.createElement("strong");
      const captionAction = document.createElement("span");

      card.className = "infographic-card";
      button.className = "infographic-button";
      button.type = "button";
      button.setAttribute("aria-label", `Open ${label}`);
      media.className = "infographic-media";
      index.className = "infographic-index";
      index.textContent = `${activeChapter}.${item}`;
      index.setAttribute("aria-hidden", "true");
      image.src = path;
      image.alt = `${label} from 5,000 Days`;
      image.loading = item <= 3 ? "eager" : "lazy";
      image.decoding = "async";
      caption.className = "infographic-caption";
      captionTitle.textContent = label;
      captionAction.textContent = "View";

      image.addEventListener("load", () => media.classList.add("is-loaded"));
      image.addEventListener("error", () => {
        image.remove();
        button.disabled = true;
        button.setAttribute("aria-label", label);
      });
      button.addEventListener("click", () => openLightbox(activeChapter, item));

      media.append(index, image);
      caption.append(captionTitle, captionAction);
      button.append(media, caption);
      card.append(button);
      fragment.append(card);
    }

    grid.replaceChildren(fragment);
  }

  function updateLightbox() {
    const label = labelFor(activeChapter, activeItem);
    lightboxImage.src = infographicPath(activeChapter, activeItem);
    lightboxImage.alt = `${label} from 5,000 Days`;
    lightboxTitle.textContent = label;
    lightboxPrevious.disabled = activeItem <= 1;
    lightboxNext.disabled = activeItem >= chapterCounts[activeChapter];
    lightboxScroll.scrollTo({ top: 0, left: 0 });
  }

  function openLightbox(chapter, item) {
    activeChapter = chapter;
    activeItem = item;
    updateLightbox();
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (typeof lightbox.close === "function") {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  function stepLightbox(delta) {
    const next = activeItem + delta;
    if (next < 1 || next > chapterCounts[activeChapter]) return;
    activeItem = next;
    updateLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrevious.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  function revealSections() {
    document.querySelectorAll(".hero .reveal").forEach((element) => {
      element.classList.add("is-visible");
    });

    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
  }

  activeChapter = chapterFromHash();
  renderTabs();
  selectChapter(activeChapter);
  revealSections();
})();
