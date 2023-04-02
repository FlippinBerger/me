export interface BlogPost {
    id: number;
    title: string;
    mdContent: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Hello World",
        mdContent: "What a greeting that was"
    },
    {
        id: 2,
        title: "Birds",
        mdContent: "There are so many different types of birds"
    }
];