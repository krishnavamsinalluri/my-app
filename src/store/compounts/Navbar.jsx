import React from 'react'

function Navbar() {
  return (
    <div>
                    <div>
                <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 class="navbar-brand mb-0 h1 bi bi-house-fill" >Home</h3>
                    <input type="search" placeholder="Search..." aria-label="Search"  ></input>
                    <h3 class="navbar-brand bi bi-cart-dash-fill" >Cart</h3>

                </div>
                </nav>
            </div>
            <div className='sub'>
              <ul>
                  <li>Moblies</li>
                <li></li>
                <li>Computers</li>
                <li></li>
                <li>Watches</li>
                <li></li>
                <li>Speakers</li>
                <li>
                </li>
                <li>Furniture</li>
                <li></li>
                <li>Men Wear</li>
                <li></li>
                <li>Women Wear</li>
              </ul>
            </div>

    </div>

  )
}

export default Navbar