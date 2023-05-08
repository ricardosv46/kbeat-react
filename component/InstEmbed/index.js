import React, { useEffect} from 'react';

const InstEmbed = props => {
  const { contentId, instPost } = props;

  useEffect(() => {
    if(!document.getElementById('scriptPlatformInstagram')){
      const script = document.createElement("script");
      script.id = "scriptPlatformInstagram";
      script.defer = true;
      //script.async = true;
      script.src = "https://platform.instagram.com/en_US/embeds.js";
      document.head.appendChild(script);
    }

    setTimeout(()=> {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    },500);

  },[ contentId, instPost ]);

  const tagA = React.createElement('a', { href: `https://www.instagram.com/p/${instPost}`, width: '100%'}, 'instagram prueba');

  return React.createElement('blockquote', {
    id: `instagramID-${contentId}`,
    className: 'instagram-media',
    'data-instgrm': '',
    'data-instgrm-version': '4',
    style: {margin: "0 auto !important"},
    title: `instEmbed-${contentId}-${instPost}`,
    width: '100%'
  }, tagA);
};

export {InstEmbed};