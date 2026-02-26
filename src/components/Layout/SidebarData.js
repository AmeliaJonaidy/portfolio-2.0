import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as TiIcons from 'react-icons/ti';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'About Me',
        path: '/aboutme',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text',
        subItems: [
            {
                title: 'Volunteer Experiences',
                path: '/aboutme/volunteer',
                icon: <FaIcons.FaHandsHelping />
                ,
            },
            {
                title: 'Interest Groups/Project',
                path: '/aboutme/interestgroup',
                icon: <MdIcons.MdOutlineComputer />,
            },
            {
                title: 'Competitions',
                path: '/aboutme/competitions',
                icon: <FaIcons.FaTrophy  />,
            },
            {
                title: 'Awards/Scholarships',
                path: '/aboutme/award',
                icon: <FaIcons.FaAward   />,
            },
        ],
    },
    {
        title:'My Portfolio',
        path:'/portfolio',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text',
        subItems: [
            {
                title: 'Web Applications',
                path: '/portfolio/webapp',
                icon: <CgIcons.CgWebsite  />
                ,
            },
            {
                title: 'Mobile Applications',
                path: '/portfolio/mobileapp',
                icon: <FaIcons.FaMobileAlt  />,
            },
            {
                title: 'Digital Design',
                path: '/portfolio/design',
                icon: <FaIcons.FaPencilAlt   />,
            },
            {
                title: 'Immersive Technologies',
                path: '/portfolio/immersive',
                icon: <BsIcons.BsHeadsetVr />,
            },
            {
                title: 'Artificial Intellgience',
                path: '/portfolio/ai',
                icon: <FaIcons.FaRobot/>,
            },
        ],
    },
    {
        title:'Contact',
        path:'/contact',
        icon: <TiIcons.TiContacts/>,
        cName:'nav-text'
    },
]