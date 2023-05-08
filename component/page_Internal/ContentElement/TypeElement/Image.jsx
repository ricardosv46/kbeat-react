import resizePrototype from 'util/resizePrototype';

const newResize = new resizePrototype();

const Image = props => {
  let showImgAll = null;
  let showImage = null;
  let showLegendimg = null;
  let getSrcImg;

//console.log("props imagen--->", props)

  const styleLegend = {
    // fontStyle: 'italic',
    fontSize: '12px',
    margin: '6px 0',
  };

  let size = {
    width: 640,
    height: 374
  }


  if( props.data && Object.keys(props.data) && Object.keys(props.data).length > 0 ) {
    const {data} = props;
     //console.log('content_element_ image: ',data);

    if(parseInt(data.custom?.width) && parseInt(data.custom?.height)){
      size.height = Math.round(data.custom.height*size.width/data.custom.width);
    }

    if( data.content && data.content.length > 0 ) {
      getSrcImg = data.content.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
      //console.log("getSrcImg--->", getSrcImg)
    }

    if( data.custom && data.custom.caption && data.custom.caption.length > 0 ||
      data.custom && data.custom.alt && data.custom.alt.length > 0) {

      showLegendimg = <div className="">
        <p style={{...styleLegend, textAlign: 'center'}}dangerouslySetInnerHTML={{__html: data.custom.caption || data.custom.alt}}/>
      </div>
    }
  }

  if( getSrcImg && getSrcImg[1] && getSrcImg[1].length > 0 ) {
    if( props.amp ) {
      showImage = <amp-img alt={props.data.custom.alt || props.data.custom.caption || 'larepublica.pe'}
                           title={props.data.custom.alt || props.data.custom.caption || 'larepublica.pe'}
                           src={newResize.resizeWapa(getSrcImg[1],size.width,size.height)}
                           {...size}
                           layout="responsive">
      </amp-img>;
    } else {
      /* if( getSrcImg[0].includes('https://larepublica.cronosmedia.glr.pe')  ){ */

        showImgAll = <div className ="content_img">
          <img className="comp__image image__resize" src={newResize.resizeWapa(getSrcImg[1],size.width,size.height)}
            alt={props.data.custom.alt || props.data.custom.caption || 'larepublica.pe'}
            title={props.data.custom.alt || props.data.custom.caption || 'larepublica.pe'}
            width="100%"
            height="100%"
            loading="lazy"
            />
        </div>
      /* } */
    }
  }

  return <>
    {showImage} 
    {showImgAll}
    {showLegendimg}
  </>;
}

export {Image};