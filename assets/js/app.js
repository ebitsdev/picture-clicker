---
#To allow JavaScript to access Jekyll constiables
---
// IFI ES6
"use strict";
(() => {

    // Create image source array
    let sourceImg = [{
            'name': 'Zebra',
            'url': '//images.pexels.com/photos/259351/pexels-photo-259351.jpeg',
            'caption': 'Zebra'
        },
        {
            'name': 'Dolphin',
            'url': '//images.pexels.com/photos/225869/pexels-photo-225869.jpeg',
            'caption': 'Dolphin'
        },
        {
            'name': 'Butterfly',
            'url': '//images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg',
            'caption': 'Butterfly'
        },
        {
            'name': 'Elephant',
            'url': '//images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg',
            'caption': 'Elephant'
        },
        {
            'name': 'Parrot',
            'url': '//images.pexels.com/photos/9291/nature-bird-flying-red.jpg',
            'caption': 'Parrot'
        },
        {
            'name': 'Penguin',
            'url': '//images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg',
            'caption': 'Penguin'
        }

    ];
    // Create an pet image instance

    // imgSrc.forEach(function (image, name, caption) {
    //     // Instantiate the pet class for every image found
    //     let pet = new Pet("name", image, 'Animal '+ ++name).displayImage();

    // });

    const container = document.querySelector('.instructions');
    const newContainer = document.createElement('div');
    newContainer.className = 'row grid';
    newContainer.id = 'imgcontainer';
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    const cloneGrid = gridItem.cloneNode(true);
    cloneGrid.id = 'imgdisplay';
    const siteHeader = document.createElement('h1');

    siteHeader.innerText = '{{ site.title }}';
    const clickCounterContainer = document.createElement('h2');
    clickCounterContainer.classList.add('clickcounter');
    container.appendChild(siteHeader);

    // Add event listener
    document.body.addEventListener('click', clickHandler, false);
    document.body.addEventListener('touchstart', clickHandler, false);

    function generateImageGrid() {
        let imgContainer = document.createElement('div');
        let imgContainerRow = document.createElement('div');

        imgContainer.append(imgContainerRow);
        imgContainer.className = 'row grid';
        imgContainerRow.className = 'column grid-item';
        sourceImg.forEach(function (item, counter) {
            let figure = document.createElement('figure');
            let figCaption = document.createElement('figcaption');
            let image = document.createElement('img');
            image.className = 'usa-media_block-img';
            let img_Url = item.url,
                img_Name = item.name,
                fig_Caption = item.caption;
            image.src = img_Url;
            image.alt = img_Name;
            figCaption.innerText = fig_Caption;
            figure.append(image);
            figure.appendChild(figCaption);
            imgContainerRow.appendChild(figure);
        });
        container.append(imgContainer);
    }
    function animalList(){
        container.appendChild(newContainer);
        newContainer.appendChild(gridItem);
        newContainer.appendChild(cloneGrid);
        const aList = document.createElement('ul');
        sourceImg.forEach(function(item){
            let listItem = document.createElement('li');
            let listContent = document.createTextNode(item.name);
            listItem.appendChild(listContent);
            aList.appendChild(listItem);
        });
        gridItem.appendChild(aList);
        gridItem.appendChild(clickCounterContainer);
    }
    animalList();

    // generateImageGrid();
    // Create the counter constiable
    let clickCounter = 0;
    //Set initial content for the image container
    cloneGrid.innerHTML = `<figure><img src="${sourceImg[0].url}" alt="${sourceImg[0].name}"><figcaption>${sourceImg[0].caption}</figcaption></figure>`;
    function clickHandler(e) {
        e.preventDefault();
        const img = document.querySelectorAll('ul > li');
        // Record click events for each image
        img.forEach(function (im, idx) {
            // Check if the target of the click event is the image
            if (e.target === im) {
                im.className = 'active';
                // Display the image the of the animal whose name was clicked
                cloneGrid.innerHTML = `<figure><img src="${sourceImg[idx].url}" alt="${sourceImg[idx].name}"><figcaption>${sourceImg[idx].caption}</figcaption></figure>`;
                clickCounter++;
                // Add the number of clicks to the click container
                if (clickCounter > 1) {
                    clickCounterContainer.innerText = clickCounter + ' clicks';
                }
                if (clickCounter <= 1) {
                    clickCounterContainer.innerText = clickCounter + ' click';
                }
            }
            else{
                im.removeAttribute("class");
            }
        });
    }

})();