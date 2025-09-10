import { NewObj } from "@core-shared/express/types";

export declare interface IComicCharacter {
    id: string;
    name: string;
    imageUrl?: string;
    sortOrder: number;
    bio?: string;
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