import { Navigation } from './Navigation';

export const Header = ({ setActiveLink }) => {

    return (
        <div className="header">
        <h1 className="logo-font">LOGO</h1>
        <Navigation setActiveLink={setActiveLink}/>
        </div>
    )
}