import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="flex bg-regal-blue py-5 text-white shadow-nav">
          <Image
            className="mx-2"
            src="images/heart-pulse-solid.svg"
            alt="heart"
            width={0}
            height={0}
            style={{ width: 20, height: 20 }}
          />
          <h1>Status Bar</h1>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
