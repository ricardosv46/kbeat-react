import Script from 'next/script';

const TwEmbed = props => {
  const { contentId, tweetId } = props;
  const loadTweet = function () {
    document.querySelectorAll(".twitter-embed").forEach(item => {
      window.twttr.widgets.createTweet(
        item.dataset.twitterId,
        item,
        {
          align: 'center'
        });
    })
  }
  return <>
    <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" onLoad={loadTweet} />
    <div data-twitter-id={tweetId} id={contentId} className='twitter-embed' />
  </>;
};

export { TwEmbed };


