export const clickOutside = {
  beforeMount: (element: any, binding: any) => {
    element.clickOutsideEvent = (event: Event) => {
      if (!(element == event.target || element.contains(event.target))) {
        binding.value();
      }
    };

    document.addEventListener("click", element.clickOutsideEvent);
  },
  unmounted: (element: any) => {
    document.removeEventListener("click", element.clickOutsideEvent);
  },
};
