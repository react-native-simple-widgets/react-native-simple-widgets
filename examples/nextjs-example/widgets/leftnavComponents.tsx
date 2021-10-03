import CloseIcon from "@mdi/svg/svg/close.svg";

const accordion00 = {
    title: "Basic",
    icon: CloseIcon,
    items: [
        { title: "Typography", pathname: "/basics/typography" },
        { title: "Button" },
        { title: "TextInput" },
    ],
};

const accordion01 = {
    title: "Card",
    icon: CloseIcon,
    items: [
        { title: "Card", pathname: "/cards/card" },
    ],
};

const accordion02 = {
    title: "Modal",
    icon: CloseIcon,
    items: [
        { title: "Modal", pathname: "/modals/modal" },
    ],
};

const section0 = {
    accordions: [
        accordion00,
        accordion01,
        accordion02,
    ],
};

export const leftnavComponents = [
    section0,
];
