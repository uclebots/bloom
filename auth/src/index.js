import React from 'react'
import ReactDOM from 'react-dom'

class AuthApp extends React.Component {  
    render() {  
        return <div>Username <a href="#">Sign out</a></div>
    }  
}

ReactDOM.render(  
    <AuthApp />,   
    document.getElementById("appcontainer")  
);