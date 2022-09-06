const scrollToElement = (element: HTMLElement) => {
  const yPosition = window.scrollY + element.getBoundingClientRect().top;

  window.scrollTo({
    top: yPosition,
    behavior: "smooth"
  });
};

export const useScrollToElementById = (id: string) => () => {
  const element = document.getElementById(id);

  if(!element)
    return;

  scrollToElement(element);
};