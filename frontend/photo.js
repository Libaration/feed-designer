class Photo {
    constructor(id,caption,url){
        this.id = id;
        this.caption = caption;
        this.url = url;
    }

    static clearPhotos(){
        const photoContainer = document.querySelector('#photoContainer')
        photoContainer.innerHTML = ''
    }
    displayPhoto() {
        const overlayContainer = document.createElement('div')
        overlayContainer.classList.add('container')

        
        if(this.caption){
            const overlay = document.createElement('div')
            overlay.classList.add('overlay')
            overlay.innerHTML = `${this.caption}`
            overlayContainer.appendChild(overlay)
        }

        const photoContainer = document.querySelector('#photoContainer')
        const photoRow = document.createElement('div');
        photoRow.classList.add('row')
        const photoImage = document.createElement('img')
        photoImage.src = this.url;
        const caption = document.createElement('h3')
        caption.innerText = this.caption
        photoRow.appendChild(photoImage)
        overlayContainer.appendChild(photoRow)
        // photoContainer.appendChild(overlayContainer)
        photoContainer.insertBefore(overlayContainer, photoContainer.firstChild);
        photoRow.addEventListener('mouseover', e =>{
            console.log(this.caption)
        })
        
    }
    
}