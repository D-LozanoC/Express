let products = [];

const getAllProducts = (userId) => products.filter(product => product.userId === userId);

const getProduct = (idProduct) => products.find(product => product.id === idProduct);

const addProduct = (userId, nombre, precio, stock) => {
    const newProduct = {
        userId,
        id: products.length + 1,
        nombre,
        precio, 
        stock
    }
    products.push(newProduct);
}

const updateProduct = (idProduct, nombre, precio, stock) => {
    let newProducts = [...products]
    const index = products.indexOf(getProduct(idProduct))
    newProducts[index] = {
        ...newProducts[index],
        nombre,
        precio,
        stock
    }
    products = newProducts;
}

const deleteProduct = (product) => products.splice(products.indexOf(product), 1);

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}