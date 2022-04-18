import React from 'react';
import './clubform.css';

const ClubForm = () => {
    return(
        <div className= "page-bg">
            <div className= 'form-box'>
                <div className= 'form-content'>
                    <h1 className= 'heading'> Create New Card </h1>
                    <form>                        
                        <label className= 'label'
                        for="cName"
                        >Club Name:
                        </label>
                        <br />

                        <input 
                        type="text" 
                        id="cName" 
                        name="cName">
                        </input><br /><br />

                        <label 
                        className= 'label' 
                        for="purpose"
                        >Club Purpose:
                        </label>
                        <br />

                        <textarea id="purpose" 
                        name="purpose" 
                        rows="4" cols="50">
                        </textarea>
                        <br /><br />

                        <label className= 'label' 
                        for="links">
                        Links:
                        </label>
                        <br />

                        <textarea id="links"
                        name="links"
                        rows="4"
                        cols="50">
                        </textarea>
                        <br /><br />

                        <label className= 'label'
                        for="cImage">
                        Choose a picture:
                        </label>
                        <br /><br />

                        <input type="file"
                        id="cImage" 
                        name="cImage"
                        accept="image/png, image/jpeg">
                        </input>
                        <br /><br />
                        
                        <input type="submit"
                        value="Submit">
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ClubForm;