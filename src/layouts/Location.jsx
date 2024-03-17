import React from "react";

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center w-full my-1 overflow-hidden">
      <iframe
        className="w-full h-64 md:h-96 lg:h-128 xl:h-144"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.9020060643059!2d19.824464734874383!3d41.31824195851795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031d53942bf4b%3A0xc29b959022f4c53!2sAir%20Albania%20Stadium!5e0!3m2!1sen!2s!4v1708634507033!5m2!1sen!2s"
        title="Location Map"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
