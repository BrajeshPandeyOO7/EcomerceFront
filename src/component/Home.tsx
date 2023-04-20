import React from 'react'
import { image_url } from '../constant/image-config'

const Home = () => {
  return (
    <div className='home-page'>
        <div className='home-iamge-container'>
            <img src={image_url.homeImage} alt="some girls behind trains" />
            <div>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default Home