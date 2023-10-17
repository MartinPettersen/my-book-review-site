import { PortableTextBlock } from "sanity";

export type Review = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    alt: string;
    url: string;
    content: PortableTextBlock[];
}