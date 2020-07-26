import React from 'react';
import {Link} from 'react-router-dom';


const ExpenesItem = ( {description, notes, amount, createdAt, id} )=>(
    <div key={id}>
       <hr/>
        <h4 >Description : {description}</h4>
        <h4 >Amount      : {amount}</h4>
        <h4 >Notes       : {notes}</h4>
        <h4 >Created At  : {createdAt}</h4>
        <Link to={'/edit/'+id}>Edit</Link>
        <hr/>
    </div>
);

export default ExpenesItem;

