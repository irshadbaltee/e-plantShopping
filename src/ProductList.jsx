import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Redux cart items
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  // Calculate total quantity
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Fiddle Leaf Fig",
          image:
            "https://images.unsplash.com/photo-1614395371453-21ca8a11d3e7?w=500&auto=format&fit=crop&q=60",
          description: "Large, lush green leaves perfect for indoors.",
          cost: 40,
        },
        {
          name: "Snake Plant",
          image:
            "https://images.unsplash.com/photo-1563769874043-9eac75ae0049?w=500&auto=format&fit=crop&q=60",
          description: "Easy to care for and air-purifying.",
          cost: 25,
        },
        {
          name: "Peace Lily",
          image:
            "https://plus.unsplash.com/premium_photo-1694186687516-2ee5a54dcd4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVhY2UlMjBMaWx5fGVufDB8MHwwfHx8MA%3D%3D",
          description: "Elegant white blooms and purifies indoor air.",
          cost: 35,
        },
        {
          name: "ZZ Plant",
          image:
            "https://images.unsplash.com/photo-1686893043847-c7cd7bada50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8WlolMjBQbGFudHxlbnwwfDB8MHx8fDA%3D",
          description: "Tolerates low light and minimal watering.",
          cost: 22,
        },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        {
          name: "Rose Bush",
          image:
            "https://plus.unsplash.com/premium_photo-1700581724171-c88fab487d15?w=500&auto=format&fit=crop&q=60",
          description: "Colorful and fragrant flowers for your garden.",
          cost: 30,
        },
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611625105602-42ee06be977e?w=500&auto=format&fit=crop&q=60",
          description: "Soothing fragrance and beautiful purple blooms.",
          cost: 20,
        },
        {
          name: "Hydrangea",
          image:
            "https://images.unsplash.com/photo-1594676979216-380a0257305d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SHlkcmFuZ2VhfGVufDB8MHwwfHx8MA%3D%3D",
          description: "Big, colorful blooms that brighten your yard.",
          cost: 28,
        },
        {
          name: "Marigold",
          image:
            "https://images.unsplash.com/photo-1696569386118-ad11f08ba013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hcmlnb2xkfGVufDB8MHwwfHx8MA%3D%3D",
          description: "Bright orange and yellow blooms, pest-repelling.",
          cost: 15,
        },
      ],
    },
    {
      category: "Succulent Plants",
      plants: [
        {
          name: "Echeveria",
          image:
            "https://images.unsplash.com/photo-1655315648147-76dbdeb263c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVjaGV2ZXJpYXxlbnwwfDB8MHx8fDA%3D",
          description: "Rosette-shaped succulent, low maintenance.",
          cost: 12,
        },
        {
          name: "Aloe Vera",
          image:
            "https://images.unsplash.com/photo-1705056470438-b21c0bcda8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFsb2UlMjBWZXJhfGVufDB8MHwwfHx8MA%3D%3D",
          description: "Medicinal and easy to care for.",
          cost: 18,
        },
        {
          name: "Jade Plant",
          image:
            "https://images.unsplash.com/photo-1718703917259-3eb0713cca2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEphZGUlMjBQbGFudHxlbnwwfDB8MHx8fDA%3D",
          description: "Attractive glossy leaves, symbol of luck.",
          cost: 20,
        },
      ],
    },
    {
      category: "Flowering Plants",
      plants: [
        {
          name: "Hibiscus",
          image:
            "https://images.unsplash.com/photo-1604545199306-23ee04a34dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGliaXNjdXN8ZW58MHwwfDB8fHww",
          description: "Large colorful blooms, loves sunlight.",
          cost: 25,
        },
        {
          name: "Sunflower",
          image:
            "https://images.unsplash.com/photo-1491929007750-dce8ba76e610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN1bmZsb3dlcnxlbnwwfDB8MHx8fDA%3D",
          description: "Tall, bright yellow flowers, attracts pollinators.",
          cost: 18,
        },
        {
          name: "Geranium",
          image:
            "https://images.unsplash.com/photo-1624982758922-685d367b7a57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2VyYW5pdW18ZW58MHwwfDB8fHww",
          description: "Great for pots and window boxes, fragrant.",
          cost: 16,
        },
      ],
    },
    {
      category: "Herbal Plants",
      plants: [
        {
          name: "Basil",
          image:
            "https://plus.unsplash.com/premium_photo-1725899523683-838307ab1552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmFzaWx8ZW58MHwwfDB8fHww",
          description: "Aromatic herb for culinary use.",
          cost: 10,
        },
        {
          name: "Mint",
          image:
            "https://images.unsplash.com/photo-1695229901223-5780d7f16424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1pbnR8ZW58MHwwfDB8fHww",
          description: "Cooling and refreshing herb, easy to grow.",
          cost: 8,
        },
        {
          name: "Rosemary",
          image:
            "https://images.unsplash.com/photo-1587403507422-72a18cbec9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJvc2VtYXJ5fGVufDB8MHwwfHx8MA%3D%3D",
          description: "Woody aroma, ideal for roasts and soups.",
          cost: 12,
        },
      ],
    },
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Areca Palm",
          image:
            "https://images.unsplash.com/photo-1733743366591-398701d23feb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFyZWNhJTIwUGFsbXxlbnwwfDB8MHx8fDA%3D",
          description: "Purifies air and adds tropical vibes indoors.",
          cost: 30,
        },
        {
          name: "Spider Plant",
          image:
            "https://images.unsplash.com/photo-1695376051556-41e6bef1dae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNwaWRlciUyMFBsYW50fGVufDB8MHwwfHx8MA%3D%3D",
          description: "Excellent for indoor air detox.",
          cost: 22,
        },
        {
          name: "Boston Fern",
          image:
            "https://images.unsplash.com/photo-1556929361-cec445926332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFpciUyMHB1cmlmeWluZyUyMHBsYW50c3xlbnwwfDB8MHx8fDA%3D",
          description: "Great humidity absorber, thrives in bathrooms.",
          cost: 24,
        },
      ],
    },
  ];


  const allPlants = plantsArray.flatMap((category) => category.plants);

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3 style={{ color: "white", paddingLeft: "10px" }}>
                  Paradise Nursery
                </h3>
                <i style={{ color: "white", paddingLeft: "10px" }}>
                  Where Green Meets Serenity
                </i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className="cart" style={{ position: "relative" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  height="68"
                  width="68"
                >
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                {/* Show total items in cart */}
                {calculateTotalQuantity() > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "7px 10px",
                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    {calculateTotalQuantity()}
                  </span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {allPlants.map((plant, index) => (
            <div className="product-card" key={index}>
              <img
                src={plant.image}
                alt={plant.name}
                className="product-image"
              />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>
                <strong>{plant.cost}</strong>
              </p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(plant)}
                disabled={addedToCart[plant.name]}
              >
                {addedToCart[plant.name] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
