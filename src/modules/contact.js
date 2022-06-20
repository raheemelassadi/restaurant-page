function contactLoad (){
    const content = document.querySelector('#content')
    const newElem = document.createElement('div')

    content.innerHTML = `
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
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="form-control">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
                <label for="exampleFormControlTextarea1" class="form-label">Message Us</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</div>
    `
}

export { contactLoad }