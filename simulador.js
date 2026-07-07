//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() 
{
    let cmpIngresos=document.getElementById("txtIngresos");
    let cmpEgresos=document.getElementById("txtEgresos");
    let ingresos=parseFloat(cmpIngresos.value);
    let egresos=parseFloat(cmpEgresos.value);

    let valorDisponible=calcularDisponible(ingresos,egresos);
    frmtValorDisponible=valorDisponible.toFixed(2);
    

    //MOSTRAR EN PANTALLA
    let cmpLblDisponible=document.getElementById("spnDisponible");
    cmpLblDisponible.textContent=frmtValorDisponible;
    
}