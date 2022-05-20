import React, {createContext, useState} from "react";


const CreateUserContext = createContext()

const CreateUserProvider = ({children}) => {
    const [ firstname, setFirstname ] = useState("")
    const [lastname, setLastname] = useState("")
    const [phoneNr, setPhoneNr] = useState()
    const [email, setEmail] = useState("")
    const [school, setSchool] = useState("")
    const [program, setProgram] = useState("")
    const [password, setPassword] = useState("")

    return(
        <CreateUserContext.Provider value={{
            firstname, setFirstname,
            lastname, setLastname,
            phoneNr, setPhoneNr,
            email, setEmail,
            school, setSchool,
            program, setProgram,
            password, setPassword
        }}>
            {children}
        </CreateUserContext.Provider>
    )
}

export {CreateUserContext, CreateUserProvider}