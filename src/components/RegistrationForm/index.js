import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(preState => ({
      firstNameInput: '',
      lastNameInput: '',
      showFirstNameError: false,
      showLastNameError: false,
      isFormSubmitted: !preState.isFormSubmitted,
    }))
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  render() {
    const {
      firstNameInput,
      lastNameInput,
      showFirstNameError,
      showLastNameError,
      isFormSubmitted,
    } = this.state

    const firstNameInputClassName = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    const LastNameInputClassName = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration </h1>
        <div className="view-container">
          {isFormSubmitted ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p>Submitted Successfully</p>
              <button
                type="button"
                onClick={this.onClickSubmitAnotherResponse}
                className="submit-button"
              >
                Submit Another Response
              </button>
            </>
          ) : (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  value={firstNameInput}
                  onChange={this.onChangeFirstName}
                  className={firstNameInputClassName}
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  onBlur={this.onBlurFirstName}
                />
                {showFirstNameError && (
                  <p className="error-message">Required</p>
                )}
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  value={lastNameInput}
                  onChange={this.onChangeLastName}
                  className={LastNameInputClassName}
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  onBlur={this.onBlurLastName}
                />
                {showLastNameError && <p className="error-message">Required</p>}
              </div>
              <button submit="button" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
