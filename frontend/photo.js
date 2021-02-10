class Photo {
    constructor(id,caption,url){
        this.id = id;
        this.caption = caption;
        this.url = url;
    }

    displayPhoto() {
        const photoContainer = document.getElementById('photoContainer')
        const photo = document.createElement('img')
        photo.src = this.url;
        const caption = document.createElement('h2')
        caption.innerText = this.caption
        photoContainer.appendChild(photo)
        photoContainer.appendChild(caption)
        
    }
}