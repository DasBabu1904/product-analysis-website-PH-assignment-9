import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h1>What is context API?</h1>
            <p>
                When we want to use some data in nested levels of component then we mainly use Context API. In normal situation we need to pass down the data form one level to the child component using props and to use it need to destructuring. It is very time consuming and difficult to maintain in multilevel nested props passing. Here comes the solution of context api. By using createContext and  contextProvider we can get data in child levels without using props.
            </p>
            <h1>What is semantic Tag? </h1>
            <p>
                Semantic tags are tag that have the same name meaning and content they contains. For example, Header tag contains the header of the page, main tag contains most of the content of the page, footer contains the footer of the page, blog and article contains descriptive contents.
            </p>
            <h1>What is Inline Block Element?</h1>
            <p>
                A block element always starts on a new line, and fills up the horizontal space left and right on the web page.Example: div and p. Inline elements don`t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are span , strong, and img tags.Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. We have to declare display: inline-block in our CSS code.
            </p>
        </div>
    );
};

export default Blogs;