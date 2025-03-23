export class Article {
    constructor(title, img_url, article_url, description, date) {
        this.title = title;
        this.img_url = img_url;
        this.article_url = article_url;
        this.description = description;
        this.date = date;
    }

    getValues() {
        return this.title, this.img_url, this.article_url, this.description, this.date;
    }
}