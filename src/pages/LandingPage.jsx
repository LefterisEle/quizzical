import React, {useContext} from 'react'
import {Form, Formik} from 'formik'
import CustomSelect from '../components/CustomSelect'
import {Context} from "../Context"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const {getData} = useContext(Context)

    let navigate = useNavigate()

  return (
    <section className='w-full h-[85%] flex flex-col items-center justify-center gap-8 pt-20'>

            <h1 className='text-[#293264] text-4xl sm:text-5xl lg:text-7xl font-bold py-4'>Quizzical</h1>
            <p className='text-[#293264] text-xl sm:text-2xl lg:text-4xl'>My very first project. </p>
            <p className='text-gray-400 text-xl sm:text-2xl lg:text-3xl mt-[-1rem] tracking-tighter'>
                <span className='font-bold'>Technologies</span> React with Router & Formik | Fetch API | Tailwind 
            </p>
            
            <div>
            
                <Formik
                    initialValues = {{ 
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
                <Form className='flex flex-col items-center'>
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
                        className="bg-[#293264] text-white font-bold rounded px-7 py-3 mt-3 hover:shadow-md hover:scale-110 duration-500 lg:text-2xl lg:px-10 lg:py-4 lg:mt-5" 
                        disabled={isSubmitting} 
                        type="submit"
                    >
                        Start Quizz
                    </button>
                    </Form>
                )}

                </Formik>
            </div>

    </section>
  )
}

export default LandingPage