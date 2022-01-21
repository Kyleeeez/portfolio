
export const LineWithBulb = ({className, children, initial, infoElement, isLabel, strokeColor = "bg-white"}) => {

    return(
        <div className={(className || "") + " flex -z-1 relative"} >

            {
                !initial &&
                <div className="hidden md:block" style={{minWidth: "157px" }}>
                    <div className="pr-3">
                        {infoElement}
                    </div>
                </div>

            }
            <div className={"relative grow" + ((initial && !isLabel) ? " pt-4" : "")} style={{zIndex: 0}} >
                {
                    !isLabel &&
                        <>
                            <div style={{top: -3, left: 1, zIndex: 1}} className={"scale-75 h-10 w-10 rounded-full p-1.5 absolute transition-opacity " + (strokeColor + "/10")}>
                                <div className={"rounded-full h-full p-2 " + (strokeColor + "/10")}>
                                    <div className={"rounded-full h-full " + strokeColor}/>
                                </div>
                            </div>

                        </>
                }
                <div style={{width: 2, zIndex: 10}} className={"opacity-20 relative ml-5 mr-7 md:mr-10 h-full  " + (strokeColor)}/>

            </div>
            <div className="w-full">

                {infoElement && <div className="md:hidden mb-2">{infoElement}</div>}

                {children}
            </div>
        </div>
    )
}