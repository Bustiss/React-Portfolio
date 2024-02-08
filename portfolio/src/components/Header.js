import { Navigation } from './Navigation';

export const Header = () => {

    const style = { // STYLING FOR HEADER
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        top: 0, // Add this line
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 100, // Add this line
    }

    return (
        <div style={style}>
        <h1>LOGO</h1>
        <Navigation />
        </div>
    )
}