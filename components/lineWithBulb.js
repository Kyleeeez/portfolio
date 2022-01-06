
export const LineWithBulb = ({className, children, initial, infoElement, isLabel}) => {

    return(
        <div className={(className || "") + " flex"} >

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
                            <div style={{top: -3, left: 1, zIndex: 1}} className="bg-yellow-300/10 h-10 w-10 rounded-full p-1.5 absolute transition-opacity">
                                <div className="bg-yellow-300/20 rounded-full h-full p-2">
                                    <div className="bg-yellow-300  rounded-full h-full" />
                                </div>
                            </div>

                        </>
                }
                <div style={{width: 2, zIndex: 10}} className="relative ml-5 mr-7 md:mr-10 bg-white/20 h-full"/>

            </div>
            <div className="w-full">

                {infoElement && <div className="md:hidden mb-2">{infoElement}</div>}

                {children}
            </div>
        </div>
    )
}