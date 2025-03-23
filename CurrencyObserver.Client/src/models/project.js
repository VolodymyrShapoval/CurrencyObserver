export class Project {
    constructor(title, date, rate, country, about) {
        this.title = title;
        this.date = date;
        this.rate = rate;
        this.country = country;
        this.about = about;
    }

    getValues() {
        return this.title, this.date, this.rate, this.country, this.about;
    }

    getStars() {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < this.rate) {
                stars += '<span class="fa fa-star checked"></span>';
            } else {
                stars += '<span class="fa fa-star"></span>';
            }
        }
        return stars;
    }
}