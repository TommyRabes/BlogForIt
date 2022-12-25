export default Object.freeze({
    luminance: {
        factors: {
            red: 0.2126,
            green: 0.7152,
            blue: 0.0722
        },
        parameters: {
            condition: 0.04045, // 0.03928 before
            divider: 12.92,
            complement: 0.055,
            divider2: 1.055,
            power: 2.4
        }
    }
});
