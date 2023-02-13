import { useMemo, useState } from "react";
import Image from "next/image";
import Square from "commons/Square";
import Clients from "public/clients.svg";
import User from "public/user.svg";
import Settings from "public/settings.svg";
import Logout from "/public/logout.svg";
import Menu from "public/menu.png";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("user");

  const items = useMemo(() => {
    return [
      { id: "clients", icon: Clients },
      { id: "user", icon: User },
      { id: "settings", icon: Settings },
    ];
  }, []);

  return (
    <div className="bg-white py-2 w-screen h-16 flex justify-between align-center fixed bottom-0 px-2 sm:static sm:flex-col sm:w-24 sm:py-8 sm:h-screen sm:items-center">
      <Image alt="menu-icon" src={Menu} className="h-fit sm:mb-10 " />
      {items?.map((element) => (
        <div key={element.id} className="mb-12">
          <Square
            size={"medium"}
            isActive={activeIcon === element.id ? true : false}
            icon={element.icon}
            alt={element.id}
            handleClick={() => setActiveIcon(element.id)}
          />
        </div>
      ))}
      <Square
        size={"medium"}
        icon={Logout}
        alt={"logout"}
        isActive={false}
        handleClick={() => console.log("fake logout !")}
      />
    </div>
  );
};

export default Navbar;
