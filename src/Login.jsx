
export default function Login() {
    let loginAttempts = 0;
    function click() {
        this.loginAttempts++;
        console.log(this.loginAttempts);
    }
    return (
        <div id="login" className="main">
            <div id="login_container" className="container">
                <div id="login_container_inner" className="container_inner">
                    <h1 id="login_title">You've been invited to a wedding!</h1>
                    <p id="login_text">
                        Please enter the passcode you've been provided to continue.
                    </p>
                    <form id="login_form">
                        <input type="text" id="login_pass_text" />
                        <input type="submit" value="enter" id="login_pass_submit" className="button" onClick={click} />
                    </form>
                </div>
            </div>
        </div>
    );
}