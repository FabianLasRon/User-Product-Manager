



/********************************PRODUCT Manager*******************************************/



class ProductManager {

    static id = 1;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los parámetros son obligatorios");
        }

        const productExists = this.products.findIndex(
            (product) => product.code === code
        );

        if (productExists !== -1) {
            throw new Error("El código del producto ya está en uso");
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id,
        };
        this.products.push(product);
        ProductManager.id++;
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductById(id) {
        const productExists = this.products.findIndex(
            (product) => product.id === id
        );

        if (productExists === -1) {
            throw new Error("Not found");
        }

        const productoBuscadoPorId = this.products[productExists];
        console.log("--Producto encontrado:--", productoBuscadoPorId);
        return productoBuscadoPorId;
    }
}

const manager = new ProductManager();

manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "sin imagen",
    "abc123",
    25
);
manager.addProduct(
    "producto prueba2",
    "Este es un producto prueba",
    200,
    "sin imagen",
    "abc1234",
    25
);
manager.addProduct(
    "producto prueba3",
    "Este es un producto prueba",
    200,
    "sin imagen",
    "abc12345",
    25
);
manager.getProducts();
manager.getProductById(2);



/********************************USER MANAGER*******************************************/

class UserManager {

    #id = 1;

    constructor() {
        this.usuarios = [];
    }

    create(name, photo, email, id) {
        if (!name || !photo || !email) {
            throw new Error("Todos los parámetros son obligatorios!");
        }

        const usuario = {
            name,
            photo,
            email,
            id: this.#id
        }

        this.usuarios.push(usuario);
        this.#id++;
    }

    read() {
        if (this.usuarios.length === 0) {
            throw new Error("La lista de usuarios está vacía");
        }
        console.log("Lista de usuarios:");
        console.log(this.usuarios);
        return this.usuarios;
    }

    readOne(id) {
        const idFound = this.usuarios.findIndex(
            (usuario) => usuario.id === id
        )

        if (idFound === -1) {
            throw new Error("El id no existe en la lista");
        }

        const usuarioBuscadoPorId = this.usuarios[idFound];
        console.log("--usuario encontrado:--", usuarioBuscadoPorId);
        return usuarioBuscadoPorId;
    }

}

const userManager = new UserManager();
userManager.create("John Doe", "john.jpg", "john@example.com");
userManager.create("Jane Doe", "jane.jpg", "jane@example.com");
userManager.read();
userManager.readOne(2)
