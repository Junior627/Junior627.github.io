class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="top">
                <div class = "name">
                    <h1>
                        Junior Siguencia
                    </h1>
                    <h4>
                        Welcome to my site!
                    </h4>
                <div id="navbar">
                    <a class="fill-div" href="../index.html"> 
                        <div class = "navcontainer">   
                            <span>Home</span> 
                        </div>
                    </a>
                    <a class="fill-div" href="../assets/aboutMe/Junior_Siguencia_Resume_Post_Grad.pdf" target="_blank"> 
                        <div class = "navcontainer">   
                            <span>My Resume</span> 
                        </div>
                    </a>
                    <a class="fill-div" href="../pages/about-me.html"> 
                        <div class = "navcontainer">   
                            <span>About Me</span> 
                        </div>
                    </a>
                </div>
            </div>
                
        </div>
            
        <div class ="blank-space"></div>
    `
    }
}

class MyLightbox extends HTMLElement{
    connectedCallback() {
        this.innerHTML= `
            <div id="lightbox-overlay" class="lightbox-overlay">
                <button class="lightbox-close" id="lightbox-close">&times;</button>
                <div class="lightbox-container">
                    <img id="lightbox-img" src="" alt="">
                </div>
            </div>
        `
    }
}

class MyFonts extends HTMLElement{
    connectedCallback() {
        this.innerHTML= `
            <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Concert+One&family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&family=Potta+One&family=Racing+Sans+One&display=swap&family=Jua&display=swap" rel="stylesheet">
        `
    }
}

customElements.define('my-fonts', MyFonts);
customElements.define('my-header', MyHeader);