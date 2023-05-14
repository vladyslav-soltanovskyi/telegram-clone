import { onBeforeUnmount, onMounted, type Ref } from "vue";

type Handler = (event: MouseEvent) => void;

const useClickOutSide = <T extends HTMLElement>(
  elRef: Ref<T>,
  callback: Handler
) => {
  const handler = (e: MouseEvent) => {
    const path = e.composedPath && e.composedPath();
    
    if (path && elRef.value && !path.includes(elRef.value)) {
      callback(e);
    }
  };

  onMounted(() => window.addEventListener("click", handler));
  onBeforeUnmount(() => window.removeEventListener("click", handler));

  return { handler };
};

export default useClickOutSide;
