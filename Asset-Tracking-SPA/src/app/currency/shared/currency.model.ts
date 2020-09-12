export class Currency {
    id: number
    name: string
    country: string
    rate: number
    date: Date

    constructor(id: number, name: string, country: string, rate: number, date: Date) {
        this.id = id
        this.name = name
        this.country = country
        this.date = date
        this.rate = rate
    }
}
