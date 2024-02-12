export const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-me">
                <p className="contact-title">Contact Me</p>
                <p className="contact-messaage">Thank you for taking the time to visit my portfolio, Any questions, feel free to contact me by Email, Phone, or LinkedIn</p>
                <br></br>
                <p className="contact-messaage">Phone: (###) ###- #### </p>
            </div>
            <div className="form-container">
                <form className="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>    
        </div>
    )
}