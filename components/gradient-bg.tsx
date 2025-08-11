export default function GradientBG() {
  return <ScrollRevealScript />
}

function ScrollRevealScript() {
  const code = `
    (function(){
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-reveal', 'in');
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
      const run = () => document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
      if (document.readyState === 'complete' || document.readyState === 'interactive') run();
      else window.addEventListener('DOMContentLoaded', run);
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
