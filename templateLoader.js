class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="top">
            <div>
                
            </div>
            <div class = "name">
                <h1>
                    Junior Siguencia
                </h1>
                <h2>
                    Welcome to my site!
                </h2>
            </div>
            
            <ul id="navbar">
                <li class="navitem">
                    <div class = "navcontainer">   
                        <a href="index.html"> 
                            <span>Home</span> 
                            <div class = "navimage">   
                                <img class ="navNotHovered" src ="assets/navBarItem.svg"> 
                                <img class ="navHovered" src ="assets/navBarItemHover.svg">
                            </div>  
                        </a>
                    </div>
                    
                </li>
                <li class="navitem">
                    
                    <div class = "navcontainer">   
                        <a href="assets/aboutMe/Junior_Siguencia_Resume_Post_Grad.pdf" target="_blank" > 
                            <span>My Resume</span>  
                            <div class = "navimage">   
                                <img class ="navNotHovered" src ="assets/navBarItem.svg"> 
                                <img class ="navHovered" src ="assets/navBarItemHover.svg">
                            </div>  
                        </a>
                    </div>
                </li>
                <li class="navitem">
                    
                    <div class = "navcontainer">   
                        <a href="about-me.html"> 
                            <span> About Me</span> 
                            <div class = "navimage">   
                                <img class ="navNotHovered" src ="assets/navBarItem.svg"> 
                                <img class ="navHovered" src ="assets/navBarItemHover.svg">
                            </div>  
                        </div>
                    </a>
                </li>
                
            </ul>
        </div>
    `
    }
}

customElements.define('my-header', MyHeader);