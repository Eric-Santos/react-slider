import React, { useRef, useEffect, useState}from 'react';
import { motion } from 'framer-motion'
import './slider.css'
import images from '../../images'

const Slider = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing'}}>
            <motion.div
                drag= 'x'
                dragConstraints={{ right: 0, left: -width }}
                className='inner-carousel'>
                {images.map((img, i) => {
                    return (
                        <motion.div key={i} className='item'>
                            <img src={img} alt="" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    );
};

export default Slider;
