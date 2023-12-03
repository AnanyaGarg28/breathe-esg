/**
 * Renders a loading spinner component.
 * @returns JSX.Element
 */
export const Loading = () => {
    return(
        <div onClick={e=>e.stopPropagation()} className="loading-wrapper">
            <svg height="110" width="110" viewBox="0 0 110 110" style={{width:50, height:50}}>
                <path d={`M5 55 A50 50 0 0 1 105 55`} strokeWidth={10} fill="none"/>
                <path d={`M105 54 A50 50 0 0 1 55 105`} strokeWidth={10} fill="none"/>
            </svg>
        </div>
    );
}