import { useEffect } from 'react';

export const DevToolsProtection = () => {
  // useEffect(() => {
  //   const disableRightClick = (e: MouseEvent) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  //     if (
  //       e.key === 'F12' ||
  //       (e.ctrlKey && e.shiftKey && e.key === 'I') ||
  //       (e.ctrlKey && e.shiftKey && e.key === 'J') ||
  //       (e.ctrlKey && e.shiftKey && e.key === 'C') ||
  //       (e.ctrlKey && e.key === 'U') ||
  //       (e.metaKey && e.altKey && e.key === 'I') ||
  //       (e.metaKey && e.altKey && e.key === 'J') ||
  //       (e.metaKey && e.altKey && e.key === 'C')
  //     ) {
  //       e.preventDefault();
  //       return false;
  //     }
  //   };

  //   const disableSelection = (e: Event) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   const detectDevTools = () => {
  //     const threshold = 160;
  //     const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  //     const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  //     if (widthThreshold || heightThreshold) {
  //       document.body.innerHTML = `
  //         <div style="
  //           display: flex;
  //           align-items: center;
  //           justify-content: center;
  //           height: 100vh;
  //           background: #000;
  //           color: #fff;
  //           font-family: system-ui, -apple-system, sans-serif;
  //           text-align: center;
  //           padding: 2rem;
  //         ">
  //           <div>
  //             <h1 style="font-size: 2rem; margin-bottom: 1rem;">Access Denied</h1>
  //             <p style="font-size: 1.2rem; opacity: 0.8;">Developer tools are not allowed on this website.</p>
  //             <p style="font-size: 0.9rem; margin-top: 1rem; opacity: 0.6;">Please close developer tools and refresh the page.</p>
  //           </div>
  //         </div>
  //       `;
  //     }
  //   };

  //   const checkDevTools = setInterval(detectDevTools, 1000);

  //   document.addEventListener('contextmenu', disableRightClick);
  //   document.addEventListener('keydown', disableKeyboardShortcuts);
  //   document.addEventListener('selectstart', disableSelection);
  //   document.addEventListener('copy', disableSelection);
  //   document.addEventListener('cut', disableSelection);
  //   document.addEventListener('paste', disableSelection);

  //   document.body.style.userSelect = 'none';
  //   document.body.style.webkitUserSelect = 'none';

  //   return () => {
  //     clearInterval(checkDevTools);
  //     document.removeEventListener('contextmenu', disableRightClick);
  //     document.removeEventListener('keydown', disableKeyboardShortcuts);
  //     document.removeEventListener('selectstart', disableSelection);
  //     document.removeEventListener('copy', disableSelection);
  //     document.removeEventListener('cut', disableSelection);
  //     document.removeEventListener('paste', disableSelection);
  //     document.body.style.userSelect = '';
  //     document.body.style.webkitUserSelect = '';
  //   };
  // }, []);

  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.innerHTML = `
  //     * {
  //       -webkit-user-select: none;
  //       -moz-user-select: none;
  //       -ms-user-select: none;
  //       user-select: none;
  //     }
  //     input, textarea {
  //       -webkit-user-select: text !important;
  //       -moz-user-select: text !important;
  //       -ms-user-select: text !important;
  //       user-select: text !important;
  //     }
  //   `;
  //   document.head.appendChild(style);

  //   return () => {
  //     document.head.removeChild(style);
  //   };
  // }, []);

  return null;
};
