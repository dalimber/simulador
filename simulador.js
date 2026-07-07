//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() 
{
    //RECUPERAR  INGRESOS Y EGRESOS
    let cmpIngresos=document.getElementById("txtIngresos");
    let cmpEgresos=document.getElementById("txtEgresos");
    let ingresos=parseFloat(cmpIngresos.value);
    let egresos=parseFloat(cmpEgresos.value);
    //CALCULAR  VALOR DISPONIBLE
    let valorDisponible=calcularDisponible(ingresos,egresos);
    //frmtValorDisponible=valorDisponible.toFixed(2);
    //CALCULAR CAPACIDAD PAGO
    let capacidadPago=calcularCapacidadPago(valorDisponible);
    //RECUPERAR VALOR INTERES
    let cmpMonto=document.getElementById("txtMonto");
    let cmpTasa=document.getElementById("txtTasaInteres");
    let cmpPlazo=document.getElementById("txtPlazo");
    let monto=parseInt(cmpMonto.value);
    let tasa=parseInt(cmpTasa.value);
    let plazo=parseInt(cmpPlazo.value);
    //CALCULAR VALOR A PAGAR
    let interesValor=calcularInteresSimple(monto,tasa,plazo);

    

    //MOSTRAR EN PANTALLA
    //
    let cmpLblDisponible=document.getElementById("spnDisponible");
    cmpLblDisponible.textContent=valorDisponible;
    //
    let cmpLblCapacidaPago=document.getElementById("spnCapacidadPago");
    cmpLblCapacidaPago.textContent=capacidadPago;
    //
    let cmpLblInteresValor=document.getElementById("spnInteresPagar");
    cmpLblInteresValor.textContent=interesValor;
}