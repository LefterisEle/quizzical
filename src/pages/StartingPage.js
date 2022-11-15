import React, {useContext} from 'react'
import {Form, Formik} from 'formik'
import CustomSelect from '../components/CustomSelect'
import CustomInput from '../components/CustomInput'
import {Context} from "../Context"
import { useNavigate } from 'react-router-dom'
  const StartingPage = () => {
    const {getData} = useContext(Context)
    let navigate = useNavigate()

    return(
        <section className='starting-page'>
            <h1 className='title'>Quizzical</h1>
            <p>My very first project</p>
            <Formik
                initialValues = {{ 
                    questions: 10,
                    category : "",
                    difficulty : "",
                    type : ""
                        }}
                onSubmit={async (values, actions) => {
                    getData(values)
                    navigate("/questions")
                  }}
            >
            
            {({isSubmitting}) => (
                <Form>
                    <CustomInput 
                        label="Choose number of questions: "
                        name="questions"
                        type="number"
                        placeholder="Enter the number of questions"
                    />

                    <CustomSelect 
                        label="Category"
                        name="category"
                        placeholder="Please select a category"
                    >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musical & Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                    </CustomSelect>

                    <CustomSelect 
                        label="Difficulty"
                        name="difficulty"
                        placeholder="Please select a difficulty"
                    >
                        <option value="">Any difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </CustomSelect>
                    
                    <button 
                        disabled={isSubmitting} 
                        type="submit"
                        className='btn'
                    >
                        Start Quizz
                    </button>
                </Form>
            )}

            </Formik>
        </section>
    )
  }
  
  export default StartingPage