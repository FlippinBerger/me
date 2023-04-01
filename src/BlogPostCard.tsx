import {Card} from '@mui/material';
import {css} from '@emotion/react';

import {BlogPost} from './types';

interface CardProps {
    blogPost: BlogPost;
}

export const BlogPostCard = (props: CardProps) => {
    return (
        <Card variant="outlined" css={card}>
            {/* <div css={cardInnards}> */}
                <h3 css={title}>{props.blogPost.title}</h3>
                <p css={title}>{props.blogPost.mdContent}</p>
            {/* </div> */}
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

const title = css({
    margin: 'auto',
});

const listItem = css({
    padding: '8px 0',
    '&:hover': {
        cursor: 'pointer',
    },
});

