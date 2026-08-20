import { Collection } from "./Collection";
import { StoredObject } from "./StoredObject";

export interface CollectionContentProps {
    collection: Collection;
    objects: StoredObject[];
}