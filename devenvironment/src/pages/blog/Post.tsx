import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import posts from "./Posts";
import HelmetHead from "../../components/Seo";

import Error from "../../Error";
import BaseProps from "../../interfaces/BaseProps";

interface MatchParams {
  handle: string;
}

class Post extends React.Component<BaseProps<MatchParams>> {
  state = {
    content: "Loading..."
  };

  componentDidMount() {
    this.getContent();
  }

  getContent = async () => {
    try {
      var response = await fetch(
        `/posts/${this.props.match.params.handle}.html`
      );
      var data = await response.text();

      this.setState({
        content: data
      });
    } catch {
      console.error("Error in fetching article, please reload.");
    }
  };

  getPostData = handle => {
    return posts[posts.findIndex(post => post.handle === handle)];
  };

  render() {
    const post = this.getPostData(this.props.match.params.handle);

    if (post === undefined) {
      return <Error />;
    }
    return (
      <Container>
        <HelmetHead title={`${post.title} | DKershner.com`} />
        <div className="page-header" style={{ padding: 40 }}>
          <h1>{post.title}</h1>
          <h5>{post.subtitle}</h5>
          <h6>
            {post.date}
            {post.author !== undefined ? ` by ${post.author}` : ""}
          </h6>
        </div>
        <Jumbotron dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </Container>
    );
  }
}

export default Post;
