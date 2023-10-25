import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CustomDateInput extends React.Component {
    render() {
        return (
            <div className='form-control-small' >
                <input
                    className="form-control form-control-sm"
                    type="text"
                    value={this.props.value}
                    onClick={this.props.onClick}
                    readOnly
                    placeholder="Arrive on..."
                />
                {/*<div className="input-group-addon calendar-icon-container" onClick={this.props.onClick}>*/}
                {/*    <span className="glyphicon glyphicon-calendar"></span>*/}
                {/*</div>*/}
            </div>
        );
    }
}

class HomeAdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: '',
            startDate: null
        };
    }

    handleSelectChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <div id="home-advanced-search" className="open">
                <div id="opensearch"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="form-group">
                                    <div className="form-control-small">

                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            customInput={<CustomDateInput />}

                                        />

                                    </div>


                                    <div className="form-control-small">
                                        <select
                                            id="search_status"
                                            name="search_status"
                                            value={this.state.selectedOption}
                                            onChange={this.handleSelectChange}
                                            className="form-control form-control-sm"
                                        >
                                            <option value="" selected disabled>Stay...</option>
                                            <option value="1">1 Night</option>
                                            <option value="2">2 Nights</option>
                                            <option value="3">3 Nights</option>
                                            <option value="4">4 Nights</option>
                                            <option value="5">5 Nights</option>
                                            <option value="6">6 Nights</option>
                                            <option value="7">7 Nights</option>
                                            <option value="8">8 Nights</option>
                                            <option value="9">9 Nights</option>
                                            <option value="10">10 Nights</option>
                                            <option value="11">11 Nights</option>
                                            <option value="12">12 Nights</option>
                                            <option value="13">13 Nights</option>
                                            <option value="14">14 Nights</option>
                                        </select>
                                    </div>

                                    <div className="form-control-small">
                                        <select
                                            id="search_bedrooms"
                                            name="search_bedrooms"
                                            value={this.state.selectedOption}
                                            onChange={this.handleSelectChange}
                                            className="form-control form-control-sm"  // 添加这个类
                                        >
                                            <option value="" disabled>Bedrooms</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="5plus">5+</option>
                                        </select>
                                    </div>

                                    <div className="form-control-large">
                                        <input type="text" className="form-control" name="location"
                                               placeholder="City, State, Country, etc..."></input>
                                    </div>
                                    <button type="submit" className="btn btn-fullcolor">Search</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAdvancedSearch;