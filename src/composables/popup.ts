import { usePageScrollbarControls } from "./page-scrollbar-controls";

export const useDialogControls = (id: string) => {
  const scrollBar = usePageScrollbarControls();

  const getDialogElement = () => {
    const dialogElement = document.getElementById(id);

    if(!dialogElement)
      throw new Error("Dialog element hasn't been found");

    return dialogElement;
  };

  const open = () => {
    const dialogElement = getDialogElement();

    scrollBar.lock()
    dialogElement.style.zIndex = "100";
    dialogElement.classList.add("show");
  };

  const close = () => {
    const dialogElement = getDialogElement();

    dialogElement.addEventListener("transitionend", () => {
      dialogElement.style.zIndex = "-100";
      scrollBar.unlock()
    }, { once: true });
    dialogElement.classList.remove("show");
  };

  return { open, close };
};
