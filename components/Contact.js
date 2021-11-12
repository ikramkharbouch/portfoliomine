const Contact = () => {

    const handleSubmit = () => {
        // Console.log("submitted")
    }

    return (<div className="w-full" id="contact">
        <h1 className="w-full text-center font-bold text-gray-600 mt-10">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-5 lg:mt-10">
            <div>
                <label className="text-blue-500 font-medium text-sm mb-2">Your name:</label>
                <input type="text" className="w-full border-2 border-blue-300 rounded-lg mt-2 py-2 pl-5 text-sm" placeholder="Ikram Kharbouch" />
            </div>

            <div className="mt-5">
                <label className="text-blue-500 font-medium text-sm mb-2">Your email:</label>
                <input type="text" className="w-full border-2 border-blue-300 rounded-lg mt-2 py-2 pl-5 text-sm" placeholder="Test@test.test" />
            </div>

            <div className="mt-5">
                <label className="text-blue-500 font-medium text-sm mb-2">Your message:</label>
                <textarea type="text" className="w-full border-2 border-blue-300 rounded-lg mt-2 py-2 pl-5 text-sm" placeholder="How can I help you ?" />
            </div>

        </form>
    </div>);
}

export default Contact;