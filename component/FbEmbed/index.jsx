import React, { useEffect} from 'react';

const FbEmbed = props => {
  const {url} = props;

  useEffect(() => {
    if(!document.getElementById('scriptFbSDK')){
      const script = document.createElement("script");
      script.id = "scriptFbSDK";
      //script.async = true;
      script.defer = true;
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
      document.head.appendChild(script);
    }

  }, []);

  return React.createElement('div', {
    className: 'fb-post fb-embed-element',
    'data-href': url,
    'data-width': '500'
  });
};

export {FbEmbed};