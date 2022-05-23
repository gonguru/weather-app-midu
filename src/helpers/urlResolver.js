export const imageResolver = weather => {
    const { icon, id } = weather
    if ([200, 201, 202, 230, 231, 232].includes(id)) {
        return icon.includes('d') ?
            'https://res.cloudinary.com/gonguru/image/upload/v1653277438/medium_200d_bac686bc00.png'
            :
            'https://res.cloudinary.com/gonguru/image/upload/v1653277335/medium_200n_03b06bce73.png'
    } else if ([210, 211, 213, 221].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277001/medium_210_fcde4cfea3.png'
    } else if ([300, 301, 302, 321].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277000/medium_300_55d7def738.png'
    } else if ([310, 311, 312, 313, 314, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653276972/medium_310_ee790d2eca.png'
    } else if ([600, 601, 602].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277320/medium_600_63a8ecb20f.png'
    } else if (id === 611) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277006/medium_611_307b5768cf.png'
    } else if ([612, 613].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277323/medium_612_36c7ca8009.png'
    } else if ([615, 616, 620, 621, 622].includes(id)) {
        return 'https://res.cloudinary.com/gonguru/image/upload/v1653277347/medium_615_b1ab1bdc70.png'
    } else if ([701, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(id)) {
        return icon.includes('d') ?
            'https://res.cloudinary.com/gonguru/image/upload/v1653277334/medium_700d_a7ea879c54.png'
            :
            'https://res.cloudinary.com/gonguru/image/upload/v1653277423/medium_700n_2940f6cc8c.png'
    } else if (id === 800) {
        return icon.includes('d') ?
            'https://res.cloudinary.com/gonguru/image/upload/v1653277413/medium_800d_ceea57bcf0.png'
            :
            'https://res.cloudinary.com/gonguru/image/upload/v1653277415/medium_800n_579b09b3ea.png'
    } else if ([801, 802, 803, 804].includes(id)) {
        return icon.includes('d') ?
            'https://res.cloudinary.com/gonguru/image/upload/v1653277452/medium_801d_02b2d4847e.png'
            :
            'https://res.cloudinary.com/gonguru/image/upload/v1653277423/medium_801n_f4c7ffe560.png'
    }
}