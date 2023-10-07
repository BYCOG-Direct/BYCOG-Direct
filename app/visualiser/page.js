'use client';
import {useState} from 'react';
import Module from './module';
import { defaultStyles, emptyType } from "./diagramChanges";
import Image from 'next/image';

export default function Page() {
    const [modules, setModules] = useState([{ styles: defaultStyles, type: emptyType }]);

    const setType = (index, newType) => {
        setModules((prevModules) => {
            // Create a shallow copy of the original modules array
            const updatedModules = [...prevModules];
        
            // Update the type for the specified index
            updatedModules[index] = {
              ...updatedModules[index],
              type: newType,
            };
        
            return updatedModules;
        });
    }

    const setStyles = (index, newStyles) => {
        setModules((prevModules) => {
            // Create a shallow copy of the original modules array
            const updatedModules = [...prevModules];
        
            // Update the type for the specified index
            updatedModules[index] = {
              ...updatedModules[index],
              styles: newStyles,
            };
        
            return updatedModules;
        });  
    }

    const deleteModule = (index) => {
        setModules((prevModules) => prevModules.filter((mod, i) => i != index));
    }

    const newModule = () => {
        setModules((prevModules) => {
            return [...prevModules, { type: emptyType, styles: defaultStyles }]
        })
    }

    const duplicateModule = (index) => {
        setModules((prevModules) => {
            const updatedModules = [...prevModules];
            const indexedModule = updatedModules[index];
            return [...updatedModules, indexedModule];
        })
    }

    return (
        <main className={modules.length === 0 ? 'min-h-screen flex justify-center' : ''}>
            <div className="flex justify-center items-center flex-col gap-7 flex-wrap mt-5" id="god">
                <div>
                    <div className='max-w-max p-3 mx-auto bg-gray rounded-full cursor-pointer hover:scale-[1.1] hover:opacity-[0.85] transition duration-[0.1s]' onClick={newModule}>
                        <Image className='w-12 h-12' src="/images/visualiser/plus.svg" height={0} width={0} sizes="100vw" />
                    </div>
                    <div className='mt-1'>
                        Add Bycode
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 flex-wrap'>
                    {modules.map((mod, i) => (
                        <Module 
                            key={i}
                            index={i} 
                            setType={setType} 
                            setStyles={setStyles} 
                            type={mod.type}
                            styles={mod.styles}
                            deleteModule={deleteModule}
                            duplicateModule={duplicateModule}
                        />
                    ))}
                </div>
                <div className="text-sm mb-10 w-3/4 mx-auto text-center">
                    All web design, coding and functionality is Copyright © Divydation & Sectonic 2023. All rights reserved. The design and imagery of the Tilewheel is Copyright © Loglyn 2023. All rights reserved. 
                </div>
            </div>
        </main>
    )
}

