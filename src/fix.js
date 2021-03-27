const d = document;

(function () {
  const BUTTON_CLASS = btoa('button')

  const appStyles = (function () {
    const style = d.createElement('style');

    style.innerHTML = `
      .${BUTTON_CLASS} {
        --size: 50px;
        align-items: center;
        background: #03043e;
        border-radius: 50%;
        bottom: 10px;
        box-shadow: 2px 2px 5px #0003;
        color: white;
        cursor: pointer;
        display: flex !important;
        height: var(--size);
        justify-content: center;
        position: fixed;
        right: 10px;
        transition: 300ms;
        width: var(--size);
      }

      .${BUTTON_CLASS}:hover {
        background: #03046d;
        transform: scale(1.05);
      }
    `

    return style
  })();

  const appCode = (function () {
    const script = d.createElement('script');

    const scriptContent = (function () {
      const MAXIMIZE_ICON = 'fa-expand-alt';
      const MINIMIZE_ICON = 'fa-compress-alt';
      const BUTTON_CLASS = btoa('button')
      const d = document;

      const fix = (function _fix() {
        const state = {
          isFullScreen: false,
          button: null
        };
    
        const fixCanvas = () => {
          window.canvas.width = window.outerWidth;
          window.canvas.height = window.outerHeight;
    
          window.canvas.style = `
            position: absolute;
            left: 0;
            margin: 0;
            max-width: unset;
            top: 0;
            border-radius: 0;
            transition: 300ms;
          `;
    
          window['draw']();
        };
    
        const undoCanvasFix = () => {
          window.canvas.width = 800;
          window.canvas.height = 600;
          window.canvas.style = `
            animation-duration: 300ms;
            width: 800px;
            height: 600px;
          `;
    
          window['draw']();
        };
    
        const toggleFullScreen = () => {
          if (state.isFullScreen) {
            d.exitFullscreen();

            state.isFullScreen = false;

            undoCanvasFix();
            state.button.classList.remove(MINIMIZE_ICON)
            state.button.classList.add(MAXIMIZE_ICON)

            console.log('FULLSCREEN MBE FSM: exiting fullscreen mode');
          }else {
            d.body.requestFullscreen();

            state.isFullScreen = true;

            fixCanvas();

            state.button.classList.remove(MAXIMIZE_ICON)
            state.button.classList.add(MINIMIZE_ICON)

            console.log('FULLSCREEN MBE FSM: entering fullscreen mode');
          };
        };
    
        const renderToggleButton = () => {
          const expandButton = (function () {
            const div = d.createElement('div');
    
            div.classList.add(BUTTON_CLASS)
            
            div.classList.add('fas', MAXIMIZE_ICON, 'fa-2x');
  
            div.addEventListener('click', toggleFullScreen);
  
            return div
          })();
    
          d.body.append(expandButton);
          
          console.log('FULLSCREEN MBE FSM: button Rendered!');

          return expandButton
        };
    
        const run = () => {
          const button = renderToggleButton();

          state.button = button
        };
    
        console.log('FULLSCREEN MBE FSM: extension Loaded!');
    
        return { run, undoCanvasFix }
      })();
    
      fix.run();
    }).toString();

    script.innerHTML = `(${scriptContent})()`;

    return script
  })();
  const fontAwesome = (function () {
    const link = d.createElement('link');
    link.integrity = 'sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    link.crossOrigin = 'anonymous';
    link.rel = 'stylesheet';

    return link
  })();
  
  d.head.append(appCode, appStyles, fontAwesome)
})()