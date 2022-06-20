


function menuLoad (){
  const content = document.querySelector('#content')
  let newElem = document.createElement('div')

    content.innerHTML = `
    <div class="container-fluid bg">
    <div class="container-fluid">
         <nav class="navbar navbar-expand-md container-fluid">
            <a href="#" class="navbar-brand h1">Lexi's</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
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
<div class="caption glass d-flex align-content-center justify-content-center mw-50 h2 px-5 py-5 container">

    <div>
        <div class="row">
          <div class="col-md-6">
            <img src="/src/images/berry-ice-cream.jpg" alt="" class="img-thumbnail">
            <p>Blackberry Ice Cream.. $3</p>
          </div>
          <div class="col-md-6">
            <img src="/src/images/caramel-ice-cream.jpg" alt="" class="img-thumbnail">
            <p>Caramel Ice Cream.. $4</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="/src/images/raspberry.jpg" alt="" class="img-thumbnail">
            <p>Raspberry and Lemonade Popsicle.. $2.50</p>
          </div>
          <div class="col-md-6">
            <img src="/src/images/matcha.jpg" alt="" class="img-thumbnail">
            <p>Matcha Latte $7</p>
          </div>
        </div>
      </div>
</div> 


    `
}

export { menuLoad }