import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
            onVoteUp={() => props.handleVoteUpPost(post)}
            onVoteDown={() => props.handleVoteDownPost(post)}
            onEditPost={() => props.handleEditPost()}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleVoteUpPost: PropTypes.func.isRequired,
  handleVoteDownPost: PropTypes.func.isRequired,
  handleEditPost: PropTypes.func.isRequired,
};

export default PostList;
