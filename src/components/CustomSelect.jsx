import { useField } from "formik"
import React from "react"
const CustomSelect = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props)

    return(
        <div className="w-[75%] pb-4 md:pb-6 flex gap-4 justify-evenly items-center text-[#293264]">
            <label className="text-xl sm:text-1xl lg:text-2xl">
                {label}:
            </label>
            <select {...field} {...props}
            className={meta.touched && meta.error ? "input-error" : "bg-gray-100 w-[55%] p-2 shadow-md hover:shadow-[#9FA4BD] lowercase"}
            />

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </div>
    )
}

export default CustomSelect