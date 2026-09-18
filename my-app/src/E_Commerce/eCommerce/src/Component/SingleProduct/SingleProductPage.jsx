import React, { useState } from 'react'
import './SingleProductPage.css'
import QuantityInput from './QuantityInput';

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  images: [
    "https://picsum.photos/500/500?random=1",
    "https://picsum.photos/500/500?random=2",
    "https://picsum.photos/500/500?random=3",
    "https://picsum.photos/500/500?random=4",
  ],
  stock: 10,

};



const SingleProductPage = () => {
  const [selectedImage, setselectedImage] = useState(0);
  return (
    <>
      <section className='align_center single_product justify-center py-[32px] '>
        <div className='align_center'>
          <div className="single_product_thumbnails">
            {product.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  className={
                    selectedImage === index ?  'selected_image': '' }
                  onClick={() => setselectedImage(index)}
                />
              );
            })}
          </div>

          <img src={product.images[selectedImage]} alt={product.title}
            className=
              'single_product_display w-[600px] h-[600px] object-cover rounded-[10px] ' />
        </div>

        <div className='single_product_details'>
              <h1 className='single_product_title'>
                  {product.title}
              </h1>
              <p className='single_product_description'>{product.description}</p>
              <p className='single_product_price'>{product.price.toFixed(2)}</p>

              <h2 className='quantity_title'>Quantity :</h2>

              <div className='align_center quantity_input'>
                  <QuantityInput/>

              </div>

              <button className="search_button add_cart"> Add to Cart </button>

        </div>
      </section>
    </>
  )
}

export default SingleProductPage