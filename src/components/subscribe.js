import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { bpMinMD } from '../utils/breakpoints'
//import Message from '../ConfirmMessage/Message'
//import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      Great, one last thing...
      {/* <Message
        illustration={PleaseConfirmIllustration}
        title={`Great, one last thing...`}
        body={`I just sent you an email with the confirmation link. 
          **Please check your inbox!**`}
      /> */}
    </div>
  )
}

class SignUp extends React.Component {
  state = {
    submitted: false,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true })
    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      const responseJson = await response.json()

      this.setState({
        submitted: true,
        response: responseJson,
        errorMessage: null,
      })
    } catch (error) {
      this.setState({
        submitted: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  render() {
    const { submitted, response, errorMessage } = this.state
    const successful = response && response.status === 'success'

    return (
      <div
        css={css({
          color: 'rgb(80, 100, 110)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          input: {
            border: '1px solid #5BC5CF',
            color: '#5BC5CF',
            background: 'transparent',
            borderRadius: '5px',
            padding: '10px 20px',
            textAlign: 'center',
            [bpMinMD]: {
              marginRight: '20px',
            },
            marginRight: 0,
          },
          button: {
            boxSizing: 'border-box',
            color: '#fff',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: '#5BC5CF',
            borderRadius: '5px',
            border: 'none',
            padding: '10px 30px',
            cursor: 'pointer',
            [bpMinMD]: {
              marginTop: 0,
            },
            marginTop: '30px',
          },
          '.field-error': {
            marginLeft: '5px',
            opacity: 0.5,
          },
          label: {
            display: 'block',
            fontWeight: 500,
            marginBottom: '8px',
            [bpMinMD]: {
              marginTop: 0,
            },
            marginTop: '20px',
          },
        })}>
        {!successful && (
          <div
            css={css({
              marginTop: '100px',
            })}>
            <h2
              css={css({
                color: '#F1F1F1',
                fontSize: '2.4em',
                letterSpacing: '0.04em',
              })}>
              Join the Newsletter
            </h2>
            <p
              css={css({
                color: '#5BC5CF',
                fontStyle: 'italic',
                fontFamily: 'ff-tisa-web-pro',
                fontWeight: '100',
                fontSize: '1.1em',
              })}>
              A fresh set of programming illustrations delivered right to your
              inbox.
            </p>
          </div>
        )}

        <Formik
          initialValues={{
            email_address: '',
            first_name: '',
          }}
          validationSchema={SubscribeSchema}
          onSubmit={values => this.handleSubmit(values)}
          render={({ errors, touched, isSubmitting }) => (
            <>
              {!successful && (
                <Form
                  css={css({
                    display: 'flex',
                    [bpMinMD]: {
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    },
                    alignItems: 'center',
                    flexDirection: 'column',
                    //justifyContent: 'space-between',
                    marginTop: '30px',
                  })}>
                  <div css={css({ textAlign: 'left' })}>
                    <label htmlFor='first_name'>
                      First Name
                      <ErrorMessage
                        name='first_name'
                        component='span'
                        className='field-error'
                      />
                    </label>
                    <Field
                      aria-label='your first name'
                      aria-required='false'
                      name='first_name'
                      placeholder='Ada Lovelace'
                      type='text'
                    />
                  </div>
                  <div css={css({ textAlign: 'left' })}>
                    <label htmlFor='email'>
                      Email
                      <ErrorMessage
                        name='email_address'
                        component='span'
                        className='field-error'
                      />
                    </label>
                    <Field
                      aria-label='your email address'
                      aria-required='true'
                      name='email_address'
                      placeholder='ada@algorithm.land'
                      type='email'
                    />
                  </div>
                  <button
                    data-element='submit'
                    type='submit'
                    disabled={isSubmitting}>
                    {!isSubmitting && 'Join'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {submitted && <PostSubmissionMessage response={response} />}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default SignUp
