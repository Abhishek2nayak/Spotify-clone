import { colors } from "./Constant";

/** 
 * This function return the random color based on color arr 
 * */
export function generateRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * @param color
 * @returns a style object for bannner
 */
export function getBannerColorStyle(color) {
    return {
        background: color,
        background: `linear-gradient(180deg,${color} 10%,rgba(0,0,0,0.5) 110%)`,
    }

}

/** return the time in minute and second format
 * @param millis duration in milliseconds
 */
export function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000); // 1 minute = 60,000 milliseconds
    let seconds = ((millis % 60000) / 1000).toFixed(0); // Remainder as seconds
    return minutes + "m " + (seconds < 10 ? '0' : '') + seconds + "s";
}


/**
 * this function return the sorted string 
 * @param {*} str 
 * @returns sorted string
 */

export  function sortString(str) {
    return str.length >= 15 ? str.substring(0, 15) + ".." : str;
}


/**
 * @param {*} artists 
 * @returns sorted string of artists
 */
 export function getCompressedName(artists) {
    let names = artists.map((artist) => artist.name).toString();
    names = names.substring(0, names.length - 1);
    return names.length >= 15 ? names.substring(0, 15) + ".." : names;
  }



export  const handleResize = (gridRef) => {
    const grid = gridRef.current;
    const minColumnWidth = 230;
    if(grid) {
        const cards = grid.querySelectorAll('.card');
        const availableWidth = grid.clientWidth;
        
        const columns = Math.floor(availableWidth / minColumnWidth);
        const columnWidth = `minmax(${minColumnWidth}px, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(auto-fit, ${columnWidth})`;
        cards.forEach(card => {
            card.style.maxWidth = Math.floor(availableWidth / 1);
          });
            
        
        return columns;
    }

    return 5;  
    
  };