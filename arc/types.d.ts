import { NewObj } from "@core-shared/express/types";

export declare interface IComicArc {
    id: string;
    name: string;
    url: string;
    parentId?: number;
    sortOrder: number;
    enabled: boolean;
    thumbnailUrl: string | null;
    bannerUrl: string | null;
    summary?: string;
}

export type NewComicArc = NewObj<IComicArc>;
