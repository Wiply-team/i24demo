import Loader from "../../widgets/Generic/Loader";
import React from "react";
import { map } from "ramda";
import { getPageNumbers } from "../../store/modules/pagination";
import Toast from "../Toastr/Toast";
import translate from "../../utilities/translate";
import translations from "./translations";
import EmptyList from "../../widgets/Generic/EmptyList";

// trans :: String -> String -> String
const trans = translate(translations);

// Pagination :: Props -> React.Component
export default ({
  isEmptyContent,
  isFetchingPrevPage,
  isFetchingNextPage,
  renderPage,
  pages = [],
  error,
  locale,
}) =>
  isEmptyContent ? (
    <EmptyList>{trans(locale)("empty")}</EmptyList>
  ) : (
    <>
      {error ? <Toast message={trans(locale)("error")} level="error" /> : null}

      <div className="loader-placeholder" id="loader-placeholder-prev">
        {isFetchingPrevPage ? <Loader /> : null}
      </div>

      {map((page) => (
        <div id={`page-${page}`} key={page} data-page={page}>
          {renderPage(page)}
        </div>
      ))(getPageNumbers(pages))}

      <div className="loader-placeholder" id="loader-placeholder-next">
        {isFetchingNextPage ? <Loader /> : null}
      </div>
    </>
  );
