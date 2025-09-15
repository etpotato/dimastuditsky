import type { TrackList, GetPropertiesReturnType, SetType } from "~/types";

export function getProperties(list: TrackList): GetPropertiesReturnType {
    const properties: Record<string, SetType[]> = {
    }
    const flatList = list.flat()
    const yearsList = new Set<number>();

    flatList.forEach((track) => {
        const trackDate = new Date(track.created_at)
        const year = trackDate.getFullYear();
        const setDate = `${('0' + trackDate.getDate()).slice(-2)}.${('0' + (trackDate.getMonth() + 1)).slice(-2) }`
        
        yearsList.add(year);
        
        const set: SetType = {
            id: track.id,
            title: track.title,
            date: setDate,
            duration: track.duration,
            artwork: track.artwork_url,
            url: track.url,
        } 

        if (properties[year]) {
            properties[year].push(set)
        } else {
            properties[year] = [set]
        }
    })

    return {
        setsCount: flatList.length,
        properties: properties,
        yearsList: Array.from(yearsList)
    }
}

