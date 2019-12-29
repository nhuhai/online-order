class BaseProduct {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
}

class ExtendedProduct extends BaseProduct {
    constructor(name, category) {
        super(name, category);
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name; 
    }
}

export { ExtendedProduct };

export default BaseProduct;