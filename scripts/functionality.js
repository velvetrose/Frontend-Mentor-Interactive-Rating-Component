function page(){
    //document.getElementById('back').style.display = 'none';
    //document.getElementById('back').hidden=true;
    $('#back').hide();
}
function display(){
    document.getElementById('front').style.display = 'none';
    document.getElementById('back').style.display = 'flex';
    //document.getElementById('front').hidden=true;
    //document.getElementById('back').hidden=false;
    $('#front').hide();
    $('#back').show();

    let ratingElement = document.getElementsByName('rating');
    let ratingDisplay = document.getElementById('rating-value');
    for(i=0;i<ratingElement.length;i++){
        if(ratingElement[i].checked){
            ratingDisplay.innerText=ratingElement[i].value;
        }
    }
}