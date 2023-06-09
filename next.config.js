const env = {
  API_KEY_ANALITYCS: '',
  KEY_TAGMANAGER: 'GTM-N43VHLW',
  KEY_FB_PAGE: '94604237016',
  KEY_FB_APP_ID: '489210501129201',
  SITE_DOMAIN_URL: process.env.SITE_DOMAIN_URL,
  SITE_TWITTER_ACCOUNT: 'larepublica_pe',
  SITE_TWITTER: 'https://twitter.com/larepublica_pe',
  SITE_INSTAGRAM: 'https://www.instagram.com/larepublica_pe/',
  SITE_FACEBOOK: 'https://www.facebook.com/larepublicape/',
  SITE_YOUTUBE: 'https://www.youtube.com/channel/UC-B7Xv56uNRDkj0vC3QW8Cg',
  SITE_TIK_TOK: 'https://www.tiktok.com/@larepublica.pe',
  SITE_NEWS_GOOGLE: 'https://news.google.com/publications/CAAqBwgKMP6OigMwlqo8?hl=es-419&amp;gl=PE&amp;ceid=PE:es-419',
  SITE_NAME: 'La República.pe',
  SITE_NAME_ALTERNATIVE: 'LR',
  SITE_LEGAL_NAME: 'Grupo La República Publicaciones',
  CNAME_CRONOS: 'https://imgmedia.larepublica.pe',
  MASK_IMAGE_EP: 'https://imgmedia.elpopular.pe',
  MASK_IMAGE_LB: 'https://imgmedia.libero.pe',
  MASK_IMAGE_WP: 'https://imgmedia.wapa.pe',
  MASK_IMAGE_LOL: 'https://imgmedialol.larepublica.pe',
  MASK_IMAGE_COMERCIAL: 'https://imgcomercial.glr.pe',
  MASK_IMAGE_PERU_LEGAL: 'https://imgmedia.perulegal.pe',
  CNAME_CRONOSMEDIA: '',
  IMG_16x16: '/static/images/favicon-16x16.png',
  IMG_32x32: '/static/images/favicon-32x32.png',
  IMG_150x150: '/static/images/favicon-150x150.png',
  IMG_180x180: '',
  IMG_192x192: '/static/images/favicon-192x192.png',
  META_IMAGE_DEFAULT: '/static/images/image-1200x660.png',
  LOGO_LR_DEFAULT: "/static/lr/logo_lr_default.png",
  LOGO_LR_AUTHOR: "/static/kbeat_author.png",
  LOGO_PUBLISHER: "/static/lr/logo_larepublica.png",
  IMAGE_DEFAULT_1250x735: "https://larepublica.cronosmedia.glr.pe/original/2022/12/30/63adf101d28cfa2e98582402.jpg",
  IMAGE_AUTHOR_DEFAULT_500x500: "https://larepublica.cronosmedia.glr.pe/original/2023/02/01/63da9967bd772b42417bcf32.jpg"
};

module.exports = {
  compress: true,
  env,
  trailingSlash: false,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  }
}
