
const Paragraph = props => {
  let contentParagraph = null;

  const regExScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gm;
  const regExIframe = /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gm;

  if( props.data && Object.keys(props.data) && Object.keys(props.data).length > 0 ){
    const {data} = props;

    if( data.content && Object.keys(data.content) && Object.keys(data.content).length > 0 ) {
      const {content} = data;
      //let cleanhtml = content.replace(/<a alt="[A-Z a-z ñ, áéíóú ()]*"/i,'<a','');

      if( props.amp ){
        contentParagraph = <p dangerouslySetInnerHTML={{__html: content
            .replace(regExScript, '')
            .replace(regExIframe, '')
            .replace(/(<p>|<\/p>)/g, '')
            .replace(/ping=".*?"/,'')
            .replace(/spellcheck=".*?"/,'')
            .replace(/ao_us_href=".*?"/,'')
            .replace(/that=".*?"/,'')
            .replace(/alt=".*?"/,'')}}/>;
      } else {

        if(content.includes('<p class="MsoNormal" style="text-align:justify"')) {
          contentParagraph = <p dangerouslySetInnerHTML={{__html:
              content
                .replace(/(<p class="MsoNormal" style="text-align:justify">|<\/p>)/g, '')
                .replace(/alt=".*?"/,'')}}/>;

        } else {
          contentParagraph = <p dangerouslySetInnerHTML={{__html: content
              .replace(/(<p>|<\/p>)/g, '')
              .replace(/alt=".*?"/,'')}}/>;
        }
      }

    }
  }

  return contentParagraph;
}

export {Paragraph};