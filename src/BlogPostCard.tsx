import {Card} from '@mui/material';
import {css} from '@emotion/react';

import {BlogPost} from './types';

interface CardProps {
    blogPost: BlogPost;
}

export const BlogPostCard = (props: CardProps) => {
    return (
        <Card variant="outlined" css={card}>
            <h3 css={text}>{props.blogPost.title}</h3>
            <p css={text}>{props.blogPost.mdContent}</p>
        </Card>
    );
}

const card = css({
    padding: '16px',
});

const cardInnards = css({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
});

const text = css({
    margin: 'auto',
});

const listItem = css({
    padding: '8px 0',
    '&:hover': {
        cursor: 'pointer',
    },
});

