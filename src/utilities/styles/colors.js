export const HEX_RANGE = /#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})/;
export const RGB_RANGE = /rgba?\(\b([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b,\s?\b([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b,\s?\b([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\b,?\s?([01]|0\.\d*)?\)/;
export const HSL_RANGE = /hsla?\((\b[0-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|360\b),\s?(\b[0-9]|[1-8][0-9]|9[0-9]|100\b)%,\s?(\b[0-9]|[1-8][0-9]|9[0-9]|100\b)%,?\s?([01]|0\.\d*)?\)/;

export const isHEX = (color) => color && color.match(HEX_RANGE); // ["#ff66ff", "ff", "66", "ff"] | null
export const isRGB = (color) => color && color.match(RGB_RANGE); // ["rgba(255, 10, 110, 0.75)", "255", "10", "110", "0.75"] | null
export const isHSL = (color) => color && color.match(HSL_RANGE); // ["hsla(160,10%,10%)", "160", "10", "10", "0.75"] | null

/**
 * Converts a RGBa or HSLa into HEX
 * @param   {string}  color
 * @returns {string}  The HEX representation
 */

export const toHEX = (color) => {
    if (isHEX(color)) return color;
    if (isRGB(color)) {
        const match = isRGB(color);
        const constructHEX = (num) => {
            let hex = Number(num).toString(16);
            return hex.length === 1 ? `0${hex}` : `${hex}`;
        };
        const r = constructHEX(match[1]);
        const g = constructHEX(match[2]);
        const b = constructHEX(match[3]);
        return `#${r}${g}${b}`.toUpperCase();
    }
};

export const toRGB = (color, alpha = 1) => {
    if (isRGB(color)) return color;
    if (isHEX(color)) {
        const match = isHEX(color);
        const constructRGB = (num) => parseInt(num, 16);
        const r = constructRGB(match[1]);
        const g = constructRGB(match[2]);
        const b = constructRGB(match[3]);
        return `rgba(${r},${g},${b}, ${alpha})`;
    }
    if (isHSL(color)) {
        const match = isHSL(color);
        const hue = match[1];
        const sat = match[2] / 100;
        const lightness = match[3] / 100;
        const formatRGB = (r, g, b) => {
            const format = (num) => num * 255;
            return `rgba(${format(r)},${format(g)},${format(b)},${alpha})`;
        };
        if (lightness === 1 && sat === 0) {
            // White
            return `rgb(255,255,255,${alpha})`;
        }
        if (lightness === 0) {
            // Black
            return `rgb(0,0,0,${alpha})`;
        }
        if (sat === 0) {
            // Grayscale
            return formatRGB(lightness, lightness, lightness);
        }
        // if (saturation === (0 || 1) ||
        //    lightness === (0 || 1)) { chroma === 0 }
        const chroma = (1 - Math.abs(2 * lightness - 1)) * sat; // [0 .. 1]
        const zone = hue / 60; // [0 .. 6]
        const x = chroma * (1 - Math.abs((zone % 2) - 1)); // [0: zone === even | chroma: zone === odd]
        const matchLightness = lightness - chroma / 2; // [-0.5 .. 1]
        if (0 <= zone && zone < 1) {
            const r = chroma + matchLightness;
            const g = x + matchLightness;
            const b = 0 + matchLightness;
            return formatRGB(r, g, b);
        }
        if (1 <= zone && zone < 2) {
            const r = x + matchLightness;
            const g = chroma + matchLightness;
            const b = 0 + matchLightness;
            return formatRGB(r, g, b);
        }
        if (2 <= zone && zone < 3) {
            const r = 0 + matchLightness;
            const g = chroma + matchLightness;
            const b = x + matchLightness;
            return formatRGB(r, g, b);
        }
        if (3 <= zone && zone < 4) {
            const r = 0 + matchLightness;
            const g = x + matchLightness;
            const b = chroma + matchLightness;
            return formatRGB(r, g, b);
        }
        if (4 <= zone && zone < 5) {
            const r = x + matchLightness;
            const g = 0 + matchLightness;
            const b = chroma + matchLightness;
            return formatRGB(r, g, b);
        }
        if (5 <= zone && zone <= 6) {
            const r = chroma + matchLightness;
            const g = 0 + matchLightness;
            const b = x + matchLightness;
            return formatRGB(r, g, b);
        }
        return formatRGB(0, 0, 0);
    }
};

export const toHSL = (color, alpha = 1) => {
    if (isHSL(color)) return color;
    if (isRGB(color)) {
        const formatHSL = (hue, sat, light) =>
            `hsla(${(hue * 60).toFixed(0)},${(sat * 100).toFixed(0)}%,${(
                light * 100
            ).toFixed(0)}%, ${alpha})`;
        const match = isRGB(color);
        const r = match[1] / 255;
        const g = match[2] / 255;
        const b = match[3] / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let hue,
            sat,
            light = (max + min) / 2;

        if (max === min) {
            hue = sat = 0; // Greyscale
        } else {
            const d = max - min;
            sat = light > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: {
                    hue = (g - b) / d + (g < b ? 6 : 0);
                    return formatHSL(hue, sat, light);
                }
                case g: {
                    hue = (b - r) / d + 2;
                    return formatHSL(hue, sat, light);
                }
                case b: {
                    hue = (r - g) / d + 4;
                    return formatHSL(hue, sat, light);
                }
                default: {
                    return formatHSL(0, 0, 0);
                }
            }
        }
    }
};

export const calcGrey = (hue = 255, lightness = 60) => {
    // Linear interpolation
    const satStart = 5;
    const satEnd = 32;

    const sat = ((100 - lightness) * satEnd + lightness * satStart) / 100;
    return `hsl(${hue}, ${sat}%, ${lightness}%)`;
};

export const calcGradient = (deg = 0, start = '#000000', end = '#FFFFFF') =>
    `linear-gradient(${deg}deg, ${start} 0%, ${end} 100%)`;
