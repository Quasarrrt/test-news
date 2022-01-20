export type TCard = {
    posts:{
        items: Array< TItem>
    },
    features: [],
    translate: {
        news: string,
        news_text: string,
    },
    meta: TMeta,

};
export type TMeta={
    title: string,
    description: string,
    keywords: string,
    image: string,
}
export type TItem={
    title:string,
    slug: string,
    preview_image: {
        regular_set : Array<{ dpr: number, src: string }>,
        mobile_set : Array<{ dpr: number, src: string }>,
        color: string,
    },
    lead: string|null,
    category: {
        title: string,
        slug: string,
    }
}