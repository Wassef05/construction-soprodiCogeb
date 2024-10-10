

export default function Map() {
  return (
    <div className="bg-gray-300/25 items-end justify-end  rounded-tr-3xl -ml-24  p-4 sm:p-0">
      <div className=" items-end flex justify-end pr-20 mt-0 mb-6 pt-10  pb-10" style={{ width: "100%" }}>
        <iframe
            className="rounded-tr-3xl "
          title="Google Map"
          width="80%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6470.669391744646!2d10.638223839368008!3d35.816263097037854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275146fcf441f%3A0x1b3f54171a3ed815!2scogeb_groupe!5e0!3m2!1sfr!2stn!4v1723674486651!5m2!1sfr!2stn"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
}
