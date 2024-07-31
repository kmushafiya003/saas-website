// src/data/navbarData.js

export const NavLinks1 = [
    {
        id: 1,
        isDropDown: true,
        link: [
            {
                title: "Home",
                path: "/"
            },
            {
                title: "Home2",
                path: "/Home2"
            },
            {
                title: "Home3",
                path: "/home3"
            },
        ]
    },
    {
        id: 2,
        isDropDown: false,
        title: "About us",
        path: "/about-us"
    },
    {
        id: 3,
        isDropDown: true,
        link: [
            {
                title: "Services",
                path: "/services"
            },
            {
                title: "Service Details",
                path: "/service-details"
            },
        ]
    },
    {
        id: 4,
        isDropDown: true,
        link: [
            {
                title: "Blog",
                path: "/blog"
            },
            {
                title: "Blog Details",
                path: "/blog-details"
            },
        ]
    },
    {
        id: 5, // Changed id to avoid duplicate id
        isDropDown: false,
        title: "Contact us", // Added title to match structure
        path: "/contact-us"
    },
];

export const NavLinks2 = [
    {
        id: 1,
        title: "Demos",
        path: "#"
    },
    {
        id: 2,
        title: "Features",
        path: "#features"
    },
    {
        id: 3, // Changed id to avoid duplicate id
        title: "Pricing",
        path: "#pricing"
    },
    {
        id: 4, // Changed id to avoid duplicate id
        title: "Contact",
        path: "#"
    },
];
