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
        // const photoList = document.querySelector('ul.photos')
        const photoContainer = document.querySelector('#photoContainer')
        const photoRow = document.createElement('div');
        photoRow.classList.add('row')
        // const photo = document.createElement('li')
        // photo.id = `photo${this.id}`
        const photoImage = document.createElement('img')
        photoImage.src = this.url;
        const caption = document.createElement('h3')
        caption.innerText = this.caption
        photoRow.appendChild(photoImage)
        // photo.appendChild(caption)
        // photoRow.appendChild(photo)
        photoContainer.appendChild(photoRow)
        
    }
    
}