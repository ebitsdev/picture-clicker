    class Pet {
        constructor(name, url, caption){
            this.location = 'assets/images/';
            this.name = name;
            this.url = url;
            this.caption = caption;
            this.images = [];
            this.container = '<div class="row"></div>';
        }

        displayImage(){
            const imgContainer = document.createElement('div');
            const imgRow = document.createElement('div');
            const imgCol = document.createElement('div');
            imgContainer.classList.add('row');
            imgRow.classList.add('row');
            imgCol.classList.add('column');
            imgRow.appendChild(imgCol);
            const docfrag = document.createDocumentFragment();
            // create figure element to hold the image
            const fig = document.createElement('figure');
            // Use the figure caption to display image title
            const figCaption = document.createElement('figcaption');
            figCaption.innerText = this.caption;
            const img = document.createElement('img');
            img.src = this.url;
            img.alt = this.name;
            fig.appendChild(img);
            fig.appendChild(figCaption);
            imgCol.appendChild(fig);
            docfrag.appendChild(imgCol);
            imgContainer.appendChild(docfrag);
            document.body.appendChild(imgContainer);
        }
    }
