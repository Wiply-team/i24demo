import React from "react";
import AdapexAdvert from "./Adapex/Advert";
import TaboolaProvider from "./Taboola/Provider";
import TaboolaAdvert from "./Taboola/Advert";

// Providers
export const HomepageAdvertProvider = ({ children }) => (
  <TaboolaProvider type="home">{children}</TaboolaProvider>
);

export const ArticleAdvertProvider = ({ children }) => (
  <TaboolaProvider type="article">{children}</TaboolaProvider>
);

export const ArticleListAdvertProvider = ({ children }) => (
  <TaboolaProvider type="category">{children}</TaboolaProvider>
);

// Adverts
export const StickyAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Article_Mob_300v_Sticky"
    minHeight={50}
  />
);

export const HomepageSpecialPageDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_970v_2"
    minHeight={90}
    viewport="desktop"
  />
);

export const HomepageSpecialPageMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Mob_300v_2"
    minHeight={100}
    viewport="mobile"
  />
);

export const HomepageHeadlinesHeroMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_Mob_300v_1"
    minHeight={100}
    viewport="mobile"
  />
);

export const HomepageHeadlinesAfterMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_Mob_300v_2"
    minHeight={350}
    viewport="mobile"
  />
);

export const HomepageHeadlinesAfterDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_970v_1"
    minHeight={90}
    viewport="desktop"
  />
);

export const HomepageTopArticlesAfterMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_Mob_300v_2"
    minHeight={250}
    viewport="mobile"
  />
);

export const HomepageTopArticlesAfterAdvert = () => (
  <TaboolaAdvert
    name="taboola-below-main-column-thumbnails"
    placement="Below Main Column Thumbnails"
    targetType="mix"
  />
);

export const HomepageFeaturedCategoriesBeforeMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_Mob_300v_5"
    minHeight={50}
    viewport="mobile"
  />
);

export const HomepageAsideDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_300v_1"
    minHeight={90}
    viewport="desktop"
  />
);

export const HomepageFeaturedCategoriesAsideFirstDesktopAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_Article_300v_1" viewport="desktop" />
);

export const HomepageFeaturedCategoriesAsideSecondAdvert = () => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    placement="Right Rail Thumbnails"
    targetType="mix"
  />
);

export const ArticleCoverAfterDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Article_970v_1"
    minHeight={90}
    viewport="desktop"
  />
);

export const ArticleCoverAfterMobileAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_Article_Mob_300v_1" viewport="mobile" />
);

export const ArticleBodyFirstAdvert = () => (
  <TaboolaAdvert
    name="mid-article-thumbnails"
    placement="Mid Article Thumbnails"
    targetType="mix"
  />
);

export const ArticleBodySecondMobileAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_Article_Mob_300v_2" viewport="mobile" />
);

export const ArticleBodyThirdMobileAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_Article_Mob_300v_3" viewport="mobile" />
);

export const ArticleBodyAfterAdvert = () => (
  <TaboolaAdvert
    name="taboola-below-article-thumbnails"
    placement="Below Article Thumbnails"
    targetType="mix"
  />
);

export const ArticleAsideFirstDesktopAdvert = ({ align }) => (
  <AdapexAdvert
    id="/22815767462/I24NT_Article_300v_1"
    align={align}
    minHeight={322}
    viewport="desktop"
  />
);

export const ArticleAsideSecondDesktopAdvert = ({ align }) => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    align={align}
    placement="Right Rail Thumbnails"
    targetType="mix"
    minHeight={800}
    viewport="desktop"
  />
);

export const ArticleListBannerDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_970v_1"
    minHeight={250}
    viewport="desktop"
  />
);

export const ArticleListMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_Mob_300v_1"
    minHeight={250}
    viewport="mobile"
  />
);

export const ArticleListAsideFirstAdvert = () => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    placement="Right Rail Thumbnails"
    targetType="mix"
  />
);

export const ArticleListAsideSecondDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_300v_1"
    minHeight={250}
    viewport="desktop"
  />
);

export const NewsBannerDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_970v_2"
    minHeight={250}
    viewport="desktop"
  />
);

export const NewsBannerMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_Mob_300v_8"
    minHeight={250}
    viewport="mobile"
  />
);

export const NewsAsideFirstAdvert = () => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    placement="Right Rail Thumbnails"
    targetType="mix"
  />
);

export const NewsAsideSecondDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Category_300v_1"
    minHeight={523}
    viewport="desktop"
  />
);

export const SpecialPageBannerDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_970v_1"
    minHeight={250}
    viewport="desktop"
  />
);

export const SpecialPageBannerMobileAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_Mob_300v_1"
    minHeight={50}
    viewport="mobile"
  />
);

export const SpecialPageAsideFirstDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Article_300v_1"
    minHeight={322}
    viewport="desktop"
  />
);

export const SpecialPageAsideSecondAdvert = () => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    placement="Right Rail Thumbnails"
    targetType="mix"
  />
);

export const SpecialPageAsideThirdDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_Article_300v_2"
    minHeight={523}
    viewport="desktop"
  />
);

export const RadioShowListBeforeDesktopAdvert = () => (
  <AdapexAdvert
    id="/22815767462/I24NT_HP_970v_4"
    minHeight={250}
    viewport="desktop"
  />
);

export const PageNotFoundAsideFirstDesktopAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_HP_300v_1" viewport="desktop" />
);

export const PageNotFoundAsideSecondDesktopAdvert = () => (
  <TaboolaAdvert
    name="taboola-right-rail-thumbnails"
    placement="Right Rail Thumbnails"
    targetType="mix"
    viewport="desktop"
  />
);

export const PageNotFoundAsideThirdDesktopAdvert = () => (
  <AdapexAdvert id="/22815767462/I24NT_HP_300v_2" viewport="desktop" />
);
