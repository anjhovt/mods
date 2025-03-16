function selectOverlay(overlay) {
    const overlayUrl = `https://tuweb.netlify.app/${overlay}`;
    navigator.clipboard.writeText(overlayUrl)
        .then(() => {
            document.getElementById("linkDisplay").innerText = `¡Link copiado! ${overlayUrl}`;
        })
        .catch(err => console.error("Error al copiar: ", err));
}
