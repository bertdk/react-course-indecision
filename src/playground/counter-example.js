class Counter extends React.Component{
    constructor(props){
        super(props),
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const countString = localStorage.getItem('count');
        const count = parseInt(countString);
        if(!isNaN(count)){
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
        // this.setState((ps) => {
        //     return {
        //         count: ps.count + 1
        //     };
        // });
        // // this.setState({
        // //     count: 0
        // // });
        // // this.setState({
        // //     count: this.state.count + 1
        // // });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={4}/>, document.getElementById('app'));

// const user = {
//     name: 'Bert DK', 
//     age: 23, 
//     location: 'BE'
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) &&<p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// // some keywords from html have changed because they are reserved keywords in JS attributes: like class = here className
// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();