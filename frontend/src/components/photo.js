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
        const overlay = document.createElement('div')
        const destroyBtnDiv = document.createElement('div');
        const destroyBtnImg = document.createElement('input');
        const overlayContainer = document.createElement('div')
        destroyBtnDiv.classList.add('destroyBtn')
        destroyBtnImg.id = `destroy#${this.id}`
        destroyBtnImg.setAttribute('type', 'image')
        destroyBtnImg.setAttribute('src', 'images/close.png');
        destroyBtnDiv.appendChild(destroyBtnImg)
        destroyBtnImg.addEventListener('click', this.destroyPhoto.bind(this))
        overlayContainer.classList.add('container')
        overlay.classList.add('overlay')
        overlay.innerHTML = `${this.caption}`
        overlay.appendChild(destroyBtnDiv)
        overlayContainer.appendChild(overlay)
        const photoContainer = document.querySelector('#photoContainer')
        const photoRow = document.createElement('div');
        photoRow.classList.add('row')
        const photoImage = document.createElement('img')
        photoImage.classList.add('feedImg')
        photoImage.src = this.url;
        const caption = document.createElement('h3')
        caption.innerText = this.caption
        photoRow.appendChild(photoImage)
        overlayContainer.appendChild(photoRow)
        photoContainer.insertBefore(overlayContainer, photoContainer.firstChild);
    }
    async destroyPhoto(e) {
        let response = await apiService.destroyPhoto(this.id)
        if(response.Status == 'Success'){
            let photo = document.getElementById(e.target.id).closest('.container');
            photo.remove()
        }
        else{
            alert('Photo could not be deleted')
        }
    }
}