import "./SpecialPageBanner.scss";
import { T, cond } from "ramda";
import ExternalLink from "../../../components/Routing/ExternalLink";
import ImageCoverRendition from "../../Image/Rendition/Cover";
import Link from "../../../components/Routing/Link";
import React from "react";
import translate from "../../../utilities/translate";
import translations from "./translations";
import {
  HomepageSpecialPageDesktopAdvert,
  HomepageSpecialPageMobileAdvert,
} from "../../../components/Adverts";

// trans :: String -> String -> String
const trans = translate(translations);

// ContentListBanner :: Props -> React.Component
const ContentListBanner = ({
  bannerImage,
  bannerAlternateText,
  openInNewPage,
  locale,
  slug,
}) =>
  openInNewPage ? (
    <ExternalLink
      title={trans(locale)("link.label")}
      href={`/${locale}/${trans(locale)("link.href")}/${slug}`}
      variant="block"
    >
      <div data-is="special-banner">
        <div className="special-banner-wrapper">
          <ImageCoverRendition
            src={bannerImage.href}
            alt={bannerAlternateText ?? ""}
          />
        </div>
      </div>
    </ExternalLink>
  ) : (
    <Link
      title={trans(locale)("link.label")}
      href={`/${locale}/${trans(locale)("link.href")}/${slug}`}
      variant="block"
    >
      <div data-is="special-banner">
        <div className="special-banner-wrapper">
          <ImageCoverRendition
            src={bannerImage.href}
            alt={bannerAlternateText ?? ""}
          />
        </div>
      </div>
    </Link>
  );

// ExternalBanner :: Props -> React.Component
const ExternalBanner = ({
  bannerImage,
  bannerAlternateText,
  externalUrl,
  openInNewPage,
  locale,
}) => (
  <ExternalLink
    title={trans(locale)("link.label")}
    href={externalUrl}
    openInNewPage={openInNewPage}
    variant="block"
  >
    <div data-is="special-banner">
      <div className="special-banner-wrapper">
        <ImageCoverRendition
          src={bannerImage.href}
          alt={bannerAlternateText ?? ""}
        />
      </div>
    </div>
  </ExternalLink>
);

// AdsBanner :: Props -> React.Component
const AdsBanner = () => (
  <div data-is="special-banner-ads">
    <HomepageSpecialPageDesktopAdvert />
    <HomepageSpecialPageMobileAdvert />
  </div>
);

// SpecialPageBanner :: Props -> React.Component
const SpecialPageBanner = cond([
  [
    ({ isFetching }) => isFetching,
    () => <div data-is="special-banner-placeholder" />,
  ],
  [
    ({ specialPage }) => specialPage && "content-list" === specialPage.type,
    ({ locale, specialPage }) => (
      <ContentListBanner
        locale={locale}
        slug={specialPage.slug}
        bannerImage={specialPage.bannerImage}
        bannerAlternateText={specialPage.imageAlternateText}
        openInNewPage={specialPage.openInNewPage}
      />
    ),
  ],
  [
    ({ specialPage }) => specialPage && "external" === specialPage.type,
    ({ locale, specialPage }) => (
      <ExternalBanner
        locale={locale}
        externalUrl={specialPage.externalUrl}
        bannerImage={specialPage.bannerImage}
        bannerAlternateText={specialPage.imageAlternateText}
        openInNewPage={specialPage.openInNewPage}
      />
    ),
  ],
  [T, () => <AdsBanner />],
]);

export default SpecialPageBanner;
