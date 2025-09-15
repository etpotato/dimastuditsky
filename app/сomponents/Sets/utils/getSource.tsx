type SourceType = 
    'soundcloud.com' 
    | 'www.youtube.com' 
    | 'open.spotify.com' 
    | 'music.yandex.ru'

type ReturnType = 'soundcloud' | 'youtube' | 'spotify' | 'yandex';


const sources = {
    'soundcloud.com': 'soundcloud',
    'www.youtube.com': 'youtube',
    'open.spotify.com': 'spotify',
    'music.yandex.ru': 'yandex',
} as const

export function getSource(url: string): ReturnType {
    const source = new URL(url).hostname as SourceType;
    return sources[source]
}