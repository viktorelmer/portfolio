let notRightState = false
let rightState = false
let amountOfFalseTimes = 0

const cfg = {
    notRightHover: {
        0: 'duude, not me, under me',
        1: 'Are u dumb man?',
        2: 'Pls, just hover title under me, ill be apreceate',
        3: 'K, ill just do nothing',
        standrat: 'yeah, as i said - nothing',
        10: 'U think here hiden easter egg?',
        11: 'Nope, here just nothing ^-^',
    },
    maxPages: 2,
    pagesText: {
        0: [`I’m full-stack JS developer. My carier started in 2016, when i open FiveM (GTA 5 based online engine).
            First of all, in my head became idea to create my own server, but without knowlege in scripting i started to rewrite existed scripts and saw whats were happend. 
            After few month i relize that i need to read books to understand programming logic, and next 6 month i learnned Lua language.
            Second year i was ready to create my own scripts, and i started to write server from scratch using VRP framework.
            While i wrote my server, one CEO from other server came to my and said that he wanna to buy it’s and set me to developer on his server. That was my first commercial deal.
            From now i was developer on huge server, so i started work in team and that expirience let me huge amount of knowlege as teamworker and rise my developer skills.
            I worked on this project till 2020 summer, and relize that i need more, i started learn JS and React framework.
            In september i get offer to RageMP server develompent where i work now.   
        `, 'some history'],
        1: [`<iframe width="420" height="375" src="https://www.youtube.com/embed/c9zDlw8LWqQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="420" height="375" src="https://www.youtube.com/embed/jJmL3TuE4Dk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="420" height="375" src="https://www.youtube.com/embed/npqxS4MbjH0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, 'Some of my works'],
        2: [`Conctact me via discord - viktorelmer#9834 or vk - vk.com/mr_elk2015`, 'Tnx for visit my site'],
    }
}

let isInSwipe = false
let buttonState = false

const clickButton = () => {
    buttonState = !buttonState
    let [button1, button2, button3] = document.getElementsByClassName('button')
    let buttonContainer = document.getElementsByClassName('button-open-menu')[0]
    let secondTitle = document.getElementById('second-title')
    let secondPage = document.getElementsByClassName('second-page')[0]
    if (buttonState === true) {
        document.getElementsByTagName("p")[0].style.color = "#000"
        button2.style.opacity = 0
        button3.classList = 'button activate-3'
        button1.classList = 'button activate-1'
        button3.style.fill = "black"
        button1.style.fill = "black"
        document.getElementsByClassName('second-page')[0].style.background = '#FFF'
        let isInScroll = false
        let activePageIndex = 0
        let headTitle = document.createElement("div")
        let lessTitle = document.createElement("div")
        headTitle.innerHTML = cfg.pagesText[activePageIndex][1]
        lessTitle.innerHTML = cfg.pagesText[activePageIndex][0]
        headTitle.classList = "second-head-title showT"
        lessTitle.classList = "less-head-title showT"
        secondTitle.style.display = "none"
        secondPage.appendChild(headTitle)
        secondPage.appendChild(lessTitle)

        secondPage.addEventListener('wheel', checkScrollDirection);

        function checkScrollDirection(event) {
            if (!isInScroll) {
                isInScroll = true
                let headTitleC = document.getElementsByClassName("second-head-title")[0]
                let lessTitleC = document.getElementsByClassName("less-head-title")[0]
                let items = document.getElementsByClassName("button-slider")
                headTitleC.classList = "second-head-title hideT"
                lessTitle.classList = "less-head-title hideT"
                if (checkScrollDirectionIsUp(event)) {
                    if (activePageIndex - 1 >= 0) {
                        items[activePageIndex].classList = "button-slider"
                        activePageIndex--
                        items[activePageIndex].classList = "button-slider active-button"
                        if (activePageIndex === 1) {
                            lessTitleC.style.maxWidth = "1260px"
                        } else {
                            lessTitleC.style.maxWidth = "508px"
                        }
                        setTimeout(() => {
                            isInScroll = false
                            headTitleC.innerHTML = cfg.pagesText[activePageIndex][1]
                            lessTitleC.innerHTML = cfg.pagesText[activePageIndex][0]
                            headTitleC.classList = "second-head-title showT"
                            lessTitle.classList = "less-head-title showT"
                        }, 500)
                    }
                } else {
                    if (activePageIndex + 1 <= cfg.maxPages) {
                        items[activePageIndex].classList = "button-slider"
                        activePageIndex++
                        items[activePageIndex].classList = "button-slider active-button"
                        if (activePageIndex === 1) {
                            lessTitleC.style.maxWidth = "1260px"
                        } else {
                            lessTitleC.style.maxWidth = "508px"
                        }
                        setTimeout(() => {
                            isInScroll = false
                            headTitleC.innerHTML = cfg.pagesText[activePageIndex][1]
                            lessTitleC.innerHTML = cfg.pagesText[activePageIndex][0]
                            headTitleC.classList = "second-head-title showT"
                            lessTitle.classList = "less-head-title showT"
                        }, 500)
                    }
                }
            }

            function checkScrollDirectionIsUp(event) {
                if (event.wheelDelta) {
                    return event.wheelDelta > 0;
                }
                return event.deltaY < 0;
            }
        }


    } else {
        secondPage.removeEventListener('wheel', checkScrollDirection)
        isInScroll = false
        document.getElementsByTagName("p")[0].style.color = "#FFF"
        let items = document.getElementsByClassName("button-slider")
        for (let x = 0; x < items.length; x++) {
            items[x].classList = "button-slider"
            if (x === 0) {
                items[x].classList = "button-slider active-button"
            }
        }
        document.getElementsByClassName('second-page')[0].style.background = '#000'
        let headTitle = document.getElementsByClassName("second-head-title")[0]
        let lessTitle = document.getElementsByClassName("less-head-title")[0]
        secondTitle.style.color = '#FFF'
        button3.classList = 'button deactivate-3'
        button1.classList = 'button deactivate-1'
        secondTitle.style.display = "block"
        headTitle.remove()
        lessTitle.remove()
        button2.style.opacity = 1
        button3.style.fill = "white"
        button1.style.fill = "white"
    }

}

const changePage = (pageOne, pageTwo) => {
    let mainPage = document.getElementsByClassName(pageOne)[0]
    let secondPage = document.getElementsByClassName(pageTwo)[0]
    if (!isInSwipe) {
        isInSwipe = true
        mainPage.classList = `${pageOne} hide-page`
        setTimeout(() => {
            mainPage.style.display = 'none'
            secondPage.style.display = 'flex'
            secondPage.classList = `${pageTwo} show-page`
            isInSwipe = false
        }, 500)
    }

}

const mouseover = (state) => {
    let mainPage = document.getElementsByClassName("main-page")[0]
    let secondPage = document.getElementsByClassName("second-page")[0]
    let hoverNotRight = document.getElementsByClassName("hover-title")[0]
    // let hoverRight = document.getElementsByClassName("title")[0]
    if (state && !rightState) {
        rightState = true
        hoverNotRight.innerHTML = "."
        let x = 1
        const word = "Wait few moments" //"Yeaah, here, wait few moments - ill rebuild page"
        const interval = setInterval(() => {
            hoverNotRight.innerHTML = word.substring(0, x)
            x++
            if (hoverNotRight.innerHTML === word) {
                clearInterval(interval)
                setTimeout(() => {
                    mainPage.classList = `main-page hide-page`
                    setTimeout(() => {
                        hoverNotRight.innerHTML = "Hover title under ^-^"
                        mainPage.style.display = 'none'
                        secondPage.style.display = 'flex'
                        secondPage.classList = `second-page show-page`
                        rightState = false
                    }, 500)
                }, 600)
            }
        }, 100)
    }
    // else if (notRightState === false && state === false && !rightState) {
    //     hoverNotRight.innerHTML = "."
    //     notRightState = true
    //     let x = 1
    //     const word = cfg.notRightHover[amountOfFalseTimes] ? cfg.notRightHover[amountOfFalseTimes] : cfg.notRightHover.standrat
    //     const interval = setInterval(() => {
    //         hoverNotRight.innerHTML = word.substring(0, x)
    //         x++
    //         if (hoverNotRight.innerHTML === word) {
    //             clearInterval(interval)
    //             notRightState = false
    //             amountOfFalseTimes++
    //         }
    //     }, 100)
    // }
}