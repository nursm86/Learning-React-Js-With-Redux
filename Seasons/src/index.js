import React from 'react';
import ReactDOM, { render } from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component{
    state = { lat : null ,errMsg: ''};

    renderContent(){
        if (this.state.errMsg && !this.state.lat) {
            return (
                <div>
                    Error : {this.state.errMsg}
                </div>
            );
        } 
        else if(!this.state.errMsg && this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }
        else{
            return (
                <Loading text="Waiting for User's Response"/>
            );
        }
    }
    //React Says we have to define render!!
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            //we called setState!!!
            //we cannot set it as a variable
            position => {
                this.setState({ lat : position.coords.latitude });
            },
            err => {
              this.setState({errMsg : err.message});  
            }
        );
    }
};

ReactDOM.render(<App/>, document.querySelector('#root'));