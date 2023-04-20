const CATEGORIES_FRAGMENT = `
  fragment categoriesFragment on ArticleDataType {
    categories {
      name
      slug
      primary
    }
  }
`;

export default CATEGORIES_FRAGMENT;
