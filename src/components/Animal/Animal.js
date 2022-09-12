import './Animal.css';

export default function Animal(props) {
  return (
    <div className='animal' style={{ top: props.top, left: props.left }} >
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span>{props.name}</span>
      <span>{props.says}</span>
    </div>
  );
}
