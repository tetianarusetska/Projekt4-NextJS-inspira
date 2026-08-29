import { getObjects } from "./getObjects";
import { slugify } from "@/app/utils/slugify";

export async function getObject(userId: string, collectionId: string, slug: string) {

    const objects = await getObjects(userId, collectionId);
    return objects.find((obj) => slugify(obj.title) === slug) ?? null;
    
}