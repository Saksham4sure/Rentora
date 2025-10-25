import React from "react";

const Offerings = ({ className }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4 md:gap-x-20 items-center justify-center">
        <div className={className}>
          <i class="ri-wifi-fill text-4xl"></i>
          <p>Internet</p>
        </div>
        <div className={className}>
          <i class="ri-mac-fill text-4xl"></i>
          <p>Smart TV</p>
        </div>
        <div className={className}>
          <i class="ri-temp-hot-line text-4xl"></i>
          <p>Heating</p>
        </div>
        <div className={className}>
          <i class="ri-key-2-line text-4xl"></i>
          <p>Private Keys</p>
        </div>
        <div className={className}>
          <i class="ri-car-fill text-4xl"></i>
          <p>24/7 Parking</p>
        </div>
        <div className={className}>
          <i class="ri-first-aid-kit-fill text-4xl"></i>
          <p>First Aid</p>
        </div>
        <div className={className}>
          <i class="ri-restaurant-fill text-4xl"></i>
          <p>Kitchen</p>
        </div>
        <div className={className}>
          <i class="ri-camera-2-line text-4xl"></i>
          <p>Laundry</p>
        </div>
        <div className={className}>
          <i class="ri-ship-2-fill text-4xl"></i>
          <p>Boating</p>
        </div>
        <div className={className}>
          <i class="ri-walk-fill text-4xl"></i>
          <p>Nature Trails</p>
        </div>
        <div className={className}>
          <i class="ri-customer-service-2-fill text-4xl"></i>
          <p>24-Hour Support</p>
        </div>
      </div>
    </>
  );
};

export default Offerings;
