const ZoomPic = function (Glide, Components, Events) {
    const component = {
        onRun: function() {
            const slide = Components.Html.slides[Glide.index]
            const zoomContainer = document.getElementById(slide.dataset.target)
            zoomContainer.setAttribute('href', slide.dataset.zoom)
            const zoomImage = zoomContainer.getElementsByTagName('img')[0]
            zoomImage.setAttribute('src', slide.dataset.picture)
        }   
    }
    
    Events.on('run', function () {
        component.onRun()
    })

    return component
}

export default ZoomPic