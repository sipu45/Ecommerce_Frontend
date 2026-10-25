const inputField = ({
    label,
    id,
    type,
    errors,
    register, // is a function from react-hook-form
    required,
    message,
    className,
    min,
    value,
    placeholder,
}) => {
    return(
        <div className="flex flex-col gap-1 w-full ">
            <label
             htmlFor="id"
             className={`${
                className ? className : ""
             } font-semibold text-sm text-slate-800}`}>
             {label}
            </label>
            <input 
                 type={type}
                 id={id}
                 placeholder={placeholder}
                 className={`${
                    className ? className : ""
                 } px-2 py-2 bordet outline-none bg-transparent text-slate-800 rounded-md ${
                    errors[id]?.message ? "border-red-500": "border-slate-500"
                 }`}
                 {...register(id,{ // function from react-hook-form
                    required: {value: required , message},
                    minLength: min
                            ?{value:min , Message:`Minimum ${min} character is required`}
                            : null,
                    pattern:
                            type === "email"
                                ? {
                                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/, //pattern for validating email
                                    message: "Invalid email"
                                }
                                : type === "url"
                                ? {
                                    value: /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                                    message: "Please enter a valid url"
                                }
                                : null,

                 })}
            />
            
            
                {errors[id]?.message &&(
                    <p className="text-sm font-semibold text-red-600 mt-0">
                        {errors[id]?.message}
                    </p>
                )}
        </div>
    );
}

export default inputField;