import '../App.css'; // Imports App.css for styling

export const About = () => { 

    const layout = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100vh', 
        overflow: 'hidden' 
    }
    // Tag Effects will be added to App.css

    return (
        <div id="About" style={layout}>
            <div className='about-text'>
                <h1> Hello 👋🏾 </h1>
                    <h1>
                    I'm Will 👨🏾‍💻, A Software Developer
                    </h1>
            </div>

            <div className='about-image'>
                    <h3>Pic of me</h3>
            </div>
        </div>
    )
}