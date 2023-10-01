const defaultModuleBorder = "shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]";
const defaultReflexBorder = "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]";

export const emptyType = {
    // Convert to OPS
    opsType: undefined,
    textType1: undefined,
    textType2: undefined,

    // Left checkbox status
    identifierModule: false,
    selfModule: false,
    knownModule: false,
    valueModule: false,
    abstractModule: false,
    intermediateModule: false,
    developerModule: false,

    // Right checkbox status
    evaluatorModule: false,
    othersModule: false,
    newsModule: false,
    reasonModule: false,
    concreteModule: false,
    extremeModule: false,
    navigatorModule: false,

    // Solid checkbox status
    solidSelfModule: false,
    solidKnownModule: false,
    solidOthersModule: false,
    solidNewModule: false,
}

export const defaultStyles = {
    // Module Borders
    othersBorder: defaultModuleBorder,
    selfBorder: defaultModuleBorder,
    newsBorder: defaultModuleBorder,
    knownBorder: defaultModuleBorder,

    // Module Left Letters
    othersLeftLetter: "?",
    selfLeftLetter: "?",
    newsLeftLetter: "?",
    knownLeftLetter: "?",

    // Module Colours
    othersColour: "bg-[#D0D0D0]",
    selfColour: "bg-[#D0D0D0]",
    newsColour: "bg-[#D0D0D0]",
    knownColour: "bg-[#D0D0D0]",

    // Module Main Letters
    othersMainLetter: "D",
    selfMainLetter: "D",
    newMainLetter: "O",
    knownMainLetter: "O",

    // Reflex Borders
    conferBorder: defaultReflexBorder,
    searchBorder: defaultReflexBorder,
    reviseBorder: defaultReflexBorder,
    directBorder: defaultReflexBorder,

    // Tether Styles
    crossTetherStyle: "opacity-0",
    directTetherStyle: "opacity-0 rotate-[0deg]",
    conferTetherStyle: "opacity-0 rotate-[90deg]",
    searchTetherStyle: "opacity-0 rotate-[180deg]",
    reviseTetherStyle: "opacity-0 rotate-[270deg]",
}

