const Icon = {

    get : function(name, color, size){
        return this.list(color, size).find(ico => ico.name === name)
    },

    list : function(color, size){
        return [
            {
                name: 'dollor',
                img: `<svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="${size}" height="${size}"><path fill="${color}" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-2-12c0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733,0,1.654-1.346,3-3,3v2h-2v-2c-1.654,0-3-1.346-3-3h2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1,0-.378-.271-.698-.644-.76l-3.041-.507c-1.342-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-2h2v2c1.654,0,3,1.346,3,3h-2c0-.551-.448-1-1-1h-2c-.552,0-1,.449-1,1Z"/></svg>`
            },
            {
                name: 'apple',
                img: `<svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="${size}" height="${size}">
                <g id="_Group_2">
                    <g id="_Group_3">
                        <path fill="${color}" id="_Path_" d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378    c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867    c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975    c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408    C19.815,16.788,18.548,14.879,18.546,12.763z"/>
                        <path fill="${color}" id="_Path_2" d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829    c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"/>
                    </g>
                </g>
                </svg>`
            },
            {
                name: 'playmarket',
                img: `
                <svg width="${size}" height="${size}" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_1_509)">
                <path d="M15.6149 7.76187L12.528 6.00239L9.98901 8.42593L12.309 10.6409L15.6144 8.75686C15.7961 8.65313 15.9051 8.46709 15.9051 8.25964C15.9051 8.05218 15.7961 7.86559 15.6144 7.76187H15.6149Z" fill="black"/>
                <path d="M12.0053 5.70431L8.60833 3.76757L1.16357 0L9.57192 8.02742L12.0053 5.70431Z" fill="black"/>
                <path d="M1.28491 16.7336L8.61853 12.7437L11.7844 10.9392L9.56931 8.82465L1.28491 16.7336Z" fill="black"/>
                <path d="M0.665861 0.324654L0.658081 16.5359L9.15257 8.42616L0.665861 0.324654Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_1_509">
                <rect width="16" height="17" fill="white"/>
                </clipPath>
                </defs>
                </svg>                
                `
            },
            {
                name: 'bolt',
                img: `
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="${size}" height="${size}"><path fill="${color}" d="M12.566,24H8.719l2-8H6.586a2.561,2.561,0,0,1-2.451-3.3L7.976,0h9.467l-3,8h4.023a2.533,2.533,0,0,1,2.11,3.932Zm-1.285-2h.212l7.416-11.174A.532.532,0,0,0,18.466,10H11.557l3-8H9.46L6.049,13.276A.561.561,0,0,0,6.586,14h6.7Z"/></svg>
                `
            },
            {
                name: 'smile',
                img: `
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="${size}" height="${size}"><path fill="${color}" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM7,9h3a1,1,0,0,1,0,2H7A1,1,0,0,1,7,9Zm10.666,6.746A9.454,9.454,0,0,1,12,18a9.454,9.454,0,0,1-5.666-2.254,1,1,0,0,1,1.332-1.492A7.509,7.509,0,0,0,12,16a7.508,7.508,0,0,0,4.336-1.748,1,1,0,0,1,1.33,1.494ZM16,11c-1.105,0-2,0-2-1a2,2,0,0,1,4,0C18,11,17.105,11,16,11Z"/></svg>
                `
            }
        ]
    }

}

export default Icon