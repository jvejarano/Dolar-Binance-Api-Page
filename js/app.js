// archivo javacript  de la aplicación web de cotización de dólar   en Binance en tiempo real 
async function obtenerCotizacion() {
    try {
        const respuesta = await fetch('https://bo.dolarapi.com/v1/dolares/binance');
        if (!respuesta.ok) {
            throw new Error('Error al obtener la cotización');
        }
        const data = await respuesta.json();
        document.getElementById('cotizacion').innerHTML = `<p>Compra: ${data.compra} Bs</p><p>Venta: ${data.venta} Bs</p>`;
    } catch (error) {
        document.getElementById('cotizacion').innerHTML = '<p>Error al obtener la cotización. Intente nuevamente más tarde.</p>';
        console.error(error);
    }
}

window.onload = obtenerCotizacion;
