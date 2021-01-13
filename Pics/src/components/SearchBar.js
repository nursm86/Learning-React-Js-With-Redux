import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Search Image</label>
                        <input type="text" id="search" value={this.state.term} placeholder="Search" onChange={(e)=> this.setState({term : e.target.value})}/>    
                    </div> 
                </form>
            </div>
        );
    }
}

export default SearchBar;