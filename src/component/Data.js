import React from "react";

class Data extends React.Component{
render(){
    return(
        <>
           <div id="outercontainer">
          {this.props.value.map((item, index) => {
            return (
              <div key={index} id="list">
                <h3 id="h1">
                  Name: {item.name}||Department: {item.Department}||Rating:{" "}
                  {item.Rating}
                </h3>
              </div>
            );
          })}
        </div>

        <button onClick={this.props.value2}>Go Back</button>
        </>
    )
}
}


export default Data