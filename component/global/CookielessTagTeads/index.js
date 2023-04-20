const CookielessTagTeads = () => (
    <>
        <script
            dangerouslySetInnerHTML={{
                __html: `
          window.teads_analytics = window.teads_analytics || {};
          window.teads_analytics.analytics_tag_id = "PUB_11656";
          window.teads_analytics.share = window.teads_analytics.share || function() {
              ;(window.teads_analytics.shared_data = window.teads_analytics.shared_data || []).push(arguments)
          };
      `,
            }}
        />
        <script async src="https://a.teads.tv/analytics/tag.js" />
    </>
);

export { CookielessTagTeads };
