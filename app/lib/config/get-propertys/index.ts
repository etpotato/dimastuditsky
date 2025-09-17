import type { TrackList, GetPropertiesReturnType } from "~/types";

export function getProperties(list: TrackList): GetPropertiesReturnType {
    const properties: Record<string, TrackList> = {
    }
    const yearsList = new Set<string>();

    list.forEach((track) => {
        const trackDate = new Date(Array.isArray(track) ? track[0].created_at : track.created_at)
        const year = trackDate.getFullYear();
        yearsList.add(year.toString());

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

