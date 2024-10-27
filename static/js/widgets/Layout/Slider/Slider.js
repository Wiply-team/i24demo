import React from "react";
import styles from "./Slider.module.css";
import { pipe, tap } from "ramda";
import PropTypes from "prop-types";
import Button from "../../Button/Base";
import ArrowIcon from "../../../legacy_components/Icons/ArrowIcon";

const Slider = ({
  activeSlideIndex,
  focusedSlideIndex,
  onNext,
  onNextLabel,
  onPrevious,
  onPreviousLabel,
  children,
}) => {
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);

  // onStart :: Number -> _
  const onStart = setStart;

  // onMove :: Number -> _
  const onMove = setEnd;

  // onEnd :: () -> _
  const onEnd = () => {
    if (start !== null && end !== null) {
      const diff = start - end;
      const deadzone_threshold = 30;

      if (diff < -deadzone_threshold) {
        onPrevious();
      } else if (diff > deadzone_threshold) {
        onNext();
      }

      setStart(null);
      setEnd(null);
    }
  };

  // onTouchStart :: Event -> _
  const onTouchStart = (event) => onStart(event.targetTouches[0].clientX);

  // onTouchMove :: Event -> _
  const onTouchMove = (event) => onMove(event.targetTouches[0].clientX);

  // onTouchEnd :: () -> _
  const onTouchEnd = onEnd;

  // onMouseDown :: Event -> _
  const onMouseDown = pipe(
    tap((event) => event.preventDefault()),
    (event) => onStart(event.clientX)
  );

  // onMouseMove :: Event -> _
  const onMouseMove = pipe(
    tap((event) => event.preventDefault()),
    (event) => onMove(event.clientX)
  );

  // onMouseUp :: Event -> _
  const onMouseUp = pipe((event) => event.preventDefault(), onEnd);

  // onMouseLeave :: Event -> _
  const onMouseLeave = pipe((event) => event.preventDefault(), onEnd);

  return (
    <div className={styles.wrapper}>
      <div className={styles["button-previous"]}>
        <Button onClick={onPrevious} aria-label={onPreviousLabel}>
          <ArrowIcon width={20} height={20} />
        </Button>
      </div>
      <div className={styles["slider-wrapper"]}>
        <div
          role="presentation"
          className={`${styles.slider} ${
            styles[`active-${activeSlideIndex}`]
          } ${styles[`focused-${focusedSlideIndex}`]}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </div>
      </div>
      <div className={styles["button-next"]}>
        <Button onClick={onNext} aria-label={onNextLabel}>
          <ArrowIcon width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

const Slide = ({ children }) => <div className={styles.slide}>{children}</div>;

Slider.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  focusedSlideIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onNextLabel: PropTypes.string.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onPreviousLabel: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    if (props[propName] instanceof Array) {
      if (props[propName].length > 12) {
        return new Error(
          `Maximum children length exceeded for '${componentName}'. Expected maximum 12 children.`
        );
      }
    }

    return PropTypes.checkPropTypes(
      {
        children: PropTypes.oneOfType([
          PropTypes.oneOfType([
            PropTypes.shape({
              type: PropTypes.oneOf([Slide]),
            }),
          ]),
          PropTypes.arrayOf(
            PropTypes.oneOfType([
              PropTypes.shape({
                type: PropTypes.oneOf([Slide]),
              }),
            ])
          ),
        ]).isRequired,
      },
      { children: props.children },
      "prop",
      componentName
    );
  },
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
};

Slider.Slide = Slide;

export default Slider;
