
const mapSetRu: Record<string, string> = {
    'one': 'сет',
    'few': 'сета',
    'many': 'сетов',
}

const mapSetEn: Record<string, string> = {
    'one': 'set',
    'other': 'sets'
}


export function getPluralSet(count: number, local: 'ru-RU' | 'en-EN'): string {
    const rules = new Intl.PluralRules(local)
    const  select = rules.select(count)

    return local === 'ru-RU' ? mapSetRu[select] : mapSetEn[select]
}

