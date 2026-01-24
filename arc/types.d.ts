import { NewObj } from "@core-shared/express/types";

export declare interface IComicArc {
    id: string;
    name: string;
    url: string | null;
    parentId: string | null;
    sortOrder: number;
    enabled: boolean;
    isVerticalScroll: boolean;
    thumbnailUrl: string | null;
    bannerUrl: string | null;
    summary: string | null;
    transcript: string;
}

export type NewComicArc = NewObj<IComicArc>;
