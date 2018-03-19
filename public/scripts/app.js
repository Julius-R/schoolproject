"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            alerts: [{
                type: "Grade Posted",
                title: "Final Assignment Graded",
                message: "Your final assignment for English 101 was graded. Your score was 100%."
            }, {
                type: "Reply",
                title: "StudentName replied to you",
                message: "StudentName replied to your Week 1 Assignment 2 Discussion post"
            }, {
                type: "Reminder",
                title: "Your final assignment for HCI is due in 2 days",
                message: "Your final assignment for HCI is due in 2 days. Please make sure that all material is properly updated."
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: "deleteAllAlerts",
        value: function deleteAllAlerts() {
            this.setState(function () {
                return {
                    alerts: []
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(Nav, null),
                React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "h1",
                        { className: "title" },
                        "Welcome back, Student!"
                    )
                ),
                React.createElement(Main, { alerts: this.state.alerts })
            );
        }
    }]);

    return App;
}(React.Component);

var Nav = function (_React$Component2) {
    _inherits(Nav, _React$Component2);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "nav-bar" },
                React.createElement(
                    "div",
                    { className: "search" },
                    React.createElement("input", { type: "text", placeholder: "\uF002", className: "hidden" })
                ),
                React.createElement(
                    "div",
                    { className: "title" },
                    React.createElement(
                        "h1",
                        null,
                        "Home"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "menu" },
                    React.createElement("i", { className: "fa fa-bars", "aria-hidden": "true" })
                )
            );
        }
    }]);

    return Nav;
}(React.Component);

var Main = function (_React$Component3) {
    _inherits(Main, _React$Component3);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this3 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this3.state = {
            hidden: true
        };
        _this3.helloMessage = _this3.helloMessage.bind(_this3);
        return _this3;
    }

    _createClass(Main, [{
        key: "helloMessage",
        value: function helloMessage() {
            this.setState(function (prevState) {
                return {
                    hidden: !prevState.hidden
                };
            });
            console.log(this.state.hidden);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "main",
                null,
                React.createElement(
                    "h1",
                    { className: "titl" },
                    "Alerts"
                ),
                this.props.alerts.length < 0 && React.createElement(
                    "div",
                    { className: "no-alert" },
                    "No notifications available"
                ),
                React.createElement(
                    "ul",
                    { className: "alerts" },
                    this.props.alerts.map(function (alert) {
                        return React.createElement(Alert, { key: alert.type, helloMessage: _this4.helloMessage, type: alert.type, title: alert.title, message: alert.message });
                    })
                )
            );
        }
    }]);

    return Main;
}(React.Component);

var Alert = function (_React$Component4) {
    _inherits(Alert, _React$Component4);

    function Alert() {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
    }

    _createClass(Alert, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "alert", onClick: this.props.helloMessage },
                React.createElement(
                    "div",
                    { className: "alert-title" },
                    React.createElement("i", { className: "fa fa-exclamation-circle", "aria-hidden": "true" }),
                    React.createElement(
                        "div",
                        { className: "message" },
                        this.props.type,
                        " : ",
                        this.props.title
                    ),
                    React.createElement("i", { className: "fa fa-chevron-right", "aria-hidden": "true" })
                ),
                React.createElement(
                    "div",
                    { className: "alert-body" },
                    this.props.message
                )
            );
        }
    }]);

    return Alert;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
