const lazyComponents = {
  Article: () => import("../../legacy_components/Article"),
  ArticlesWidgets: () => import("../../components/ArticlesWidgets"),
  ArticleVideoCover: () => import("../../components/Article/Cover/VideoCover"),
  Biography: () => import("../../legacy_components/BiographyList/Biography"),
  BiographyList: () => import("../../legacy_components/BiographyList"),
  Bookmarks: () => import("../../legacy_components/Bookmarks"),
  BrightcoveLiveVideoPlayer: () =>
    import(
      "../../legacy_components/BrightcovePlayers/BrightcoveLiveVideoPlayer"
    ),
  BrightcoveVideoLazyPlayer: () =>
    import(
      "../../legacy_components/BrightcovePlayers/BrightcoveVideoLazyPlayer"
    ),
  BrightcoveVideoPlayer: () =>
    import("../../legacy_components/BrightcovePlayers/BrightcoveVideoPlayer"),
  Category: () => import("../../pages/ArticleList/Category"),
  Channel: () => import("../../legacy_components/Channel"),
  CommentList: () => import("../../legacy_components/Article/Comments/List"),
  Contact: () => import("../../legacy_components/Contact"),
  CookieList: () =>
    import("../../legacy_components/ConsentManagement/CookieList"),
  Events: () => import("../../legacy_components/Article/Events"),
  FacebookPost: () => import("../../legacy_components/FacebookPost"),
  FeaturedCategories: () =>
    import("../../legacy_components/Homepage/FeaturedCategories"),
  Homepage: () => import("../../legacy_components/Homepage"),
  ImageCover: () => import("../../legacy_components/ImageCover"),
  LatestVideos: () => import("../../legacy_components/Homepage/LatestVideos"),
  Leadership: () => import("../../legacy_components/Leadership"),
  LiveRadio: () => import("../../legacy_components/LiveRadio"),
  LiveRadioWebView: () => import("../../legacy_components/WebView/LiveRadio"),
  MarketingShow: () => import("../../legacy_components/MarketingShow"),
  MissingPersonList: () => import("../../components/MissingPersonList"),
  NewsFeed: () => import("../../legacy_components/NewsFeed"),
  Newsletter: () => import("../../legacy_components/Newsletter"),
  PageError: () => import("../../legacy_components/PageError"),
  PageNotFound: () => import("../../legacy_components/PageNotFound"),
  PrivacyPolicy: () =>
    import("../../legacy_components/LegalText/PrivacyPolicy"),
  AdvertisingTermsAndConditions: () =>
    import("../../legacy_components/LegalText/AdvertisingTermsAndConditions"),
  AccessibilityDeclaration: () =>
    import("../../legacy_components/LegalText/AccessibilityDeclaration"),
  Profile: () => import("../../legacy_components/Profile"),
  RequestResetPassword: () =>
    import("../../legacy_components/RequestResetPassword"),
  ResetPassword: () => import("../../legacy_components/ResetPassword"),
  Schedule: () => import("../../legacy_components/Schedule"),
  SearchPanel: () =>
    import("../../components/Layout/Header/SearchPanel/SearchPanel"),
  Sitemap: () => import("../../pages/Sitemap"),
  SpecialPage: () => import("../../legacy_components/SpecialPage"),
  SpecialPageWebView: () => import("../../legacy_components/WebView/Special"),
  Tag: () => import("../../legacy_components/TagList/Tag"),
  TagList: () => import("../../legacy_components/TagList"),
  Author: () => import("../../pages/Author"),
  AuthorList: () => import("../../pages/AuthorList"),
  TermsOfService: () =>
    import("../../legacy_components/LegalText/TermsOfService"),
  TopArticles: () => import("../../pages/ArticleList/TopArticles"),
  Tweet: () => import("../../legacy_components/Tweet"),
  ActivateAccount: () => import("../../pages/ActivateAccount"),
};

// createLazyComponentRegistry :: _ -> LazyComponentRegistry
const createLazyComponentRegistry = function () {
  const components = {};

  return {
    add: async (key) => {
      if (!key) {
        return;
      }

      if (components[key]) {
        return components[key];
      }

      if (!lazyComponents[key]) {
        throw new Error(`Invalid lazy component "${key}".`);
      }

      const component = await lazyComponents[key]();

      components[key] = component.default;

      return components[key];
    },
  };
};

export default createLazyComponentRegistry;
