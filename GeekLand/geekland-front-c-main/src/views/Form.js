import React from "react";




export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            Inscription à l'espace membre :<br />
<form action="inscription.php" method="post">
Login : <input type="text" name="login"></input><br/>
Mot de passe : <input type="password" name="pass"></input> <br/>
Confirmation du mot de passe : <input type="password" name="pass_confirm"></input><br/>
<input type="submit" name="inscription" value="Inscription"></input>
</form>
    </div>
        );

        
        
}
}