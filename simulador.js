//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() 
{
    //------------------------------------------------------
// Validar todos los campos antes de calcular
//------------------------------------------------------
if(!validarFormulario())
{
    return;
}
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
    //CALCULAR VALOR INTERES A PAGAR
    let interesValor=calcularInteresSimple(monto,tasa,plazo);

    //CALCULAR VALOR TOTAL A PAGAR
    let totalValor=calcularTotalPagar(monto,interesValor);
    //CALCULAR CUOTA MENSUAL
    let cuotaValor=calcularCuotaMensual(totalValor,plazo);
    //ANALIZAR CREDITO
    let estadoCredito=analizarCredito(capacidadPago,cuotaValor);

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
    //
    let cmpLblTotalValor=document.getElementById("spnTotalPrestamo");
    cmpLblTotalValor.textContent=totalValor;
    //
    let cmpLblCuotaValor=document.getElementById("spnCuotaMensual");
    cmpLblCuotaValor.textContent=cuotaValor;
    //
    let cmpLblEstadoPrestamo=document.getElementById("spnEstadoCredito");
    
    if (estadoCredito==true) 
        {cmpLblEstadoPrestamo.textContent="CREDITO APROBADO";} 
    else 
        {cmpLblEstadoPrestamo.textContent="CREDITO RECHAZADO";}
}
function validarFormulario()
{

    let valido=true;


    valido &= validarCampo(
        document.getElementById("txtIngresos"),
        /^\d{1,5}(\.\d{1,2})?$/,
        "Máximo 5 enteros y 2 decimales."
    );


    valido &= validarCampo(
        document.getElementById("txtEgresos"),
        /^\d{1,5}(\.\d{1,2})?$/,
        "Máximo 5 enteros y 2 decimales."
    );


    valido &= validarCampo(
        document.getElementById("txtMonto"),
        /^\d{1,5}$/,
        "Máximo 5 dígitos enteros."
    );


    valido &= validarRango(
        document.getElementById("txtPlazo"),
        1,45
    );


    valido &= validarCampo(
        document.getElementById("txtTasaInteres"),
        /^\d{1,2}$/,
        "Máximo 2 dígitos."
    );


    return Boolean(valido);

}
//======================================================
// Reinicia el formulario y limpia todos los resultados
//======================================================
function reiniciar()
{
    //--------------------------------------------------
    // Limpiar los inputs
    //--------------------------------------------------
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";


    //--------------------------------------------------
    // Limpiar los resultados mostrados en pantalla
    //--------------------------------------------------
    document.getElementById("spnDisponible").textContent = "";
    document.getElementById("spnCapacidadPago").textContent = "";
    document.getElementById("spnInteresPagar").textContent = "";
    document.getElementById("spnTotalPrestamo").textContent = "";
    document.getElementById("spnCuotaMensual").textContent = "";
    document.getElementById("spnEstadoCredito").textContent = "";


    //--------------------------------------------------
    // Lista de todos los inputs
    //--------------------------------------------------
    const inputs = [
        "txtIngresos",
        "txtEgresos",
        "txtMonto",
        "txtPlazo",
        "txtTasaInteres"
    ];


    //--------------------------------------------------
    // Eliminar estilos y mensajes de validación
    //--------------------------------------------------
    inputs.forEach(function(id)
    {
        // Obtener el input
        const input = document.getElementById(id);

        // Quitar el borde rojo
        input.classList.remove("inputError");

        // Buscar el mensaje de error asociado
        const mensaje = input.parentNode.querySelector(".mensajeError");

        // Si existe, eliminarlo completamente del HTML
        if (mensaje)
        {
            mensaje.remove();
        }
    });


    //--------------------------------------------------
    // Regresar el cursor al primer campo
    //--------------------------------------------------
    document.getElementById("txtIngresos").focus();
}