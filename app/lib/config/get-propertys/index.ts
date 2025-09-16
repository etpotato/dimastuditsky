import type { Track, TrackList, GetPropertiesReturnType, SetType } from "~/types";

export function getProperties(list: TrackList): GetPropertiesReturnType {
    const properties: Record<string, TrackList> = {
    }
    const yearsList = new Set<number>();

    list.forEach((track) => {
        const trackDate = new Date(Array.isArray(track) ? track[0].created_at : track.created_at)
        const year = trackDate.getFullYear();
        yearsList.add(year);

        if (properties[year]) {
            properties[year].push(track)
        } else {
            properties[year] = [track]
        }
    })

    return {
        properties: properties,
        yearsList: Array.from(yearsList)
    }
}

