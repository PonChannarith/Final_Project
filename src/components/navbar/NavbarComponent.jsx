import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react';
import { BiSolidVideoPlus } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';

const NavbarComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [navbarList, setNavbarList] = useState([
    { title: "សៀវភៅ", path: "/book" },
    { title: "មេរៀន", path: "/lesson" },
    { title: "វេទិកា", path: "/forum" },
    { title: "ប្លុក", path: "/blog" },
  ]);

  return (
    <Navbar fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={pathname === '/'}>
          <img src="/stemlogo.jpg" className="ml-28 h-[70px] w-[90px]" alt="Stem logo" />
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar className="mr-3" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-56">
        {navbarList.map((item, index) => (
          <Navbar.Link
            key={index}
            as={Link}
            to={item.path}
            active={pathname === item.path}
            className="font-suwannaphum text-[20px] font-semibold"
          >
            {item.title}
          </Navbar.Link>
        ))}
        <Navbar.Link
          as={Link}
          to="/about-us"
          active={pathname === '/about-us'}
          className="font-suwannaphum text-[20px] font-semibold"
        >
          អំពីយើង
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/create"
          active={pathname === '/create'}
          className="font-suwannaphum text-[28px] font-semibold text-red-700 -mt-2 ml-56"
        >
          <BiSolidVideoPlus />
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/notification"
          active={pathname === '/notification'}
          className="font-suwannaphum text-[28px] -mt-2 font-semibold text-yellow-300"
        >
          <MdNotificationsActive />
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/login"
          active={pathname === '/login'}
          className="font-suwannaphumg text-[20px] font-semibold -mt-3"
        >
          <Button className="text-black border-2 border-black bg-white hover:bg-blue-600">
            ចូលគណនី
          </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
