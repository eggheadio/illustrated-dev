import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { bpMaxSM, bpMinSM, bpMaxMD } from '../utils/breakpoints'
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
          marginBottom: '100px',
          'label > div': {
            marginTop: '20px',
          },
          input: {
            textAlign: 'center',
            margin: '4px',
            border: '1px solid hsla(0, 0%, 0%, 0.25)',
          },
          button: { marginTop: '15px' },
          '.field-error': {
            marginLeft: '5px',
            opacity: 0.5,
          },
        })}>
        {!successful && (
          <h2
            css={css`
              margin-bottom: 10px;
              margin-top: 0;
            `}>
            Join the Newsletter
          </h2>
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    [bpMaxSM]: {
                      flexDirection: 'column',
                    },
                  })}>
                  <div
                    css={css({
                      display: 'flex',
                      flexDirection: 'column',
                      [bpMinSM]: {
                        display: 'flex',
                        flexDirection: 'row',
                      },
                    })}>
                    <label htmlFor="first_name">
                      <div>
                        First Name
                        <ErrorMessage
                          name="first_name"
                          component="span"
                          className="field-error"
                        />
                      </div>
                      <Field
                        aria-label="your first name"
                        aria-required="false"
                        name="first_name"
                        placeholder="Jane"
                        type="text"
                      />
                    </label>
                    <label htmlFor="email">
                      <div>
                        Email
                        <ErrorMessage
                          name="email_address"
                          component="span"
                          className="field-error"
                        />
                      </div>
                      <Field
                        aria-label="your email address"
                        aria-required="true"
                        name="email_address"
                        placeholder="jane@acme.com"
                        type="email"
                      />
                    </label>
                  </div>
                  <button
                    css={css({
                      cursor: 'pointer',
                      background: 'black',
                      border: 'none',
                      color: 'white',
                      padding: '5px 15px',
                    })}
                    data-element="submit"
                    type="submit"
                    disabled={isSubmitting}>
                    {!isSubmitting && 'Subscribe'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {submitted && !isSubmitting && (
                <PostSubmissionMessage response={response} />
              )}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default SignUp
