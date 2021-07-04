export interface MainItem {
    id: number;
    name: string;
    content: string;
    author: string;
    date: string | undefined;
    images: any | undefined;
    comments: any | undefined;
    hidden ?: boolean | true;
}