let scrollPosition = 0;

export const usePageScrollbarControls = () => {
  const getBody = () => {
    return document.body;
  };

  const lock = () => {
    const body = getBody();
    scrollPosition = window.pageYOffset;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";
  };

  const unlock = () => {
    const body = getBody();
    body.style.removeProperty("overflow");
    body.style.removeProperty("position");
    body.style.removeProperty("top");
    body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
  };

  return { lock, unlock };
};

