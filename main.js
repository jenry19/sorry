
function sii(){
    Swal.fire({
        title: "AMORRR",
        text: "sabia que me perdonarias te amo muchooooooo",
        imageUrl: "ft.png",
        imageWidth: 300,
        imageHeight: 450,
        imageAlt: "Custom image"
      });
}

const button = document.getElementById('no');
const si = document.getElementById('si');
let siWidth = 30;
let siHeight = 30;

button.addEventListener('mousedown', (event) => {
  // Obtener las dimensiones de la ventana
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Obtener las dimensiones del botón
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  // Definir los límites de movimiento
  const maxHorizontalMove = 100; // Máximo de 100 px a la derecha e izquierda
  const maxVerticalMove = 50; // Máximo de 50 px arriba y abajo

  // Calcular la posición aleatoria dentro de los límites
  const randomLeft = Math.floor(Math.max(0, Math.min(windowWidth - buttonWidth, button.offsetLeft + Math.random() * 2 * maxHorizontalMove - maxHorizontalMove)));
  const randomTop = Math.floor(Math.max(0, Math.min(windowHeight - buttonHeight, button.offsetTop + Math.random() * 2 * maxVerticalMove - maxVerticalMove)));

  // Mover el botón a la nueva posición
  si.style.width = '100px';
  button.style.position = 'absolute';
  button.style.left = `${randomLeft}px`;
  button.style.top = `${randomTop}px`;


  siWidth += 5;
  siHeight += 5;
  si.style.width = `${siWidth}px`;
  si.style.height = `${siHeight}px`;

  // Evitar la acción predeterminada del botón
  event.preventDefault();
});
