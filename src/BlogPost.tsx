import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {css} from '@emotion/react';

import {BlogPost as Post, blogPosts} from './types';

export const BlogPost = () => {
    const {blogID} = useParams<'blogID'>();
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        setPost(blogPosts[parseInt(blogID!)-1]);
    }, []);

    return (
        <div css={pageWrapper}>
            {!!post && (
                <div css={content}>
                    <h1>{post.title}</h1>
                    <p>{post.mdContent}</p>
                </div>
            )}
        </div>
    )
}

const pageWrapper = css({
    padding: '48px 0 0 32px',
    width: '100vw',
    height: '100vh',
});

const content = css({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    margin: 'auto',
});