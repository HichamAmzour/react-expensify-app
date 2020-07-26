import React from 'react';
import ReactDom from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>This is Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrapedComponent)=>{
    return (props)=>(
        <div>
            { props.isAdmin && <p>You are the admin !!</p>}
            <WrapedComponent {...props} />
        </div>
    );
};

const requireAuthantication=(WrapedComponent)=>{
    return (props) => (
        <div>
            {props.isAuth && <WrapedComponent {...props}/>}
            {props.isAuth ? <p>You are authanticated</p> : <p>You are not authanticated</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthantication(Info);

ReactDom.render(<AuthInfo isAuth={true} info="there is my info details"/>, document.getElementById("app"));