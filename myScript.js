

document.addEventListener("DOMContentLoaded", startFn);

function startFn()
{
    console.log("loaded");

    let menu = document.querySelectorAll("#menu ul li");
    let contents = document.querySelectorAll("#container > section");
    let home = document.querySelector("#menu1");
    
    let homeScroll = 0;
    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = pageYOffset;

    let scrollAni;

    window.addEventListener('scroll', scrollFn);

    function scrollFn()
    {
        nowScrollPos = pageYOffset;
        scrollPos = nowScrollPos;
        //console.log(nowScrollPos);
    }

    for(let i =0; i < menu.length; i++)
    {
        menu[i].addEventListener('click',

        function()
        {
            let index = this.getAttribute('clickNum');
            console.log(index);

            targetScrollPos = contents[index].offsetTop - 80;
            //console.log(targetScrollPos);

            scrollAni = requestAnimationFrame(moveTo);
        }

        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos)*0.2;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - scrollPos) <= 1)
        {
            window.scroll(0,targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else{
            scrollAni = requestAnimationFrame(moveTo);
        }
    }

    home.addEventListener('click',
    
    function()
    {
        window.scroll(0, 0);
    }
    
    )

}