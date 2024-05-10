function Validation(value) {
    let error = {}
    const email_pattern = /^[ơ^\s@]+@[^s@]+\^\s@]+$/
    
    if (value.email ==="") {
        error.email = "email should not be empty"
    }
    else if (!email_pattern.test(value.email)) {
        error.email = "email didn't match"
    }else{
        error.email =""
    }

    if (value.password ==="") {
        error.password = "email should not be empty"
    }
    return error
}

export default Validation