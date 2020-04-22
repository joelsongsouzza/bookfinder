google.books.load({"language": "pt-BR"});
  
function MostrarLivro() {
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.resize();
    viewer.load('ISBN:8577343502');
}

function PassarPaginas(segundos) {
    segundos *= 1000;
    window.setTimeout(() => {
        viewer.nextPage();
        nextStep(viewer);
    }, segundos);
};