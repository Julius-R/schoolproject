class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: [
                {
                    type: "Grade Posted",
                    title: "Final Assignment Graded",
                    message:
                        "Your final assignment for English 101 was graded. Your score was 100%."
                },
                {
                    type: "Reply",
                    title: "StudentName replied to you",
                    message:
                        "StudentName replied to your Week 1 Assignment 2 Discussion post"
                },
                {
                    type: "Reminder",
                    title: "Your final assignment for HCI is due in 2 days",
                    message:
                        "Your final assignment for HCI is due in 2 days. Please make sure that all material is properly updated."
                }
            ]
        }
    }
    deleteAllAlerts() {
        this.setState(() => {
            return {
                alerts: []
            }
        })
    }
    render() {
        return (
            <div className="container">
                <Nav />
                <header>
                    <h1 className="title">Welcome back, Student!</h1>
                </header>
                <Main alerts={this.state.alerts} />
                <Footer />
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return(
            <nav className="nav-bar">
                <div className="search">
                    <input type="text" placeholder="&#xf002;" className="hidden" />
                </div>
                <div className="title">
                    <h1>Home</h1>
                </div>
                <div className="menu">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </nav>
        )
    }
}



class Main extends React.Component {
    render() {
        return(
            <main>
                <h1 className="titl">Alerts</h1>
                {this.props.alerts.length < 0 && <div className="no-alert">
                    No notifications available
                </div>}
                <Alerts alerts={this.props.alerts} />
            </main>
        )
    }
}

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
        this.helloMessage = this.helloMessage.bind(this);
    }
    helloMessage() {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
        console.log(this.state.hidden);
    }
    render() {
        return (
            <ul className="alerts">
                {this.props.alerts.map((alert) => <Alert key={alert.type} helloMessage={this.helloMessage} type={alert.type} title={alert.title} message={alert.message} />)}
            </ul>
        )
    }
}

class Alert extends React.Component {
    render() {
        return (
            <li className="alert" onClick={this.props.helloMessage}>
                <div className="alert-title">
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                    <div className="message">
                        {this.props.type} : {this.props.title}
                    </div>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div className="alert-body">
                    {this.props.message}
                </div>
            </li>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul className="option-links">
                    <li className="options">
                        <a href="#"><i className="fa fa-calendar-o" aria-hidden="true"></i></a>
                        <div className="option-label">Schedule</div></li>
                    <li className="options">
                        <a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>
                        <div className="option-label">Binder</div>
                    </li>
                    <li className="options">
                        <a href="#"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></a>
                        <div className="option-label">Email</div>
                    </li>
                    <li className="options">
                        <a href="#"><i className="fa fa-user" aria-hidden="true"></i></a>
                        <div className="option-label">Profile</div>
                    </li>
                </ul>
            </footer>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch