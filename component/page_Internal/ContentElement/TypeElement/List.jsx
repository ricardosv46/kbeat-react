
import React from 'react';

const settingList = {
  'unordered': {'regExp': /(<ul>|<\/ul>)/g, 'tagName': 'ul'},
  'ordered': {'regExp': /(<ol>|<\/ol>)/g, 'tagName': 'ol'}
};

const List = props => {
  let showList = null;
  if( props.data && Object.keys(props.data) && Object.keys(props.data).length > 0 ) {
    const {data} = props;
    if( data.content && data.content.length > 0 ) {

      const typeList = data?.attributes?.ordered ? settingList['ordered'] : settingList['unordered'];

      const dataUL = {
        className: 'list-content',
        dangerouslySetInnerHTML: {
          __html: data.content.replace(typeList['regExp'], ''),
        },
      };

      showList = React.createElement(typeList['tagName'], dataUL);
    }
  }
  return showList
}

export {List};