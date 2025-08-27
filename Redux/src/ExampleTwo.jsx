import React from 'react'

function ExampleTwo() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Breadcrumb & Product Details */}
          <div className="flex-1">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-700">
                    Women
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700">
                    Clothing
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="font-medium text-gray-900">Basic Tee</li>
              </ol>
            </nav>

            {/* Title + Price */}
            <h1 className="text-2xl font-bold text-gray-900">Basic Tee</h1>
            <p className="mt-2 text-lg text-gray-600">$35</p>

            {/* Reviews */}
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex text-yellow-400">★★★★☆</div>
              <p className="text-sm text-gray-600">3.9 out of 5 stars</p>
              <a
                href="#"
                className="ml-2 text-sm text-indigo-600 hover:underline"
              >
                See all 512 reviews
              </a>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-6">
              {/* Color */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <div className="flex gap-3 mt-2">
                  <label>
                    <input type="radio" name="color" defaultChecked />
                    <span className="ml-1">Black</span>
                  </label>
                  <label>
                    <input type="radio" name="color" />
                    <span className="ml-1">Heather Grey</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    See sizing chart
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                    <label
                      key={i}
                      className="border rounded-md py-2 text-center text-sm cursor-pointer hover:border-indigo-500"
                    >
                      <input type="radio" name="size" className="hidden" />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
              >
                Add to cart
              </button>
            </form>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">
                The Basic tee is an honest new take on a classic. The tee uses
                super soft, pre-shrunk cotton for true comfort and a dependable
                fit.
              </p>
            </div>

            {/* Fabric & Care */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">
                Fabric & Care
              </h2>
              <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                <li>Only the best materials</li>
                <li>Ethically and locally made</li>
                <li>Pre-washed and pre-shrunk</li>
                <li>Machine wash cold with similar colors</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex-1">
            <h2 className="sr-only">Images</h2>
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
                alt="Back of women's Basic Tee in black."
                className="w-full h-auto rounded-md object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-01.jpg"
                  alt="Side profile"
                  className="w-full h-auto rounded-md object-cover"
                />
                <img
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-02.jpg"
                  alt="Front profile"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleTwo
