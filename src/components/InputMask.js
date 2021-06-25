import React from 'react';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';

export default function InputWithMask ({maskOptions, ...props}) {

    const { placeholder, type, onChange, disabled} = props

    const defaultMaskOptions = {
        prefix: '',
        sufix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: false,
        decimalSymbol: ',',
        decimalLimit: 2,
        integerLimit: 9,
        allowNegative: false,
        allowLeadingZeroes: false,
        requireDecimal: false
      }

      const mask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
        })

    return (
        <MaskedInput    type={type}
                        placeholder={placeholder} 
                        onChange={onChange}
                        disabled={disabled}
                        mask={mask}
                        style={styledInput}/>
    )
}

const styledInput = {
    width: "100%",
    height: "58px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "13px",
    paddingLeft: "15px",
    color: "#000",
    fontWeight: "400",
    fontSize: "20px",
    fontFamily: "'Raleway', sans-serif",
    opacity: "1"
}