import React from 'react'
import "./Form.css"


const Form = () => {


    return (
        <>

            <div className="container2">
                <header className="header">
                    <h1 id="title" className="text-center">Check Your Score</h1>
                    <p id="description" className="description text-center">
                        Please fill the data below and  let us calculate the score
                    </p>
                </header>
                <form id="survey-form">
                    <div className="form-group">
                        <label id="name-label" for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="number-label" for="number"
                        >Age<span className="clue"></span></label
                        >
                        <input
                            type="number"
                            name="age"
                            id="number"
                            min="10"
                            max="99"
                            className="form-control"
                            placeholder="Age"
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="Annualincome">Annual income</label>
                        <input
                            type="Annualincome"
                            name="Annualincome"
                            id="Annualincome"
                            className="form-control"
                            placeholder="Enter your Annual income"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="Monthly_investments">Monthly investments</label>
                        <input
                            type="Monthly_investments"
                            name="Monthly_investments"
                            id="Monthly_investments"
                            className="form-control"
                            placeholder="Enter your Monthly investments"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="bank_acc">How many bank accounts do you have?</label>
                        <input
                            type="bank_acc"
                            name="bank_acc"
                            id="bank_acc"
                            className="form-control"
                            placeholder="Enter number of bank acc you have"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="house_info">How many rooms are there in your house?</label>
                        <input
                            type="house_info"
                            name="house_info"
                            id="house_info"
                            className="form-control"
                            placeholder="Enter number of rooms"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="fam_members">Total number of family members?</label>
                        <input
                            type="fam_members"
                            name="fam_members"
                            id="fam_members"
                            className="form-control"
                            placeholder="Enter total number of members in your family"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label id="email-label" for="education">How much you have studied?</label>
                        <input
                            type="education"
                            name="education"
                            id="education"
                            className="form-control"
                            placeholder="How much you have studied"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <p>Do people around you discriminate on basis of your education,    gender,race or anything else?</p>
                        <label>
                            <input
                                name="user-recommend"
                                value="definitely"
                                type="radio"
                                class="input-radio"
                                checked
                            />Yes</label
                        >
                        <label>
                            <input
                                name="user-recommend"
                                value="maybe"
                                type="radio"
                                class="input-radio"
                            />No</label >

                        <label
                        ><input
                                name="user-recommend"
                                value="not-sure"
                                type="radio"
                                class="input-radio"
                            />Not sure</label>
                    </div>
                    <div class="form-group">
                        <p>Are You satisfied with your housing needs?</p>
                        <label>
                            <input
                                name="user-recommend"
                                value="definitely"
                                type="radio"
                                class="input-radio"
                                checked
                            />Yes</label
                        >
                        <label>
                            <input
                                name="user-recommend"
                                value="maybe"
                                type="radio"
                                class="input-radio"
                            />No</label >

                        <label
                        ><input
                                name="user-recommend"
                                value="not-sure"
                                type="radio"
                                class="input-radio"
                            />Maybe</label>
                    </div>




                    <div className="form-group">
                        <button type="submit" id="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Form