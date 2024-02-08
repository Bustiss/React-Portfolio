import { Navigation } from './Navigation';

export const Header = () => {

    const style = { // STYLING FOR HEADER
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return (
        <div style={style}>
        <h1>LOGO</h1>
        <Navigation />
        </div>
    )
}