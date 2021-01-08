import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './commentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    
    return (
        <div className="ui contaier comments">
            <ApprovalCard>
                <CommentDetails author ="Habib" date="Today at 5pm" comment="joss ta posta" avatar = {faker.image.image()}/>       
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author ="Nur" date="Today at 6pm" comment="joss" avatar = {faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));