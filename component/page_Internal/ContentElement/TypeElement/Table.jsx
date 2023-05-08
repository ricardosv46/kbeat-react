
const Table = props => {
  let contentTable = null;

  const regExScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gm;
  const regExIframe = /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gm;

  if( props.data && Object.keys(props.data) && Object.keys(props.data).length > 0 ){
    const {data} = props;

    if( data.content && Object.keys(data.content) && Object.keys(data.content).length > 0 ) {
      const {content} = data;
      //let cleanhtml = content.replace(/<a alt="[A-Z a-z ñ, áéíóú ()]*"/i,'<a','');
      if( props.amp ){
        contentTable = <p dangerouslySetInnerHTML={{__html: content
            .replace(regExScript, '')
            .replace(regExIframe, '')
            .replace(/(<p>|<\/p>)/g, '')
            .replace(/ping=".*?"/,'')
            .replace(/spellcheck=".*?"/,'')
            .replace(/ao_us_href=".*?"/,'')
            .replace(/that=".*?"/,'')
            .replace(/alt=".*?"/,'')}}/>;
      } else {

        if(content.includes('<table class=""')) {
          contentTable = <table className="element_table" cellPadding="10px" width="100%" style={{borderCollapse: 'collapse'}} border='1' dangerouslySetInnerHTML={{__html:
              content
                .replace(/(<table class="">|<\/table>)/g, '')
                .replace(/alt=".*?"/,'')}}/>;

        } else {
          contentTable = <table className="element_table" cellPadding="10px" width="100%" style={{borderCollapse: 'collapse'}} border='1' dangerouslySetInnerHTML={{__html: content
              .replace(/(<table>|<\/table>)/g, '')
              .replace(/alt=".*?"/,'')}}/>;
        }
      }

    }
  }

  return <div className="element_table-container">{contentTable}</div>;
}

export {Table};