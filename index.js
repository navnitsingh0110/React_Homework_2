const container = document.querySelector("#root");

const headingDiv = React.createElement("div", {class: "headingDiv"}, [React.createElement("h1", null, "Topics covered"), React.createElement("p", null, "The following is a list of all the topics we cover in the MDN learning area.")]);

const div1 = React.createElement("div", {class: "div1"}, [React.createElement("a", {href: "https://udn.realityripple.com/docs/Learn/Getting_started_with_the_web"}, "Getting started with the web"), React.createElement("p", null, "Provides a practical introduction to web development for complete beginners.")]);

const div2 = React.createElement("div", {class: "div2"}, [React.createElement("a", {href: "https://udn.realityripple.com/docs/Learn/HTML"}, "HTML — Structuring the web"), React.createElement("p", null, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")]);

const div3 = React.createElement("div", {class: "div3"}, [React.createElement("a", {href: "https://udn.realityripple.com/docs/Learn/CSS"}, "CSS — Styling the web"), React.createElement("p", null, "CSS is the language that we can use to style and layout our web content, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")]);

ReactDOM.render([headingDiv, div1, div2, div3], container);