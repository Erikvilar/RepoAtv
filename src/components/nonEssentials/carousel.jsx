import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "/src/style/carousel.css"
import Buttons from './home-components/buttons';
 const carousel = () => {

    return (
        <Carousel className='carousel-content' >
          <Carousel.Item className='carousel-item'>
   
            <div className='img-carousel'>
            <div className='title-buttons-carousel'><h1>Mapa Mental</h1></div>
             <img src="./src/images/Análise SWOTFOFA.png" alt=""/>
             </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}> 
          <div className='button-carousel'>
      <div className='title-buttons-carousel'> <h1>Minha Playlist Atual</h1></div>
       <Buttons path={"https://music.youtube.com/watch?v=kIBK3unIg7Q&si=7kZDJFiULk970k4J"} text={"never easy - drown-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=bv0tiE3-YlA&si=CLqvowsO_eWRd1qm"} text={"Static-x Just in Case-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=jsFQ5pRZy3E&si=YeqjLefEAvVQAP-0"} text={"Earshot - Wait -"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=QuwUk1__ah0&si=VgpuCinY31RPHiw6"} text={"Trust Company Running From Me-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=iFRLbzyrzZI&si=iHZHVgmKA8oKH-Jc"} text={"Seether Driven Under-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=OoDWlbdJw7Y&si=xgL3h8gyMOmS6Kyb"} text={"Seether Fine Again-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=Nco_kh8xJDs&si=vVHePdm95fw66cQA"} text={"Alice in Chains Would?-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=2_ANCiQOEfw&si=rCWbuHWoaFfkLFVE"} text={"Limp Bizkit Nookie-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=gUmARJ0o6Hw&si=gDO17nbixhglpREm"} text={"Karnivool Cote-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=ifJt_64ege0&si=aFqS7kiBm9cHTJTh"} text={"The Butterfly Effect Signs "} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=__lRFR3UV_A&si=i9nyFibtgYw6tvxP"} text={"The Effect Butterfly Consequence-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=liV4CBI14oA&si=eA9yGlCUSHdxhLTB"} text={"The Effect Butterfly Crave"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=HkD8r8vdw08&si=acsVl0gVxSiJ3EMP"} text={"kyuss Demon Cleaner-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=Y00Rjs5b9mo&si=RaGnj8t1ir0awu7K"} text={"Queens Of The Stone Age If Only-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=AZdyD8yFQaU&si=2vAc4VVv2jotyyZQ"} text={"Queens of The Stone Age Make it wit chu-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=lU2rUiQmJKM&si=oFKzLMSmKjG_yJNE"} text={"Queens of The Stone Age Regular John"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=i_45GLa_F70&si=avhiPLO4XTTVkodd"} text={"Queens The Stone of Age You Think I Ain't Worth A Dollar, But I Feel Like A Millionaire-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=j0lSpNtjPM8&si=KamEiWZKYhbfwIFN"} text={"Papa Roach Last Resort-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=H2jCbXiEQI4&si=VFWpbGuuxZF8B1H_"} text={"Papa Roach Between Angels And Insects-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=Q4APBJ1w_tQ&si=UhnJMbJTEHfrjhNk"} text={"Papa Roach Getting Away With Murder-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=1m51XbfT_tw&si=Rp-jjH88wsRLX0Za"} text={"Arctic Monkeys Crying Lightning"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=NgLWF2XJyKA&si=ZyhXpHHZtMkgCILn"} text={"Arctic Monkeys Old Yellow Bricks-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=qU9mHegkTc4&si=_TKH9g0aoe3EXX7S"} text={"Arctic Monkeys 505-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=VredAgNScOw&si=06WPrxNSWZ25ISCv"} text={"Arctic Monkeys Teddy Picker-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=MaFEHf34fCQ&si=9iOULDjhwg1NJQuh"} text={"Arctic Monekeys Do me a Favour-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
       <Buttons path={"https://music.youtube.com/watch?v=MaFEHf34fCQ&si=9iOULDjhwg1NJQuh"} text={"Arctic Monkeys I want it All-"} img={"https://cdn-icons-png.freepik.com/512/500/500195.png"}/>
  

       




        
        
             </div>
            <Carousel.Caption>
       
    
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className='img-carousel'>
          <div className='title-buttons-carousel'> <h1>SPACE</h1></div>
             </div>
            <Carousel.Caption>
   
         
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default carousel

