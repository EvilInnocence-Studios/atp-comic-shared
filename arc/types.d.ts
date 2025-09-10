import { NewObj } from "@core-shared/express/types";

export declare interface IComicArc {
    id: string;
    name: string;
    url: string;
    parentId?: number;
    sortOrder: number;
    enabled: boolean;
    thumbnailUrl?: string;
    bannerUrl?: string;
    summary?: string;
}

export type NewComicArc = NewObj<IComicArc>;
