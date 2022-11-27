//common container component
import "./Card.css";

function Card(props) {
  // props.children is to use content inside <Card/> tags
  // children is a reserved name in react
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
