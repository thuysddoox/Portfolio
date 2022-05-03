import React, { useEffect, useRef, useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import styled from '@emotion/styled';
import useForm from './useForm';
import validate from './validateRule';
import emailjs from '@emailjs/browser';
const FormContactWrap = styled.div`
  .bg-custom {
    background: rgba(255, 255, 255, 0.9) !important;
  }
  textarea {
    resize: none !important;
  }
  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 60px #ffff inset !important;
    }
  }
  input:focus-visible,
  textarea:focus-visible {
    border-color: var(--blue2-secondary) !important;
    box-shadow: inset 0 0 0 1px var(--blue-primary),
      0 0 3px 1px var(--blue2-secondary);
    outline: none;
  }
  input.danger,
  textarea.danger {
    border-color: #ff4444 !important;
    box-shadow: 0 0 0 0.2rem rgba(255, 68, 68, 0.25) !important;
  }
  .z--1 {
    z-index: -1;
  }
  .z-1 {
    z-index: 1;
  }
  .bottom-15 {
    bottom: 15%;
  }
  .btn.cursor-pointer:hover {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  }
  .btn.cursor-not-allowed {
    filter: contrast(0.6);
  }
  .toast {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
    z-index: 9;
  }
  .image {
    max-width: 450px;
    @media screen and (max-width: 992px) {
      max-width: 350px;
    }
    @media screen and (max-width: 560px) {
      max-width: 250px;
    }
  }
  @media screen and (max-width: 560px) {
    .mb-w-full {
      width: 100% !important;
    }
    .mb-center {
      justify-content: center !important;
    }
  }

  .max-w-500 {
    max-width: 500px;
    text-overflow: ellipsis;
  }
`;

const FormContact = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isToast, setIsToast] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const form = useRef<any>();
  function handleToast() {
    setIsToast(!isToast);
  }
  async function send(data: any) {
    console.log(data);
    emailjs.sendForm('service_cc4c5wk', 'template_wuqql19', form.current, 'O7ipigF2Mkk0b5msT')
      .then((result) => {
        console.log(result.text);
        clearForm();
      }, (error) => {
        console.log(error.text);
      });
  }
  const { handleChange, handleSubmit, clearForm, values, errors } = useForm(send, validate);


  return (
    <FormContactWrap className="overflow-hidden">
      {/* <Fade duration={3000} triggerOnce className="">
        <p className="font-normal intro text-center text-blue-9000 text-sm sm:text-base leading-6 sm:leading-7 w-4/5 sm:w-3/5 xl:w-1/2 mx-auto mt-10 sm:mt-12 mb-4 sm:mb-6">
          Please fill in the contact information, Bluebottle will contact and
          answer your questions as soon as possible.
        </p>
      </Fade> */}
      <div className="pt-2 sm:pt-4 relative z-1">
        <form
          ref={form}
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="w-full"
        >
          <div className="m-6">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className={`text-blue-900 bg-custom block w-full px-3 py-2 text-sm sm:text-base border border-blue-900 rounded-2xl ${errors?.name ? 'danger' : ''
                }`}
              onChange={handleChange}
              value={values?.name ?? ''}
              required
            />
            {errors?.name && (
              <p className="text-sm pt-2 text-red-400">{errors?.name}</p>
            )}
          </div>
          <div className="m-6">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={`text-blue-900 bg-custom block w-full px-3 py-2 text-sm sm:text-base border border-blue-900 rounded-2xl ${errors?.email ? 'danger' : ''
                }`}
              onChange={handleChange}
              value={values?.email ?? ''}
              required
            />
            {errors?.email && (
              <p className="text-sm pt-2 text-red-400">{errors?.email}</p>
            )}
          </div>
          <div className="m-6">
            <textarea
              placeholder={'Message'}
              name="message"
              style={{ height: '150px' }}
              className={`text-blue-900 bg-custom block w-full px-3 py-2 text-sm sm:text-base border border-blue-900 rounded-xl ${errors?.message ? 'danger' : ''
                }`}
              onChange={handleChange}
              value={values?.message ?? ''}
              required
            />
            {errors?.message && (
              <p className="text-sm pt-2 text-red-400">{errors?.message}</p>
            )}
          </div>
          <div className="m-6">
            <div
              className={`flex flex-wrap btn-group items-center mb-center justify-between`}
            >

              <div className="attach-file flex flex-wrap w-full sm:w-auto sm:block items-center justify-start mb-6 order-1">
                <label
                  htmlFor="formId"
                  className={`text-white cursor-pointer font-medium btn bg-transparent border-2 border-white transition-all inline-block px-5 py-2 text-sm sm:text-base rounded-3xl ${errors?.attachments ? 'danger border-red-400' : ''
                    }`}
                >
                  <input
                    name="attachments"
                    type="file"
                    id="formId"
                    value=""
                    onChange={handleChange}
                    required
                    hidden
                  />
                  {!values?.attachments?.name
                    ? 'Upload your file'
                    : 'Update your file'}
                </label>
                <span className="text-white inline-block mx-4 font-medium leading-10 underline max-w-500 align-bottom overflow-hidden">
                  {values?.attachments?.name}
                </span>
              </div>
              <div
                className={'w-full sm:mt-6 text-center order-3'}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="inline-block bg-white rounded-3xl self-center sm:self-auto px-10 py-2">
                      <svg
                        role="status"
                        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <input
                    type="submit"
                    value="Send"
                    onClick={handleSubmit}
                    className={'cursor-pointer text-blue-500 bg-white h-10 leading-6 h-11 btn transition-all font-medium inline-block px-10 py-2 text-sm sm:text-base rounded-3xl self-center sm:self-auto'}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* {isToast && (
        <Fade
          direction="left"
          duration={500}
          className="fixed top-1/4 left-3 sm:left-6 md:left-9 bg-white rounded-lg overflow-hidden toast w-64 sm:w-80"
        >
          <div className="">
            <FontAwesomeIcon
              icon={faTimes}
              color="#C3C3C3C3"
              size="lg"
              className="absolute right-0 m-3 cursor-pointer"
              onClick={handleToast}
            />
            {isSent ? (
              <div className="p-4 flex items-center justify-start border-l-8 border-green-500">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="rgba(34, 197, 94, 1)"
                  size="lg"
                />
                <div className="px-4">
                  <h3 className="font-semibold text-base text-green-500">
                    Success
                  </h3>
                  <span className="text-sm text-blue-900 font-medium">
                    Your message is sent successfully.
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 flex items-center justify-start border-l-8 border-red-500">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  color="rgba(239, 68, 68, 1)"
                  size="lg"
                />
                <div className="px-4">
                  <h3 className="font-semibold text-base text-red-500">
                    Failed
                  </h3>
                  <span className="text-sm text-blue-900 font-medium">
                    Error has occured.
                  </span>
                </div>
              </div>
            )}
          </div>
        </Fade>
      )} */}
    </FormContactWrap>
  );
};
export default FormContact;
