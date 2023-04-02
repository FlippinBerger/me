import { useNavigate } from 'react-router-dom';
import {css} from '@emotion/react';

import {BlogPost} from './types';
import { BlogPostCard } from './BlogPostCard';

interface ListProps {
    blogPosts: BlogPost[];
}

export const BlogList = (props: ListProps) => {
    const navigate = useNavigate();

    const openBlogPost = (post: BlogPost) => {
        navigate('/blogPost/' + post.id);
    };

    return (
        <ul css={list}>
            {props.blogPosts.map((post) => {
                return (
                    <li css={listItem} onClick={() => openBlogPost(post)}>
                        <BlogPostCard blogPost={post}/>
                    </li>
                )
            })}
        </ul>
    )
}

const list = css({
    listStyleType: 'none',
});

const listItem = css({
    padding: '8px 0',
    '&:hover': {
        cursor: 'pointer',
    },
});

