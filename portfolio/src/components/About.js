export const About = () => { 

    const layout = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        overflow: 'hidden' 
    }

    return (
        <div id="About" style={layout}>
            <h1> Hello 👋🏾 </h1>
                <p>
                I'm <span>Will</span>,A Part-Time Student And Software Developer
                </p>

                <div className='about-image'>
                    Pic of me
                </div>
        </div>
    )
}