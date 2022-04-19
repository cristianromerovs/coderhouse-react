export const clpConverter = (plainNumber) => {
    var formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      });
      
      return formatter.format(plainNumber);
}