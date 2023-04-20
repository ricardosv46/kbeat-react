export const parseIframe = str => {
    const regEx = /(src|width|height)=["']([^"']*)["']/gi;
    let datosIframe = {
      src: '',
      width: '',
      height: ''
    };
  
    str?.replace(regEx, function(all, typeStr, value) {
      if (typeStr === 'src') {
        datosIframe.src = value;
      }
  
      if (typeStr === 'width') {
        datosIframe.width = value;
      }
  
      if (typeStr === 'height') {
        datosIframe.height = value;
      }
    });
    return datosIframe;
  };
  