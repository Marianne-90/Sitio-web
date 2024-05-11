const galeriaProducto = (e) => {
    let url = e.target.src;
    let imagenPrincipal = document.getElementsByClassName("imagenPrincipalGal");
    imagenPrincipal[0].src = url
  }
  let totalCarrito = 1;
  const sumaCarrito = () => {

    if(totalCarrito>=10) return;

    totalCarrito = totalCarrito + 1;
    let carrito = document.getElementsByClassName("numero");
    carrito[0].innerHTML = totalCarrito.toString();
  }

  const restarCarrito = () => {
    if(totalCarrito<=1) return;

    totalCarrito = totalCarrito - 1;
    let carrito = document.getElementsByClassName("numero");
    carrito[0].innerHTML = totalCarrito.toString();

  }

  const anadirCarrito = () => {
    let titulo = document.getElementsByClassName("tituloProducto")[0].innerHTML;
    let carrito = document.getElementsByClassName("numero")[0].innerHTML;
    alert(`Se añadidó ${carrito} ${titulo} al carrito`)
  }
