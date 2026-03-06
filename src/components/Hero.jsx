const Hero = () => {
    return (
        <section id="hero">
            <div>
                {/*<img className="navbar-logo pb-4" src="/lgdg-logo.png" alt="Hero logo" />*/}

                <h1 className="text-6xl text-center pb-5 bg-gradient-to-r from-teal-600 via-blue-400 to-red-600 inline-block text-transparent bg-clip-text">
                    Lethbridge Game Developer's Guild
                </h1>
                <h1 className="text-4xl">Learn. Build. Succeed.</h1>
            </div>

            <video src="/videos/hero.mp4" autoPlay muted playsInline />

        </section>
    )
}
export default Hero
