export class Currency {
    name: string
    country: string
    rate: number
    date: Date

    constructor(name: string, country: string, rate: number, date: Date) {
        this.name = name
        this.country = country
        this.date = date
        this.rate = rate
    }
}