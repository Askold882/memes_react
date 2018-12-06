import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class AddAvatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	avatar: null
    }
  }

  avatar(e) {
    var avatar = URL.createObjectURL(e.target.files[0])
    this.setState({avatar: avatar});
    
  }

  render() {
    return (
      <div>
        <input type='file' onChange={this.avatar.bind(this)}/>
        {this.state.avatar && 
          <img src={this.state.avatar} style={{width: '100px', height: '100px'}} alt='avatar' />
        }
      </div>
    )
  }
}

ReactDOM.render(<AddAvatar />, document.getElementById("root"))
export default AddAvatar;