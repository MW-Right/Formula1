export class Race {
    id: string;
    round: number;
    name: string;
    country: string;
    city: string;
    flag: string;
    date: Date;

    constructor(id?: string, round?: number, name?: string, country?: string, city?: string, flag?: string, date?: Date) {
        this.id = id ?? '';
        this.round = round ? +round : 0;
        this.name = name ?? '';
        this.country = country ?? '';
        this.city = city ?? '';
        this.flag = flag ?? '';
        this.date = new Date(date ?? '');
    }

    flagUrl = (): string => `"../../../../../assets/flag icons/${this.flag}.png/"`;
}