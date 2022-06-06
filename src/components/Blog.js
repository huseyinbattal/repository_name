import React, { Component } from "react";
import BlogItem from "./BlogItem";
import PTSample from "./PTSample";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  render() {
    let name = "Tommy";
    let age = 27;
    let person={id:1,username:"Ema"}
    return (
      <div
        style={{ border: "1px solid yellow", margin: "10px", padding: "10px" }}
      >
        Blog JS
        {/* <BlogItem desc="Blog One Description" />
        <BlogItem name="Name props" />
        <BlogItem name="Name props 3" desc="Blog Three Description" /> */}
        {/* {blogInfos.map((item, i) =>
          console.log("DATA::", item.textHead, "index:", i)
        )} */}
        {/* <BlogItem count={0} head="Head" desc="Desc" /> */}
        <PTSample user={person} name={name} age={age} />
        {this.props.data.map((item, i) => (
          <div key={i}>
            <BlogItem
              key={i}
              count={i}
              head={item.textHead}
              desc={item.textDesc}
            />
            <h4>Looping</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
