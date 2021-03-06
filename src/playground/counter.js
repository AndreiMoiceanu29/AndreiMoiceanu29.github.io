/*let count=0;
const addOne =()=>{
    count++;
   
    renderCouterApp();
}
const minusOne =()=>{
    count--;
    renderCouterApp();
}
const reset =()=>{
    count=0;
    renderCouterApp();
}




const renderCouterApp =()=>{
    const templateTwo=(
        <div>
        <h1>Count :{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
       );
       ReactDOM.render(templateTwo, appRoot);
}*/

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={count:props.count}
    }
    componentDidMount(){
        const num=parseInt(localStorage.getItem('count'))
        if(num)
        {
            this.setState(()=>({count:num}))
        }
    }
    componentDidUpdate(){
        localStorage.setItem('count',this.state.count)
    }
    handleAddOne(){
        this.setState((prevState)=>{
         return{
             count:prevState.count+1
         }
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
           })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }
           })
    }
    render()
    {
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }

}
Counter.defaultProps={
    count:0
}
ReactDOM.render(<Counter/>,document.getElementById('app'))