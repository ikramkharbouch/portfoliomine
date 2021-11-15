import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from "react"


const Contact = () => {

    const [state, handleSubmit] = useForm("mleaqlob");


    return (<div className="w-full" id="contact">
        <h1 className="w-full text-center font-bold text-gray-600 mt-10">Hire me!</h1>
        {/* Add an error section here */}
        {state.succeeded && <h1 className="bg-green-50 border-2 border-green-100 py-4 rounded-lg px-4 text-green-300 font-bold mt-5">Message was sent!</h1>}
        <form onSubmit={handleSubmit} className="mt-5 lg:mt-10">

            <div className="mt-5">
                <label className="text-blue-500 font-medium text-sm mb-2">Your email:</label>
                <input id="email" type="email" name="email" className="w-full border-2 border-blue-300 rounded-lg mt-2 py-2 pl-5 text-sm" placeholder="Test@test.test" />
            </div>

            <div className="mt-5">
                <label className="text-blue-500 font-medium text-sm mb-2">Your message:</label>
                <textarea id="message" name="message" className="w-full border-2 border-blue-300 rounded-lg mt-2 py-2 pl-5 text-sm" placeholder="How can I help you ?" />
            </div>

            <button type="submit" disabled={state.submitting} className="bg-pink-500 text-white font-bold px-5 py-2 rounded-lg mt-5 cursor-pointer">Contact me</button>
        </form>
    </div>);
}

export default Contact;