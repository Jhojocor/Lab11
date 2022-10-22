class itemShop{
    
    constructor(id, title, price, description, category, image, rating){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
    render(){
        container.innerHTML += `<div class="card">
        <div class="VisualP">
            <img src="${this.image}" alt="">
        </div>
        <div class="titulo">
            ${this.title}
        </div>
        <div class="price">
            <b>${this.price}</b>
        </div>
        <button class="button">Comprar</button>
    </div>`;
        //return html;
    }
    
}