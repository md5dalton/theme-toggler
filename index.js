// Helper fn for getting DOM Element
const getDOM = selector => document.querySelector(selector)

class ThemeToggler
{
    defaultTheme = "light"
    altTheme = "dark"

    theme = ""

    constructor (elm) {
        this.getTheme()
        this.updateUI()
        elm.addEventListener("click", () => this.toggleTheme())
    }

    getTheme () {
        this.theme = localStorage.getItem("theme") || this.defaultTheme
    }

    setTheme (theme) {
        this.theme = theme
        localStorage.setItem("theme", theme)
    }

    toggleTheme () {

        this.getTheme()

        const newTheme = this.theme !== this.defaultTheme ? this.defaultTheme : this.altTheme  
        
        this.setTheme(newTheme)
        this.updateUI()

    }

    updateUI () {
        document.body.classList.remove(this.defaultTheme, this.altTheme)
        document.body.classList.add(this.theme)

        // Modify code below to meet your use case scanario

        const input = getDOM("#theme-toggler input")
        const label = getDOM("#theme-toggler label")
        // const icon = getDOM("#theme-toggler .icon")

        label.innerText = `${this.theme} mode`
        input.checked = this.theme === this.altTheme ? true : false

        // Modify code above to meet your use case scanario

    }
}

// Modify the selector below for the element you want to attach the click listener to
new ThemeToggler(getDOM("#theme-toggler"))