//Dalera Diego - DNI:22.201.085 -Entrega 1


class ProductManager {
    
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        // Valida que todos los campos esten completos
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Error: Todos los campos son obligatorios.");
            return;
        }

        // Valida que el código no esté repetido
        if (this.products.some(product => product.code === code)) {
            console.log("Error: El código ya existe para otro producto.");
            return;
        }

        // Agrega el producto al arreglo
        const product = {
            id: this.nextProductId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        console.log(`El producto ${product.title} agregado con éxito.`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Error: Not Found");
        }
    }
}

//TEST
 const productManager = new ProductManager();
 console.log("product maneger " , productManager)
 productManager.addProduct("Producto 1", "Descripción 1", 10.00, "imagen1.jpg", "ABC1", 200);
 productManager.addProduct("Producto 2", "Descripción 2", 150.99, "imagen2.jpg", "ABC2", 150);

 console.log("get " , productManager.getProducts());
 console.log("get by id ",productManager.getProductById(2));
 console.log("get by id ",productManager.getProductById(1));
 console.log("get by id ",productManager.getProductById(3));

 productManager.addProduct("Producto 2", "Descripción 2", 150.99, "imagen2.jpg", "ABC2", 150);
