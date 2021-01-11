import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images : []};

    onSearchSubmit =async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params:{
                query: term
            }
        });
        //get Response when the request is  confirmed
        // .then((response)=>{
        //     console.log(response.data.results);
        // });
        this.setState({images : response.data.results});
        //console.log(response.data.results);
    }

    render(){
        return (
            <div className="ui container" style ={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images ={this.state.images}/>
            </div>
        );
    }
}

export default App;