import React from 'react'
import MaskedInput from '../../../integrations/react/src/reactTextMask.jsx'
import classnames from 'classnames'
import demoStyles from './demo.scss'

const Demo = React.createClass({
  getInitialState() {
    return {
      choices: [{
        value: 'usPhoneNumber',
        name: 'US phone number',
        mask: '(111) 111-1111',
        placeholder: '(555) 495-3947'
      }, {
        value: 'canadianPostalCode',
        name: 'Canadian postal code',
        mask: 'U1U 1U1',
        placeholder: 'K1A 0B2'
      }, {
        value: 'date',
        name: 'Date',
        mask: '11/11/1111',
        placeholder: '25/09/1970'
      }, {
        value: 'fiveDigitNumber',
        name: 'Five digit number (zip code)',
        mask: '11111',
        placeholder: '94303'
      }, {
        value: 'threeLetterMonth',
        name: 'Three letter month name',
        mask: 'ULL',
        placeholder: 'Mar'
      }],

      selectedChoice: 0,

      guide: false
    }
  },

  render() {
    const {guide, choices, selectedChoice} = this.state
    const mask = choices[selectedChoice].mask
    const placeholder = guide === false ? `Example ${choices[selectedChoice].placeholder}`  : ''

    return (
      <div>
        <h2 id="demo">Demo</h2>

        <div className="well">
          <form className="form-horizontal">
            <div className="form-group">
              <label
                className="col-sm-3 control-label"
                htmlFor="maskedInput">Masked input</label>

              <div className="col-sm-9">
                <MaskedInput
                  placeholder={placeholder}
                  ref="maskedInput"
                  mask={mask}
                  guide={guide}
                  className="form-control"
                  id="maskedInput"
                />
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="mask"
                className="col-sm-3 control-label">Mask</label>

              <div className="col-sm-4">
                <select
                  className="form-control"
                  onChange={this.onDropdownListMaskSelect}
                  ref="maskSelect">
                  {this.state.choices.map((choice, index) => {
                    return <option key={index} value={choice.value}>{choice.name}</option>
                  })}
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div className="col-sm-5">
                <input
                  ref="mask"
                  type="text"
                  onChange={this.onManualMaskChange}
                  value={mask}
                  className={classnames('form-control', demoStyles.mask)}
                  id="mask"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guide" className="col-sm-3 control-label">Guide</label>

              <div className="col-sm-2">
                <select className="form-control" onChange={this.changeGuide} ref="maskSelect">
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  },

  onManualMaskChange({target: {value: mask}}) {
    const choice = this.findChoice('mask', mask)

    if (choice !== undefined) {
      this.refs.maskSelect.value = choice.value
    } else {
      this.refs.maskSelect.value = 'custom'
    }

    this.setState({mask})
    this.refs.maskedInput.refs.inputElement.focus()
  },

  onDropdownListMaskSelect({target: {value: selectValue}}) {
    if (selectValue !== 'custom'){
      this.setState({selectedChoice: this.findChoice('value', selectValue)})
    } else {
      this.refs.mask.value = ''
      this.refs.mask.focus()
    }
  },

  changeGuide({target: {value: guideValue}}) {
    this.setState({guide: guideValue === 'on'})
    this.refs.maskedInput.refs.inputElement.focus()
  },

  findChoice(name, value) {
    return this.state.choices.findIndex((choice) => {
      return choice[name] === value
    })
  }
})

export default Demo
