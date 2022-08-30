import {Component} from 'react'
import './index.css'
import {BiUpload} from 'react-icons/bi'

const technologies = [
  {
    id: 1,
    technology: 'Java',
  },
  {
    id: 2,
    technology: 'Python',
  },
  {
    id: 3,
    technology: 'HTML',
  },
  {
    id: 4,
    technology: 'CSS',
  },
  {
    id: 5,
    technology: 'JavaScript',
  },
  {
    id: 1,
    technology: 'SQL',
  },
  {
    id: 6,
    technology: 'Nodejs',
  },
  {
    id: 7,
    technology: 'Mongodb',
  },
  {
    id: 8,
    technology: 'React',
  },
  {
    id: 9,
    technology: 'Bootstrap',
  },
]

class JobApplication extends Component {
  state = {
    name: '',
    languages: {
      Java: false,
      Python: false,
      Bootstrap: false,
      React: false,
      Mongodb: false,
      Nodejs: false,
      SQL: false,
      JavaScript: false,
      CSS: false,
      HTML: false,
    },
    workExperience: '',
    noExperience: '',
    experienceInYears: '',
    currentCtc: '',
    graduationYear: '',
    graduationCollege: '',
    applicationSubmissionPage: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onRadioChange = event => {
    if (event.target.value === 'Yes') {
      this.setState({workExperience: true, noExperience: false})
    } else {
      this.setState({workExperience: false, noExperience: true})
    }
  }

  onClickCheckbox = event => {
    const {languages} = this.state
    languages[event.target.value] = event.target.checked
    this.setState({languages})
  }

  inputGraduationCollege = event => {
    this.setState({graduationCollege: event.target.value})
  }

  inputGraduationYear = event => {
    this.setState({graduationYear: event.target.value})
  }

  inputCurrentCtc = event => {
    this.setState({currentCtc: event.target.value})
  }

  inputExperience = event => {
    this.setState({experienceInYears: event.target.value})
  }

  inputFile = event => {
    console.log(event.target.file)
  }

  onSubmitApplication = event => {
    event.preventDefault()
    const {applicationSubmissionPage} = this.state
    this.setState({applicationSubmissionPage: !applicationSubmissionPage})
  }

  render() {
    const {
      name,
      languages,
      workExperience,
      noExperience,
      experienceInYears,
      currentCtc,
      graduationYear,
      graduationCollege,
      applicationSubmissionPage,
    } = this.state
    console.log(name)
    console.log(languages)
    return applicationSubmissionPage ? (
      <div className="submission-container">
        <h1>Application submission successful</h1>
      </div>
    ) : (
      <div className="bg-container">
        <h1 className="main-heading">Lead Friday Job Application</h1>
        <div className="form-section-container">
          <form className="form-container" onSubmit={this.onSubmitApplication}>
            <div className="username-container">
              <label className="label-text" htmlFor="userName">
                Name
              </label>
              <input
                className="input-element"
                id="userName"
                type="text"
                placeholder="Enter your Name"
                onChange={this.onChangeName}
                value={name}
              />
            </div>
            <div className="work-experience-container">
              <p className="paragrapgh-text">
                Do you have any work experience?
              </p>
              <div>
                <input
                  type="radio"
                  id="radioYes"
                  name="select"
                  onChange={this.onRadioChange}
                  value="Yes"
                />
                <label className="radio-text" htmlFor="radioYes">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioNo"
                  name="select"
                  onChange={this.onRadioChange}
                  value="No"
                />
                <label className="radio-text" htmlFor="radioNo">
                  No
                </label>
              </div>
            </div>
            {workExperience && (
              <div className="work-experience-yes">
                <label className="label-text" htmlFor="yearsExperience">
                  Years of Experience in months
                </label>
                <input
                  className="input-element"
                  id="yearsExperience"
                  type="text"
                  placeholder="Enter in months"
                  value={experienceInYears}
                  onChange={this.inputExperience}
                />
                <label className="label-text" htmlFor="currentCtc">
                  Current CTC
                </label>
                <input
                  className="input-element"
                  id="currentCtc"
                  type="text"
                  placeholder="Enter in lakhs"
                  value={currentCtc}
                  onChange={this.inputCurrentCtc}
                />
              </div>
            )}
            {noExperience && (
              <div className="work-experience-no">
                <label className="label-text" htmlFor="graduationYear">
                  Graduation Year
                </label>
                <input
                  className="input-element"
                  id="graduationYear"
                  type="text"
                  placeholder="eg, 2018"
                  value={graduationYear}
                  onChange={this.inputGraduationYear}
                />
                <label className="label-text" htmlFor="collegeName">
                  College Name
                </label>
                <input
                  className="input-element"
                  id="collegeName"
                  type="text"
                  placeholder="eg, Vishnu Institute of Techology"
                  value={graduationCollege}
                  onChange={this.inputGraduationCollege}
                />
              </div>
            )}

            <div className="technologies-container">
              <p className="paragrapgh-text">Technologies known</p>
              <div className="techologoes-list">
                {technologies.map(each => (
                  <div className="list-item" key={each.id}>
                    <input
                      onChange={this.onClickCheckbox}
                      type="checkbox"
                      name="languages"
                      value={each.technology}
                    />
                    <label
                      className="technologies-label-text"
                      htmlFor={each.id}
                    >
                      {each.technology}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="file-upload-container">
              <label className="label-text" htmlFor="fileUpload">
                Upload Resume
              </label>
              <div>
                <button type="button">
                  <input
                    id="fileUpload"
                    type="file"
                    onChange={this.inputFile}
                  />
                  <BiUpload />
                </button>
              </div>
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default JobApplication
