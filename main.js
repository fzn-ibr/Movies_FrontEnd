// Get the modal
var modal_parent = document.getElementsByClassName("all_movies");

// Get open modal container
var open_modal = document.getElementsByClassName("movie-item");

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
        var ElementIndex = this.getAttribute("data-index");
        modal_parent[ElementIndex].style.display = "block";
    }
    
    // When user click close button
    close_modal[i].onclick = function() {
        var ElementIndex = this.getAttribute("data-index");
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


// Search Bar (Cyrrently Not Functional)

// function search_movie() {
//     console.log(123)
//     let input = document.getElementById("searchbar").value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName("movie-item");

//     for(i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "list-item";
//         }
//     }
// }

// // JavaScript code
// function search_animal() {
// 	let input = document.getElementById('searchbar').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('animals');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }
