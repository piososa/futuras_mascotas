window.onscroll = function() {
  // Llama a la funcion al hacer scroll
  scrollable();
}

function scrollable() {
  var y = 0;
  var currentY = window.pageYOffset;
  
  if (y < currentY) {
    document.querySelector('#customNavbar').classList.remove('navbar-light', 'bg-light', 'fixed-theme');
    document.querySelector('#customNavbar').classList.add('navbar-dark', 'bg-dark', 'fixed-theme');
  } else if(y == currentY) {
      document.querySelector('#customNavbar').classList.remove('navbar-dark', 'bg-dark', 'fixed-theme');
    document.querySelector('#customNavbar').classList.add('navbar-light', 'bg-light', 'fixed-theme'); 
  }
}

// Ejecuta la funcion en cualquier momento por si no se inicia la web en el top
scrollable();