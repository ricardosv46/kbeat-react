const SETTING_QUERY = `query Spotlight ($_type: String!) {
    setting (type: $_type, site_id: "larepublica") {
      __typename
      title
        data {
          value
        }
    }
}`;

export default SETTING_QUERY;
