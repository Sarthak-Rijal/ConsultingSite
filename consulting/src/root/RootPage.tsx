import React from "react";
import { TopNavigation, TopNavigationProps } from '@cloudscape-design/components'
import { Navigate, Route, Routes} from 'react-router-dom'
import { HomePage } from "../home/HomePage";

export interface RootPageProps {
}

export function RootPage({}: RootPageProps): React.ReactElement {

    const identity: TopNavigationProps.Identity = {
        href: '/',
        title:"Software Consulting Site",
        logo: {
            src: "https://preview.redd.it/why-didnt-they-take-the-ring-to-mordor-on-a-skate-are-they-v0-az7me5yv9mzb1.png?auto=webp&s=cd68338945c79360335df93db5f8aefae799110b"       
        }

    }
    return (
        <>
            <TopNavigation  identity={identity}></TopNavigation>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                    
            </Routes>
        </>
    )
}