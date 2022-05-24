;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('email')
    console.log(name)
    const domName = document.querySelector('[data-name]')
    console.log(domName)
  
    if(domName) {
      domName.textContent = 'an email has been sent to ' + name + '!'
    }
  })()