import { NewObj } from "@core-shared/express/types";

export declare interface IComicArc {
    id: string;
    name: string;
    url: string | null;
    parentId: string | null;
    sortOrder: number;
    enabled: boolean;
    thumbnailUrl: string | null;
    bannerUrl: string | null;
    summary: string | null;
}

export type NewComicArc = NewObj<IComicArc>;
