import "./App.scss";
import { Route, default as Router } from "./Router";
import ConsentManagement from "./ConsentManagement";
import ErrorBoundary from "./ErrorBoundary";
import Firewall from "./Firewall";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LazyComponent from "../components/LazyComponent";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import Toastr from "./Toastr";
import UserLoader from "./UserLoader";
import { isWebView } from "./../utilities/displays";
import BottomNavbar from "../components/Layout/BottomNavbar";

// lazy load components per route in order to split the JS bundle in chunks
// @see https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
const Article = LazyComponent("Article");
const Biography = LazyComponent("Biography");
const BiographyList = LazyComponent("BiographyList");
const Bookmarks = LazyComponent("Bookmarks");
const Category = LazyComponent("Category");
const Channel = LazyComponent("Channel");
const Contact = LazyComponent("Contact");
const CookieList = LazyComponent("CookieList");
const Homepage = LazyComponent("Homepage");
const Leadership = LazyComponent("Leadership");
const LiveRadio = LazyComponent("LiveRadio");
const LiveRadioWebView = LazyComponent("LiveRadioWebView");
const MarketingShow = LazyComponent("MarketingShow");
const NewsFeed = LazyComponent("NewsFeed");
const Newsletter = LazyComponent("Newsletter");
const PageNotFound = LazyComponent("PageNotFound");
const PrivacyPolicy = LazyComponent("PrivacyPolicy");
const Profile = LazyComponent("Profile");
const RequestResetPassword = LazyComponent("RequestResetPassword");
const ResetPassword = LazyComponent("ResetPassword");
const Schedule = LazyComponent("Schedule");
const SpecialPage = LazyComponent("SpecialPage");
const SpecialPageWebView = LazyComponent("SpecialPageWebView");
const TermsOfService = LazyComponent("TermsOfService");
const AdvertisingTermsAndConditions = LazyComponent(
  "AdvertisingTermsAndConditions"
);
const AccessibilityDeclaration = LazyComponent("AccessibilityDeclaration");
const PageError = LazyComponent("PageError");
const TagList = LazyComponent("TagList");
const Tag = LazyComponent("Tag");
const AuthorList = LazyComponent("AuthorList");
const Author = LazyComponent("Author");
const TopArticles = LazyComponent("TopArticles");
const ActivateAccount = LazyComponent("ActivateAccount");
const Sitemap = LazyComponent("Sitemap");

