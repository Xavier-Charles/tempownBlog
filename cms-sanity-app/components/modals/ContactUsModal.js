import React from "react";
import { Transition } from "@headlessui/react";
import { Formik } from "formik";
import InputGroup2 from "../elements/InputGroup2";
import TextAreaGroup from "../elements/TextAreaGroup";

const ContactUsModal = ({
  show,
  onClose,
  handleCloseModal,
  processSubmitFeedback,
  ...props
}) => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length < 1) {
      errors.firstName = "Must be a valid name";
    }

    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length < 1) {
      errors.lastname = "Must be a valid name";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/[+][1-9]{2}[1-9]{1}[0-9]{8,14}/g.test(values.phone)) {
      errors.phone = "Must be a valid phone number. e.g (+2349022222222)";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition
          show={show}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </Transition>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white py-5 sm:py-12">
            <div className="text-center">
              <div className="pb-3 w-full mx-auto"></div>
              <div className="relative text-center px-5 sm:px-12">
                <button
                  onClick={handleCloseModal}
                  className="absolute text-temp-green-500 text-lg rounded-full shadow-lg  pt-1 px-2 right-8 -top-10 focus:outline-none"
                >
                  x
                </button>
                <h3
                  className="leading-6 text-2xl md:text-3xl font-medium text-temp-secondary font-serif"
                  id="modal-headline"
                >
                  Contact us
                </h3>
                <div className="mt-10">
                  <Formik
                    initialValues={initialState}
                    validate={validate}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);

                      const payload = {
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        phone: values.phone,
                        message: values.message,
                      };

                      await processSubmitFeedback(payload);
                      setSubmitting(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      setFieldValue,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div>
                          <div className="w-full flex flex-wrap justify-between text-left">
                            <div className="w-full lg:space-x-6 lg:inline-flex justify-between">
                              <div className="w-full lg:w-96">
                                <InputGroup2
                                  labelColor="text-temp-gray"
                                  className="mb-6"
                                  type="text"
                                  label="First Name *"
                                  name="firstname"
                                  value={values.firstname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    errors.firstname &&
                                    touched.firstname &&
                                    errors.firstname
                                  }
                                />
                              </div>

                              <div className="w-full lg:w-96">
                                <InputGroup2
                                  labelColor="text-temp-gray"
                                  className="mb-6"
                                  type="text"
                                  label="Last Name *"
                                  name="lastname"
                                  value={values.lastname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    errors.lastname &&
                                    touched.lastname &&
                                    errors.lastname
                                  }
                                />
                              </div>
                            </div>

                            <div className="w-full lg:space-x-6 lg:inline-flex justify-between">
                              <div className="w-full lg:w-96">
                                <InputGroup2
                                  labelColor="text-temp-gray"
                                  className="mb-6"
                                  type="email"
                                  label="Email Address"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    errors.email &&
                                    touched.email &&
                                    errors.email
                                  }
                                />
                              </div>

                              <div className="w-full lg:w-96">
                                <InputGroup2
                                  labelColor="text-temp-gray"
                                  className="mb-6"
                                  type="tel"
                                  label="Phone Number *"
                                  name="phone"
                                  value={values.phone}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    errors.phone &&
                                    touched.phone &&
                                    errors.phone
                                  }
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <TextAreaGroup
                                labelColor="text-temp-gray"
                                marginBottom="mb-6"
                                label="Message *"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                showTip={false}
                                error={
                                  errors.message &&
                                  touched.message &&
                                  errors.message
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-baseline justify-end flex-end">
                          <button
                            disabled={isSubmitting ? true : false}
                            type="submit"
                            className="mb-4 py-3 px-8 text-sm bg-temp-green-500 font-bold text-white rounded-lg focus:outline-none"
                          >
                            {isSubmitting ? "Processing..." : "Submit"}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="border-t border-temp-green-light mt-4">
                <div className="px-5 sm:px-12 text-sm-15 text-temp-gray">
                  <p className="pt-6 ">
                    Head Office: 100 College St Suite 150 Toronto, ON M5G 1L5
                    Canada.
                  </p>
                  <div className="w-full inline-flex flex-wrap items-baseline justify-center space-x-1 text-sm">
                    <p className="pt-3">
                      Support:{" "}
                      <a
                        href="mailto:support@tempown.com"
                        className="text-temp-green-500 font-bold"
                      >
                        support@tempown.com
                      </a>
                    </p>

                    <p>|</p>
                    <p>
                      Enquires:{" "}
                      <a
                        href="mailto:hello@tempown.com"
                        className="text-temp-green-500 font-bold"
                      >
                        hello@tempown.com
                      </a>
                    </p>
                    <p>|</p>
                    <p>08122888638</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
