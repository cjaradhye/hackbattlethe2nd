function Node(props) {
  console.log(props);
  return (
    <div className="mynode" id={props.index}>
      <h3>{props.name}</h3>
      {/* <img src={props.link}></img> */}
    </div>
  );
}

export default Node;
