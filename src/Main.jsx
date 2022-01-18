export default function Main() {
    return (
        <div id="main" className="main">
            <div className="container">
                <div className="container_inner">
                    <h1>RSVP for Cordell & Donnie's Wedding Reception</h1>
                    <p>
                        So as you must have heard by now, we (Cordell & Donnie) got married! We did it on the fly (to get the legal bits going)
                        but wanted to also have a reception/dinner with our famalies and friends. So, here it is and here is <b>your</b> invite!
                    </p>
                    <dl id="info">
                        <dt>
                            <h3>What is the plan? What exactly are we doing?</h3>
                        </dt>
                        <dd>
                            We are all going to drink and be merry (have a meal) at our venue, here in Vancouver.
                            Afterwards, a punk gig will commence and you can decide if you want to stay for that part or not (it will be fun).
                        </dd>
                        <dt>
                            <h3>When is the party?</h3>
                        </dt>
                        <dd>
                            <b>Saturday, March 26th 2022</b>,
                             Dinner: 5pm - 8:30pm,
                             Punk Gig: 8:30pm - late.
                        </dd>
                        <dt>
                            <h3>Where is this party?</h3>
                        </dt>
                        <dd>
                            At our venue, The Bullet Farm. The address is <b>825 Hastings st. East, Vancouver B.C. Canada</b>. 
                            Access is through the back-alley way, though if stairs are a problem you can call one of us or let us 
                            know day of and we can help you through the front. There is street parking in front of the venue, though like
                            the rest of the city, it is limited.
                        </dd>
                        <dt>
                            <h3>What do I wear?</h3>
                        </dt>
                        <dd>
                            Whatever you want.
                        </dd>
                        <dt>
                            <h3>Do I need to bring anything?</h3>
                        </dt>
                        <dd>
                            Nope!
                        </dd>
                        <dt>
                            <h3>Who's playing the gig?</h3>
                        </dt>
                        <dd>
                            I'll upload the flyer here once it's done, but it will be Fractured (Montreal), Blix, Brutalize and Smuther.
                        </dd>
                    </dl>
                    <h2>
                        What we need from you:
                    </h2>
                    <p>
                        In order for us to know how much food, liquor, etc we will need to satiate all your appetites. 
                        Please tell me who you are, who else you are bringing and what you do and don't like!
                    </p>
                    <form>
                        <h4>Enter your party members names</h4>
                        <div id="person1">
                            <h5>Person #1:</h5>
                            <div className="nameHolder">
                            <label for="firstName">First Name</label>
                            <input type="text" className="firstName"/>
                            </div>
                            <div className="nameHolder">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="lastName"/>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}