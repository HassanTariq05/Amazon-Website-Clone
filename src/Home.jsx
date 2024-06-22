import React from 'react'
import home from './home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-cover-img' src='https://i.tribune.com.pk/media/images/amazon1657020459-0/amazon1657020459-0.jpg'></img>

        <div className="home-row">
            <Product 
                id= '123'
                title='BestOffice High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men,White'
                price={144.41}
                rating={3}
                image="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SY300_SX300_.jpg"
            />
            <Product 
                id='234'
                title='Razer Viper Ultimate Lightweight Wireless Gaming Mouse & RGB Charging Dock: Hyperspeed Wireless Technology - 20K DPI Optical Sensor - 74g Lightweight - 70 Hr Battery - Mercury White'
                price={66.51}
                rating={4}
                image="https://m.media-amazon.com/images/I/618J0JFnhWL._AC_UY436_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home-row">
        <Product 
                id= '235'
                title='2.4GHz Wireless Gaming Headset for PC, PS5, PS4 - Lossless Audio USB & Type-C Gaming Headphones with Flip Microphone, 30-Hr Battery Gamer Headset for Switch, Laptop, Mobile, Mac'
                price={25.48}
                rating={5}
                image="https://m.media-amazon.com/images/I/71TtcvkJulL._AC_UY436_FMwebp_QL65_.jpg"
            />
            <Product 
                id= '232'
                title='MageGee 75% Mechanical Gaming Keyboard with Blue Switch, LED Blue Backlit Keyboard, 87 Keys Compact TKL Wired Computer Keyboard for Windows Laptop PC Gamer - Blue/White'
                price={27.31}
                rating={4}
                image="https://m.media-amazon.com/images/I/61eavECexVL._AC_UY436_FMwebp_QL65_.jpg"
            />
            <Product 
                id= '237'
                title='Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Silver'
                price={1444.41}
                rating={3}
                image="https://m.media-amazon.com/images/I/61bwiPRcv2L._AC_UY436_FMwebp_QL65_.jpg"
            />
        </div>

        <div className="home-row">
        <Product 
                id= '231'
                title='GIGABYTE GV-N406TGAMING OC-8GD GeForce RTX 4060 Ti Gaming OC 8G Graphics Card, 3X WINDFORCE Fans, 8GB 128-bit GDDR6, Video Card'
                price={372.11}
                rating={5}
                image="https://m.media-amazon.com/images/I/71IUNo7LKZL._AC_UL640_FMwebp_QL65_.jpg"
            />
        </div>
      </div>
    </div>
  )
}

export default Home
