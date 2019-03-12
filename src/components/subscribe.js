import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { bpMaxSM, bpMinSM, bpMinMD, bpMaxMD } from '../utils/breakpoints'
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: {
            maxWidth: '500px',
          },
          input: {
            border: '1px solid #E3E6E6',
            borderRadius: '0',
            padding: '10px 15px',
            [bpMinMD]: {
              marginRight: '30px',
            },
            marginRight: 0,
            width: '240px',
          },
          button: {
            border: '1px solid #303745',
            borderRadius: '0',
            padding: '10px 20px',
            cursor: 'pointer',
            background: '#303745',
            color: 'white',
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
            marginBottom: '10px',
            [bpMinMD]: {
              marginTop: 0,
            },
            marginTop: '20px',
          },
        })}>
        {!successful && (
          <div>
            <h2
              css={css`
                margin-bottom: 30px;
                margin-top: 0;
              `}>
              Join the Newsletter
            </h2>
            <p>
              A once-a-week roundup of a fresh set of illustrated web
              development topics in your inbox.
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
                    <label htmlFor="first_name">
                      First Name
                      <ErrorMessage
                        name="first_name"
                        component="span"
                        className="field-error"
                      />
                    </label>
                    <Field
                      aria-label="your first name"
                      aria-required="false"
                      name="first_name"
                      placeholder="Jane"
                      type="text"
                    />
                  </div>
                  <div css={css({ textAlign: 'left' })}>
                    <label htmlFor="email">
                      Email
                      <ErrorMessage
                        name="email_address"
                        component="span"
                        className="field-error"
                      />
                    </label>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email_address"
                      placeholder="jane@acme.com"
                      type="email"
                    />
                  </div>
                  <button
                    css={css({})}
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
