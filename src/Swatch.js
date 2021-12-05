export function Swatch(props) {
    const {name, hex, remove} = props;
    const style = {
        backgroundColor: hex,
      };
    return (
      <div className="swatch" style={style}>
        <span className="name-field">{name}</span>
        <span className="hex-field">{hex}</span>
        <button
            className="delete-button"
            onClick={() => remove(name)}
        >&#x2716;</button>
      </div>
    );
  }