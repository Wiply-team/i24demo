import { ArticleCoverAfterMobileAdvert } from "../../Adverts";
import Author from "../../../legacy_components/Article/Author";
import LazyComponent from "../../LazyComponent";
import ShareBar from "../Sharing/ShareBar";
import styles from "./Cover.module.css";
import React from "react";

const ImageCover = LazyComponent("ImageCover");
const VideoCover = LazyComponent("ArticleVideoCover");

// Cover :: Props -> React.Component
export default ({ locale, image, title, videoCover, excerpt }) => (
  <section className={`${styles.wrapper}`} data-is="article-cover">
    <div className="container container-page">
      <h1>{title}</h1>
    </div>
    <div className="container container-page">
      <p className={`${styles["content-excerpt"]} excerpt`}>{excerpt}</p>
      <Author />
      {videoCover ? (
        <VideoCover
          videoId={videoCover.id}
          caption={videoCover.description}
          credit={videoCover.credit}
          locale={locale}
        />
      ) : image ? (
        <ImageCover {...image} />
      ) : null}
    </div>
    <div className="container container-page">
      <div className="show-lg">
        <ShareBar />
      </div>
      <ArticleCoverAfterMobileAdvert />
    </div>
  </section>
);
