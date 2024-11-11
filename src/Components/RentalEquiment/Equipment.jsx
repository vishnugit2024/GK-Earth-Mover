import React, { useState } from "react";
import "./Equipment.css";
import Miningtruck from "../../Assets/MiningTruck.png";
import MiningHigh from "../../Assets/MiningHigh.png";
import RangeExcavator from "../../Assets/RangeExcavator.png";
import Cranes1 from "../../Assets/Cranes1.jpg";
import Cranes2 from "../../Assets/Cranes2.jpg";
import Cranes3 from "../../Assets/Cranes3.png";
import Lorrytruck1 from "../../Assets/Lorrytruck1.jpg";
import Lorrytruck2 from "../../Assets/Lorrytruck2.jpg";
import Lorrytruck3 from "../../Assets/Lorrytruck3.jpg";

const Equipment = () => {
  const [equipmentData, setEquipmentData] = useState([
    {
      id: 1,
      name: "Mining Truck with AC",
      category: "Mining Truck",
      image: Miningtruck,
      priceStartsFrom: "₹159",
      rentalPrices: {
        daily: "₹130/Day",
        weekly: "₹350/Week",
        monthly: "₹875/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹125",
      specs: [
        "Maximum Reach: 2 Meter",
        "Operating Weight: 0.6 Ton",
        "Model: Lot456",
        "Digging Depth: 3.5 Meter",
        "Brand: Weekers",
      ],
    
      selectedPrice: "week",
    },
    {
      id: 2,
      name: "Range Excavator",
      category: "Excavators",
      image: RangeExcavator,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 3,
      name: "Mining Truck High Line Series",
      category: "Mining Truck High",
      image: MiningHigh,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 4,
      name: "Mining Truck High Line Series",
      category: "Lorry trucks",
      image: Lorrytruck1,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 5,
      name: "Mining Truck High Line Series",
      category: "Lorry trucks",
      image: Lorrytruck2,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 6,
      name: "Mining Truck High Line Series",
      category: "Lorry trucks",
      image: Lorrytruck3,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 7,
      name: "Mining Truck High Line Series",
      category: "Cranes",
      image: Cranes1,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 8,
      name: "Mining Truck High Line Series",
      category: "Cranes",
      image: Cranes2,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 9,
      name: "Mining Truck High Line Series",
      category: "Cranes",
      image: Cranes3,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 10,
      name: "Mining Truck High Line Series",
      category: "Forklifts",
      image: MiningHigh,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 11,
      name: "Mining Truck High Line Series",
      category: "Forklifts",
      image: MiningHigh,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ],
      
      selectedPrice: "week",
    },
    {
      id: 12,
      name: "Mining Truck High Line Series",
      category: "Forklifts",
      image: MiningHigh,
      priceStartsFrom: "₹200",
      rentalPrices: {
        daily: "₹180/Day",
        weekly: "₹500/Week",
        monthly: "₹1200/Month",
      },
      deliveryInfo: "Two-Way Delivery: ₹150",
      specs: [
        "Maximum Reach: 3 Meter",
        "Operating Weight: 1.5 Ton",
        "Model: EX123",
        "Digging Depth: 4 Meter",
        "Brand: ABC Corp",
      ]
    },
  ]);

  const [selectedTab, setSelectedTab] = useState("All Equipment");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handlePriceClick = (id, price) => {
    setEquipmentData((prevData) =>
      prevData.map((equipment) =>
        equipment.id === id ? { ...equipment, selectedPrice: price } : equipment
      )
    );
  };

  // Filter equipment data based on selected tab
  const filteredEquipmentData =
    selectedTab === "All Equipment"
      ? equipmentData
      : equipmentData.filter((equipment) => equipment.category === selectedTab);

  return (
    <>
      <div className="container RentalEquipment">
        <div className="row">
          <div className="equipment-title">
            <h3>Awesome Equipment</h3>
            <h1>Featured Rental Equipment</h1>
            <p>
              Our commitment to quality ensures that every piece of equipment we
              offer is maintained to the highest standards, delivering the
              performance need on-site.
            </p>
          </div>

          <div className="tab-section">
            {[
              "All Equipment",
              "Lorry trucks",
              "Cranes",
              "Forklifts",
              "Excavators",
            ].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${selectedTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredEquipmentData.map((equipment) => (
              <div key={equipment.id} className="col-lg-4 col-md-6">
                <div className="card equipment-card">
                  <div className="equipment-img">
                    <img
                      src={equipment.image}
                      className="card-img-top"
                      alt={equipment.name}
                    />
                  </div>
                  <div className="card-body">
                    <div className="price-info">
                      <h4 className="price-label">Price Starts From</h4>
                      <h2 className="price-value">
                        {equipment.priceStartsFrom}
                      </h2>
                    </div>
                    <h2 className="card-title">{equipment.name}</h2>
                    <hr />
                    <div className="rental-prices">
                      <button
                        className={`badge ${
                          equipment.selectedPrice === "day" ? "active" : ""
                        }`}
                        onClick={() => handlePriceClick(equipment.id, "day")}
                      >
                        {equipment.rentalPrices.daily}
                      </button>
                      <button
                        className={`badge ${
                          equipment.selectedPrice === "week" ? "active" : ""
                        }`}
                        onClick={() => handlePriceClick(equipment.id, "week")}
                      >
                        {equipment.rentalPrices.weekly}
                      </button>
                      <button
                        className={`badge ${
                          equipment.selectedPrice === "month" ? "active" : ""
                        }`}
                        onClick={() => handlePriceClick(equipment.id, "month")}
                      >
                        {equipment.rentalPrices.monthly}
                      </button>
                    </div>
                    <h4 className="delivery-info">{equipment.deliveryInfo}</h4>
                    <ul className="specs-list">
                      {equipment.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="rating">
                      <h4 className="rating-number">{equipment.rating}</h4>
                    </div>
                    <button className="reserve-btn">Reserve</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