// AppTree :: () -> React.Component
const AppTree = () => (
  <UserLoader>
    <div className="app">
      <ErrorBoundary>
        <Toastr />
        <Header />
        <div
          id="navigation-content"
          className="top-level-container"
          role="main"
        >
          <ErrorBoundary context="route">
            <Route
              name="homepage"
              pattern={/^\/((?<locale>(ar|en|fr|he))\/?)?$/}
              component={Homepage}
            />
            <Route
              name="contact"
              pattern={/^\/(?<locale>(ar|en|fr|he)?)\/contact\/?$/}
              component={Contact}
            />
            <Route
              name="profile"
              pattern={/^\/(?<locale>(ar|en|fr|he)?)\/profile\/?$/}
              component={Firewall(Profile)}
            />
            <Route
              name="favoritesAr"
              pattern={/^\/(?<locale>ar)\/المفضلة\/?$/}
              component={Firewall(Bookmarks)}
            />
            <Route
              name="favoritesFr"
              pattern={/^\/(?<locale>fr)\/favoris\/?$/}
              component={Firewall(Bookmarks)}
            />
            <Route
              name="favoritesEn"
              pattern={/^\/(?<locale>en)\/favorites\/?$/}
              component={Firewall(Bookmarks)}
            />
            <Route
              name="favoritesHe"
              pattern={/^\/(?<locale>he)\/favorites\/?$/}
              component={Firewall(Bookmarks)}
            />
            <Route
              name="termsOfServiceAr"
              pattern={/^\/(?<locale>ar)\/شروط-الخدمة\/?$/}
              component={TermsOfService}
            />
            <Route
              name="termsOfServiceFr"
              pattern={
                /^\/(?<locale>fr)\/conditions-generales-d-utilisation\/?$/
              }
              component={TermsOfService}
            />
            <Route
              name="termsOfServiceEn"
              pattern={/^\/(?<locale>en)\/terms-of-service\/?$/}
              component={TermsOfService}
            />
            <Route
              name="termsOfServiceHe"
              pattern={/^\/(?<locale>he)\/terms-of-service\/?$/}
              component={TermsOfService}
            />
            <Route
              name="privacyPolicyAr"
              pattern={/^\/(?<locale>ar)\/سياسة-خاصة\/?$/}
              component={PrivacyPolicy}
            />
            <Route
              name="privacyPolicyFr"
              pattern={/^\/(?<locale>fr)\/politique-de-confidentialite\/?$/}
              component={PrivacyPolicy}
            />
            <Route
              name="privacyPolicyEn"
              pattern={/^\/(?<locale>en)\/privacy-policy\/?$/}
              component={PrivacyPolicy}
            />
            <Route
              name="privacyPolicyHe"
              pattern={/^\/(?<locale>he)\/privacy-policy\/?$/}
              component={PrivacyPolicy}
            />
            <Route
              name="advertisingTermsAndConditionsFr"
              pattern={
                /^\/(?<locale>fr)\/conditions-generales-publicitaire\/?$/
              }
              component={AdvertisingTermsAndConditions}
            />
            <Route
              name="advertisingTermsAndConditionsEn"
              pattern={/^\/(?<locale>en)\/advertising-terms-and-conditions\/?$/}
              component={AdvertisingTermsAndConditions}
            />
            <Route
              name="advertisingTermsAndConditionsAr"
              pattern={/^\/(?<locale>ar)\/شروط-وأحكام-الإعلان\/?$/}
              component={AdvertisingTermsAndConditions}
            />
            <Route
              name="advertisingTermsAndConditionsHe"
              pattern={/^\/(?<locale>he)\/advertising-terms-and-conditions\/?$/}
              component={AdvertisingTermsAndConditions}
            />
            <Route
              name="accessibilityDeclarationFr"
              pattern={/^\/(?<locale>fr)\/declaration-d-accessibilite\/?$/}
              component={AccessibilityDeclaration}
            />
            <Route
              name="accessibilityDeclarationEn"
              pattern={/^\/(?<locale>en)\/accessibility-declaration\/?$/}
              component={AccessibilityDeclaration}
            />
            <Route
              name="accessibilityDeclarationAr"
              pattern={/^\/(?<locale>ar)\/إعلان-إمكانية-الوصول\/?$/}
              component={AccessibilityDeclaration}
            />
            <Route
              name="accessibilityDeclarationHe"
              pattern={/^\/(?<locale>he)\/accessibility-declaration\/?$/}
              component={AccessibilityDeclaration}
            />
            <Route
              name="requestResetPassword"
              pattern={/^\/(?<locale>(ar|en|fr|he))\/resetting\/request\/?$/}
              component={RequestResetPassword}
            />
            <Route
              name="resetPassword"
              pattern={
                /^\/(?<locale>(ar|en|fr|he))\/reset-password\/(?<code>.*)\/?$/
              }
              component={ResetPassword}
            />
            <Route
              name="activateAccount"
              pattern={
                /^\/(?<locale>(ar|en|fr|he))\/activate-account\/(?<code>.*)\/?$/
              }
              component={ActivateAccount}
            />
            <Route
              name="newsFeedAr"
              pattern={/^\/(?<locale>ar)\/آخر-الاخبار\/?$/}
              component={NewsFeed}
            />
            <Route
              name="newsFeedFr"
              pattern={/^\/(?<locale>fr)\/fil-info\/?$/}
              component={NewsFeed}
            />
            <Route
              name="newsFeedEn"
              pattern={/^\/(?<locale>en)\/news\/?$/}
              component={NewsFeed}
            />
            <Route
              name="newsFeedHe"
              pattern={/^\/(?<locale>he)\/news\/?$/}
              component={NewsFeed}
            />
            <Route
              name="topArticlesAr"
              pattern={/^\/(?<locale>ar)\/أخبار\/المزيد من الأخبار\/?$/}
              component={TopArticles}
            />
            <Route
              name="topArticlesFr"
              pattern={/^\/(?<locale>fr)\/actu\/plus-d-actualites\/?$/}
              component={TopArticles}
            />
            <Route
              name="topArticlesEn"
              pattern={/^\/(?<locale>en)\/news\/more-news\/?$/}
              component={TopArticles}
            />
            <Route
              name="topArticlesHe"
              pattern={/^\/(?<locale>he)\/news\/more-news\/?$/}
              component={TopArticles}
            />
            <Route
              name="articleAr"
              pattern={
                /^\/(?<locale>ar)\/أخبار\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>(([0-9]{10}|[0-9]{5,6}-[0-9]{6}|artc-)).*)\/?$/
              }
              component={Article}
            />
            <Route
              name="articleFr"
              pattern={
                /^\/(?<locale>fr)\/actu\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>(([0-9]{10}|[0-9]{5,6}-[0-9]{6}|artc-)).*)\/?$/
              }
              component={Article}
            />
            <Route
              name="articleEn"
              pattern={
                /^\/(?<locale>en)\/news\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>(([0-9]{10}|[0-9]{5,6}-[0-9]{6}|artc-)).*)\/?$/
              }
              component={Article}
            />
            <Route
              name="articleHe"
              pattern={
                /^\/(?<locale>he)\/news\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>(([0-9]{10}|[0-9]{5,6}-[0-9]{6}|artc-)).*)\/?$/
              }
              component={Article}
            />
            <Route
              name="categoryAr"
              pattern={
                /^\/(?<locale>ar)\/أخبار\/(?<rootCategory>[^/]+)(\/(?<subCategory>[^/]+))?\/?$/
              }
              component={Category}
            />
            <Route
              name="categoryFr"
              pattern={
                /^\/(?<locale>fr)\/actu\/(?<rootCategory>[^/]+)(\/(?<subCategory>[^/]+))?\/?$/
              }
              component={Category}
            />
            <Route
              name="categoryEn"
              pattern={
                /^\/(?<locale>en)\/news\/(?<rootCategory>[^/]+)(\/(?<subCategory>[^/]+))?\/?$/
              }
              component={Category}
            />
            <Route
              name="categoryHe"
              pattern={
                /^\/(?<locale>he)\/news\/(?<rootCategory>[^/]+)(\/(?<subCategory>[^/]+))?\/?$/
              }
              component={Category}
            />
            <Route
              name="ChannelAr"
              pattern={/^\/(?<locale>ar)\/القنوات\/?$/}
              component={Channel}
            />
            <Route
              name="ChannelFr"
              pattern={/^\/(?<locale>fr)\/canaux\/?$/}
              component={Channel}
            />
            <Route
              name="ChannelEn"
              pattern={/^\/(?<locale>en)\/channels\/?$/}
              component={Channel}
            />
            <Route
              name="ChannelHe"
              pattern={/^\/(?<locale>he)\/channels\/?$/}
              component={Channel}
            />
            <Route
              name="schedulesFr"
              pattern={
                /^\/(?<locale>fr)\/grille-des-programmes\/(?<day>.*)\/?$/
              }
              component={Schedule}
            />
            <Route
              name="schedulesEn"
              pattern={/^\/(?<locale>en)\/schedules\/(?<day>.*)\/?$/}
              component={Schedule}
            />
            <Route
              name="schedulesAr"
              pattern={/^\/(?<locale>ar)\/جداول\/(?<day>.*)\/?$/}
              component={Schedule}
            />
            <Route
              name="schedulesHe"
              pattern={/^\/(?<locale>he)\/schedules\/(?<day>.*)\/?$/}
              component={Schedule}
            />
            <Route
              name="showsAr"
              pattern={/^\/(?<locale>ar)\/برنامج\/?$/}
              component={MarketingShow}
            />
            <Route
              name="showsEn"
              pattern={/^\/(?<locale>en)\/shows\/?$/}
              component={MarketingShow}
            />
            <Route
              name="showsFr"
              pattern={/^\/(?<locale>fr)\/emissions\/?$/}
              component={MarketingShow}
            />
            <Route
              name="showsHe"
              pattern={/^\/(?<locale>he)\/shows\/?$/}
              component={MarketingShow}
            />
            <Route
              name="leadershipAr"
              pattern={/^\/(?<locale>ar)\/اللجنة-التنفيذية\/?/}
              component={Leadership}
            />
            <Route
              name="leadershipFr"
              pattern={/^\/(?<locale>fr)\/comite-executif\/?/}
              component={Leadership}
            />
            <Route
              name="leadershipEn"
              pattern={/^\/(?<locale>en)\/executive-committee\/?/}
              component={Leadership}
            />
            <Route
              name="leadershipHe"
              pattern={/^\/(?<locale>he)\/executive-committee\/?/}
              component={Leadership}
            />
            <Route
              name="biographiesEn"
              pattern={/^\/(?<locale>en)\/profiles\/?$/}
              component={BiographyList}
            />
            <Route
              name="biographiesFr"
              pattern={/^\/(?<locale>fr)\/profils\/?$/}
              component={BiographyList}
            />
            <Route
              name="biographyEn"
              pattern={
                /^\/(?<locale>en)\/profiles\/(?<reporter>[A-Za-z\\-]+.*?)\/?$/
              }
              component={Biography}
            />
            <Route
              name="biographyFr"
              pattern={
                /^\/(?<locale>fr)\/profils\/(?<reporter>[A-Za-z\\-]+.*?)\/?$/
              }
              component={Biography}
            />
            <Route
              name="CookieListAr"
              pattern={/^\/(?<locale>ar)\/بسكويت\/?$/}
              component={CookieList}
            />
            <Route
              name="CookieListFr"
              pattern={/^\/(?<locale>fr)\/liste-des-cookies\/?$/}
              component={CookieList}
            />
            <Route
              name="CookieListEn"
              pattern={/^\/(?<locale>en)\/cookie-list\/?$/}
              component={CookieList}
            />
            <Route
              name="CookieListHe"
              pattern={/^\/(?<locale>he)\/cookie-list\/?$/}
              component={CookieList}
            />
            <Route
              name="LiveRadioAr"
              pattern={/^\/(?<locale>ar)\/راديو-مباشر\/?$/}
              component={LiveRadio}
            />
            <Route
              name="LiveRadioFr"
              pattern={/^\/(?<locale>fr)\/en-direct\/?$/}
              component={LiveRadio}
            />
            <Route
              name="LiveRadioEn"
              pattern={/^\/(?<locale>en)\/live-radio\/?$/}
              component={LiveRadio}
            />
            <Route
              name="LiveRadioHe"
              pattern={/^\/(?<locale>he)\/live-radio\/?$/}
              component={LiveRadio}
            />
            <Route
              name="SpecialPageAr"
              pattern={/^\/(?<locale>ar)\/مميز\/(?<slug>.*?)\/?$/}
              component={SpecialPage}
            />
            <Route
              name="SpecialPageFr"
              pattern={/^\/(?<locale>fr)\/special\/(?<slug>.*?)\/?$/}
              component={SpecialPage}
            />
            <Route
              name="SpecialPageEn"
              pattern={/^\/(?<locale>en)\/special\/(?<slug>.*?)\/?$/}
              component={SpecialPage}
            />
            <Route
              name="SpecialPageHe"
              pattern={/^\/(?<locale>he)\/special\/(?<slug>.*?)\/?$/}
              component={SpecialPage}
            />
            <Route
              name="tags"
              pattern={/^\/(?<locale>(ar|en|fr|he))\/tags\/?$/}
              component={TagList}
            />
            <Route
              name="groupIdentifierTags"
              pattern={
                /^\/(?<locale>(ar|en|fr|he))\/tags\/(?<groupIdentifier>([a-z]|[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]|[\u0590-\u05fe]|special|مميز|ספיישל))$/i
              }
              component={TagList}
            />
            <Route
              name="tag"
              pattern={/^\/(?<locale>(ar|en|fr|he))\/tags\/(?<tag>.*?)\/?$/}
              component={Tag}
            />
            <Route
              name="authors"
              pattern={/^\/(?<locale>(ar|en|fr|he))\/authors\/?$/}
              component={AuthorList}
            />
            <Route
              name="author"
              pattern={
                /^\/(?<locale>(ar|en|fr|he))\/authors\/(?<author>.*?)\/?$/
              }
              component={Author}
            />
            <Route
              name="newsletter"
              pattern={/^\/(?<locale>(en|fr))\/newsletter$/}
              component={Newsletter}
            />
            <Route
              name="newsletterAr"
              pattern={/^\/(?<locale>ar)\/النشرة-الإخبارية$/}
              component={Newsletter}
            />
            <Route
              name="newsletterHe"
              pattern={/^\/(?<locale>he)\/newsletter$/}
              component={Newsletter}
            />
            <Route
              name="sitemap"
              pattern={/^\/(?<locale>(en|he))\/sitemap$/}
              component={Sitemap}
            />
            <Route
              name="sitemapFr"
              pattern={/^\/(?<locale>fr)\/plan-du-site$/}
              component={Sitemap}
            />
            <Route
              name="sitemapAr"
              pattern={/^\/(?<locale>ar)\/خريطة-الموقع$/}
              component={Sitemap}
            />
            <Route
              name="PageError"
              pattern={
                /^\/(?<locale>(ar|en|fr|he))\/(?<errorCode>\d{3})-(page|صفحة)$/
              }
              component={PageError}
            />
            <Route
              name="PageNotFound"
              pattern={/^(\/(?<locale>(ar|en|fr|he))\/?)?.*/}
              component={PageNotFound}
            />
          </ErrorBoundary>
        </div>
        <ConsentManagement />
        <BottomNavbar />
        <Footer />
      </ErrorBoundary>
    </div>
  </UserLoader>
);

