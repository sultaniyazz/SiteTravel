import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Number is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    description: Yup.string().required("Description is required"),
});

const Contact = () => {
    const initialValues = {
        name: '',
        number: '',
        email: '',
        description: '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post("https://travel-data-base.onrender.com/users", values);
            alert("Form submitted successfully!");
            resetForm();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen dark:bg-[#0c0a09] bg-gray-100 p-4">
            <div className="bg-white dark:bg-black shadow-md rounded-lg p-8  w-[80vw] max-md:p-6 max-sm:p-4">
                <h2 className="text-[3vw] font-semibold mb-6 text-center max-md:text-xl max-sm:text-lg">Contact Us</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className='flex flex-col w-full  gap-[2vw]'>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 max-md:text-base max-sm:text-sm">Name</label>
                                <Field type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:text-sm max-sm:text-xs" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="number" className="block text-gray-700 font-medium mb-1 max-md:text-base max-sm:text-sm">Number</label>
                                <Field type="number" id="number" name="number" className="w-full border border-gray-300 rounded-lg dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:text-sm max-sm:text-xs" />
                                <ErrorMessage name="number" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1 max-md:text-base max-sm:text-sm">Email</label>
                                <Field type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:text-sm max-sm:text-xs" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-gray-700 font-medium mb-1 max-md:text-base max-sm:text-sm">Description</label>
                                <Field as="textarea" id="description" name="description" rows="4" className="w-full border border-gray-300 rounded-lg dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-md:text-sm max-sm:text-xs" />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 max-md:px-4 max-sm:px-3 max-md:text-sm max-sm:text-xs"> Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Contact;
