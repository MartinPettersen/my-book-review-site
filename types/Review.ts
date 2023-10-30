import { PortableTextBlock } from "sanity";

export type Review = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    alt: string;
    artist: string;
    url: string;
    artcontent: PortableTextBlock[];
    author: string;
    content: PortableTextBlock[];
    searchTags: string[];
}