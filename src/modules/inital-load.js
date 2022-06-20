function initialLoad (){
    const content = document.querySelector('#content')


    content.innerHTML =`
    <div class="container-fluid bg">
    <div class="container-fluid">
         <nav class="navbar navbar-expand-md container-fluid">
            <a href="#" class="navbar-brand h1">Lexi's</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarText">
                <ul class="navbar-nav text-center">
                    <li>
                        <a href="#" class="nav-link home">Home</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link menu">Menu</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link contact">Contact</a>
                    </li>
                </ul>
            </div>
         </nav>     
    </div>
</div>
<div class="caption glass d-flex align-content-center justify-content-center mw-50 h2 px-2 py-5 container">
    <p>
        <span class="text-center h1">Best Homemade Ice Cream</span></br><span class="text-center h1">In Town, Made With..</span><br><span id="love" class="text-center h1">LOVE</span>
    </p>
</div> 
    `
}


export { initialLoad }