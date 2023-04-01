import {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import {BlogPost, blogPosts as bps} from './types';
import { BlogList } from './BlogList';

export const BlogWrapper = () => {
    // TODO change this out for react-query fetcher eventually
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        setBlogPosts(bps);
    }, []);

    return (
        <div css={pageWrapper}>
            <div css={content}>
            <h1 css={text}>Welcome to Don't Mind Me.</h1>
            <h3>This is a place for me to explore tech, my hobbies, and just about anything that comes to mind.</h3>
            {blogPosts.length <= 0 && <h2>There are currently no blog posts. Check back soon!</h2>}
            {blogPosts.length > 0 && 
                <BlogList blogPosts={blogPosts}/>
            }
            </div>
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

const text = css({
    margin: 'auto',
})