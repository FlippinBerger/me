import {css} from '@emotion/react';
import {Avatar, IconButton} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Home = () => {

    const github = () => {
        window.open("https://github.com/FlippinBerger", "_blank");
    }

    const twitter = () => {
        window.open("https://twitter.com/drchrisberger", "_blank");
    }

    const email = () => {
        window.open("mailto:flippinberger@gmail.com", "_blank");
    }

    return (
        <div css={pageWrapper}>
            <div css={content}>
                <div css={mainPageContent}>
                    <Avatar
                        src="/src/assets/me-photo.jpg"
                        sx={{height: 240, width: 240}}
                        alt="Photo of Chris">
                    </Avatar>
                    <h1>Hey, I'm Chris.</h1>
                    <h3>I'm a web developer with over 6 years of industry experience looking to branch out and make a name for myself with my own projects.</h3>
                </div>
                <div css={socials}>
                    <IconButton css={iconButton} onClick={github}>
                        <GithubIcon sx={{fontSize: 32}}/>
                    </IconButton>
                    <IconButton css={iconButton} onClick={twitter}>
                        <TwitterIcon sx={{fontSize: 32}}/>
                    </IconButton>
                    <IconButton css={iconButton} onClick={email}>
                        <EmailIcon sx={{fontSize: 32}} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

const iconButton = css({
    color: 'white',
    // height: '24px',
    // width: '24px'
})

const pageWrapper = css({
    padding: '48px 0 0 32px',
    width: '100vw',
    height: '100vh',
});

const content = css({
    gap: 128,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    margin: 'auto',
});

const mainPageContent = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
})

const socials = css({
    display: 'flex',
});