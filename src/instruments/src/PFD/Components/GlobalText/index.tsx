/**
 * Global Text defined as the text and / or elements that appear on every page
 *
 * The MFD has 6 Global Text fields which will be represented by props: text1 - text6
 *
 *                               #GlobalTextContainer
 * _____________________________________________________________________________
 * |                                                                            |
 * |                                                                            |
 * |                                                                            |
 * |                                                                            |
 * |                                                                            |
 * |                                  Children                                  |
 * |                                                                            |
 * |                                                                            |
 * |____________________________________________________________________________|
 * |                                #GlobalText                                 |
 * |    1      2         3                              4          5       6    | <- .global-text-field-x
 * |   PFD     ND      EICAS                           FULL       TAC     JVMF  |
 * |____________________________________________________________________________|
 */

import * as React from 'react'

import './globalText.scss'

type GlobalTextProps = {
  text1: string,
  text2: string,
  text3: string,
  text4: string,
  text5: string,
  text6: string,
}

class GlobalText extends React.Component<GlobalTextProps> {
  render() {
    return (
      <div id="GlobalTextContainer">
        <div id="GlobalText">
          <div className="global-text-left">
            <div className="global-text-field-1">{this.props.text1}</div>
            <div className="global-text-field-2">{this.props.text2}</div>
            <div className="global-text-field-3">{this.props.text3}</div>
          </div>
          <div className="global-text-right">
            <div className="global-text-field-4">{this.props.text4}</div>
            <div className="global-text-field-5">{this.props.text5}</div>
            <div className="global-text-field-6">{this.props.text6}</div>
          </div>

        </div>
        {this.props.children}
      </div>
    )
  }
}

export default GlobalText