import { NewObj } from "@core-shared/express/types";

export declare interface IComicPage {
    id: string;
    name: string;
    url: string;
    arcId: string;
    sortOrder: number;
    imageUrl?: string;
    transcript?: string;
    enabled: boolean;
    postDate?: string;
    characters?: IComicPageCharacter[];
    commentary?: IComicPageCommentary[];
}

export type NewComicPage = NewObj<IComicPage>;

export declare interface IComicPageCharacter {
    id: string;
    pageId: string;
    characterId: string;
}

export type NewComicPageCharacter = NewObj<IComicPageCharacter>;

export declare interface IComicPageCommentary {
    id: string;
    pageId: string;
    userId: string;
    title?: string;
    text: string;
    sortOrder: number;
}

export type NewComicPageCommentary = NewObj<IComicPageCommentary>;
