class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }
    
    agregarProducto(nombre, precio, unidades) {
      if (this.productos.includes(nombre)) {
        console.log(`Ya existe ${nombre} con ${this.obtenerUnidades(nombre)} unidades`);
      } else {
        this.montoTotal += precio * unidades;
        this.productos.push(nombre);
      }
    }
    
    obtenerUnidades(nombre) {
      let unidades = 0;
      for (let i = 0; i < this.productos.length; i++) {
        if (this.productos[i] === nombre) {
          unidades++;
        }
      }
      return unidades;
    }
  }
  
  let carrito = new Carrito(10, ["Leche"]);
  
    
  carrito.agregarProducto("Leche", 5, 1);
  carrito.agregarProducto("Azucar", 5, 2);
  console.log(carrito);
  
  
  