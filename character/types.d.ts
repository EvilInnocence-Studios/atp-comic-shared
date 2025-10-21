import { NewObj } from "@core-shared/express/types";

export declare interface IComicCharacter {
    id: string;
    name: string;
    imageUrl: string | null;
    thumbnailUrl: string | null;
    enabled: boolean;
    sortOrder: number;
    bio: string | null;
    attributes?: ICharacterAttribute[];
}

export type NewComicCharacter = NewObj<IComicCharacter>;

export declare interface ICharacterAttribute {
    id: string;
    characterId: string;
    name: string;
    value: string;
    sortOrder: number;
}

export type NewCharacterAttribute = NewObj<ICharacterAttribute>;

export declare interface ICharacterMedia {
    id: string;
    characterId: string;
    url: string;
    caption: string;
    order: number;
}
