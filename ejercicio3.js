class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }
  
  agregarProducto(nombre, precio, unidades) {
    this.montoTotal += precio * unidades;
    this.productos.push(nombre);
  }
}

let carrito = new Carrito(10, ["Leche"]);


carrito.agregarProducto("Azucar", 5, 2);
console.log(carrito);
