let operarios =[];
let tecnicos =[];
let profesionales = [];

function calcularSalarioOrdinario(hora, precioPorHora){
    return hora * precioPorHora;
}
function calcularAumento(SalarioOrdinario, tipoEmpleado) {
    let aumento = 0;
    switch (tipoEmpleado){
        case 1:
            aumento = 0.15;
            breack;
        case 2: 
        aumento = 0.10;
        breack;
        case 3: 
        aumento = 0.05;
        breack;
        default:
            cosole.log("Tipo de empleado no valido");
    }
    return SalarioOrdinario*aumento;

    function cacalcularSalarioBruto(SalarioOrdinario, aumento) {
        return SalarioOrdinario + aumento;
    }
    function calcularDeduccionCCSS(salarioBruto){
        return salarioBruto * 9.17;
    }
    function CalcularSalarioNeto(salarioBruto, deduccionCCSS) {
        return salarioBruto - deduccionCCSS;
    }
    function registrarEmpleado(cedula, nombre, tipoEmpleado, precioPorHora, hora){
        const salarioOrdinario = calcularSalarioOrdinario(hora, precioPorHora);
        const Aumento = calcularAumento(salarioOrdinario, tipoEmpleado);
        const salarioBruto = cacalcularSalarioBruto(salarioOrdinario, Aumento);
        const DeduccionCCSS =calcularDeduccionCCSS (salarioBruto);
        const SalarioNeto = CalcularSalarioNeto (SalarioBrutal, DeduccionCCSS)
  
        const Empleado ={
            cedula,
            nombre,
            tipoEmpleado,
            precioPorHora,
            hora,
            salarioOrdinario,
            aumento,
            salarioBruto,
            DeduccionCCSS,
            SalarioNeto,
        };

        switch (tipoEmpleado) {
            case 1:
                operarios.push(salarioNeto);
                break;
            case 2:
                tecnicos.push(salarioNeto);
                break;
            case 3:
                profesionales.push(salarioNeto);
                break;
            default:
                console.log("Tipo de empleado no válido");
        }
    
        console.log(`Cedula: ${cedula}`);
        console.log(`Nombre Empleado: ${nombre}`);
        console.log(`Tipo Empleado: ${tipoEmpleado}`);
        console.log(`Salario por Hora: $${precioPorHora.toFixed(2)}`);
        console.log(`Cantidad de Horas: ${horas}`);
        console.log(`Salario Ordinario: $${salarioOrdinario.toFixed(2)}`);
        console.log(`Aumento: $${aumento.toFixed(2)}`);
        console.log(`Salario Bruto: $${salarioBruto.toFixed(2)}`);
        console.log(`Deducción CCSS: $${deduccionCCSS.toFixed(2)}`);
        console.log(`Salario Neto: $${salarioNeto.toFixed(2)}`);
    }
    
    function mostrarEstadisticas() {
        const totalOperarios = operarios.length;
        const totalTecnicos = tecnicos.length;
        const totalProfesionales = profesionales.length;
    
        const acumOperarios = operarios.reduce((a, b) => a + b, 0);
        const acumTecnicos = tecnicos.reduce((a, b) => a + b, 0);
        const acumProfesionales = profesionales.reduce((a, b) => a + b, 0);
    
        const promOperarios = totalOperarios ? (acumOperarios / totalOperarios).toFixed(2) : 0;
        const promTecnicos = totalTecnicos ? (acumTecnicos / totalTecnicos).toFixed(2) : 0;
        const promProfesionales = totalProfesionales ? (acumProfesionales / totalProfesionales).toFixed(2) : 0;
    
        console.log(`Cantidad Empleados Tipo Operarios: ${totalOperarios}`);
        console.log(`Acumulado Salario Neto para Operarios: $${acumOperarios.toFixed(2)}`);
        console.log(`Promedio Salario Neto para Operarios: $${promOperarios}`);
        console.log(`Cantidad Empleados Tipo Técnico: ${totalTecnicos}`);
        console.log(`Acumulado Salario Neto para Técnicos: $${acumTecnicos.toFixed(2)}`);
        console.log(`Promedio Salario Neto para Técnicos: $${promTecnicos}`);
        console.log(`Cantidad Empleados Tipo Profesional: ${totalProfesionales}`);
        console.log(`Acumulado Salario Neto para Profesionales: $${acumProfesionales.toFixed(2)}`);
        console.log(`Promedio Salario Neto para Profesionales: $${promProfesionales}`);
    }
    // Ejemplo de registro de empleados
    registrarEmpleado('12345678', 'Juan Perez', 1, 10, 40);
    registrarEmpleado('87654321', 'Ana Lopez', 2, 15, 35);
    registrarEmpleado('56781234', 'Carlos García', 3, 20, 30);
    
    // Mostrar estadísticas al finalizar
    mostrarEstadisticas();
    }
