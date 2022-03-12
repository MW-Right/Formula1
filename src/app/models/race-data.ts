export class Race {
    id: string;
    name: string;
    country: string;
    flag: string;
    date: Date;

    constructor(id: string, name: string, country: string, flag: string, date: string) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.flag = flag;
        this.date = new Date(date);
    }
}