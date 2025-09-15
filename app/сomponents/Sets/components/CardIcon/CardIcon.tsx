import { IconSoundcloud, IconSpotify, IconYandexmusic, IconYoutube } from "~/assets"

interface Props {
    source: 'soundcloud' | 'youtube' | 'spotify' | 'yandex';
}

const sourceIcons = {
    'soundcloud': <IconSoundcloud />,
    'youtube': <IconYoutube />,
    'spotify': <IconSpotify />,
    'yandex': <IconYandexmusic />,
}

export function CardIcon({source}: Props) {
    return sourceIcons[source]
}