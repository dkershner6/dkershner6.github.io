import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import posts from "./Posts";
import HelmetHead from "../../components/Seo";

import Error from "../../Error";
import BaseProps from "../../interfaces/BaseProps";

interface MatchParams {
  handle: string;
}

class PostPage extends React.Component<BaseProps<MatchParams>> {
  state = {
    post: {},
    content: "Loading..."
  };

  componentDidMount() {
    this.getContent();
  }

  getContent = async () => {
    try {
      let post = this.getPostData(this.props.match.params.handle);
      let response = await fetch(post.content);
      let data = await response.text();

      this.setState({
        post: post,
        content: data.replace(/\\\$/g, "$") // Prettier problems.
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
      <React.Fragment>
        <HelmetHead title={`${post.title} | DKershner.com`} />
        <Jumbotron fluid className="bg-primary text-light">
          <Container>
            <h1>{post.title}</h1>
            <h5>{post.subtitle}</h5>
            <h6>
              {post.date}
              {post.author !== undefined ? ` by ${post.author}` : ""}
            </h6>
          </Container>
        </Jumbotron>
        <Container className="mt-5">
          <Row>
            <Col>
              <ReactMarkdown source={this.state.content} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default PostPage;
