function contactLoad (){
    const content = document.querySelector('#content')

    content.innerHTML = `
    <div class="container-fluid bg">
    <div class="container-fluid">
         <nav class="navbar navbar-expand-md container-fluid">
            <a href="#" class="navbar-brand h1">Lexi's</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center d-flex justify-content-end" id="navbarText">
                <ul class="navbar-nav text-center">
                    <li>
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
         </nav>     
    </div>
</div>
    `
}

export { contactLoad }