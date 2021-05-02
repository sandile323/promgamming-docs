const NewInput = ({handleChange, handleChange1, handleChange2}) => <div>
        <input type="text" onChange={handleChange} />

        <input type="text" onChange={handleChange1} />

         <input type="text"  onChange={() => handleChange2()} />
</div>

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line

    this.moreChange = () => console.log
  }
  // change code below this line
  handleChange(event) {
    this.setState({
        input: event.target.value
    })

    console.log(this)
  }
  // change code above this line


  handleChange1(){
    console.log(this)
  }

  render() {
    return (
      <div>
        { /* change code below this line */}
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>


        <NewInput
         handleChange={this.handleChange}
         handleChange1={this.handleChange1}
         handleChange2={() => console.log(this)}
         />

      </div>
    );
  }
};