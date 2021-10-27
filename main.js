// Get modal element
var modal = document.getElementById('area-modal');
// Get open modal container
var modal_movie = document.getElementById('movieItem-modal');
// Get close button
var close_btn = document.getElementsByClassName('close-btn')[0];

// Listen for open click
modal_movie.addEventListener('click', open_modal);
// Listen for close click
close_btn.addEventListener('click', close_modal);
// Listen for outside click
window.addEventListener('click', outside_click);

// Function to open modal
function open_modal(){
    modal.style.display = 'block';
}

// Function to close modal
function close_modal(){
    modal.style.display = 'none';
}

// Function to close modal if outside is click
function outside_click(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}