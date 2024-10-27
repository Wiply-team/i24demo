import "./Card.scss";
import React from "react";
import PropTypes from "prop-types";
import ListImage from "../../../legacy_components/Image/Rendition/List";
import MediaContainer from "../../../widgets/Layout/MediaContainer";
import { isEmpty, isNil } from "ramda";

const Card = ({ person }) => (
  <div className="missing-person-card">
    <div className="missing-person-card-image">
      <MediaContainer variant="squared">
        <ListImage
          src={
            !isNil(person.image)
              ? person.image.href
              : "https://cdn.i24news.tv/uploads/missing/placeholder.png"
          }
          alt={person.name}
          lazy={true}
        />
      </MediaContainer>
    </div>
    <div className="missing-person-card-information">
      <div className="missing-person-card-title">
        {!isNil(person.age) ? (
          <span>
            {person.name}, {person.age}
          </span>
        ) : (
          <span>{person.name}</span>
        )}
      </div>
      {!isNil(person.location) && !isEmpty(person.location) ? (
        <div className="missing-person-card-location">{person.location}</div>
      ) : null}
      {!isNil(person.description) && !isEmpty(person.description) ? (
        <p className="missing-person-card-description">{person.description}</p>
      ) : null}
    </div>
  </div>
);

Card.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
};

// Placeholder :: () -> React.Component
const Placeholder = () => (
  <div className="missing-person-card missing-person-card-placeholder">
    <div className="missing-person-card-image">
      <MediaContainer variant="squared"></MediaContainer>
    </div>
    <div className="missing-person-card-information"></div>
  </div>
);

Card.Placeholder = Placeholder;

export default Card;
