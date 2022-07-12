import React from 'react';

class AddContact extends React.Component{
    state = {
        name: '',
        email: '',
    }

    add = (e) => {
        e.preventDefault();
        //Check if either of the input fields is empty
        if(this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        //clear fields after name is added
        this.setState({name: "", email: ""})
    }

    render() {
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text"
                        name='email' 
                        placeholder='Name' 
                        value={this.state.name}
                        onChange={(e)=> this.setState({name: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email" 
                        name='email' 
                        placeholder='Email'
                        value={this.state.email}
                        onChange={(e)=> this.setState({email: e.target.value})}/>
                    </div>
                    <button className='ui button blue' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;