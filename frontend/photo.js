class Photo {
    constructor(id,caption,url){
        this.id = id;
        this.caption = caption;
        this.url = url;
    }

    static clearPhotos(){
        const photoList = document.querySelector('ul.photos')
        photoList.innerHTML = ''
    }
    displayPhoto() {
        const photoList = document.querySelector('ul.photos')
        const photo = document.createElement('li')
        photo.id = `photo${this.id}`
        const photoImage = document.createElement('img')
        photoImage.src = this.url;
        const caption = document.createElement('h3')
        caption.innerText = this.caption
        photo.appendChild(photoImage)
        photo.appendChild(caption)
        photoList.appendChild(photo)
        
    }
    
}