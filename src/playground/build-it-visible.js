class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    };
  }
  handleToggleVisibility(){
    this.setState((ps)=>{
      return {
        visible: !ps.visible
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details': 'Show details'}</button>
        {this.state.visible && <p>Here are the details hidden</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));

// let details = false;

// const toggleDetails = () => {
//   details = !details;
//   render();
// };


// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility app</h1>
//       <button onClick={toggleDetails}>
//         {details ? 'Hide details' : 'Show details'}
//       </button>
//       {details && <p>Details are shown here</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById("app"));
// }

// render();
