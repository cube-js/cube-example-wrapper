window.addEventListener("DOMContentLoaded", () => {
  const navToggleBtn = document.querySelector("#toggleNavVisibilityButton");
  const header = document.querySelector("#header");
  const headerNavigation = document.querySelector("#headerNavigation");
  const headerOverlay = document.querySelector("#headerOverlay");

  const toPX = (n) => (CSS && CSS.px ? CSS.px(n) : n + "px");

  // because additional height can only decrease
  let prevAdditionalScrollHeight;

  const scrollListener = () => {
    const { scrollY } = window;
    if (prevAdditionalScrollHeight > scrollY) {
      document.body.style.setProperty(
        "--additional_scroll_height",
        toPX(scrollY)
      );
      prevAdditionalScrollHeight = scrollY;
    }
    if (scrollY === 0) {
      window.removeEventListener("scroll", scrollListener);
      document.body.style.removeProperty("--additional_scroll_height");
    }
  };

  const lockScroll = () => {
    const { scrollY } = window;
    prevAdditionalScrollHeight = scrollY;
    document.body.style.setProperty(
      "--additional_scroll_height",
      toPX(scrollY)
    );
    document.documentElement.classList.add("lock_root");
    document.body.classList.add("lock_body");
    document.documentElement.addEventListener("scroll", scrollListener);
    window.addEventListener("scroll", scrollListener);
  };

  const unLockScroll = () => {
    document.body.classList.remove("lock_body");
    document.documentElement.classList.remove("lock_root");
    window.removeEventListener("scroll", scrollListener);
    document.body.style.removeProperty("--additional_scroll_height");
  };

  const toggleHeaderNavigation = () => {
    if (headerNavigation.classList.contains("Header__navigation--open")) {
      // set display:none to navigation after transition end
      header.classList.remove("Header--open");

      setTimeout(() => {
        headerNavigation.classList.remove("Header__navigation--open");
        // remove class to prevent overlay blink
        header.classList.remove("Header--hasOpened");
      }, 500);
    } else {
      // set display:flex to navigation before transition start
      headerNavigation.classList.add("Header__navigation--open");

      setTimeout(() => {
        header.classList.add("Header--open");
        header.classList.add("Header--hasOpened");
      }, 100);
    }
  };

  const hideNav = () => {
    unLockScroll();
    toggleHeaderNavigation();

    navToggleBtn.setAttribute("aria-expanded", "false");
    navToggleBtn.setAttribute("aria-label", "Open menu");
  };

  const showNav = () => {
    lockScroll();
    toggleHeaderNavigation();

    navToggleBtn.setAttribute("aria-expanded", true);
    navToggleBtn.setAttribute("aria-label", "Close menu");
  };

  navToggleBtn.addEventListener("click", () => {
    if (header.classList.contains("Header--open")) {
      hideNav();
    } else {
      showNav();
    }
  });

  headerOverlay.addEventListener("click", () => {
    hideNav();
  });

  // update in case of changing nav structure
  const headerNavigationLastChild = document.querySelector(
    "#headerNavigation > :last-child > :last-child"
  );
  headerNavigationLastChild.addEventListener("blur", () => {
    hideNav();
  });

  const popupElem = document.querySelector(".Popup");

  // close dropdown when click outside
  window.addEventListener("click", (e) => {
    if (!popupElem.contains(e.target) && popupElem.classList.contains("Popup--open")) {
      popupElem.classList.toggle("Popup--open");
      document.body.classList.toggle("popupIsOpen");
    }
  });
});
