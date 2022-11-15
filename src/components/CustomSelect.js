import { useField } from "formik"
import React from "react"
const CustomSelect = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props)

    return(
        <div className="custom-select">
            {/* <label>{label}</label> */}
            <select {...field} {...props}
            className={meta.touched && meta.error ? "input-error" : ""}
            />

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </div>
    )
}

export default CustomSelect