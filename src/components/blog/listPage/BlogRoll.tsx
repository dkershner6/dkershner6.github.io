import React, { ReactElement } from 'react';

import { Row } from 'react-bootstrap';

import BlogRollPost from './BlogRollPost';
import { IBlogRollPost } from './IBlogRollPost';

interface IBlogRoll {
    posts: IBlogRollPost[];
}

const BlogRoll = ({ posts }: IBlogRoll): ReactElement => {
    return (
        <Row className="mt-3">
            {posts &&
                posts.map((post) => <BlogRollPost key={post.id} post={post} />)}
        </Row>
    );
};

export default BlogRoll;
