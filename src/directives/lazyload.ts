import { Directive } from "vue";

const lazyLoadDirective: Directive = {
    mounted(el: HTMLImageElement) {
        const originalSrc = el.getAttribute('src')

        const loadImage = () => {
            if(originalSrc) {
                el.src = originalSrc
                el.classList.add("loaded")
            }
        };
      
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  loadImage();
                  observer.unobserve(entry.target);
                }
              });
            },
            {
              root: null,
              threshold: 0.,
            }
          );
          observer.observe(el);
        } else {
          loadImage();
        }
    },
};

export default lazyLoadDirective;
