import { Typography } from "@material-tailwind/react";

const NavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        >
        <a href="#" className="flex items-center">
            My Library
        </a>
        </Typography>
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        >
        <a href="#" className="flex items-center">
            New Releases
        </a>
        </Typography>
        <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        >
        <a href="#" className="flex items-center">
            Popular
        </a>
        </Typography>
    </ul>
);

export default NavList;