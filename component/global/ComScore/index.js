import React from 'react';

const ComScore = () => {
  const scriptScore = `
    var _comscore = _comscore || [];
    _comscore.push({ c1: "2", c2: "6906594" });
    (function() {
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
      s.src = "https://sb.scorecardresearch.com/cs/6906594/beacon.js";
      el.parentNode.insertBefore(s, el);
    })();
  `;
  return <>
    <script async dangerouslySetInnerHTML={{__html: scriptScore}}/>
    <noscript dangerouslySetInnerHTML={{
      __html: `<img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=6906594&amp;cv=3.6.0&amp;cj=1"  alt=""/>`
    }}/>
  </>
};

export { ComScore };
