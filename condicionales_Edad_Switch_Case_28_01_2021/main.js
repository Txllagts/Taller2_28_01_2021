let key = prompt(`Ingrese tu edad`);

if (key > 18) {
    data = 1;
} else if (key == 18) {
    data = 2;
} else { 
   data = 3;
} 

switch (data) {
    case 1:
        alert(`Es mayor de edad, el usuario tiene ${key} años`);
        break;

    case 2:
        alert(`Tienes ${key} años`);

    default:
        alert(`La edad ingresada no cumple con los parametros`);
        break;
}