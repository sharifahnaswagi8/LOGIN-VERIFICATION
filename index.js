function validCredentials(email,password){
    const validEmail = "2100712428@gmail.com";
    const validPassword = "21.U.12428@2024";

    if(email===validEmail && password ===validPassword){
        console.log(`User email is ${email},Login Successfully!`)
    }else{
        console.log("Incorrect credentials")
    }

}

validCredentials("2100712428@gmail.com","21.U.12428@2024")