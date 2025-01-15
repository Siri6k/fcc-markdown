import React from "react";
import { markdown } from "./constants";
/*import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";*/
import { marked } from "marked";
import fccLogo from "./assets/fcc_secondary_small.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <div className="d-flex flex-column min-vh-100 min-vw-100 align-items-center justify-content-center">
        <div className="container d-flex flex-column text-area">
          <label className="label" htmlFor="editor">
            Editor
          </label>
          <textarea
            name="editor"
            value={this.state.markdown}
            id="editor"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="container d-flex flex-column preview-area">
          <p className="label">
            <img src={fccLogo} alt="freeCodeCamp Logo" />
            Preview
          </p>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          ></div>
        </div>
      </div>
    );
  }
}
