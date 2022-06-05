import React, { Component } from "react";
import BlogItem from "./BlogItem";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  render() {
    return (
      <div>
        Blog JS
        <BlogItem />
        <BlogItem />
            <BlogItem />
            <div>Test 1</div>
            <div>Test 2</div>
            <div>Test 3</div>
            <div>Test 4</div>

      </div>
    );
  }
}

export default Blog;
