import { objectColors } from "../data/ObjectColors";

export function getObjectColor(id: number) {
    return objectColors[id % objectColors.length];
}