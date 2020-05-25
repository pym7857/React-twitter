import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';

const Hashtag = ({ tag }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);

    useEffect(() => {
        dispatch({
          type: LOAD_HASHTAG_POSTS_REQUEST,     // 해당 해시태그 게시글들 가져오기 요청 
          data: tag,
        });
    }, []); // ComponentDidMount

    return (
        <div>
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    );
};

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
};

Hashtag.getInitialProps = async (context) => {
    console.log(context.query.tag);
    return { tag: context.query.tag };
};

export default Hashtag;