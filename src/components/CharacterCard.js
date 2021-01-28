import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

const characterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`} className="link-card">
      <article className="card">
        <img
          src={props.img}
          alt={"Picture " + props.name}
          className="card__img"
        />
        <h5 className="card__title">{props.name}</h5>
        <p className="card__type">{props.species}</p>
      </article>
    </Link>
  );
};

characterCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

characterCard.defaultProps = {
  name: "Rick and Morty character",
  species: "Undefined species",
  img: "Image not found",
};

export default characterCard;
