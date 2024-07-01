import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Dropdown, Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
// import { Button } from "flowbite-react";
const NavbarComponent = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          <img src="/stemlogo.jpg" className="ml-28 h-[59px] w-[77px]" alt="Stem logo"/> 
        </Navbar.Link>
      </Navbar.Collapse>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar className="mr-3"  alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            
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
        <Navbar.Link as={Link} to="/book"  className="font-suwannaphum text-[20px] font-semibold">សៀវភៅ</Navbar.Link>
        <Navbar.Link as={Link} to="/lesson"  className="font-suwannaphum text-[20px] font-semibold">មេរៀន</Navbar.Link>
        <Navbar.Link as={Link} to="/forum"  className="font-suwannaphum text-[20px] font-semibold">វេទិកា</Navbar.Link>
        <Navbar.Link as={Link} to="/blog"  className="font-suwannaphum text-[20px] font-semibold">ប្លុក</Navbar.Link>
        <Navbar.Link as={Link} to="/about-us"  className="font-suwannaphum text-[20px] font-semibold">អំពីយើង</Navbar.Link>
        <Navbar.Link as={Link} to="/create"  className="font-suwannaphum text-[28px]  font-semibold text-red-700 -mt-2 ml-56"><BiSolidVideoPlus /></Navbar.Link>
        <Navbar.Link as={Link} to="/notification"  className="font-suwannaphum text-[28px] -mt-2 font-semibold text-yellow-300"><MdNotificationsActive /></Navbar.Link>
        <Navbar.Link as={Link} to="/login" className="font-suwannaphumg text-[20px] font-semibold -mt-3">
        <Navbar.Link as={Link} to="/login" className="font-suwannaphumg text-[20px] font-semibold -mt-3">
        <Button className="text-black border-2 border-black bg-white hover:bg-blue-600">
          ចូលគណនី
      </Button>
        </Navbar.Link>
      </Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
  );
};

export default NavbarComponent;
