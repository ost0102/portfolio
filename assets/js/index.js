const progressTl = gsap.timeline({
    paused: false, 
});
let odometer = new Odometer({
	el: document.querySelector('.loading-num'),
});
progressTl
    .to({}, {
        duration: 3, 
        onUpdate: function() {
            let progress = this.progress(); 
            let value = Math.round(progress * 100);  
            odometer.update(value);  
        }
    },'0')
    .to(".progress-ing", {
        duration: 3, 
        width: "100%", 
        ease: "power1.out",
    },'0')
    .to(".loading-wrap", {
        duration: 1,  
        height: 0,
        background: 'linear-gradient(0deg, transparent 0%, rgba(0, 0, 0, 1) 50%)'
    }, "+=1") 
    .to(".loading-cont", {
        opacity: 0,
    }, "-=1")
    .to('body',{
        overflow:'unset'
    })
$(document).on('mouseenter mouseleave', '.work-item', function(event) {
    $(this).toggleClass('on', event.type === 'mouseenter');
});

const navTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#wrap",
        start: "0% 0%",
        end: "100% 100%",
        scrub:1,
        toggleActions: "play reverse play reverse",
        onUpdate:function(self){
            if(self.progress >= 0.13){
                $('.nav-title p').hide();
            } else{
                $('.nav-title p').show();
            }
        }
    }
});

let splitLeft = new SplitType(".top-title .frame", { types: "chars", tagName: "span" });
gsap.fromTo('.top-title .frame .char', 
    { y: 400 },
    { 
        stagger: 0.2,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 4,
        ease: "power2.out",
        onComplete: () => {
            gsap.fromTo('section.s2 .nav-title, section.s2 .nav-list', 
                { y: 100 },
                { 
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to('section.s3 .intro-txt:nth-child(1) .des', { 
                            width: '40%', 
                            "clip-path": "inset(0%)", 
                            duration: 1, 
                            ease: "power2.out"
                        });
                        gsap.to('section.s3 .intro-txt:nth-child(1) .line', { 
                            width: '60%', 
                            duration: 1, 
                            ease: "power2.out"
                        });
                        gsap.to('section.s3 .intro-txt:nth-child(2) .des', { 
                            width: '60%', 
                            "clip-path": "inset(0%)", 
                            duration: 1, 
                            ease: "power2.out"
                        });
                        gsap.to('section.s3 .intro-txt:nth-child(2) .line', { 
                            width: '40%', 
                            duration: 1, 
                            ease: "power2.out"
                        });
                        gsap.to('section.s3 .intro-txt:nth-child(3) .des', { 
                            width: '66%', 
                            "clip-path": "inset(0%)", 
                            duration: 1, 
                            ease: "power2.out"
                        });
                        gsap.to('section.s3 .intro-txt:nth-child(3) .line', { 
                            width: '34%', 
                            duration: 1, 
                            ease: "power2.out"
                        });
                    }
                }
            );
        }
    }
);


const s4Tl_1 = gsap.timeline({
    scrollTrigger: {
        trigger: "section.s4",
        start: "10% 0%",
        end: "80% 100%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
    }
});
s4Tl_1
    .to(".about-list li:nth-child(1)", { "clip-path": "inset(0% 0% 100% 0%)", duration: 1 }) 
    .to(".about-list li:nth-child(2)", { "clip-path": "inset(0% 0% 100% 0%)", duration: 1 }, "-=.8") 
    .to(".about-list li:nth-child(3)", { "clip-path": "inset(0% 0% 100% 0%)", duration: 1 }, "-=.8")

const s4Tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: "section.s4",
        start: "60% 0%",
        end: "100% 50%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
    }
});
s4Tl_2
    .to(".about-cont video",{width:"97%"},)
    

const workTl_1 = gsap.timeline({
    scrollTrigger:{
        trigger:'section.s5',
        start: '0% 60%', 
        end: '10% 40%',
        ease: "power2.out",
        scrub: 1
    }
})
workTl_1
    .to(".h1 span", {left:0},'0')
    .to(".h2 span", {right:0},'0')


const workTl_2 = gsap.timeline({
    scrollTrigger:{
        trigger:'section.s5',
        start: '85% 0%', 
        end: '105% 80%',
        ease: "power2.out",
        scrub: 1
    }
})
workTl_2
    .to(".container", {width:"97%"},'0')

const footer = gsap.timeline({
    scrollTrigger:{
        trigger: 'footer',
        start: '0% 80%',
        end: '20% 80%',
        ease: "power2.out",
        scrub: 1
    }
})
footer
    .to(".footer-inner", {transform:'translateY(0)'},'0')
    .to(".footer-inner", {opacity:1},'0')

$("#Topbtn").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
})

let brandorange1 = new SplitType(".intro-txt:nth-child(1) .des", { types: "chars", tagName: "span" });
charsorange01 = brandorange1.chars;

let brandTl01 = gsap.timeline({
    repeat:-1,
    defaults:{
        duration:1.2,
    }
})
.to(charsorange01,{color:'#4B6B7B',stagger:.1},0)
.to(charsorange01,{color:'#000',stagger:.1},2)

let brandorange2 = new SplitType(".intro-txt:nth-child(2) .des", { types: "chars", tagName: "span" });
charsorange02 = brandorange2.chars;

let brandTl02 = gsap.timeline({
    repeat:-1,
    defaults:{
        duration:1.2,
    }
})
.to(charsorange02,{color:'#6C757D',stagger:.1},0)
.to(charsorange02,{color:'#000',stagger:.1},2)

let brandorange3 = new SplitType(".intro-txt:nth-child(3) .des", { types: "chars", tagName: "span" });
charsorange03 = brandorange3.chars;

let brandTl03 = gsap.timeline({
    repeat:-1,
    defaults:{
        duration:1.2,
    }
})
.to(charsorange03,{color:'#A1D6E2',stagger:.1},0)
.to(charsorange03,{color:'#000',stagger:.1},2)

gsap.to('.work-footer .slide .txt',{
    xPercent: -100,       
    duration: 20,          
    ease: "none",          
    repeat: -1,   
})

