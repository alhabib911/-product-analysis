import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="ques-ans">
            <div className="ques-1">
                <h3>What is context API?</h3>
                <p>In react while passing different data, we have to drill through all the parent components to send the data to the child component. The context API can be used to solve this issue. We can just call the in the top most parent container and then  the data can be sent to lower child components using context API. We create a context in the  parent component and can excess it in the child components without props drilling by using context provider.</p>
            </div>
            <div className="ques-2">
                <h3>What are inline, block and inline block elements in html?</h3>
                <p>Inline elements  do not create a new line. Exemples are:a button, span tags etc. Block elements take their space when made. Exemples are:div.p. header tag etc . But line- block elements are those which remain inline with the texts around it but appears  as inline element. Examples can be: abbr, button code tags etc.</p>
            </div>
            <div className="ques-3">
                <h3>What are semantic tags? </h3>
                <p>Semantic tags are introduced in HTML5.  The word semantic means those who describe themselves. So the semantic tags are those which have their own definition and usage according to their  name.  Examples are : header, footer,  nav, blockquote etc. By the name of this tags we can understand the purpose of using  these instead of using divs for all purpose.</p>
            </div>
        </div>
    );
};

export default Blogs;