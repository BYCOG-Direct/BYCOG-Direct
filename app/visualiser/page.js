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

    // These event handlers enable the id's of the elements to be passed to the Javascript
    const passTo = (event, param) => {
        uncheck(param,event.currentTarget.id);
        textWrite(event.currentTarget.id)
    };

    const clear = (event) => {
        clearAll(event.currentTarget.id);
    };

    const copyText = (event) => {
        copy(event.currentTarget.id);
    };

    const read = (event) => {
        textRead(event.currentTarget.id);
        convertToOps(event.currentTarget.id)
    };

    const newEmpty = (event) => {
        empty(event.currentTarget.id);
    };

    const newDuplicate = (event) => {
        duplicate(event.currentTarget.id);
    };

    const write = (event) => {
        convertFromOps(event.currentTarget.id)
    };

    const print = (event) => {
        console.log("hi");
    };

    return (
        <main>
        
            <Module />

        </main>
    )
}

