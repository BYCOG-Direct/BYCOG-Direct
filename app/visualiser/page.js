'use client';
import Link from "next/link";
import Script from 'next/script'
import { hydrateRoot } from 'react-dom/client';
import dynamic from 'next/dynamic'
import React, {useEffect, useState} from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

import Banner from '@components/banner';
import Footer from '@components/footer';
import Testimonials from '@components/testimonials';
import Module from './components/module';


export default function Page() {
    const [modules, setModules] = useState([]);

    return (
        <main>
        
            <div className="flex justify-center items-center flex-row flex-wrap" id="god">
                <Module />
            </div>

        </main>
    )
}