export const drawDiagram = (type, styles) => {

    const newStyles = { ...styles };

    const changeNewStyles = (changes) => {
        Object.assign(newStyles, changes);
    }

    // Others, Self, New, Known
    const osnk = [0, 0, 0, 0];
    const csrd = [0, 0, 0, 0];

    changeNewStyles({
        // Reset display
        crossTetherStyle: "opacity-0 rotate-[0deg]",
        directTetherStyle: "opacity-0 rotate-[0deg]",
        conferTetherStyle: "opacity-0 rotate-[90deg]",
        searchTetherStyle: "opacity-0 rotate-[180deg]",
        reviseTetherStyle: "opacity-0 rotate-[270deg]",
        knownMainLetter: "O",
        newMainLetter: "O",
        othersMainLetter: "D",
        selfMainLetter: "D",
    });

    // Colours & Letters!
    if ((type.abstractModule && type.knownModule) || (type.concreteModule && type.newsModule)) {
        changeNewStyles({
            knownMainLetter: "A",
            newMainLetter: "C",
            knownColour: "bg-[#f2cc8f]",
            newsColour: "bg-[#81b29a]",
        });
    }
    if ((type.abstractModule && type.newsModule) || (type.concreteModule && type.knownModule)) {
        changeNewStyles({
            knownMainLetter: "C",
            newMainLetter: "A",
            knownColour: "bg-[#81b29a]",
            newsColour: "bg-[#f2cc8f]",
        });
    }
    if ((type.reasonModule && type.othersModule) || (type.valueModule && type.selfModule)) {
        changeNewStyles({
            othersMainLetter: "R",
            selfMainLetter: "V",
            othersColour: "bg-[#7078bf]",
            selfColour: "bg-[#e07a5f]",
        });
    }
    if ((type.reasonModule && type.selfModule) || (type.valueModule && type.othersModule)) {
        changeNewStyles({
            othersMainLetter: "V",
            selfMainLetter: "R",
            othersColour: "bg-[#e07a5f]",
            selfColour: "bg-[#7078bf]",
        });
    }

    // Add numbers to osnk array depending on what is true/false in type!

    // Evaluator or Identifier
    if (type.evaluatorModule) {
        osnk[0] += 3;
        osnk[1] += 3;
        changeNewStyles({
            crossTetherStyle: "opacity-[1] rotate-[90deg]",
        });
    } else if (type.identifierModule) {
        osnk[2] += 3;
        osnk[3] += 3;
        changeNewStyles({
            crossTetherStyle: "opacity-[1] rotate-[0deg]",
        });
    }

    // Others or Self
    if (type.othersModule) {
        osnk[0] += 1;
        osnk[1] -= 1;
    } else if (type.selfModule) {
        osnk[1] += 1;
        osnk[0] -= 1;
    }

    // New or Known
    if (type.newsModule) {
        osnk[2] += 1;
        osnk[3] -= 1;
    } else if (type.knownModule) {
        osnk[3] += 1;
        osnk[2] -= 1;
    }

    // Others styling, that is osnk[0]
    switch (osnk[0]) {
        case 4: // Major Hook
            changeNewStyles({
                othersBorder: "shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]",
            });
            break;
        case 3: // Intermediate-stage Major Hook
            changeNewStyles({
                othersBorder: "shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]",
            });
            break;
        case 2: // Major Void
            changeNewStyles({
                othersBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]",
                othersColour: "bg-[#D0D0D0]",
            });
            break;
        case 1: // Minor Hook
            changeNewStyles({
                othersBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]",
            });
            break;
        case 0: // Minor Void
        case -1: // Minor Void
            changeNewStyles({
                othersBorder: "shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]",
                othersColour: "bg-[#D0D0D0]",
            });
            break;
    }

    // Self styling
    switch (osnk[1]) {
        case 4: // Major Hook
            changeNewStyles({
                selfBorder: "shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]",
            });
            break;
        case 3: // Intermediate-stage Major Hook
            changeNewStyles({
                selfBorder: "shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]",
            });
            break;
        case 2: // Major Void
            changeNewStyles({
                selfBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]",
                selfColour: "bg-[#D0D0D0]",
            });
            break;
        case 1: // Minor Hook
            changeNewStyles({
                selfBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]",
            });
            break;
        case 0: // Minor Void
        case -1: // Minor Void
            changeNewStyles({
                selfBorder: "shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]",
                selfColour: "bg-[#D0D0D0]",
            });
            break;
    }

    
    // Known styling
    switch (osnk[3]) {
        case 4: // Major Hook
            changeNewStyles({
                knownBorder: "shadow-[0_0px_0px_17.11274px_rgba(0,0,0,1)] scale-[1.31481]",
            });
            break;
        case 3: // Intermediate-stage Major Hook
            changeNewStyles({
                knownBorder: "shadow-[0_0px_0px_12.65625px_rgba(0,0,0,1)] scale-[1.185185185]",
            });
            break;
        case 2: // Major Void
            changeNewStyles({
                knownBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.62963]",
                knownColour: "bg-[#D0D0D0]",
            });
            break;
        case 1: // Minor Hook
            changeNewStyles({
                knownBorder: "shadow-[0_0px_0px_23.8235px_rgba(0,0,0,1)] scale-[0.94444]",
            });
            break;
        case 0: // Minor Void, will continue through
        case -1: // Minor Void
            changeNewStyles({
                knownBorder: "shadow-[0_0px_0px_15px_rgba(0,0,0,1)] scale-[1]",
                knownColour: "bg-[#D0D0D0]",
            });
            break;
    }

    // Solid or Fluid
    if (type.solidOthersModule) {
        changeNewStyles({
            othersLeftLetter: "S",
            selfLeftLetter: "F",
        });
    } else if (type.solidSelfModule) {
        changeNewStyles({
            othersLeftLetter: "F",
            selfLeftLetter: "S",
        });
    }

    if (type.solidNewsModule) {
        changeNewStyles({
            newsLeftLetter: "S",
            knownLeftLetter: "F",
        });
    } else if (type.solidKnownModule) {
        changeNewStyles({
            newsLeftLetter: "F",
            knownLeftLetter: "S",
        });
    }

    // Savage Tether
    if (type.solidOthersModule && type.solidKnownModule) {
        changeNewStyles({
            directTetherStyle: "opacity-1 rotate-[0deg]",
        });
    }
    if (type.solidOthersModule && type.solidNewsModule) {
        changeNewStyles({
            conferTetherStyle: "opacity-1 rotate-[90deg]",
        });
    }
    if (type.solidSelfModule && type.solidNewsModule) {
        changeNewStyles({
            searchTetherStyle: "opacity-1 rotate-[180deg]",
        });
    }
    if (type.solidSelfModule && type.solidKnownModule) {
        changeNewStyles({
            reviseTetherStyle: "opacity-1 rotate-[270deg]",
        });
    }

    if (type.othersModule && type.newsModule) {
        csrd[0] += 4; // Confer
    } else if (type.newsModule && type.selfModule) {
        csrd[1] += 4; // Seek
    } else if (type.selfModule && type.knownModule) {
        csrd[2] += 4; // Revise
    } else if (type.knownModule && type.othersModule) {
        csrd[3] += 4; // Direct
    }

    if (type.developerModule) {
        csrd[2] += 1; // Revise
        csrd[0] += 1; // Confer
    } else if (type.navigatorModule) {
        csrd[1] += 1; // Seek
        csrd[3] += 1; // Direct
    }

    if (type.extremeModule) {
        if (type.selfModule) {
            csrd[2] += 2; // Revise
            csrd[1] += 2; // Seek
        } else if (type.othersModule) {
            csrd[0] += 2; // Confer
            csrd[3] += 2; // Direct
        }
    } else if (type.intermediateModule) {
        if (type.knownModule) {
            csrd[2] += 2; // Revise
            csrd[3] += 2; // Direct
        } else if (type.newsModule) {
            csrd[0] += 2; // Confer
            csrd[1] += 2; // Seek
        }
    }

    // Simplify array into numbers 0 through 3
    for (let i = 0; i < 4; i++) {
        if (csrd[i] === 3) {
            csrd[i] = 2;
        }
        if (csrd[i] > 3) {
            csrd[i] = 3;
        }
    }

    // Confer styling
    switch (csrd[0]) {
        case 0: // Invisible
            changeNewStyles({
                conferBorder: "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]",
            });
        break;
        case 1: //
            changeNewStyles({
                conferBorder:
                "shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]",
            });
        break;
        case 2: //
            changeNewStyles({
                conferBorder:
                "shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]",
            });
        break;
        case 3: //
            changeNewStyles({
                conferBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
            break;
    }

    // Search styling
    switch (csrd[1]) {
        case 0: // Invisible
            changeNewStyles({
                searchBorder: "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]",
            });
            break;
        case 1: //
            changeNewStyles({
                searchBorder:
                "shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]",
            });
            break;
        case 2: //
            changeNewStyles({
                searchBorder:
                "shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]",
            });
            break;
        case 3: //
            changeNewStyles({
                searchBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
            break;
    }

    // Revise styling
    switch (csrd[2]) {
        case 0: // Invisible
            changeNewStyles({
                reviseBorder: "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]",
            });
            break;
        case 1: //
            changeNewStyles({
                reviseBorder:
                "shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]",
            });
            break;
        case 2: //
            changeNewStyles({
                reviseBorder:
                "shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]",
            });
        break;
        case 3: //
            changeNewStyles({
                reviseBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
            break;
    }

    // Direct styling
    switch (csrd[3]) {
        case 0: // Invisible
            changeNewStyles({
                directBorder: "shadow-[0_0px_0px_15px_rgba(255,255,255,1)]",
            });
            break;
        case 1: //
            changeNewStyles({
                directBorder:
                "shadow-[0_0px_0px_22.5px_rgba(255,255,255,1),0_0px_0px_37.5px_rgba(0,0,0,1)]",
            });
            break;
        case 2: //
            changeNewStyles({
                directBorder:
                "shadow-[0_0px_0px_15px_rgba(255,255,255,1),0_0px_0px_45px_rgba(0,0,0,1)]",
            });
            break;
        case 3: //
            changeNewStyles({
                directBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
            break;
    }

    // Draw double activated reflex.
    if (csrd.reduce((acc, val) => acc + val, 0) === 6) {
        // Revise
        if (csrd[0] === 0) {
            changeNewStyles({
                reviseBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
        }
        // Direct
        if (csrd[1] === 0) {
            changeNewStyles({
                directBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
        }
        // Confer
        if (csrd[2] === 0) {
            changeNewStyles({
                conferBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
        }
        // Search
        if (csrd[3] === 0) {
            changeNewStyles({
                searchBorder:
                "shadow-[0_0px_0px_7.5px_rgba(255,255,255,1),0_0px_0px_22.5px_rgba(0,0,0,1),0_0px_0px_37.5px_rgba(255,255,255,1),0_0px_0px_52.5px_rgba(0,0,0,1)]",
            });
        }

        // Check if they are also the biggest reflex
        // Revise
        if (csrd[0] === 0 && csrd[2] === 3) {
            changeNewStyles({
                reviseBorder:
                "shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]",
            });
        }
        // Direct
        if (csrd[1] === 0 && csrd[3] === 3) {
            changeNewStyles({
                directBorder:
                "shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]",
            });
        }
        // Confer
        if (csrd[2] === 0 && csrd[0] === 3) {
            changeNewStyles({
                conferBorder:
                "shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]",
            });
        }
        // Search
        if (csrd[3] === 0 && csrd[1] === 3) {
            changeNewStyles({
                searchBorder:
                "shadow-[0_0px_0px_20px_rgba(0,0,0,1),0_0px_0px_40px_rgba(255,255,255,1),0_0px_0px_60px_rgba(0,0,0,1)]",
            });
        }
    }

    return newStyles;
}