// WebviewTree :: () -> React.Component
const WebviewTree = () => (
  <div className="app">
    <div className="top-level-container">
      <ErrorBoundary context="route">
        <Route
          name="LiveRadioWebViewAr"
          pattern={/^\/(?<locale>ar)\/live-shows\/?$/}
          component={LiveRadioWebView}
        />
        <Route
          name="LiveRadioWebViewFr"
          pattern={/^\/(?<locale>fr)\/live-shows\/?$/}
          component={LiveRadioWebView}
        />
        <Route
          name="LiveRadioWebViewEn"
          pattern={/^\/(?<locale>en)\/live-shows\/?$/}
          component={LiveRadioWebView}
        />
        <Route
          name="LiveRadioWebViewHe"
          pattern={/^\/(?<locale>he)\/live-shows\/?$/}
          component={LiveRadioWebView}
        />
        <Route
          name="SpecialWebViewAr"
          pattern={/^\/(?<locale>ar)\/webview\/special\/?$/}
          component={SpecialPageWebView}
        />
        <Route
          name="SpecialWebViewFr"
          pattern={/^\/(?<locale>fr)\/webview\/special\/?$/}
          component={SpecialPageWebView}
        />
        <Route
          name="SpecialWebViewEn"
          pattern={/^\/(?<locale>en)\/webview\/special\/?$/}
          component={SpecialPageWebView}
        />
        <Route
          name="SpecialWebViewHe"
          pattern={/^\/(?<locale>he)\/webview\/special\/?$/}
          component={SpecialPageWebView}
        />
        {/*
         * These routes are required so one can navigate from the special page
         * article list to article details
         */}
        <Route
          name="articleAr"
          pattern={
            /^\/(?<locale>ar)\/أخبار\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>([0-9]{10}|[0-9]{6}-[0-9]{6}|artc-).*)\/?$/
          }
          component={Article}
        />
        <Route
          name="articleFr"
          pattern={
            /^\/(?<locale>fr)\/actu\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>([0-9]{10}|[0-9]{6}-[0-9]{6}|artc-).*)\/?$/
          }
          component={Article}
        />
        <Route
          name="articleEn"
          pattern={
            /^\/(?<locale>en)\/news\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>([0-9]{10}|[0-9]{6}-[0-9]{6}|artc-).*)\/?$/
          }
          component={Article}
        />
        <Route
          name="articleHe"
          pattern={
            /^\/(?<locale>he)\/news\/(?<rootCategory>[^/]+)\/((?<subCategory>[^/]+)\/)?(?<article>([0-9]{10}|[0-9]{6}-[0-9]{6}|artc-).*)\/?$/
          }
          component={Article}
        />
      </ErrorBoundary>
    </div>
  </div>
);

// App :: React.Props -> React.Component
export default ({ store, location, onMount = () => {} }) => {
  useEffect(() => {
    onMount();

    return () => {};
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router location={location}>
          {isWebView(location) ? <WebviewTree /> : <AppTree />}
        </Router>
      </Provider>
    </React.StrictMode>
  );
};
