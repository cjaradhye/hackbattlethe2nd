function Node(props) {
  console.log(props);
  return (
    <div className="mynode" id={props.index} name={props.name}>
      
      <div className="label">{"#" + (props.index + 1)}</div>
      {/* <img src={props.link}></img> */}
    </div>
  );
}

export default Node;
