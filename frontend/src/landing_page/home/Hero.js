
import React from 'react'

function Hero() {
    return (
        <div>
            <div className="container p-5">

                <div className="row text-center">
                    <img
                        src="Media/HomeHero.png"
                        alt="Hero Image"
                        className="img-fluid mb-5"
                    />
                </div>
                <div className="text-center">
                    <h1>Invest in everything</h1>

                    <p>
                        Online platform to invest in stocks, derivatives,
                        mutual funds, ETFs, bonds, and more.
                    </p>
                    <button className="btn btn-primary">
                        Sign Up Now
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default Hero

