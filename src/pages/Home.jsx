import React from 'react'

function Home() {
    return (
        <div>
            <section className='landing'>
                <div className='title'>
                <h1>Lessons and insights <br />
                    <span className='span'>from 8 years</span></h1>
                </div>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </section>
            <div className='ourclients'>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className='manage'>
                <h1>Manage your entire community in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>

        </div>
    )
}

export default Home
