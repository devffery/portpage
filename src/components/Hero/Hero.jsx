import React from 'react'
import css from './Hero.module.scss'
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
	return (
		<section className={`paddings ${css.wrapper}`}>
			<motion.div initial="hidden" 
			whileInView="show" 
			variants={staggerContainer} 
			viewport={{once:false, amount:0.25}} 
			className={`innerWidth ${css.container}`}>
				<div className={css.upperElements}>
					<motion.span variants={fadeIn("right", "tween", 0.2, 1)} className="primaryText">Hey There, <br />I'm Devffery.</motion.span>
					<motion.span variants={fadeIn("left", "tween", 0.2, 1)} className="secondaryText">I specialize in designing & <br/> developing intuitive interfaces</motion.span>
				</div>

				<motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.person}>
					<motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="Devffery" />
				</motion.div>

				<a className={css.email} href="mailto:ds.tipsymail@gmail.com">Email</a>

				<div className={css.lowerElements}>
					<motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
						<div className="primaryText">1</div>
						<div className='secondaryText'><div>Year(s)</div><div>Experience</div></div>
					</motion.div>

					<motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
						<img src="./certificate.png" alt="" />
						<span>CERTIFIED PROFESSIONAL</span>
						<span>DEVELOPER & DESIGNER</span>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

export default Hero