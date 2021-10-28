// // Get modal element
// var modal = document.getElementById('area-modal');
// // Get open modal container
// var modal_movie = document.getElementById('movieItem-modal');
// // Get close button
// var close_btn = document.getElementsByClassName('close-btn')[0];

// // Listen for open click
// modal_movie.addEventListener('click', open_modal);
// // Listen for close click
// close_btn.addEventListener('click', close_modal);
// // Listen for outside click
// window.addEventListener('click', outside_click);

// // Function to open modal
// function open_modal(){
//     modal.style.display = 'block';
// }

// // Function to close modal
// function close_modal(){
//     modal.style.display = 'none';
// }

// // Function to close modal if outside is click
// function outside_click(e){
//     if(e.target === modal){
//         modal.style.display = 'none';
//     }
// }


// Get the modal
var modal_parent = document.getElementsByClassName("all_movies");

// Get open modal container
var open_modal = document.getElementsByClassName("modalTrigger-movieItem");

// Get close button
var close_modal = document.getElementsByClassName("close-btn");

// When the user clicks the button, open the modal
function setDataIndex() {
    for (i = 0; i < open_modal.length; i++)
    {
        open_modal[i].setAttribute("data-index", i);
        modal_parent[i].setAttribute("data-index", i);
        close_modal[i].setAttribute("data-index", i);
    }
}

for (i = 0; i < open_modal.length; i++)
{
    open_modal[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal_parent[ElementIndex].style.display = "block";
    }
    
    // When user click close button
    close_modal[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal_parent[ElementIndex].style.display = "none";
    }
}

window.onload = function() {
    setDataIndex();
}

window.onclick = function(event) {
    if (event.target === modal_parent[event.target.getAttribute("data-index")]) {
        modal_parent[event.target.getAttribute("data-index")].style.display = "none";
    }
}