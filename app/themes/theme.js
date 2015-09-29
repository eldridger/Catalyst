import color from 'color';

const primary = color('#4E556F');
const headerSize = '45px';
const listItemSize = '40px';

const darkBlue = '#1e5799';
const grey = '#9E9E9E';
const blueGrey = '#607D8B';

//TODO: put theme in store instead of importing it everywhere
export default {
    colors: {
        primary: primary.hexString(),
        darkPrimary: primary.darken(0.5).hexString(),
        lightPrimary: primary.lighten(0.5).hexString(),
        darkBlue,
        grey,
        blueGrey
    },
    list: {
        ul: {
            listStyleType: 'none',
            padding: 0,
            margin: 0
        },
        li: {
            display: 'inline-block',
            verticalAlign: 'middle',
            height: listItemSize,
            lineHeight: listItemSize,
            position: 'relative',
            width: '100%',
            backgroundColor: darkBlue,
            borderBottomColor: color(darkBlue).darken(0.3).hexString(),
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px'
        }
    },
    headerSize,
    listItemSize
}