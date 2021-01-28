import "../stylesheets/Filters.scss";

const filter = (props) => {
  // Lifting input
  const handleInput = (ev) => {
    props.handleInputChange(ev.target.value);
  };
  // Prevent submit form
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.preventDefault(), "default");
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="filter">Find your favorites!</label>
      <input
        type="text"
        name="text"
        id="filter"
        onChange={handleInput}
        value={props.textInput}
        className="form__input iconSearch "
        placeholder="Enter your search"
      />
    </form>
  );
};
export default filter;
