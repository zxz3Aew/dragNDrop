function init(){
    image = document.getElementById('image');
    image.addEventListener('dragstart', startDrag); 
    image.addEventListener('dragend', endDrag);
    

    rightBox = document.getElementById('rightBox');
    // rightBox.addEventListener('dragenter', function(e){e.preventDefault();}); 
    rightBox.addEventListener('dragover', function(e){e.preventDefault();}); //only dragover & drop will surely take place
    rightBox.addEventListener('drop', dropped);
};

function startDrag(e){
    let data = '<img src="punk.jpg">';
    e.dataTransfer.setData('image/jpg',data);
};

function endDrag(){
    image.style.visibility ='hidden';
};

function dropped(e){
    e.preventDefault();
    rightBox.innerHTML = e.dataTransfer.getData('image/jpg');
};

window.addEventListener('load', init);