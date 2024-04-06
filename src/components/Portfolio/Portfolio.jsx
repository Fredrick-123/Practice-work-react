import './Portfolio.scss';
import { useRef } from 'react';
import {motion , useScroll , useSpring , useTransform } from 'framer-motion'
const items =[{
    id:1,
    title:"React Commerce",
    img: "https://images.pexels.com/photos/20450982/pexels-photo-20450982/free-photo-of-a-woman-reading-a-book-in-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aut quam. Magni, delectus! Rem, impedit optio. Cupiditate repellat autem culpa est temporibus! Corrupti laudantium possimus ea iste, rerum dolorum est."
 },
 {
    id:2,
    title:"Next.js Commerce",
    img: "https://images.pexels.com/photos/19561749/pexels-photo-19561749/free-photo-of-young-man-in-glasses-and-retro-suit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aut quam. Magni, delectus! Rem, impedit optio. Cupiditate repellat autem culpa est temporibus! Corrupti laudantium possimus ea iste, rerum dolorum est."
},
{
    id:3,
    title:"Vanilla Js App",
    img: "https://images.pexels.com/photos/20369633/pexels-photo-20369633/free-photo-of-a-woman-in-black-coat-and-white-stockings-holding-a-bouquet-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aut quam. Magni, delectus! Rem, impedit optio. Cupiditate repellat autem culpa est temporibus! Corrupti laudantium possimus ea iste, rerum dolorum est."
},
{
    id:4,
    title:"Music App",
    img: "https://images.pexels.com/photos/20620099/pexels-photo-20620099/free-photo-of-model-leaning-on-sunlit-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aut quam. Magni, delectus! Rem, impedit optio. Cupiditate repellat autem culpa est temporibus! Corrupti laudantium possimus ea iste, rerum dolorum est."
}

]

const Single = ({item}) => {
    
    const ref = useRef();
    const {scrollYProgress} = useScroll({ target: ref })


    const y = useTransform(scrollYProgress , [0 , 1] , ["0%", "300%"])


    return(
        <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="item" />
            </div>
            <motion.div className='textContainer'  style={{y}} >
                <h2>{item.title}</h2>

                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>

        </section>
    )
}


const Portfolio = () => {

    const ref = useRef();


    const {scrollYProgress} = useScroll({ target: ref , offset: ["end end" , "start start"]})


    const scaleX = useSpring(scrollYProgress , {
        stiffness:100,
        damping: 30,
    })

  return (

    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
              {items.map(item =>(
               <Single item={item} key={item.id}/>
              ))}
    </div>

  )
}

export default Portfolio