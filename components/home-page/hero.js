import Image from 'next/image';
import classes from './hero.module.css'

function Hero() {
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.jpg"  alt="Image showing Jhon" width={300} height={300} />
            </div>
            <h1> Hi, I am Jhon </h1>
            <p>
                I blog about web developmemnt. Especailly, forntend framework like
                Angular and React.
            </p>
        </section>
    )
}

export default Hero;