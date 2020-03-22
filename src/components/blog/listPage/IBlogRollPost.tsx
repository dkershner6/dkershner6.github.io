export interface IBlogRollPost {
    id: string;
    templateKey: string;
    title: string;
    date: string;
    description: string;
    featuredpost: boolean;
    featuredimage: string;
    tags: string[];
    preview: string;
    dir: string;
    base: string;
    ext: string;
    sourceBase: string;
    sourceExt: string;
}
